/**
 * 📍 Branchora Locator - Branch Editor Form
 * 
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */

import React, { useState } from 'react';
import { Branch } from '../../types';

interface BranchFormProps {
  initialData?: Branch;
  onSave: (data: Partial<Branch>) => void;
  onCancel: () => void;
}

const BranchForm: React.FC<BranchFormProps> = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Partial<Branch>>(initialData || {
    name: '',
    address: '',
    pincode: '',
    phone: '',
    openingTime: '09:00',
    closingTime: '18:00'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Office Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Mumbai Main Branch"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Phone Number</label>
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 0000 000 000"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Address</label>
        <textarea
          required
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          placeholder="Complete street address..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Pincode</label>
          <input
            required
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="6 digits"
            pattern="[0-9]{6}"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Opening Time</label>
          <input
            required
            type="time"
            name="openingTime"
            value={formData.openingTime}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Closing Time</label>
          <input
            required
            type="time"
            name="closingTime"
            value={formData.closingTime}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div className="pt-4 flex items-center justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 text-slate-600 font-medium hover:text-slate-800 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-10 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all"
        >
          Save Branch
        </button>
      </div>
    </form>
  );
};

export default BranchForm;