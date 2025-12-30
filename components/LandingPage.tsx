/**
 * 📍 Branchora Locator - Landing Page
 * 
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */

import React, { useState, useMemo } from 'react';
import { Branch } from '../types';
import BranchCard from './BranchCard';

interface LandingPageProps {
  branches: Branch[];
}

const LandingPage: React.FC<LandingPageProps> = ({ branches }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBranches = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return branches;

    return branches.filter(branch => 
      branch.name.toLowerCase().includes(term) ||
      branch.address.toLowerCase().includes(term) ||
      branch.pincode.includes(term)
    );
  }, [branches, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Find a <span className="text-indigo-600">Branch</span> Near You
        </h1>
        <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
          Explore the Branchora network across India to find the most convenient location for your needs.
        </p>
        
        <div className="relative max-w-xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fas fa-search text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
          </div>
          <input
            type="text"
            placeholder="Search by name, address, or pincode..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {filteredBranches.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBranches.map(branch => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
          <i className="fas fa-search-location text-5xl text-slate-300 mb-4"></i>
          <h3 className="text-xl font-medium text-slate-900">No branches found</h3>
          <p className="text-slate-500 mt-2">Try adjusting your search criteria</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-6 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;