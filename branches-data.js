/**
 * 📍 Branchora Locator - Default Registry
 * 
 * AUTHOR: Vijaya Kumar L
 * SOURCE: github.com/risewithvj
 * (c) 2026 vjbuilds. All Rights Reserved.
 */
export const branches = [
  {
    id: '1',
    order: 1,
    name: 'Mumbai HQ',
    address: 'Nariman Point, Marine Drive, Mumbai, Maharashtra',
    pincode: '400021',
    phone: '+91 22 1234 5678',
    openingTime: '09:00',
    closingTime: '18:00',
    mapUrl: 'https://maps.google.com',
    status: 'Active',
    statusColor: '#10b981',
    statusComment: 'Main hub operating at full capacity',
    buttons: ['call', 'direction']
  },
  {
    id: '2',
    order: 2,
    name: 'Bangalore Hub',
    address: 'Whitefield, Bengaluru, Karnataka',
    pincode: '560066',
    phone: '+91 80 8765 4321',
    openingTime: '10:00',
    closingTime: '19:00',
    mapUrl: 'https://maps.google.com',
    status: 'Holiday',
    statusColor: '#f59e0b',
    statusComment: 'Closed for regional festival',
    buttons: ['direction', 'review']
  }
];