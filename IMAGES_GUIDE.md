# 📸 Images Integration Guide

## ✅ Images Successfully Integrated

Your 4 images from the `images` folder have been copied to `public/images/` and integrated into the website.

## 🖼️ Image Locations

### Files in `public/images/`

1. **hero.jpg** (416 KB)
   - **Used in:** Hero Section (Home page)
   - **Location:** `components/Hero.tsx`
   - **Display:** Right side of hero section
   - **Description:** Main hero image visible when visitors first land

2. **about.jpg** (267 KB)
   - **Used in:** About Section
   - **Location:** `components/About.tsx`
   - **Display:** Left side of about section
   - **Description:** Company/team image

3. **services.jpg** (207 KB)
   - **Available for:** Services section background or additional content
   - **Currently:** Not used (reserved for future use)

4. **office.jpg** (201 KB)
   - **Available for:** Footer or additional sections
   - **Currently:** Not used (reserved for future use)

## 📍 Where Images Appear

### Hero Section
```
[Main Headline + CTAs]  |  [hero.jpg - Your Image]
```

### About Section
```
[about.jpg - Your Image]  |  [Company Description]
```

## 🎨 Image Display Properties

All images are configured with:
- **Responsive sizing** - Adapts to screen size
- **Object-fit: cover** - Fills container without distortion
- **Rounded corners** - Modern aesthetic
- **Shadow effects** - Professional depth
- **Fade-in animation** - Smooth entrance

## 🔄 Replace Images Anytime

To replace any image:

1. **Add your new image** to `public/images/`
2. **Name it** (e.g., `my-hero-image.jpg`)
3. **Update the component:**

**Example - Change Hero Image:**

Edit `components/Hero.tsx`:
```typescript
<img
  src="/images/my-hero-image.jpg"  // Change filename here
  alt="NJAWERA - Build with trust, bid with power"
  className="w-full h-full object-cover"
/>
```

**Example - Change About Image:**

Edit `components/About.tsx`:
```typescript
<img
  src="/images/my-about-image.jpg"  // Change filename here
  alt="NJAWERA Company"
  className="w-full h-full object-cover"
/>
```

## 🎯 Using Additional Images

### Option 1: Services Section Background

Edit `components/Services.tsx`:

```typescript
<section 
  id="services" 
  className="py-20 bg-gray-50 relative"
  style={{
    backgroundImage: 'url(/images/services.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Add overlay for text readability */}
  <div className="absolute inset-0 bg-white/90"></div>
  
  {/* Existing content */}
  <div className="relative z-10">
    {/* ... */}
  </div>
</section>
```

### Option 2: Footer Background

Edit `components/Footer.tsx`:

Add background to footer section:
```typescript
<footer 
  className="bg-gradient-to-r from-blue-900 to-blue-800 text-white relative"
  style={{
    backgroundImage: 'url(/images/office.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-blue-900/90"></div>
  <div className="relative z-10">
    {/* Existing footer content */}
  </div>
</footer>
```

### Option 3: Contact Section Background

Edit `components/Contact.tsx`:

```typescript
<section 
  id="contact" 
  className="py-20 bg-gradient-to-br from-blue-50 to-orange-50 relative"
  style={{
    backgroundImage: 'url(/images/office.jpg)',
    backgroundSize: 'cover',
  }}
>
  <div className="absolute inset-0 bg-white/85"></div>
  <div className="relative z-10">
    {/* Existing content */}
  </div>
</section>
```

## 🖼️ Add More Images

To add additional images:

1. **Copy to public/images:**
   ```bash
   Copy-Item "path\to\your\image.jpg" "public\images\"
   ```

2. **Use in components:**
   ```typescript
   <img src="/images/your-image.jpg" alt="Description" />
   ```

## 📐 Image Best Practices

### Recommended Sizes
- **Hero Images:** 1920x1080px (16:9 ratio)
- **About/Section Images:** 1200x800px (3:2 ratio)
- **Background Images:** 1920x1080px or larger
- **Thumbnails/Icons:** 400x400px (1:1 ratio)

### File Formats
- **Photos:** JPG (smaller file size)
- **Graphics with transparency:** PNG
- **Modern browsers:** WebP (best compression)

### Optimization
Compress images before adding:
- Use [TinyPNG](https://tinypng.com/)
- Use [Squoosh](https://squoosh.app/)
- Use Photoshop/GIMP "Save for Web"

### Current Image Sizes
- hero.jpg: 416 KB ✅ (good size)
- about.jpg: 267 KB ✅ (good size)
- services.jpg: 207 KB ✅ (good size)
- office.jpg: 201 KB ✅ (good size)

All images are already well-optimized!

## 🎨 Image Effects

### Add Hover Effect

```typescript
<img
  src="/images/hero.jpg"
  alt="Description"
  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
/>
```

### Add Grayscale Effect

```typescript
<img
  src="/images/about.jpg"
  alt="Description"
  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
/>
```

### Add Overlay

```typescript
<div className="relative">
  <img src="/images/hero.jpg" alt="Hero" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-blue-900/30"></div>
</div>
```

## 🚀 Testing Images

After making changes:

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Check in browser:**
   - Visit http://localhost:3000
   - Scroll to Hero section → See hero.jpg
   - Scroll to About section → See about.jpg

3. **Test responsiveness:**
   - Press F12
   - Toggle device toolbar (Ctrl+Shift+M)
   - Test on mobile/tablet/desktop views

## ✅ Summary

- ✅ **4 images copied** from `images/` to `public/images/`
- ✅ **Images renamed** for easier reference
- ✅ **Hero section** updated with hero.jpg
- ✅ **About section** updated with about.jpg
- ✅ **2 images available** for additional use (services.jpg, office.jpg)
- ✅ **All images optimized** and ready for production

## 🎯 Next Steps

1. **Test locally:**
   ```bash
   npm run dev
   ```

2. **Review images** in browser

3. **Optionally add** services.jpg and office.jpg to other sections

4. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

---

**Your images are now live in the website! 🎉**

