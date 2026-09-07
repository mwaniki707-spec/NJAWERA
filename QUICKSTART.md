# ⚡ NJAWERA Quick Start Guide

Get up and running in 5 minutes!

## 🚀 Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Firebase (after setup)
firebase deploy --only hosting
```

## ⚙️ First-Time Firebase Setup

```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login
firebase login

# 3. Update .firebaserc with your project ID
# Replace "your-project-id-here" with your actual Firebase project ID

# 4. Deploy
firebase deploy --only hosting
```

## 📝 Common Tasks

### Update Contact Info
Edit these files:
- `components/Contact.tsx`
- `components/Footer.tsx`

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    blue: '#1e40af',    // Your blue
    orange: '#f97316',  // Your orange
  },
}
```

### Update Services
Edit `components/Services.tsx` - modify the `services` array

### Replace Hero Text
Edit `components/Hero.tsx` - update headlines and CTAs

## 📚 Full Documentation

- **README.md** - Complete project overview
- **DEPLOYMENT.md** - Detailed deployment guide
- **CUSTOMIZATION.md** - Full customization options

## 🆘 Need Help?

Contact:
- Email: njaweracoltd@gmail.com
- Phone: 0718 431 589 / 0762 347 359

---

**That's it! You're ready to go! 🚀**

