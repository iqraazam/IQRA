# 🎨 Iqra Azam - Professional Portfolio Website

A sleek, modern, and professional personal portfolio showcasing expertise in AI/ML, full-stack development, and software innovation.

## ✨ Features

### Design
- **Dark Theme**: Black gradient background with purple and blue neon accents
- **Glassmorphic Effects**: Modern glass-style cards with blur and transparency
- **Smooth Animations**: Framer Motion for seamless transitions
- **Particle Background**: Animated purple particles on the hero section
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Pages/Sections

#### 1. **Home (Hero Section)** - `/`
- Headline: "Hi, I'm Iqra Azam — AI Engineer & Full Stack Developer"
- Subheadline: "Building intelligent digital solutions that scale."
- Two CTA buttons: "View Projects" and "Contact Me"
- Animated particle background with gradient orbs
- Smooth scroll indicator

#### 2. **About Section** - `/about`
- Professional bio and background
- Quote: "Passionate about building tech that bridges creativity and intelligence."
- 4 Highlight cards:
  - 💡 AI/ML Model Design (TensorFlow, Scikit-learn)
  - 💻 Full Stack Development (Flutter, React, Node.js)
  - ☁️ Cloud & Automation (Firebase, AWS)
  - 🔧 Research & Optimization (EfficientNet, Transformers)

#### 3. **Experience Page** - `/experience`
Elegant timeline layout with 5 professional positions:
- **NEXIUM** - Operations Officer | Freelance Software Developer (Jan 2024 – Present)
- **Self-Employed / Freelance** - Full Stack Developer | AI/ML Engineer (Jan 2022 – Dec 2023)
- **Entracloud, Lahore** - Web Development Intern (Jun 2023 – Dec 2023)
- **Mindstorm Studios, Lahore** - Game Development Intern (Jan 2023 – Jun 2023)
- **Octanet, Lahore** - AI/ML Intern (Jul 2022 – Dec 2022)

#### 4. **Projects Section** - `/projects`
Featured project cards with:
- DermaDiagnostics (AI skin disease classification)
- Stylique (AI Fashion Advisor)
- Face Spoof Detection System
- Social Media Platform
- Hover animations with tech stack tags
- GitHub links for each project

#### 5. **Contact Page** - `/contact`
- Working contact form with fields: Name, Email, Message
- Form submission opens default email client to: **iqraazamofficial@gmail.com**
- Social media links (GitHub, LinkedIn, Instagram)
- Direct email link

### Navigation & Footer
- **Header**: Glassmorphic navbar with active page indicator (pink dot)
- **Footer**: Social links, copyright, tech stack info
- **Mobile Menu**: Responsive hamburger menu

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running

1. **Install dependencies** (already done):
```powershell
cd "C:\Users\Admin\IQRA"
npm install
```

2. **Start development server**:
```powershell
npm run dev
```

3. **Open in browser**:
Navigate to `http://localhost:3001` (currently running)

### Build Commands

- **Development**: `npm run dev` - Starts dev server with hot reload
- **Build**: `npm run build` - Creates production build
- **Start**: `npm start` - Runs production server
- **Lint**: `npm run lint` - Checks code quality

## 📁 Project Structure

```
IQRA/
├── app/
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── experience/
│   │   └── page.tsx         # Experience page (NEW)
│   ├── projects/
│   │   └── page.tsx         # Projects page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header (Updated)
│   │   └── Footer.tsx       # Footer with social links (Updated)
│   └── sections/
│       ├── HomeSection.tsx       # Hero section with particles (NEW)
│       ├── AboutSection.tsx      # About with highlight cards (NEW)
│       ├── ExperienceSection.tsx # Timeline experience (NEW)
│       ├── ProjectsSection.tsx   # Project showcase (UPDATED)
│       └── ContactSection.tsx    # Contact form (UPDATED)
├── styles/
│   └── globals.css          # Enhanced with glassmorphic styles
├── public/
│   └── assets/
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Color Scheme

- **Background**: Black (#000000) with purple gradient
- **Primary**: Purple (#a855f7, #8b5cf6)
- **Accent**: Pink (#ec4899, #f472b6)
- **Text**: White (#ffffff), Purple tints
- **Glassmorphic**: rgba(139, 92, 246, 0.1) with blur

## 🛠️ Tech Stack

- **Framework**: Next.js 14.1.0
- **React**: 18.2.0
- **Styling**: Tailwind CSS 3.4.3
- **Animations**: Framer Motion 12.23.12
- **Icons**: React Icons 4.12.0
- **Language**: TypeScript 5.4.0

## ✅ All Features Implemented

- ✅ Sleek dark theme with purple/blue neon effects
- ✅ Glassmorphic cards with blur effects
- ✅ Smooth Framer Motion animations
- ✅ Particle background on hero section
- ✅ Home page with headline, subheadline, 2 buttons
- ✅ About section with quote and 4 highlight cards
- ✅ Experience page with timeline design (5 positions)
- ✅ Projects section with hover effects and GitHub links
- ✅ Working contact form sending to iqraazamofficial@gmail.com
- ✅ Social links (GitHub, LinkedIn, Instagram)
- ✅ Responsive navigation with mobile menu
- ✅ Professional footer with "Designed & Built by Iqra Azam"
- ✅ Fully responsive for mobile, tablet, and desktop

## 📝 Customization

### Update Personal Info
- **Email**: Change in `ContactSection.tsx` (line 19)
- **Social Links**: Update in `Footer.tsx` and `ContactSection.tsx`
- **Bio**: Edit `AboutSection.tsx`
- **Projects**: Modify `projects` array in `ProjectsSection.tsx`
- **Experience**: Update `experiences` array in `ExperienceSection.tsx`

---

**Built with ❤️ using Next.js + Tailwind CSS**

© 2025 Iqra Azam. All rights reserved.
