/**
 * 📍 Branchora Locator - Main Engine
 * 
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */
import { branches as initialBranches } from './branches-data.js';

let allBranches = [];

async function init() {
    const saved = localStorage.getItem('branches_data');
    if (saved) {
        try {
            allBranches = JSON.parse(saved);
        } catch (e) {
            allBranches = initialBranches;
        }
    } else {
        allBranches = initialBranches;
        localStorage.setItem('branches_data', JSON.stringify(allBranches));
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderBranches(e.target.value));
    }

    renderBranches();
}

function renderBranches(filter = '') {
    const grid = document.getElementById('branchGrid');
    const noResults = document.getElementById('noResults');
    if (!grid) return;

    const term = filter.toLowerCase().trim();

    const filtered = allBranches
        .filter(b => 
            b.name.toLowerCase().includes(term) ||
            b.address.toLowerCase().includes(term) ||
            b.pincode.includes(term)
        )
        .sort((a, b) => (parseInt(a.order) || 999) - (parseInt(b.order) || 999));

    if (filtered.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');
    grid.innerHTML = filtered.map(branch => {
        const buttonsHtml = generateButtons(branch);
        const statusStyle = `background-color: ${branch.statusColor || '#10b981'}; color: white;`;
        
        const openVal = (branch.openingTime || '9:00 AM').toString().trim();
        const closeVal = (branch.closingTime || '6:30 PM').toString().trim();
        const hasRange = openVal.includes('-') || openVal.includes('–') || openVal.includes('to');
        const displayTime = hasRange ? openVal : `${openVal} - ${closeVal}`;
        
        const statusText = branch.status || 'Active';
        const tooltipText = (branch.statusComment && branch.statusComment !== 'undefined' && branch.statusComment !== '') 
            ? branch.statusComment.toUpperCase() 
            : 'STANDARD BRANCH HOURS';
        
        const serialNum = (branch.order !== undefined && branch.order !== null) ? branch.order.toString().padStart(2, '0') : '00';
        
        return `
            <div class="apple-card bg-white rounded-2xl border border-slate-100 flex flex-col shadow-sm">
                <div class="p-6 flex-grow">
                    <div class="flex items-start justify-between mb-4">
                        <div class="bg-indigo-50 text-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center">
                            <i class="fas fa-building text-lg"></i>
                        </div>
                        <span 
                            class="status-pill text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider" 
                            style="${statusStyle}"
                            data-tooltip="${tooltipText}"
                        >
                            ${statusText}
                        </span>
                    </div>
                    <div class="text-[10px] font-mono font-bold text-slate-300 mb-1 tracking-widest uppercase">#${serialNum}</div>
                    <h3 class="text-lg font-bold text-slate-900 mb-1 leading-tight">${branch.name}</h3>
                    <p class="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed h-[2.8rem]">${branch.address}</p>
                    <div class="space-y-2 mt-4 text-xs text-slate-600 font-medium">
                        <div class="flex items-center"><i class="far fa-clock mr-2 w-4 text-indigo-400"></i>${displayTime}</div>
                        <div class="flex items-center"><i class="fas fa-map-marker-alt mr-2 w-4 text-indigo-400"></i>Pincode: ${branch.pincode}</div>
                    </div>
                </div>
                <div class="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
                    ${buttonsHtml}
                </div>
            </div>
        `;
    }).join('');
}

function generateButtons(branch) {
    const btns = branch.buttons || ['call', 'direction'];
    const config = {
        call: { 
            icon: 'fa-phone-alt', 
            label: 'Call', 
            action: `window.location.href='tel:${branch.phone?.toString().replace(/\s+/g, '')}'`,
            class: 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
        },
        direction: { 
            icon: 'fa-directions', 
            label: 'Route', 
            action: `window.open('${branch.mapUrl || '#'}', '_blank')`,
            class: 'bg-indigo-600 text-white hover:bg-indigo-700'
        }
    };

    return btns.slice(0, 2).map(type => {
        const c = config[type] || config.call;
        return `
            <button onclick="${c.action}" 
                    class="flex items-center justify-center py-2.5 ${c.class} rounded-xl font-bold text-xs transition-all active:scale-95">
                <i class="fas ${c.icon} mr-2 text-[10px]"></i> ${c.label}
            </button>
        `;
    }).join('');
}

window.addEventListener('DOMContentLoaded', init);