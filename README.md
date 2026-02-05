# Rise Media Growth – Marketing Website

A modern, production-ready single-page web application built to showcase social media management services, pricing packages, and lead-generation flows for **Rise Media Growth**.

This project was developed as a real-world frontend application and is used as a portfolio project for my Computer Science resume.

## 🚀 Project Overview

The goal of this project was to design and deploy a responsive, conversion-focused website that clearly communicates service offerings while handling real production constraints such as routing, builds, and static hosting.

The application is built as a **Single Page Application (SPA)** and deployed to **GitHub Pages**, requiring careful configuration of routing and build paths.

## 🛠️ Tech Stack

- **React** (SPA architecture)
- **TypeScript**
- **Vite** (build tool & bundler)
- **Tailwind CSS** (styling)
- **React Router** (client-side routing)
- **GitHub Pages** (static deployment)

## ✨ Features

- Responsive, mobile-first layout
- Clear presentation of service packages and pricing
- Client-side routing for multiple pages
- External scheduling integration (Calendly booking link)
- Optimized production build with static hosting support

## 🧠 Key Engineering Challenges & Solutions

- Configured **React Router** with a dynamic `basename` to support GitHub Pages subpath deployments
- Implemented SPA fallback handling to prevent 404 errors on page refresh
- Optimized asset loading and build output using Vite
- Solved real-world deployment issues related to static hosting environments

## 🌍 Live Demo

👉 **Live Site:**  
https://aseelal-hakimi.github.io/rise-media-growth/

## 📦 Local Development

Clone the repository and run:

```bash
npm install
npm run dev
