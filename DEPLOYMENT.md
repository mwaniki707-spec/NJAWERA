# 🚀 NJAWERA Deployment Guide

Complete step-by-step guide for deploying NJAWERA landing page to Firebase Hosting.

## Prerequisites Checklist

Before you begin, ensure you have:

- [ ] Node.js 18 or higher installed
- [ ] npm or yarn package manager
- [ ] Git installed (optional, but recommended)
- [ ] Firebase account created at [firebase.google.com](https://firebase.google.com)
- [ ] Firebase project created in Firebase Console

## 📥 Initial Setup

### 1. Clone/Navigate to Project

```bash
cd D:\AA\NJAWERA
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- All necessary dev dependencies

### 3. Verify Installation

```bash
npm run dev
```

Open http://localhost:3000 - you should see the landing page.
Press `Ctrl+C` to stop the dev server.

## 🔥 Firebase Setup

### Step 1: Install Firebase CLI

Open your terminal and run:

```bash
npm install -g firebase-tools
```

Verify installation:

```bash
firebase --version
```

### Step 2: Login to Firebase

```bash
firebase login
```

This will:
1. Open your browser
2. Ask you to sign in with Google
3. Grant Firebase CLI access to your account

### Step 3: Create Firebase Project (if not already done)

Option A: **Via Firebase Console** (Recommended)
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click "Add Project"
3. Enter project name: `njawera-landing` (or your preferred name)
4. Disable Google Analytics (optional, can enable later)
5. Click "Create Project"

Option B: **Via CLI**
```bash
firebase projects:create njawera-landing
```

### Step 4: Connect Project to Firebase

Update `.firebaserc` file with your project ID:

```json
{
  "projects": {
    "default": "njawera-landing"
  }
}
```

Replace `njawera-landing` with your actual Firebase project ID.

## 🏗️ Build Process

### Build the Static Site

```bash
npm run build
```

**What happens:**
1. Next.js compiles and optimizes all code
2. Static HTML, CSS, and JS files are generated
3. Files are exported to `/out` directory

**Expected output:**
```
Route (pages)                              Size     First Load JS
┌ ○ /                                      XXX kB         XXX kB
└ ○ /404                                   XXX kB         XXX kB

○  (Static)  prerendered as static content

✓ Compiled successfully
```

### Verify Build Output

Check that `/out` directory exists and contains:
```
out/
├── index.html
├── 404.html
├── _next/
│   └── static/
├── favicon.ico
└── ...
```

## 🚀 Deploy to Firebase

### First-Time Deployment

```bash
firebase deploy --only hosting
```

**What happens:**
1. Firebase CLI reads `firebase.json`
2. Uploads all files from `/out` directory
3. Configures hosting rules
4. Provides deployment URL

**Expected output:**
```
=== Deploying to 'njawera-landing'...

i  deploying hosting
i  hosting[njawera-landing]: beginning deploy...
i  hosting[njawera-landing]: found 50 files in out
✔  hosting[njawera-landing]: file upload complete
i  hosting[njawera-landing]: finalizing version...
✔  hosting[njawera-landing]: version finalized
i  hosting[njawera-landing]: releasing new version...
✔  hosting[njawera-landing]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/njawera-landing/overview
Hosting URL: https://njawera-landing.web.app
```

### Update Deployments

For subsequent deployments:

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

### Quick Deploy (One Command)

```bash
npm run build && firebase deploy --only hosting
```

## 🌐 Custom Domain Setup (Optional)

### Add Custom Domain

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Enter your domain (e.g., `njawera.co.ke`)
4. Follow DNS configuration instructions
5. Add provided TXT and A records to your domain registrar
6. Wait for SSL certificate provisioning (can take up to 24 hours)

### Example DNS Records

```
Type    Name    Value
TXT     @       [verification-code-from-firebase]
A       @       151.101.1.195
A       @       151.101.65.195
```

## 🔄 CI/CD Setup (Optional)

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: njawera-landing
```

## 🧪 Testing Deployment

### 1. Check Homepage

Visit your hosting URL and verify:
- [ ] Page loads correctly
- [ ] All sections appear (Hero, Services, About, Contact, Footer)
- [ ] Images/placeholders display
- [ ] Colors and gradients render properly

### 2. Test Navigation

- [ ] Click navbar links - smooth scroll works
- [ ] Click CTA buttons
- [ ] Test mobile menu (hamburger icon)

### 3. Test Responsiveness

Open DevTools (F12) and test:
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1440px)

