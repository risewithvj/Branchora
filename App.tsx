/**
 * 📍 Branchora Locator - Core Application
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */
import React, { useState, useEffect, useCallback } from 'react';
import { Branch, View } from './types';
import { STORAGE_KEYS, INITIAL_BRANCHES } from './constants';
import LandingPage from './components/LandingPage';
import AdminPanel from './components/Admin/AdminPanel';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [branches, setBranches] = useState<Branch[]>([]);

  useEffect(() => {
    const savedBranches = localStorage.getItem(STORAGE_KEYS.BRANCHES);
    if (savedBranches) {
      try {
        setBranches(JSON.parse(savedBranches));
      } catch (e) {
        console.error("Failed to parse branches from storage", e);
        setBranches(INITIAL_BRANCHES);
      }
    } else {
      setBranches(INITIAL_BRANCHES);
      localStorage.setItem(STORAGE_KEYS.BRANCHES, JSON.stringify(INITIAL_BRANCHES));
    }
  }, []);

  const updateBranches = useCallback((newBranches: Branch[]) => {
    setBranches(newBranches);
    localStorage.setItem(STORAGE_KEYS.BRANCHES, JSON.stringify(newBranches));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <main className="flex-grow">
        {view === 'home' ? (
          <LandingPage branches={branches} />
        ) : (
          <AdminPanel branches={branches} onUpdateBranches={updateBranches} />
        )}
      </main>
      <footer className="py-8 text-center">
        <p className="text-slate-400 text-[11px] md:text-xs tracking-tight">
          © 2026 Built by <span className="font-bold">vjbuilds</span>. All rights reserved. github.com/risewithvj
        </p>
      </footer>
    </div>
  );
};

export default App;