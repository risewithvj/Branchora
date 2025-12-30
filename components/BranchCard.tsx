/**
 * 📍 Branchora Locator - Branch Card UI
 * 
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */

import React from 'react';
import { Branch } from '../types';

interface BranchCardProps {
  branch: Branch;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  const handleDirections = () => {
    const url = branch.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${branch.name}, ${branch.address}`)}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${branch.phone.replace(/\s+/g, '')}`;
  };

  const tooltipText = (branch.statusComment && branch.statusComment !== 'undefined' && branch.statusComment !== '') 
    ? branch.statusComment.toUpperCase() 
    : 'STANDARD BRANCH HOURS';

  const openVal = (branch.openingTime || '9:00 AM').trim();
  const closeVal = (branch.closingTime || '6:00 PM').trim();
  const hasRange = openVal.includes('-') || openVal.includes('–') || openVal.includes('to');
  const displayTime = hasRange ? openVal : `${openVal} - ${closeVal}`;
  
  const serialNum = (branch.order && branch.order !== 0) ? branch.order.toString().padStart(2, '0') : '00';

  return (
    <div className="apple-card bg-white rounded-2xl border border-slate-100 flex flex-col shadow-sm">
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-indigo-50 text-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center">
            <i className="fas fa-building text-lg"></i>
          </div>
          <span 
            className="status-pill text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider text-white"
            style={{ backgroundColor: branch.statusColor || '#10b981' }}
            data-tooltip={tooltipText}
          >
            {branch.status || 'Active'}
          </span>
        </div>
        
        <div className="text-[10px] font-mono font-bold text-slate-300 mb-1 tracking-widest uppercase">
          #{serialNum}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">
          {branch.name}
        </h3>
        
        <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed h-[2.8rem]">
          {branch.address}
        </p>

        <div className="space-y-2 mt-4">
          <div className="flex items-center text-xs text-slate-600 font-medium">
            <i className="far fa-clock mr-2 w-4 text-indigo-400"></i>
            <span>{displayTime}</span>
          </div>
          <div className="flex items-center text-xs text-slate-600 font-medium">
            <i className="fas fa-map-marker-alt mr-2 w-4 text-indigo-400"></i>
            <span>Pincode: {branch.pincode}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
        <button
          onClick={handleCall}
          className="flex items-center justify-center py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl font-bold text-xs transition-colors"
        >
          <i className="fas fa-phone-alt mr-2 text-[10px]"></i> Call
        </button>
        <button
          onClick={handleDirections}
          className="flex items-center justify-center py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs transition-all shadow-sm"
        >
          <i className="fas fa-directions mr-2 text-[10px]"></i> Route
        </button>
      </div>
    </div>
  );
};

export default BranchCard;