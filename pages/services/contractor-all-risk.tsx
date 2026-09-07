import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function ContractorAllRiskPage() {
  const siteUrl = 'https://njaweralandingpage.web.app';
  const pageUrl = `${siteUrl}/services/contractor-all-risk`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Contractor All Risk Insurance',
    alternateName: ['CAR Insurance', 'CAR Policy', 'Construction Insurance', 'Contractors All Risks'],
    description: 'Comprehensive Contractor All Risk (CAR) insurance in Kenya covering construction projects against physical loss, damage, and third-party liability.',
    provider: { '@type': 'Organization', name: 'NJAWERA Co. Ltd', url: siteUrl },
    areaServed: { '@type': 'Country', name: 'Kenya' },
    serviceType: 'Insurance',
    url: pageUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
      { '@type': 'ListItem', position: 3, name: 'Contractor All Risk', item: pageUrl },
    ],
  };
  const features = [
    {
      title: 'Comprehensive Coverage',
      description: 'Protects against physical loss or damage to construction works, materials, plant, and equipment on site.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Third Party Liability',
      description: 'Includes coverage for third-party property damage and bodily injury arising from your construction activities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Project Requirement',
      description: 'CAR insurance is mandatory for most construction projects. Ensure compliance with project and regulatory requirements.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Natural Disaster Protection',
      description: 'Coverage extends to damages caused by fire, flood, earthquake, storm, and other natural perils.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: 'Theft & Vandalism',
      description: 'Protect your construction materials and equipment from theft, vandalism, and malicious damage.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Competitive Premiums',
      description: 'We offer affordable CAR insurance rates tailored to your project size and scope.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Get in touch via WhatsApp, phone, or email to discuss your CAR insurance needs.',
    },
    {
      number: '02',
      title: 'Project Assessment',
      description: 'Provide project details including contract value, duration, scope, and location.',
    },
    {
      number: '03',
      title: 'Custom Quote',
      description: 'Receive a tailored quote based on your specific project requirements.',
    },
    {
      number: '04',
      title: 'Policy Issuance',
      description: 'Upon payment, your CAR insurance policy is issued and you are fully covered.',
    },
  ];

  return (
    <>
      <Head>
        <title>CAR Insurance Kenya | Contractor All Risk Policy Nairobi | NJAWERA</title>
        <meta
          name="description"
          content="Get Contractor All Risk (CAR) insurance in Kenya. Comprehensive coverage for construction projects against loss, damage & third-party liability. Call 0718 431 589."
        />
        <meta name="keywords" content="CAR insurance Kenya, contractor all risk Kenya, CAR policy Nairobi, construction insurance Kenya, contractors all risks, project insurance, site insurance, contractor insurance Kenya, CAR cover, construction all risk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="CAR Insurance Kenya | Contractor All Risk | NJAWERA" />
        <meta property="og:description" content="Comprehensive CAR insurance for construction projects in Kenya. Protect your site, materials & equipment." />
        <meta property="og:image" content={`${siteUrl}/images/services.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CAR Insurance Kenya | NJAWERA" />
        <meta name="twitter:description" content="Contractor All Risk insurance for construction projects. Get covered today!" />
        
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
        title="Contractor All Risk (CAR)"
        subtitle="Construction Insurance Solutions"
        heroDescription="Protect your construction projects with comprehensive Contractor All Risk insurance. Coverage for physical loss, damage to works, materials, equipment, and third-party liability."
        features={features}
        steps={steps}
        whatsappMessage="Hello, I'd like to get a quote for Contractor All Risk (CAR) insurance. Please provide me with the requirements."
      />
      <Footer />
    </>
  );
}

