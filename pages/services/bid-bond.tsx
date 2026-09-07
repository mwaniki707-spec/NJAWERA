import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function BidBondPage() {
  const siteUrl = 'https://njaweralandingpage.web.app';
  const pageUrl = `${siteUrl}/services/bid-bond`;

  // Structured Data for Bid Bond Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Bid Bond',
    alternateName: ['Tender Security', 'Bid Security', 'Tender Bond', 'Bid Guarantee'],
    description: 'Fast bid bond services in Kenya. Get your tender security processed in less than 1 hour. No collateral required, competitive rates, and licensed underwriters.',
    provider: {
      '@type': 'Organization',
      name: 'NJAWERA Co. Ltd',
      url: siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    serviceType: 'Surety Bond',
    url: pageUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
      { '@type': 'ListItem', position: 3, name: 'Bid Bond', item: pageUrl },
    ],
  };
  const features = [
    {
      title: 'Fast Processing',
      description: 'Get your bid bond processed and delivered in less than 1 hour to 24 hours, ensuring you never miss a tender deadline.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Competitive Rates',
      description: 'We offer affordable bid bond rates without compromising on quality. Premium service without the premium price tag.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'No Collateral Required',
      description: 'Apply for bid bonds without the need for collateral. We trust your business and make the process hassle-free.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Easy Application',
      description: 'Apply via WhatsApp, phone, email, or our online form. Multiple channels for your convenience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Licensed Underwriters',
      description: 'All our bid bonds are issued through licensed and regulated insurance companies, ensuring full compliance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Expert Support',
      description: 'Our experienced team is available to guide you through the process and answer any questions you may have.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Make an Application',
      description: 'Contact us via WhatsApp, email, phone, or fill out our online form to start your application.',
    },
    {
      number: '02',
      title: 'Provide Details',
      description: 'Share your company information and tender details so we can prepare a tailored quote.',
    },
    {
      number: '03',
      title: 'Get Your Quote',
      description: 'Receive a competitive, affordable quote within minutes. No hidden fees.',
    },
    {
      number: '04',
      title: 'Receive Your Bond',
      description: 'After payment, your bid bond is processed in less than 1 hour and delivered to you.',
    },
  ];

  return (
    <>
      <Head>
        <title>Bid Bond Kenya | Tender Security | Bid Security Nairobi | NJAWERA</title>
        <meta
          name="description"
          content="Get bid bonds in Kenya fast! Tender security & bid security processed in less than 1 hour. No collateral required. Competitive rates. Apply via WhatsApp. Call 0718 431 589."
        />
        <meta name="keywords" content="bid bond Kenya, bid bonds Nairobi, tender security Kenya, bid security, tender bond, bid guarantee, PPRA bid bond, government tender security, bid bond no collateral, fast bid bond, cheap bid bond Kenya, tender security Nairobi, bid bond application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Bid Bond Kenya | Fast Tender Security | NJAWERA" />
        <meta property="og:description" content="Get bid bonds processed in less than 1 hour. No collateral required, competitive rates. Trusted by 200+ contractors in Kenya." />
        <meta property="og:image" content={`${siteUrl}/images/services.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bid Bond Kenya | Tender Security | NJAWERA" />
        <meta name="twitter:description" content="Fast bid bonds in Kenya. Processing in less than 1 hour, no collateral, best rates!" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <Navbar />
      <ServicePageLayout
        title="Bid Bond"
        subtitle="Tender Security Solutions"
        heroDescription="Secure your next tender with our fast, reliable bid bonds. We provide premium bid security (tender security) tailored to meet your tendering needs with fast approvals, affordable rates, and no collateral required."
        features={features}
        steps={steps}
        whatsappMessage="Hello, I'd like to apply for a Bid Bond. Please provide me with the requirements and a quote."
      />
      <Footer />
    </>
  );
}