### 4. Test Contact Form

- [ ] Fill out form
- [ ] Submit
- [ ] Check browser console (should see form data logged)

### 5. Test Performance

Use Google PageSpeed Insights:
```
https://pagespeed.web.dev/
```

Enter your Firebase hosting URL.

## 🎯 Post-Deployment Checklist

- [ ] Site loads at Firebase hosting URL
- [ ] All sections display correctly
- [ ] Navigation works (smooth scroll)
- [ ] Contact form accepts submissions
- [ ] Mobile responsive design works
- [ ] No console errors in browser
- [ ] SEO meta tags present (check page source)
- [ ] Favicon displays (add real one if needed)
- [ ] Social media links work (update placeholders)
- [ ] Contact information is correct

## 🔒 Security & Best Practices

### Environment Variables

For sensitive data, use `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

**Note:** `.env.local` is in `.gitignore` - never commit it!

### Firebase Security Rules

If using Firestore/Database, set up security rules:

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact-submissions/{document} {
      allow write: if true; // Allow form submissions
      allow read: if false; // Deny public reads
    }
  }
}
```

## 🐛 Common Issues & Solutions

### Issue: "Error: HTTP Error: 404, Project not found"

**Solution:**
```bash
firebase login --reauth
firebase use --add
# Select your project from the list
```

### Issue: Build fails with "Module not found"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: "No Firebase project selected"

**Solution:**
```bash
firebase use njawera-landing
```

### Issue: Old version still showing after deploy

**Solution:**
- Clear browser cache (Ctrl+Shift+R)
- Check Firebase Console for latest deployment time
- Wait 1-2 minutes for CDN propagation

### Issue: 404 errors on refresh

**Solution:** Already configured in `firebase.json`:
```json
"rewrites": [
  {
    "source": "**",
    "destination": "/index.html"
  }
]
```

## 📊 Monitoring & Analytics

### Enable Firebase Analytics

1. Firebase Console > Analytics
2. Enable Google Analytics
3. Add to `pages/_app.tsx`:

```typescript
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Firebase config
const firebaseConfig = {
  // ... your config
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

### View Hosting Metrics

Firebase Console > Hosting > Dashboard shows:
- Requests per day
- Bandwidth usage
- Top countries
- Response codes

## 🔄 Rollback Deployment

If something goes wrong:

```bash
# List previous deployments
firebase hosting:channel:list

# Rollback to previous version
firebase hosting:rollback
```

Or via Firebase Console:
1. Hosting > History
2. Click "..." on previous version
3. Select "Rollback"

## 📞 Support & Help

### Firebase Support
- Documentation: [firebase.google.com/docs/hosting](https://firebase.google.com/docs/hosting)
- Community: [firebase.google.com/support](https://firebase.google.com/support)

### Project Support
- Email: njaweracoltd@gmail.com
- Phone: 0718 431 589 / 0762 347 359

## 🎓 Next Steps

After successful deployment, consider:

1. **Add Real Images**
   - Replace placeholder images in Hero and About sections
   - Add real favicon.ico

2. **Integrate Backend**
   - Set up Firebase Functions for contact form
   - Add Firestore for data storage

3. **SEO Optimization**
   - Add sitemap.xml
   - Set up Google Search Console
   - Add structured data (JSON-LD)

4. **Performance**
   - Enable Firebase Performance Monitoring
   - Add service worker for offline support
   - Implement lazy loading

5. **Marketing**
   - Set up Google Analytics events
   - Add Facebook Pixel (if needed)
   - Connect to CRM system

---

## Quick Reference Commands

```bash
# Development
npm run dev                                    # Start dev server

# Build
npm run build                                  # Build for production

# Firebase
firebase login                                 # Login to Firebase
firebase projects:list                         # List projects
firebase use [project-id]                      # Select project
firebase deploy --only hosting                 # Deploy
firebase hosting:channel:list                  # List versions
firebase hosting:rollback                      # Rollback

# Troubleshooting
npm run build -- --debug                       # Build with debug info
firebase deploy --only hosting --debug         # Deploy with debug info
```

---

**🎉 Congratulations! Your NJAWERA landing page is now live!**

Visit your site: `https://[your-project-id].web.app`

