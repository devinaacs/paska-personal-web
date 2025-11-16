# Mikael Prapaskalis G — Data Analyst Portfolio

A modern, fast, and fully responsive personal portfolio website built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **TypeScript**.
This website showcases projects, experience, skills, and contact information in a clean and elegant UI inspired by the *Ravenclaw blue–gold palette*.

Built with a strong focus on performance, clarity, and minimalistic aesthetics — perfect for digital resumes, analytics showcases, dashboards, or data-driven storytelling.

---

## Tech Stack

### **Frontend**

* **Next.js 15 (App Router)**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **Shadcn/ui (optional for future components)**

### **Tooling & Workflow**

* **ESLint + Prettier**
* **Absolute Imports & Aliases**
* **Modern file-based routing**
* **Responsive & Accessible UI**

---

## Features

### **Home Page**

* Hero introduction with circular photo
* Animated highlight tags
* Ravenclaw-inspired theme

### **About Page**

* Professional introduction
* Skills & stack overview
* Social media buttons (LinkedIn, Email)
* CV download

### **Education & Experience**

* Timeline-style layout
* Company & university logos
* Clean left–right hierarchy

### **Contact Page**

* WhatsApp, email, LinkedIn integration
* Beautiful call-to-action card
* Fully responsive layout

### **Global Components**

* Reusable **Navbar** and **Footer**
* Centralized **personal constants file** (`/src/constant/me.ts`)
* Easy to update personal data in one place

---

## Folder Structure

```
src/
├── app/
│   ├── about/
│   ├── background/
│   ├── contact/
│   ├── skill/              (coming soon)
│   ├── projects/           (coming soon)
│   ├── layout.tsx
│   └── page.tsx            (Home)
│
├── components/
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
│
├── constant/
│   └── me.ts               // All personal info here
│
└── styles/
    └── globals.css
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/devinaacs/paska-personal-web
cd your-portfolio
```

### Install dependencies

If you face peer dependency warnings, use:

```bash
npm install --legacy-peer-deps
```

### Run development server

```bash
npm run dev
```

Visit the project at
👉 **[http://localhost:3000](http://localhost:3000)**

---

## Customization

All personal profile data is stored in one file:

```
src/constant/me.ts
```

Update fields such as:

```ts
firstName: "Mikael",
lastName: "Prapaskalis",
email: "your-email",
linkedinUrl: "...",
whatsappNumber: "...",
cvPath: "/files/resume.pdf",
```

Every page will automatically update — no duplicate editing needed.

---

## Reference

This project is inspired by the clean structure and workflow of
**[https://github.com/realstoman/nextjs-tailwindcss-portfolio](https://github.com/realstoman/nextjs-tailwindcss-portfolio)**

But completely redesigned to match a **data-analyst-focused**, elegant UI.
