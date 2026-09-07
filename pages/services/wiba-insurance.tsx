import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function WIBAInsurancePage() {
  const siteUrl = 'https://njaweralandingpage.web.app';
  const pageUrl = `${siteUrl}/services/wiba-insurance`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Work Injury Benefits Act Insurance',
    alternateName: ['WIBA Insurance', 'WIBA', 'Worker Injury Insurance', 'Employee Compensation Insurance', 'Workman Compensation'],
    description: 'WIBA insurance in Kenya - mandatory coverage for worker injury compensation. Protect your employees and comply with Kenya law.',
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
      { '@type': 'ListItem', position: 3, name: 'WIBA Insurance', item: pageUrl },
    ],
  };
  const features = [
    {
      title: 'Legal Compliance',
      description: 'WIBA insurance is mandatory in Kenya. Ensure your business complies with the Work Injury Benefits Act, 2007.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Worker Protection',
      description: 'Provides compensation for workers who are injured, disabled, or killed in the course of employment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Medical Expenses',
      description: 'Coverage includes medical treatment costs for work-related injuries and occupational diseases.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Death & Disability Benefits',
      description: 'Provides compensation for permanent disability and death benefits to dependents of deceased workers.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Tender Requirement',
      description: 'WIBA insurance is often required when bidding for government and private sector construction contracts.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Affordable Coverage',
      description: 'We offer competitive WIBA insurance rates based on your workforce size and risk profile.',
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
      title: 'Get in Touch',
      description: 'Contact us via WhatsApp, phone, or email to inquire about WIBA insurance.',
    },
    {
      number: '02',
      title: 'Workforce Details',
      description: 'Provide information about your employees including number of workers and job categories.',
    },
    {
      number: '03',
      title: 'Receive Quote',
      description: 'Get a competitive quote based on your workforce size and risk assessment.',
    },
    {
      number: '04',
      title: 'Get Covered',
      description: 'Upon payment, your WIBA insurance policy is issued and your workers are protected.',
    },
  ];

  return (
    <>
      <Head>
        <title>WIBA Insurance Kenya | Work Injury Benefits Act Cover Nairobi | NJAWERA</title>
        <meta
          name="description"
          content="Get WIBA insurance in Kenya. Work Injury Benefits Act coverage for employee injury compensation. Mandatory for contractors. Affordable rates. Call 0718 431 589."
        />
        <meta name="keywords" content="WIBA insurance Kenya, WIBA cover Nairobi, work injury insurance, worker compensation Kenya, employee injury insurance, WIBA policy, workman compensation, staff insurance Kenya, WIBA for contractors, mandatory WIBA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="WIBA Insurance Kenya | Work Injury Benefits Act | NJAWERA" />
        <meta property="og:description" content="Mandatory WIBA insurance for employers in Kenya. Protect your workers and comply with the law." />
        <meta property="og:image" content={`${siteUrl}/images/services.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WIBA Insurance Kenya | NJAWERA" />
        <meta name="twitter:description" content="Get WIBA coverage for your employees. Mandatory worker injury insurance in Kenya." />
        
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
        title="Worker Injury Benefit Act (WIBA)"
        subtitle="Employee Protection Insurance"
        heroDescription="Protect your workforce with WIBA insurance. Mandatory coverage under Kenya's Work Injury Benefits Act ensures compensation for workers injured or disabled during employment."
        features={features}
        steps={steps}
        whatsappMessage="Hello, I'd like to get a quote for WIBA insurance. Please provide me with the requirements."
      />
      <Footer />
    </>
  );
}

