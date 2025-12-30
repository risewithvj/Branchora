# 📍 Branchora Locator: Premium Branch Discovery Engine

**Branchora Locator** is a high-performance, aesthetically pleasing office discovery and management system. Designed for businesses with multi-city presence, it offers a seamless experience for customers to find offices and a robust dashboard for administrators to manage location data.

---

## 🚀 Purpose of Use
The primary purpose of **Branchora Locator** is to bridge the gap between a corporation's physical infrastructure and its digital presence. 
- **For Customers:** It provides an "Apple-style" clean interface to quickly identify the nearest office, check its operational status, and initiate contact or navigation with a single tap.
- **For Businesses:** It serves as a lightweight "Source of Truth" for branch data that can be managed without complex database backends, utilizing browser storage and portable CSV/JS formats.

## 🛠 What is this?
Branchora Locator is a **Hybrid Frontend Application**. It combines the reactivity of **React 19** with the raw performance of **Vanilla ES6+ JavaScript**.
- **User Interface:** A responsive, grid-based locator with real-time search and smart tooltips.
- **Admin Engine:** A full-featured management suite with CSV Import/Export capabilities and persistent data handling via `localStorage`.
- **Styling:** Built with **Tailwind CSS** for layout and custom **CSS3** for premium animations and specialized UI components like the "Edge-Safe" tooltips.

---

## 📋 Standard Operating Procedure (SOP)

### 1. Initial Setup
1. Deploy the project files to any static web server (GitHub Pages, Vercel, or local Nginx).
2. Ensure the `branches-data.js` file is present in the root to provide the baseline data.
3. Open `index.html` to view the public-facing locator.

### 2. Finding an Office (User Flow)
1. **Search:** Use the prominent search bar to filter by City, Office Name, or Pincode.
2. **Status Check:** Hover over (or tap on mobile) the status pill (e.g., "ACTIVE", "HOLIDAY") to see specific operational comments.
3. **Action:** 
   - Click **Call** to initiate a phone call via the device's native dialer.
   - Click **Route** to open the specific location in Google Maps.

### 3. Managing Data (Admin Flow)
1. Navigate to the `/admin/admin.html` dashboard.
2. **Adding/Editing:** 
   - Click **"Add New Branch"** to open the modal.
   - Fill in details including the "Serial Number" to control the display order.
   - Customize the **Status Color** and **Tooltip Comment** for real-time updates.
3. **Bulk Operations:**
   - **Export CSV:** Save your current registry to a spreadsheet-compatible format.
   - **Import CSV:** Update the entire network at once by uploading a formatted CSV.
4. **Persistence:**
   - Click **"Export JS"** to generate a new `branches-data.js` file. Replace the physical file in your project root with this one to make your changes permanent.

---

## ⚙️ Technical Specifications
- **Framework:** React 19 (Components) / Vanilla JS (Main logic)
- **Icons:** FontAwesome 6.4.0
- **Typography:** Inter (Google Fonts)
- **Persistence:** Browser `localStorage` + JS File Exports
- **Responsive Design:** Mobile-first, breakpoint-optimized grid (1 to 4 columns)

---

## 👨‍💻 Credits
**Author:** Vijaya Kumar L  
**Source:** [github.com/risewithvj](https://github.com/risewithvj)  
**Copyright:** © 2026 **vjbuilds**. All rights reserved.


[![No Modification](https://img.shields.io/badge/Modification-Not%20Allowed-red)]()
[![Credit Required](https://img.shields.io/badge/Credit-Required-blue)]()
[![Commercial Use Allowed](https://img.shields.io/badge/Commercial%20Use-Allowed-green)]()
[![Branchora License](https://img.shields.io/badge/License-Branchora%20Custom-black)]()
