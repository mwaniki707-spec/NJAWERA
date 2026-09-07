# 📁 NJAWERA Project Structure

Complete overview of the project file organization.

## 🌳 Directory Tree

```
njawera-landing/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── next.config.js            # Next.js config (static export enabled)
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── .eslintrc.json            # ESLint configuration
│   ├── .gitignore                # Git ignore rules
│   ├── firebase.json             # Firebase hosting config
│   └── .firebaserc               # Firebase project ID
│
├── 📚 Documentation
│   ├── README.md                 # Main project documentation
│   ├── DEPLOYMENT.md             # Deployment guide
│   ├── CUSTOMIZATION.md          # Customization guide
│   ├── QUICKSTART.md             # Quick start guide
│   └── PROJECT_STRUCTURE.md      # This file
│
├── 🧩 components/                # React components
│   ├── Navbar.tsx                # Navigation bar with smooth scroll
│   ├── Hero.tsx                  # Hero section with CTAs
│   ├── Services.tsx              # Services grid with cards
│   ├── About.tsx                 # About company section
│   ├── Contact.tsx               # Contact form and info
│   └── Footer.tsx                # Footer with links and contact
│
├── 📄 pages/                     # Next.js pages (Pages Router)
│   ├── _app.tsx                  # App wrapper
│   ├── _document.tsx             # Document structure & meta tags
│   └── index.tsx                 # Main landing page
│
├── 🎨 styles/
│   └── globals.css               # Global styles and animations
│
├── 🖼️ public/                    # Static assets (served as-is)
│   └── favicon.ico               # Favicon placeholder
│
└── 📦 out/                       # Generated after build (git-ignored)
    └── (Static export files)     # Deployed to Firebase
```

## 📦 Key Files Explained

### Configuration Files

#### `package.json`
- Lists all dependencies (Next.js, React, TypeScript, Tailwind)
- Defines npm scripts: `dev`, `build`, `export`, `start`
- Version: Next.js 14, React 18, TypeScript 5

#### `next.config.js`
- **Critical:** Enables static export with `output: 'export'`
- Disables image optimization for Firebase compatibility
- Adds trailing slashes to URLs

#### `tailwind.config.ts`
- Custom color scheme (blue + orange)
- Custom gradient classes
- Content paths for Tailwind to scan

#### `firebase.json`
- Hosting configuration
- Points to `/out` directory
- SPA routing rewrites
- Cache headers for assets

#### `.firebaserc`
- Firebase project ID
- **Action Required:** Update with your project ID

### Components

#### `Navbar.tsx` (Interactive)
- **Features:**
  - Sticky navigation
  - Smooth scroll to sections
  - Mobile hamburger menu
  - Color change on scroll
  - Client-side only (`'use client'`)

#### `Hero.tsx` (Static/Client)
- **Content:**
  - Main slogans and headlines
  - Two CTA buttons (Get a Quote, Contact Us)
  - Hero image placeholder
  - Scroll indicator
- **Styling:**
  - Full gradient background
  - Responsive grid layout
  - Fade-in animations

#### `Services.tsx` (Static)
- **Features:**
  - 5 service cards in responsive grid
  - Each card: icon, title, description
  - Hover animations (lift + shadow)
  - Staggered fade-in effect
- **Services Listed:**
  1. Contractor All Risk Policy (CAR)
  2. Worker Injury Benefit Act (WIBA)
  3. Bid Bond
  4. Performance Bond
  5. Advance Payment Guarantee

#### `About.tsx` (Static)
- **Layout:**
  - Two-column: image + content
  - Company description
  - 4 feature badges with icons
- **Features:**
  - Reliable, Compliant, Fast, Competitive

#### `Contact.tsx` (Interactive)
- **Form Fields:**
  - Name, Email, Phone, Message
  - Client-side validation
  - Console logging (Firebase-friendly)
- **Contact Info:**
  - Phone: 0718 431 589, 0762 347 359
  - Email: njaweracoltd@gmail.com
  - Address: P.O. Box 210-00520 Nairobi
- **Note:** Form submissions currently log to console

#### `Footer.tsx` (Static)
- **Sections:**
  - Logo and tagline
  - Contact details
  - Social media icons (placeholders)
  - Business hours
  - Copyright

### Pages

#### `pages/_app.tsx`
- Next.js app wrapper
- Imports global CSS
- Wraps all pages

#### `pages/_document.tsx`
- HTML document structure
- Meta tags for SEO
- Language set to English
- Favicon link

#### `pages/index.tsx`
- Main landing page
- Imports and renders all components in order:
  1. Navbar
  2. Hero
  3. Services
  4. About
  5. Contact
  6. Footer
- Page-specific meta tags

## 🔧 Build Process

### Development
```bash
npm run dev
```
- Starts Next.js dev server
- Hot reload enabled
- Runs on http://localhost:3000

### Production Build
```bash
npm run build
```
1. TypeScript compilation
2. Code optimization and minification
3. Static page generation
4. Automatic export to `/out` directory

