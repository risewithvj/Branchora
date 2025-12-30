/**
 * 📍 Branchora Locator - Admin Management Logic
 * 
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */
import { exportBranchesToJS } from '../export.js';

let branches = [];

function init() {
    loadBranches();
    setupEventListeners();
    renderTable();
}

function loadBranches() {
    const saved = localStorage.getItem('branches_data');
    branches = saved ? JSON.parse(saved) : [];
}

function saveBranches() {
    localStorage.setItem('branches_data', JSON.stringify(branches));
    renderTable();
}

function setupEventListeners() {
    const modal = document.getElementById('branchModal');
    const addBtn = document.getElementById('addBranchBtn');
    const closeBtn = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelModal');
    const form = document.getElementById('branchForm');

    addBtn.onclick = () => {
        document.getElementById('modalTitle').innerText = 'Add New Branch';
        document.getElementById('editId').value = '';
        form.reset();
        modal.classList.remove('hidden');
    };

    const hideModal = () => modal.classList.add('hidden');
    closeBtn.onclick = hideModal;
    cancelBtn.onclick = hideModal;

    form.onsubmit = (e) => {
        e.preventDefault();
        const id = document.getElementById('editId').value;
        const selectedBtns = Array.from(document.querySelectorAll('input[name="fBtn"]:checked')).map(el => el.value);

        const data = {
            id: id || Math.random().toString(36).substr(2, 9),
            order: document.getElementById('fOrder').value,
            name: document.getElementById('fName').value,
            phone: document.getElementById('fPhone').value,
            address: document.getElementById('fAddress').value,
            pincode: document.getElementById('fPincode').value,
            openingTime: document.getElementById('fOpen').value,
            closingTime: document.getElementById('fClose').value,
            mapUrl: document.getElementById('fMapUrl').value,
            status: document.getElementById('fStatus').value,
            statusColor: document.getElementById('fStatusColor').value,
            statusComment: document.getElementById('fStatusComment').value,
            buttons: selectedBtns.length > 0 ? selectedBtns : ['call', 'direction']
        };

        if (id) {
            branches = branches.map(b => b.id === id ? data : b);
        } else {
            branches.push(data);
        }
        saveBranches();
        hideModal();
    };

    document.getElementById('exportJsBtn').onclick = () => exportBranchesToJS(branches);
    document.getElementById('exportCsvBtn').onclick = exportToCSV;

    const fileInput = document.getElementById('csvFileInput');
    document.getElementById('importBtn').onclick = () => fileInput.click();
    fileInput.onchange = handleImport;
}

function renderTable() {
    const tbody = document.getElementById('branchTableBody');
    const sorted = [...branches].sort((a, b) => (parseInt(a.order) || 999) - (parseInt(b.order) || 999));
    
    tbody.innerHTML = sorted.map(b => `
        <tr class="hover:bg-slate-50/50 transition-colors">
            <td class="px-6 py-4 font-bold text-slate-400">#${b.order || 0}</td>
            <td class="px-6 py-4">
                <div class="font-bold text-slate-900">${b.name}</div>
                <div class="text-xs text-slate-500 max-w-xs truncate">${b.address}</div>
            </td>
            <td class="px-6 py-4">
                <span class="px-2 py-1 rounded text-[10px] font-bold text-white uppercase" style="background-color: ${b.statusColor}">
                    ${b.status}
                </span>
            </td>
            <td class="px-6 py-4 text-right space-x-1">
                <button onclick="window.editBranch('${b.id}')" class="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="window.deleteBranch('${b.id}')" class="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function exportToCSV() {
    if (branches.length === 0) return alert('No data to export');
    const headers = ['Order', 'Name', 'Phone', 'Address', 'Pincode', 'OpenTime', 'CloseTime', 'MapUrl', 'Status', 'StatusColor', 'StatusComment', 'Buttons'];
    const rows = branches.map(b => [
        b.order,
        `"${b.name}"`,
        `"${b.phone}"`,
        `"${b.address}"`,
        b.pincode,
        b.openingTime,
        b.closingTime,
        `"${b.mapUrl}"`,
        b.status,
        b.statusColor,
        `"${b.statusComment}"`,
        (b.buttons || []).join('|')
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'branchora_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!confirm('Proceed with CSV import for Branchora Locator? This will replace current data.')) {
        e.target.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = function(event) {
        const text = event.target.result;
        const lines = text.split('\n').filter(l => l.trim().length > 0);
        const newBranches = lines.slice(1).map(line => {
            const parts = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const clean = p => p ? p.replace(/^"|"$/g, '').trim() : '';
            return {
                id: Math.random().toString(36).substr(2, 9),
                order: clean(parts[0]),
                name: clean(parts[1]),
                phone: clean(parts[2]),
                address: clean(parts[3]),
                pincode: clean(parts[4]),
                openingTime: clean(parts[5]),
                closingTime: clean(parts[6]),
                mapUrl: clean(parts[7]),
                status: clean(parts[8]),
                statusColor: clean(parts[9]),
                statusComment: clean(parts[10]),
                buttons: parts[11] ? clean(parts[11]).split('|') : ['call', 'direction']
            };
        });
        branches = newBranches;
        saveBranches();
        alert('Branchora data updated successfully!');
        e.target.value = '';
    };
    reader.readAsText(file);
}

window.editBranch = (id) => {
    const b = branches.find(item => item.id === id);
    if (!b) return;
    document.getElementById('modalTitle').innerText = 'Edit Branch';
    document.getElementById('editId').value = b.id;
    document.getElementById('fOrder').value = b.order || 0;
    document.getElementById('fName').value = b.name;
    document.getElementById('fPhone').value = b.phone;
    document.getElementById('fAddress').value = b.address;
    document.getElementById('fPincode').value = b.pincode;
    document.getElementById('fOpen').value = b.openingTime;
    document.getElementById('fClose').value = b.closingTime;
    document.getElementById('fMapUrl').value = b.mapUrl || '';
    document.getElementById('fStatus').value = b.status || 'Active';
    document.getElementById('fStatusColor').value = b.statusColor || '#10b981';
    document.getElementById('fStatusComment').value = b.statusComment || '';
    document.querySelectorAll('input[name="fBtn"]').forEach(cb => {
        cb.checked = (b.buttons || []).includes(cb.value);
    });
    document.getElementById('branchModal').classList.remove('hidden');
};

window.deleteBranch = (id) => {
    if (confirm('Delete this office from Branchora registry?')) {
        branches = branches.filter(b => b.id !== id);
        saveBranches();
    }
};

window.addEventListener('DOMContentLoaded', init);