/**
 * 📍 Branchora Locator - System Constants
 * 
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */

import { Branch } from './types';

export const INITIAL_BRANCHES: Branch[] = [
  {
    id: '1',
    name: 'Mumbai Head Office',
    address: 'Nariman Point, Marine Drive, Mumbai, Maharashtra',
    pincode: '400021',
    phone: '+91 22 1234 5678',
    openingTime: '09:00 AM',
    closingTime: '06:00 PM',
    latitude: 18.9256,
    longitude: 72.8242
  }
];

export const STORAGE_KEYS = {
  BRANCHES: 'branches_data',
  DRIVE_CONFIG: 'drive_sync_config',
  WATERMARK: 'vjbuilds_signature'
};