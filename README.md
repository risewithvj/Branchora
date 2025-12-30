# 📍 Branchora Locator — Premium Branch Discovery Engine

**Branchora Locator** is a high-performance, minimal-backend solution designed for companies with multiple offices across India. It enables customers to search, discover, and connect with your branches instantly while giving administrators a lightweight way to manage office data without servers or databases.

---

## 📝 Short Description (350 characters)
Branchora is a fast, elegant branch-locator system for businesses with multiple offices. Customers can search branches by name, city, or pincode, view timings, check status, and instantly call or navigate. Admins can add, edit, import, export, and sync branch data without any backend database.

---

## 🧠 Repository Language Breakdown
```
TypeScript  — 48.5%
JavaScript  — 31.8%
HTML        — 14.9%
CSS         — 4.8%
```

---

## 🚀 Purpose of Use
Branchora was built to solve a simple but widespread problem:

💡 *“Companies have multiple physical branches but no unified place for customers to discover them easily.”*

### ⭐ For Customers
- Sleek, modern “Apple-like” UI  
- Instant search (name, city, pincode)  
- Live operational status  
- One-tap **Call** and **Route** buttons  
- Mobile-first responsive design  
- Fast, cached, no server load  

### ⭐ For Business Owners
- No backend or server needed  
- Admin panel for easy management  
- CSV Import/Export  
- Auto-sync using `localStorage`  
- Export as JS file for production push  
- Works perfectly on **GitHub Pages / Vercel / Netlify**  

---

## 🛠 What is Branchora?
Branchora Locator is a **hybrid frontend application** combining:

- **TypeScript** for structured logic  
- **Vanilla JavaScript (ES6+)** for performance  
- **HTML5** for the base UI  
- **CSS3 + Tailwind (optional)** for styling  
- **localStorage** for instant, offline-ready persistence  
- **JS file export** for deployment  

### Core Features
- 4-column responsive layout  
- Input-based live search  
- Smart status badges  
- Tooltip comments for status messages  
- Admin dashboard for CRUD operations  
- CSV-to-JS automated transformation  
- Clean component-style code architecture  

---

## 📋 Standard Operating Procedure (SOP)

### 1️⃣ Project Setup
1. Download or clone the repository  
2. Ensure `branches-data.js` exists in the project root  
3. Upload the project to any static host (or open locally)  
4. Visit `index.html` for the public branch locator  
5. Access admin tools via `/admin/admin.html`

---

## 🌐 User Flow — Finding an Office
1. Type in the search box → filters instantly  
2. Each office card displays:
   - Office Name  
   - Address  
   - Opening Hours  
   - Status Badge  
3. Click:
   - **Call Now** → Opens dialer  
   - **Direction** → Opens Google Maps route  

---

## 🧩 Admin Flow — Editing Branch Data
1. Visit `/admin/admin.html`  
2. Click **Add New Branch** or **Edit**  
3. Input fields:
   - Serial Number (for ordering)  
   - Office Name  
   - Address  
   - City  
   - State  
   - Pincode  
   - Opening Times  
   - Status + Status Color  
   - Tooltip Message  
4. Tools available:
   - **Export CSV**  
   - **Import CSV**  
   - **Export JS** (creates `branches-data.js`)  
   - **Auto-Sync** (updates live preview)  
5. Replace the JS file via Git push to deploy changes  

---

## ⚙️ Technical Specifications
| Component | Technology |
|----------|------------|
| Core Logic | TypeScript + ES6 JavaScript |
| Data Model | JSON + LocalStorage |
| Styles | CSS3 + Tailwind (optional) |
| Frontend Framework | None (Pure Vanilla, Faster) |
| Admin Tools | HTML, JS, CSV Engine |
| Icons | FontAwesome 6.4 |
| Fonts | Inter (Google Fonts) |
| Hosting | Any static server |

---

## 🌟 Why Branchora?  
Because businesses deserve a branch-locator that is:

- **Fast**  
- **Lightweight**  
- **Editable without a backend**  
- **Deployable to any static host**  
- **Completely under your control**  

Branchora ensures **zero server cost**, **zero database management**, and **instant sync**.

---

## 👨‍💻 Credits
**Author:** Vijaya Kumar L  
**Repository:** https://github.com/risewithvj  
**Brand:** Branchora™  
**Copyright:** © 2026 vjbuilds  
**License:** Branchora Custom No-Modification License  

---

## 🛡 License Badges
[![No Modification](https://img.shields.io/badge/Modification-Not%20Allowed-red)]()  
[![Credit Required](https://img.shields.io/badge/Credit-Required-blue)]()  
[![Commercial Use Allowed](https://img.shields.io/badge/Commercial%20Use-Allowed-green)]()  
[![Branchora License](https://img.shields.io/badge/License-Branchora%20Custom-black)]()
![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=risewithvj.Branchora&color=purple&label=Visitors&style=for-the-badge)

---

