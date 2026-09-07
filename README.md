# NJAWERA Landing Page

A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS, optimized for Firebase Hosting deployment.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Firebase Ready**: Static export compatible with Firebase Hosting
- **Beautiful Design**: Blue-to-orange gradient theme with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Reusable Components**: Clean, modular component architecture

## 📋 Project Structure

```
njawera-landing/
├── components/
│   ├── Navbar.tsx         # Sticky navigation with smooth scroll
│   ├── Hero.tsx           # Hero section with CTAs
│   ├── Services.tsx       # Services cards with hover effects
│   ├── About.tsx          # About company section
│   ├── Contact.tsx        # Contact form and info
│   └── Footer.tsx         # Footer with social links
├── pages/
│   ├── _app.tsx           # App wrapper
│   ├── _document.tsx      # Document structure
│   └── index.tsx          # Main landing page
├── styles/
│   └── globals.css        # Global styles and animations
├── public/                # Static assets
├── firebase.json          # Firebase hosting config
├── .firebaserc            # Firebase project config
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Firebase CLI (for deployment)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Build for Production

### Build Static Export

```bash
npm run build
```

This command:
1. Runs `next build` - Creates optimized production build
2. Automatically exports to `/out` directory (configured in `next.config.js`)

The `/out` directory will contain all static files ready for Firebase Hosting.

### Alternative: Separate Build and Export

```bash
npm run build
npm run export
```

## 🔥 Firebase Deployment

### Step 1: Install Firebase CLI

If you haven't already, install Firebase CLI globally:

```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

### Step 3: Initialize Firebase Project

If this is your first time deploying:

```bash
firebase init hosting
```

**Important Setup Notes:**
- Select your Firebase project (or create a new one)
- Set public directory to: `out`
- Configure as single-page app: `Yes`
- Don't overwrite existing files

**OR** Update `.firebaserc` with your project ID:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

### Step 4: Build and Deploy

```bash
# Build the project
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

### Quick Deploy Command

For convenience, you can run:

```bash
npm run build:export && firebase deploy --only hosting
```

## 📝 Configuration Files

### next.config.js

Key settings for Firebase compatibility:

```javascript
output: 'export',           // Enable static export
images: {
  unoptimized: true,       // Disable image optimization for static export
},
trailingSlash: true,       // Add trailing slashes to URLs
```

### firebase.json

Hosting configuration:

```json
{
  "hosting": {
    "public": "out",       // Serve from /out directory
    "rewrites": [...],     // SPA routing support
    "headers": [...]       // Cache headers for assets
  }
}
```

## 🎨 Customization

### Colors & Branding

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    blue: '#1e40af',    // Change primary blue
    orange: '#f97316',  // Change primary orange
  },
},
```

### Contact Information

Update contact details in:
- `components/Contact.tsx`
- `components/Footer.tsx`

### Services

Modify services array in `components/Services.tsx`:

```typescript
const services: Service[] = [
  {
    title: 'Your Service',
    description: 'Service description',
    icon: <YourIcon />
  },
  // ...
];
```

### Hero Content

Edit slogans and text in `components/Hero.tsx`

## 📱 Components Overview

### Navbar
- Sticky top navigation
- Smooth scroll to sections
- Mobile responsive with hamburger menu
- Color changes on scroll

### Hero
- Full-screen hero with gradient background
- Primary CTAs (Get a Quote, Contact Us)
- Image placeholder for business/construction scene
- Scroll indicator

### Services
- Grid layout with 5 service cards
- Hover animations
- SVG icons
- Responsive columns (1/2/3)

### About
- Two-column layout
- Company description
- Feature highlights with icons
- Image placeholder

### Contact
- Contact form (logs to console - Firebase friendly)
- Contact information display
- Phone, email, address
- Form validation

### Footer
- Three-column layout
- Contact details
- Social media placeholders
- Business hours
- Copyright

## 🔒 Firebase-Friendly Features

✅ **Static Export Compatible**
- No server-side rendering
- All content pre-rendered at build time

✅ **Client-Side Only**
- All components use `'use client'` directive
- No server components or actions

✅ **No Dynamic Routes**
- Simple routing structure
- All routes known at build time

✅ **Form Handling**
- Contact form logs to console
- Can be integrated with Firebase Functions
- Or third-party form services

## 🚨 Important Notes

### Image Optimization
Next.js Image component is disabled (`unoptimized: true`) for static export compatibility. Images are served as-is from the `/public` directory.

### Environment Variables
For Firebase integration (analytics, firestore, etc.), add to `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# ... other Firebase config
```

### Form Submissions
The contact form currently logs to console. To enable real submissions:

1. **Firebase Functions**: Create a Cloud Function to handle form data
2. **Email Service**: Integrate with SendGrid, Mailgun, etc.
3. **Firebase Firestore**: Store submissions in Firestore database

## 📦 Scripts Reference

```json
{
  "dev": "next dev",                    // Development server
  "build": "next build",                // Production build with export
  "export": "next export",              // Export static files
  "build:export": "next build && next export",  // Combined command
  "start": "next start",                // Start production server (not needed for Firebase)
  "lint": "next lint"                   // Run ESLint
}
```

## 🎯 Deployment Checklist

- [ ] Update `.firebaserc` with your Firebase project ID
- [ ] Replace placeholder images with actual images
- [ ] Add real favicon to `/public/favicon.ico`
- [ ] Update meta descriptions in `pages/_document.tsx`
- [ ] Test contact form functionality
- [ ] Review and update service descriptions
- [ ] Add real social media links in Footer
- [ ] Test responsive design on multiple devices
- [ ] Run `npm run build` successfully
- [ ] Deploy with `firebase deploy --only hosting`
- [ ] Verify deployment at your Firebase hosting URL

## 🐛 Troubleshooting

### Build Errors

**Error: Image Optimization requires server**
- Solution: Ensure `next.config.js` has `images: { unoptimized: true }`

**Error: Dynamic rendering**
- Solution: Check all components use `'use client'` directive
- Avoid server-only features

### Firebase Deployment Issues

**Error: Public directory not found**
- Solution: Run `npm run build` before deploying
- Verify `out` directory exists

**404 errors after deployment**
- Solution: Check `firebase.json` rewrites configuration
- Ensure `trailingSlash: true` in `next.config.js`

## 📄 License

This project is private and proprietary to NJAWERA.

## 📞 Support

For questions or support, contact:
- Email: njaweracoltd@gmail.com
- Phone: 0718 431 589 / 0762 347 359
- Address: P.O. Box 210-00520 Nairobi

---

**Built with ❤️ for NJAWERA**

*Build with trust, bid with power. Be Assured.*

