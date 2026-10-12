# TECHORA — Enterprise IT Consulting & Payroll Services Platform

> **"Technology That Moves Business Forward."**  
> *IT Consulting & Payroll Solutions Built for Modern Businesses.*

---

## 🚀 Executive Architecture Overview

**TECHORA** is a premium, enterprise-grade corporate platform designed for global technology consulting and statutory payroll services. Built with a modern **React.js + Node.js/Express.js** architecture, it delivers high-performance aesthetic design, defense-in-depth security, and interactive command center capabilities.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React.js (Vite 5) | Component-driven, ultra-fast client application |
| **Styling & Theme** | Tailwind CSS + Vanilla CSS | Enterprise dark charcoal theme (`#070A11`), cyan glows |
| **Animations** | Framer Motion & HTML5 Canvas | Smooth micro-interactions, reactive network node graphic |
| **Icons** | Lucide React | Clean, modern vector icons |
| **Backend API** | Node.js + Express.js | RESTful JSON API architecture |
| **Database** | SQLite / MySQL / PostgreSQL | ACID-compliant relational storage via `better-sqlite3` |
| **Security** | Helmet, CORS, Rate Limiters, Bcrypt, JWT | Enterprise data protection & defense-in-depth |
| **SEO & Schema** | OpenGraph, GFM, Schema.org JSON-LD | Comprehensive search engine indexing |

---

## 📂 Production Folder Structure

```
Tekora/
├── .env.example
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── og-image.png
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   ├── servicesData.js
│   │   └── companyData.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroCanvas.jsx
│   │   ├── TechEcosystemCanvas.jsx
│   │   ├── TrustBadges.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── DetailModal.jsx
│   │   ├── ProcessTimeline.jsx
│   │   ├── SecurityPillars.jsx
│   │   ├── SEOMeta.jsx
│   │   └── Toast.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ITConsultingPage.jsx
│   │   ├── PayrollServicesPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── SecurityPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── AdminPage.jsx
│   └── utils/
│       ├── api.js
│       └── validators.js
└── server/
    ├── .env.example
    ├── server.js
    ├── seed.js
    ├── database.sqlite
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── contactController.js
    │   └── adminController.js
    ├── middleware/
    │   ├── auth.js
    │   ├── rateLimiter.js
    │   ├── validate.js
    │   └── errorHandler.js
    ├── routes/
    │   ├── contactRoutes.js
    │   └── adminRoutes.js
    └── models/
        └── schema.sql
```

---

## 🔑 Enterprise Admin Command Center

Access the secure admin command center at `/admin` (or by clicking the **Admin Portal** button in the navigation header).

* **Demo Administrator Email**: `admin@techora.com`
* **Demo Password**: `Admin#2026`

### Admin Features:
1. **Analytics Dashboard**: Total, IT Consulting, Payroll, and Pending Action KPIs.
2. **Search & Filter**: Real-time filtering by text query, service category, or workflow status.
3. **Status Management**: Update status across `New`, `Contacted`, `In Progress`, `Converted`, and `Closed`.
4. **Data Export**: Single-click export of enquiry leads to formatted CSV files.

---

## ⚡ Quick Start Guide

### 1. Installation
```bash
npm install
```

### 2. Database Initialization & Seeding
```bash
npm run seed
```

### 3. Run Development Client & Server
```bash
# Run client (Port 3000) and API server (Port 5000) concurrently
npm run dev:full

# Or run client only
npm run dev

# Or run backend API server only
npm run server
```

---

## 🛡️ Security Implementation

- **Input Sanitization & Parameterized Queries**: Protects against SQL injection & XSS attack vectors.
- **Express Rate Limiting**: Throttles submission attempts to prevent DDoS and spamming.
- **Helmet Security Headers**: Enforces strict HTTP headers for web application security.
- **Bcrypt & JWT Authorization**: Password hashing with salt factor 10 and 24-hour expiration bearer tokens.
- **Environment Isolation**: Zero hardcoded credentials in client bundles.

---

## 📄 License & Copyright

© 2026 **TECHORA Enterprise Solutions**. All Rights Reserved.
