/**
 * 📍 Branchora Locator - Settings Management
 * 
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */

function init() {
    const fields = ['driveFolderId', 'driveClientId', 'driveApiKey'];
    fields.forEach(id => {
        const val = localStorage.getItem(`setting_${id}`);
        if (val) document.getElementById(id).value = val;
    });
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', (e) => {
                localStorage.setItem(`setting_${id}`, e.target.value);
            });
        }
    });
}
window.addEventListener('DOMContentLoaded', init);