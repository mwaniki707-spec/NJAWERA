import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function AdvancePaymentGuaranteePage() {
  const siteUrl = 'https://njaweralandingpage.web.app';
  const pageUrl = `${siteUrl}/services/advance-payment-guarantee`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Advance Payment Guarantee',
    alternateName: ['APG', 'Advance Payment Bond', 'Mobilization Guarantee', 'Advance Payment Security'],
    description: 'Advance payment guarantees (APG) in Kenya securing advance payments for contractors. Build trust with clients and access project funds.',
    provider: { '@type': 'Organization', name: 'NJAWERA Co. Ltd', url: siteUrl },
    areaServed: { '@type': 'Country', name: 'Kenya' },
    serviceType: 'Surety Bond',
    url: pageUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
      { '@type': 'ListItem', position: 3, name: 'Advance Payment Guarantee', item: pageUrl },
    ],
  };
  const features = [
    {
      title: 'Secure Advance Payments',
      description: 'Our guarantee protects project owners who make advance payments to contractors, ensuring funds are used properly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Win More Contracts',
      description: 'With an advance payment guarantee, clients are more confident providing upfront payments for materials and mobilization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Fast Processing',
      description: 'We process advance payment guarantees quickly so you can receive your advance payment without delays.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Flexible Terms',
      description: 'Our guarantees are tailored to match your contract terms, with coverage amounts matching your advance payment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'Affordable Rates',
      description: 'Competitive premium rates that make advance payment guarantees accessible for contractors of all sizes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Expert Support',
      description: 'Our team guides you through the entire process, ensuring a smooth application and quick approval.',
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
      title: 'Contact Us',
      description: 'Reach out via WhatsApp, phone, or email with your advance payment guarantee requirements.',
    },
    {
      number: '02',
      title: 'Provide Contract Details',
      description: 'Share your contract and the advance payment amount that needs to be guaranteed.',
    },
    {
      number: '03',
      title: 'Receive Quote',
      description: 'Get a competitive quote based on the guarantee amount and contract duration.',
    },
    {
      number: '04',
      title: 'Guarantee Issued',
      description: 'Upon approval and payment, receive your advance payment guarantee document.',
    },
  ];

  return (
    <>
      <Head>
        <title>Advance Payment Guarantee Kenya | APG Bond Nairobi | NJAWERA</title>
        <meta
          name="description"
          content="Get advance payment guarantees (APG) in Kenya. Secure advance payments for construction projects. Fast processing, affordable rates. Call 0718 431 589."
        />
        <meta name="keywords" content="advance payment guarantee Kenya, APG bond Kenya, advance payment bond, mobilization guarantee, APG Nairobi, advance payment security, contractor APG, construction APG Kenya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Advance Payment Guarantee Kenya | APG Bond | NJAWERA" />
        <meta property="og:description" content="Secure advance payments with APG bonds in Kenya. Fast processing, competitive rates." />
        <meta property="og:image" content={`${siteUrl}/images/services.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advance Payment Guarantee Kenya | NJAWERA" />
        <meta name="twitter:description" content="Get APG bonds fast in Kenya. Secure your advance payments today!" />
        
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
        title="Advance Payment Guarantee"
        subtitle="APG Solutions for Contractors"
        heroDescription="Secure advance payments for your projects with our Advance Payment Guarantees. Build trust with clients and access funds for mobilization and materials procurement."
        features={features}
        steps={steps}
        whatsappMessage="Hello, I'd like to apply for an Advance Payment Guarantee. Please provide me with the requirements and a quote."
      />
      <Footer />
    </>
  );
}

