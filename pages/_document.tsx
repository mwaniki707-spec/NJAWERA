import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* ========== SEARCH ENGINE VERIFICATION ========== */}
        {/* 
          HOW TO GET YOUR VERIFICATION CODES:
          
          GOOGLE SEARCH CONSOLE:
          1. Go to https://search.google.com/search-console
          2. Click "Add Property" and enter: https://njawera.co.ke
          3. Choose "HTML tag" verification method
          4. Copy the content value from the meta tag they provide
          5. Replace YOUR_GOOGLE_CODE below with that value
          
          BING WEBMASTER TOOLS:
          1. Go to https://www.bing.com/webmasters
          2. Click "Add a Site" and enter: https://njawera.co.ke
          3. Choose "Add meta tag" verification method
          4. Copy the content value from the meta tag they provide
          5. Replace YOUR_BING_CODE below with that value
        */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_CODE" />
        <meta name="msvalidate.01" content="YOUR_BING_CODE" />
        
        {/* Favicon & App Icons - All sizes for browsers & search engines */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* ========== CORE WEB VITALS OPTIMIZATION ========== */}
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/hero.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/videos/hero-background.mp4" as="video" type="video/mp4" />
        
        {/* Geo Tags for Kenya - helps with local SEO */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.286389;36.817223" />
        <meta name="ICBM" content="-1.286389, 36.817223" />
        
        {/* Language */}
        <meta httpEquiv="content-language" content="en-KE" />
        
        {/* Brand & Author - helps with "NJAWERA" searches */}
        <meta name="author" content="NJAWERA Co. Ltd" />
        <meta name="publisher" content="NJAWERA Co. Ltd" />
        <meta name="application-name" content="NJAWERA" />
        <meta name="apple-mobile-web-app-title" content="NJAWERA" />
        
        {/* Additional SEO for brand recognition */}
        <meta name="subject" content="Bid Bonds, Performance Bonds, Insurance for Contractors in Kenya" />
        <meta name="copyright" content="NJAWERA Co. Ltd" />
        <meta name="classification" content="Insurance and Bonding Services" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