### Output Structure (`/out`)
```
out/
├── index.html              # Landing page
├── 404.html                # Error page
├── _next/
│   └── static/
│       ├── chunks/         # JavaScript chunks
│       ├── css/            # Compiled CSS
│       └── media/          # Assets
└── favicon.ico             # Favicon
```

## 🎨 Styling System

### Tailwind CSS Classes Used

**Colors:**
- `text-blue-800` / `bg-blue-800` - Primary blue
- `text-orange-500` / `bg-orange-500` - Accent orange
- `bg-gradient-to-r from-blue-800 to-orange-500` - Gradient

**Spacing:**
- `py-20` - Section vertical padding
- `px-4 sm:px-6 lg:px-8` - Responsive horizontal padding
- `max-w-7xl mx-auto` - Centered container

**Responsive Grid:**
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Responsive columns

**Animations:**
- `fade-in` - Custom fade-in animation (defined in globals.css)
- `hover:scale-105` - Hover scale effect
- `hover:-translate-y-2` - Hover lift effect
- `transition-all duration-300` - Smooth transitions

### Custom Classes (`globals.css`)

```css
.fade-in {
  animation: fadeIn 1s ease-in;
}
```

## 🔥 Firebase Configuration

### `firebase.json`
```json
{
  "hosting": {
    "public": "out",                    // Serve from /out
    "rewrites": [                       // SPA routing
      { "source": "**", "destination": "/index.html" }
    ],
    "headers": [...]                    // Cache control
  }
}
```

### `.firebaserc`
```json
{
  "projects": {
    "default": "your-project-id-here"   // Update this!
  }
}
```

## 📊 Component Dependencies

```
index.tsx
  ├── Navbar.tsx
  ├── Hero.tsx
  ├── Services.tsx
  ├── About.tsx
  ├── Contact.tsx
  └── Footer.tsx

All components are independent and reusable!
```

## 🔄 Data Flow

1. **Static Content:** Hardcoded in components
2. **User Interactions:** Handled client-side (scrolling, form)
3. **Form Submissions:** Console logging (can be extended)
4. **Navigation:** Smooth scroll with `scrollIntoView()`

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Usage |
|------------|-------------|-------|
| Default    | < 640px     | Mobile |
| `sm:`      | ≥ 640px     | Large mobile |
| `md:`      | ≥ 768px     | Tablet |
| `lg:`      | ≥ 1024px    | Desktop |
| `xl:`      | ≥ 1280px    | Large desktop |

## 🚀 Deployment Flow

```
Local Development
      ↓
npm run build
      ↓
Static Files Generated (/out)
      ↓
firebase deploy --only hosting
      ↓
Firebase CDN
      ↓
Live Website
```

## 📝 File Size Reference

**Estimated sizes after build:**
- Total: ~500KB (initial load)
- HTML: ~50KB
- CSS: ~20KB (Tailwind purged)
- JS: ~400KB (React + Next.js)
- Assets: Variable (depends on images)

## 🔐 Environment Variables

Currently not used. If needed, create `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_CONTACT_EMAIL=...
```

**Note:** `.env.local` is git-ignored for security.

## 🧪 Testing Coverage

### Manual Testing Required:
- [ ] Navigation smooth scroll
- [ ] Mobile menu functionality
- [ ] Form validation
- [ ] Responsive layouts (all breakpoints)
- [ ] Cross-browser compatibility
- [ ] Touch interactions (mobile)

### Automated Testing (Future):
- Unit tests (Jest + React Testing Library)
- E2E tests (Playwright/Cypress)
- Visual regression (Percy)

## 📈 Performance Optimizations

✅ **Implemented:**
- Static site generation (no server needed)
- Tailwind CSS purging (removes unused styles)
- Code splitting (automatic with Next.js)
- Asset optimization at build time

🔜 **Future Improvements:**
- Image optimization (add real images first)
- Service worker for offline support
- Font optimization (font-display: swap)
- Lazy loading for below-the-fold content

## 🎯 Next Steps After Setup

1. **Update Content:**
   - Replace all placeholder text
   - Add real images
   - Update contact information

2. **Branding:**
   - Add real logo
   - Customize colors
   - Add favicon

3. **Functionality:**
   - Connect contact form to backend
   - Add form validation
   - Implement analytics

4. **SEO:**
   - Update meta tags
   - Add sitemap.xml
   - Submit to search engines

5. **Deploy:**
   - Set up Firebase project
   - Configure custom domain
   - Enable SSL certificate

## 🆘 Troubleshooting Reference

| Issue | File to Check | Solution |
|-------|---------------|----------|
| Build fails | `next.config.js` | Verify `output: 'export'` |
| Styles not working | `tailwind.config.ts` | Check content paths |
| 404 on Firebase | `firebase.json` | Verify rewrites config |
| Images not loading | `next.config.js` | Check `unoptimized: true` |
| TypeScript errors | `tsconfig.json` | Run `npm install` |

## 📚 Additional Resources

- [Next.js Static Export Docs](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Last Updated:** December 2025  
**Version:** 1.0.0  
**Maintained by:** NJAWERA Development Team

