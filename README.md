# DevOps Portfolio 🚀

A modern, responsive portfolio website showcasing DevOps skills and projects, built with React and deployed using GitHub Pages with automated CI/CD.


## ✨ Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Interactive Animations** - Scroll-based reveals and hover effects
- **Modern UI/UX** - Clean design with gradient effects and smooth animations
- **Contact Form** - Functional contact form with success notifications
- **Resume Viewer** - Embedded PDF resume viewer
- **Mobile-First** - Optimized for mobile devices with proper navigation

## 🛠️ Tech Stack

### Frontend
- **React** - Component-based UI library
- **React Bootstrap** - Responsive UI components
- **Styled Components** - CSS-in-JS styling
- **React Icons** - Icon library for UI elements

### DevOps & Deployment
- **GitHub Actions** - Automated CI/CD pipeline
- **GitHub Pages** - Static site hosting
- **Docker** - Containerization (optional)
- **Terraform** - Infrastructure as Code (for AWS deployment)

## 🏗️ Architecture

```
GitHub Repository
    ↓
GitHub Actions (CI/CD)
    ↓
Build & Test
    ↓
Deploy to GitHub Pages
    ↓
Live Website
```

## 📁 Project Structure

```
new-portfolio/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── .nojekyll
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.js
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── themes.css
│   │   │   ├── animations.css
│   │   │   └── coolEffects.css
│   │   └── App.js
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── terraform/ (optional)
└── README.md
```
