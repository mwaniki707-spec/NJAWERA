import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  const siteUrl = 'https://njaweralandingpage.web.app';
  
  // Structured Data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NJAWERA Co. Ltd',
    alternateName: ['NJAWERA', 'Njawera', 'njawera'],
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: 'NJAWERA provides reliable, compliant insurance and bond solutions including Bid Bonds, Performance Bonds, Advance Payment Guarantees, Contractor All Risk (CAR) and WIBA insurance for contractors in Kenya.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'P.O. Box 210-00520',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+254718431589',
        contactType: 'customer service',
        areaServed: 'KE',
        availableLanguage: ['English', 'Swahili'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+254702010126',
        contactType: 'sales',
        areaServed: 'KE',
      },
    ],
    email: 'njaweracoltd@gmail.com',
    sameAs: [],
  };

  // WebSite Schema for brand search visibility
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NJAWERA',
    alternateName: ['NJAWERA Co. Ltd', 'Njawera', 'njawera bonds', 'njawera insurance'],
    url: siteUrl,
    description: 'Kenya\'s trusted partner for Bid Bonds, Performance Bonds, Advance Payment Guarantees, CAR and WIBA Insurance.',
    publisher: {
      '@type': 'Organization',
      name: 'NJAWERA Co. Ltd',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  // Structured Data for Services
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'NJAWERA Services',
    description: 'Comprehensive bonding and insurance solutions for contractors in Kenya',
    itemListElement: [
      {
        '@type': 'Service',
        position: 1,
        name: 'Bid Bond',
        alternateName: ['Tender Security', 'Bid Security', 'Tender Bond'],
        description: 'Guarantee that bidders will honor their tender commitments, providing security to project owners during the bidding process. Fast processing in less than 1 hour.',
        provider: { '@type': 'Organization', name: 'NJAWERA Co. Ltd' },
        areaServed: 'Kenya',
        url: `${siteUrl}/services/bid-bond`,
      },
      {
        '@type': 'Service',
        position: 2,
        name: 'Performance Bond',
        alternateName: ['Performance Guarantee', 'Contract Guarantee'],
        description: 'Assurance that contractors will complete projects according to contract terms, protecting project owners from default.',
        provider: { '@type': 'Organization', name: 'NJAWERA Co. Ltd' },
        areaServed: 'Kenya',
        url: `${siteUrl}/services/performance-bond`,
      },
      {
        '@type': 'Service',
        position: 3,
        name: 'Advance Payment Guarantee',
        alternateName: ['APG', 'Advance Payment Bond', 'Mobilization Guarantee'],
        description: 'Security for advance payments made to contractors, ensuring funds are used appropriately or refunded if needed.',
        provider: { '@type': 'Organization', name: 'NJAWERA Co. Ltd' },
        areaServed: 'Kenya',
        url: `${siteUrl}/services/advance-payment-guarantee`,
      },
      {
        '@type': 'Service',
        position: 4,
        name: 'Contractor All Risk Insurance',
        alternateName: ['CAR Insurance', 'CAR Policy', 'Construction Insurance'],
        description: 'Comprehensive coverage for construction projects, protecting against physical loss or damage during construction phases.',
        provider: { '@type': 'Organization', name: 'NJAWERA Co. Ltd' },
        areaServed: 'Kenya',
        url: `${siteUrl}/services/contractor-all-risk`,
      },
      {
        '@type': 'Service',
        position: 5,
        name: 'Work Injury Benefits Act Insurance',
        alternateName: ['WIBA Insurance', 'WIBA', 'Worker Compensation Insurance'],
        description: 'Mandatory coverage ensuring compensation for workers injured or disabled during employment activities.',
        provider: { '@type': 'Organization', name: 'NJAWERA Co. Ltd' },
        areaServed: 'Kenya',
        url: `${siteUrl}/services/wiba-insurance`,
      },
    ],
  };

  // Structured Data for LocalBusiness
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'NJAWERA Co. Ltd',
    image: `${siteUrl}/images/hero.jpg`,
    url: siteUrl,
    telephone: '+254718431589',
    email: 'njaweracoltd@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'P.O. Box 210-00520',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.286389,
      longitude: 36.817223,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
  };

  // FAQ Schema for AI SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Bid Bond?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A bid bond is a type of surety bond that guarantees a contractor will honor their tender commitments. It provides security to project owners during the bidding process and is typically required for government and large private sector tenders in Kenya.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can I get a Bid Bond in Kenya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NJAWERA can process and deliver bid bonds in less than 1 hour to 24 hours, depending on the complexity and documentation provided. We understand the urgency of tender deadlines.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is WIBA Insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WIBA (Work Injury Benefits Act) insurance is mandatory coverage in Kenya that ensures compensation for workers who are injured or disabled during employment. It is required by law for all employers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Contractor All Risk (CAR) Insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CAR insurance provides comprehensive coverage for construction projects, protecting against physical loss or damage to construction works, materials, plant, and equipment. It also includes third-party liability coverage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need collateral for a Bid Bond?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, NJAWERA offers bid bonds without requiring collateral. We make the process hassle-free for contractors.',
        },
      },
    ],
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags - NJAWERA brand prominent for search visibility */}
        <title>NJAWERA | Bid Bonds, Performance Bonds, CAR & WIBA Insurance Kenya</title>
        <meta
          name="description"
          content="NJAWERA is Kenya's trusted provider of Bid Bonds, Performance Bonds, Advance Payment Guarantees, Contractor All Risk (CAR) & WIBA Insurance. Get your bond in less than 1 hour. Call NJAWERA at 0718 431 589."
        />
        <meta 
          name="keywords" 
          content="NJAWERA, njawera, njawera kenya, njawera bonds, njawera insurance, bid bonds Kenya, bid bond Nairobi, bid bond, tender security Kenya, tender security, tender bond, bid security, performance bond Kenya, performance bond, performance guarantee, performance bonds Nairobi, advance payment guarantee Kenya, advance payment guarantee, APG bond, advance payment bond, contractor all risk insurance, contractor all risk, CAR insurance Kenya, CAR insurance, CAR policy, construction insurance, WIBA insurance Kenya, WIBA insurance, WIBA, work injury benefits act, work injury insurance, worker compensation Kenya, construction bonds Kenya, tender bonds, contractor insurance Nairobi, surety bonds Kenya, bank guarantee alternative, insurance broker Kenya, bonds broker Kenya" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="NJAWERA | Bid Bonds, Performance Bonds, CAR & WIBA Insurance Kenya" />
        <meta property="og:description" content="NJAWERA delivers Bid Bonds, Performance Bonds, Advance Payment Guarantees, CAR & WIBA Insurance fast in Kenya. Processing in less than 1 hour. Trusted by 200+ contractors." />
        <meta property="og:image" content={`${siteUrl}/images/hero.jpg`} />
        <meta property="og:site_name" content="NJAWERA" />
        <meta property="og:locale" content="en_KE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content="NJAWERA | Bid Bonds, Performance Bonds & Contractor Insurance Kenya" />
        <meta name="twitter:description" content="NJAWERA offers fast Bid Bonds, Performance Bonds & Contractor Insurance in Kenya. Get your bond in less than 1 hour!" />
        <meta name="twitter:image" content={`${siteUrl}/images/hero.jpg`} />
        
        {/* Additional SEO Tags */}
        <meta name="subject" content="Bonds and Insurance for Contractors in Kenya" />
        <meta name="coverage" content="Kenya" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="target" content="Contractors, Construction Companies, Suppliers, Tender Bidders" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <About />
        <Testimonials />
        <Contact />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
