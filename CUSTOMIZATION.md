# 🎨 NJAWERA Customization Guide

Complete guide for customizing the NJAWERA landing page to match your branding and requirements.

## 🎨 Branding & Colors

### Update Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    blue: '#1e40af',    // Main blue color
    orange: '#f97316',  // Accent orange color
  },
},
```

**Common color combinations:**
- Blue + Orange (Current)
- Blue + Gold: `#1e40af` + `#d97706`
- Navy + Coral: `#1e3a8a` + `#fb923c`
- Teal + Amber: `#0d9488` + `#f59e0b`

### Update Gradient

In `tailwind.config.ts`, modify:

```typescript
backgroundImage: {
  'gradient-primary': 'linear-gradient(135deg, #1e40af 0%, #f97316 100%)',
},
```

## 📝 Content Updates

### Company Name & Logo

**Option 1: Text Logo (Current)**

Update in `components/Navbar.tsx`:
```typescript
<button className="...">
  NJAWERA  {/* Change this */}
</button>
```

**Option 2: Image Logo**

Replace text with image:
```typescript
<Image 
  src="/logo.png" 
  alt="NJAWERA" 
  width={150} 
  height={40}
/>
```

Add logo file to `/public/logo.png`

### Hero Section Content

Edit `components/Hero.tsx`:

```typescript
<h1>Build with trust,<br />bid with power.</h1>
<h2>Be Assured.</h2>
<p>Top-tier Bond Offers tailored for your next big win.</p>
<p>Our bond deals put you ahead.</p>
```

**Tips:**
- Keep headlines concise and impactful
- Use line breaks (`<br />`) for emphasis
- Maximum ~10 words per headline for readability

### Services

Edit `components/Services.tsx`, modify the services array:

```typescript
const services: Service[] = [
  {
    title: 'Your Service Name',
    description: 'Detailed description of the service (2-3 sentences)',
    icon: (
      // SVG icon code here
    ),
  },
  // Add more services...
];
```

**To add a new service:**

1. Add to the array:
```typescript
{
  title: 'New Service',
  description: 'Service description',
  icon: <svg>...</svg>,
}
```

2. Find icons at:
   - [Heroicons](https://heroicons.com/) (current icons)
   - [Lucide Icons](https://lucide.dev/)
   - [Iconify](https://icon-sets.iconify.design/)

### About Section

Edit `components/About.tsx`:

```typescript
<h2>About NJAWERA</h2>
<p>
  Njawera provides reliable, compliant insurance and bond solutions
  that empower contractors to bid and perform with confidence.
</p>
```

**Add/modify feature badges:**

```typescript
<div>
  <h4>Feature Title</h4>
  <p>Feature description</p>
</div>
```

### Contact Information

**Update in TWO places:**

1. **Contact Section** - `components/Contact.tsx`:
```typescript
<p>0718 431 589</p>
<p>0762 347 359</p>
<a href="mailto:njaweracoltd@gmail.com">njaweracoltd@gmail.com</a>
<p>P.O. Box 210-00520 Nairobi</p>
<p>P.O. Box 210-00520 Nairobi</p>
```

2. **Footer** - `components/Footer.tsx`:
```typescript
// Same contact info in footer
```

### Business Hours

Edit `components/Footer.tsx`:

```typescript
<p>Mon - Fri: 8:00 AM - 5:00 PM</p>
<p>Sat: 9:00 AM - 1:00 PM</p>
<p>Sun: Closed</p>  {/* Add if needed */}
```

## 🖼️ Images & Media

### Replace Hero Image

1. Add your image to `/public/images/hero.jpg`
2. Edit `components/Hero.tsx`:

```typescript
// Replace the placeholder div with:
<Image
  src="/images/hero.jpg"
  alt="Hero image"
  fill
  className="object-cover"
  priority
/>
```

### Replace About Image

1. Add image to `/public/images/about.jpg`
2. Edit `components/About.tsx` - same as above

### Add Favicon

1. Create/obtain favicon files:
   - `favicon.ico` (16x16, 32x32)
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180)

2. Add to `/public/` directory

3. Update `pages/_document.tsx`:

```typescript
<Head>
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</Head>
```

**Generate favicons online:**
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

## 🔗 Navigation & Links

### Update Navigation Menu

Edit `components/Navbar.tsx`:

```typescript
['Home', 'Services', 'About', 'Contact'].map(...)

// To add "Blog" or "Testimonials":
['Home', 'Services', 'About', 'Blog', 'Contact'].map(...)
```

**Note:** If adding new sections, create corresponding section IDs:
```typescript
<section id="blog">...</section>
```

### Update Social Media Links

Edit `components/Footer.tsx`:

```typescript
<a
  href="https://facebook.com/yourpage"  {/* Update this */}
  className="..."
  aria-label="Facebook"
>
  <svg>...</svg>
</a>
```

**Add/remove social platforms:**

```typescript
// Instagram
<a href="https://instagram.com/yourprofile">
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
</a>
```

## 📱 Contact Form Customization

### Change Form Fields

Edit `components/Contact.tsx`:

**Add company field:**
```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: '',  // Add this
  message: '',
});

// Add input field:
<div>
  <label htmlFor="company">Company</label>
  <input
    type="text"
    id="company"
    name="company"
    value={formData.company}
    onChange={handleChange}
    className="..."
  />
</div>
```

### Connect to Backend

**Option 1: Firebase Functions**

Create `functions/index.js`:
```javascript
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmail = functions.https.onCall(async (data, context) => {
  // Email sending logic
});
```

Update `handleSubmit` in Contact.tsx:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  // Handle response
};
```

**Option 2: Formspree**

```typescript
<form 
  action="https://formspree.io/f/your-form-id" 
  method="POST"
>
  {/* Your form fields */}
</form>
```

**Option 3: Firebase Firestore**

```typescript
import { collection, addDoc } from 'firebase/firestore';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  await addDoc(collection(db, 'contact-submissions'), {
    ...formData,
    timestamp: new Date(),
  });
  
  alert('Message sent!');
};
```

## 🎭 Animations & Effects

### Change Animation Speed

Edit `styles/globals.css`:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);  /* Reduce for subtler effect */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-in;  /* Change duration */
}
```

