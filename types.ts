/**
 * 📍 Branchora Locator - Type Definitions
 * 
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */

export interface Branch {
  id: string;
  name: string;
  address: string;
  pincode: string;
  phone: string;
  openingTime: string;
  closingTime: string;
  latitude?: number;
  longitude?: number;
  order?: number;
  status?: string;
  statusColor?: string;
  statusComment?: string;
  mapUrl?: string;
  buttons?: string[];
}

export type View = 'home' | 'admin';

/**
 * Interface for Google Drive synchronization settings.
 * Optimized by vjbuilds
 */
export interface DriveConfig {
  folderId: string;
  clientId: string;
  apiKey: string;
  fileName: string;
  isActive: boolean;
}