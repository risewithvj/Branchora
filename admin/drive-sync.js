/**
 * 📍 Branchora Locator - Google Drive Sync Engine
 * 
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */

const SCOPES = 'https://www.googleapis.com/auth/drive.file';
let tokenClient;
let gapiInited = false;
let gisInited = false;

function gapiLoaded() {
    gapi.load('client', async () => {
        await gapi.client.init({
            apiKey: localStorage.getItem('setting_driveApiKey'),
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        });
        gapiInited = true;
    });
}

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: localStorage.getItem('setting_driveClientId'),
        scope: SCOPES,
        callback: '', 
    });
    gisInited = true;
}

async function syncToDrive() {
    const folderId = localStorage.getItem('setting_driveFolderId');
    const branches = JSON.parse(localStorage.getItem('branches_data') || '[]');
    const status = document.getElementById('syncStatus');

    if (!folderId) {
        status.innerText = 'Error: Folder ID required.';
        return;
    }

    status.innerText = 'Connecting via vjbuilds bridge...';

    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) throw resp;
        status.innerText = 'Syncing Branchora data...';

        try {
            const fileName = 'branchora-data.json';
            const fileContent = JSON.stringify(branches, null, 2);
            const searchResp = await gapi.client.drive.files.list({
                q: `name = '${fileName}' and '${folderId}' in parents and trashed = false`,
                fields: 'files(id, name)',
            });

            const existingFile = searchResp.result.files[0];
            const metadata = {
                name: fileName,
                mimeType: 'application/json',
                parents: existingFile ? [] : [folderId],
                description: 'Office registry managed by Branchora Locator (vjbuilds)'
            };

            const boundary = '-------314159265358979323846';
            const delimiter = "\r\n--" + boundary + "\r\n";
            const close_delim = "\r\n--" + boundary + "--";
            const body =
                delimiter + 'Content-Type: application/json\r\n\r\n' + JSON.stringify(metadata) +
                delimiter + 'Content-Type: application/json\r\n\r\n' + fileContent +
                close_delim;

            const request = gapi.client.request({
                path: existingFile ? `/upload/drive/v3/files/${existingFile.id}` : '/upload/drive/v3/files',
                method: existingFile ? 'PATCH' : 'POST',
                params: { uploadType: 'multipart' },
                headers: { 'Content-Type': 'multipart/related; boundary="' + boundary + '"' },
                body: body
            });

            await request;
            status.innerText = '✓ Sync Complete (vjbuilds)!';
            setTimeout(() => status.innerText = '', 5000);
        } catch (err) {
            console.error(err);
            status.innerText = 'Error: ' + (err.message || 'Unknown');
        }
    };

    if (gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
        tokenClient.requestAccessToken({ prompt: '' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const manualSyncBtn = document.getElementById('manualSyncBtn');
    if (manualSyncBtn) manualSyncBtn.onclick = syncToDrive;
    if (typeof gapi === 'undefined') {
        const script = document.createElement('script');
        script.src = "https://apis.google.com/js/api.js";
        script.onload = gapiLoaded;
        document.body.appendChild(script);
    }
    if (typeof google === 'undefined') {
        const script = document.createElement('script');
        script.src = "https://accounts.google.com/gsi/client";
        script.onload = gisLoaded;
        document.body.appendChild(script);
    }
});