### Add New Animations

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}
```

Use in components:
```typescript
<div className="slide-in">Content</div>
```

### Hover Effects

Current hover effect on service cards:
```typescript
className="... hover:shadow-2xl hover:-translate-y-2"
```

**Customize:**
```typescript
// Stronger lift
hover:-translate-y-4

// Add scale
hover:scale-105

// Change shadow
hover:shadow-xl

// Add rotation
hover:rotate-1
```

## 📐 Layout & Spacing

### Change Section Padding

Find sections with `py-20` (padding top/bottom):

```typescript
// Current
<section className="py-20">

// Reduce spacing
<section className="py-12">

// Increase spacing
<section className="py-32">
```

### Change Container Width

Current max width: `max-w-7xl`

```typescript
// Wider
<div className="max-w-screen-2xl mx-auto">

// Narrower
<div className="max-w-5xl mx-auto">
```

### Grid Columns

Service cards currently: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

```typescript
// 4 columns on large screens
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

// 2 columns max
grid-cols-1 md:grid-cols-2
```

## 🔤 Typography

### Change Fonts

**Option 1: Google Fonts**

Add to `pages/_document.tsx`:
```typescript
<Head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
</Head>
```

Update `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
},
```

**Popular combinations:**
- Inter + Poppins
- Roboto + Open Sans
- Montserrat + Lato

### Font Sizes

Current sizes:
- Hero H1: `text-4xl sm:text-5xl lg:text-6xl`
- Section Headers: `text-4xl sm:text-5xl`
- Body: `text-lg`

**Adjust:**
```typescript
// Larger hero
text-5xl sm:text-6xl lg:text-7xl

// Smaller sections
text-3xl sm:text-4xl
```

## 🎯 SEO Customization

### Update Meta Tags

Edit `pages/_document.tsx`:

```typescript
<meta name="description" content="Your custom description" />
<meta name="keywords" content="keyword1, keyword2, keyword3" />
<meta name="author" content="NJAWERA" />

{/* Open Graph for social sharing */}
<meta property="og:title" content="NJAWERA - Build with trust" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />
<meta property="og:url" content="https://yoursite.com" />

{/* Twitter Card */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="NJAWERA" />
<meta name="twitter:description" content="Your description" />
<meta name="twitter:image" content="https://yoursite.com/twitter-image.jpg" />
```

### Add Structured Data

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NJAWERA",
      "url": "https://yoursite.com",
      "logo": "https://yoursite.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254-718-431-589",
        "contactType": "customer service"
      }
    })
  }}
/>
```

## 📱 Responsive Breakpoints

Tailwind breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

**Customize in `tailwind.config.ts`:**
```typescript
screens: {
  'tablet': '640px',
  'laptop': '1024px',
  'desktop': '1280px',
},
```

## 🧪 Testing Changes

After customization:

1. **Visual Check**
```bash
npm run dev
```
Visit http://localhost:3000

2. **Build Test**
```bash
npm run build
```
Ensure no errors

3. **Responsive Test**
- Open DevTools (F12)
- Toggle device toolbar
- Test multiple screen sizes

4. **Browser Test**
- Chrome
- Firefox
- Safari
- Edge

5. **Deploy Preview**
```bash
firebase hosting:channel:deploy preview
```

---

## Quick Customization Checklist

- [ ] Update company name/logo
- [ ] Change color scheme
- [ ] Modify hero content
- [ ] Update services list
- [ ] Edit about section
- [ ] Update contact information
- [ ] Replace placeholder images
- [ ] Add favicon
- [ ] Update social media links
- [ ] Configure contact form backend
- [ ] Update meta tags for SEO
- [ ] Test all changes
- [ ] Build and deploy

---

**Need more help?** Check the main README.md or DEPLOYMENT.md files.

