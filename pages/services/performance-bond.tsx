import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function PerformanceBondPage() {
  const siteUrl = 'https://njaweralandingpage.web.app';
  const pageUrl = `${siteUrl}/services/performance-bond`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Performance Bond',
    alternateName: ['Performance Guarantee', 'Contract Guarantee', 'Performance Security'],
    description: 'Performance bonds in Kenya guaranteeing project completion according to contract terms. Protect project owners from contractor default.',
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
      { '@type': 'ListItem', position: 3, name: 'Performance Bond', item: pageUrl },
    ],
  };
  const features = [
    {
      title: 'Contract Compliance',
      description: 'Our performance bonds guarantee that you will complete your project according to contract terms and specifications.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Build Client Trust',
      description: 'Performance bonds give project owners confidence in your ability to deliver, helping you win more contracts.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Quick Turnaround',
      description: 'Get your performance bond issued in less than 1 hour so you can start your project on time.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Flexible Coverage',
      description: 'We offer performance bonds for projects of all sizes, from small contracts to large-scale construction projects.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'Competitive Rates',
      description: 'Affordable premium rates that fit your budget without compromising on the quality of coverage.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Licensed Partners',
      description: 'We work with top-rated insurance companies to ensure your performance bond is recognized and accepted.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Application',
      description: 'Contact us with your contract details and performance bond requirements.',
    },
    {
      number: '02',
      title: 'Document Review',
      description: 'Provide necessary documentation including contract, company profile, and financials.',
    },
    {
      number: '03',
      title: 'Quotation',
      description: 'Receive a competitive quote based on your contract value and project scope.',
    },
    {
      number: '04',
      title: 'Bond Issuance',
      description: 'Upon payment, your performance bond is issued and delivered in less than 1 hour.',
    },
  ];

  return (
    <>
      <Head>
        <title>Performance Bond Kenya | Performance Guarantee Nairobi | NJAWERA</title>
        <meta
          name="description"
          content="Get performance bonds in Kenya. Contract guarantee for construction projects. Fast processing in less than 1 hour. Competitive rates. Build client trust. Call 0718 431 589."
        />
        <meta name="keywords" content="performance bond Kenya, performance guarantee Nairobi, contract guarantee Kenya, performance security, construction performance bond, project guarantee, performance bond application, contractor guarantee Kenya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Performance Bond Kenya | Contract Guarantee | NJAWERA" />
        <meta property="og:description" content="Performance bonds for construction projects in Kenya. Guarantee contract completion, competitive rates." />
        <meta property="og:image" content={`${siteUrl}/images/services.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Performance Bond Kenya | NJAWERA" />
        <meta name="twitter:description" content="Get performance bonds fast in Kenya. Build client trust with contract guarantees." />
        
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
        title="Performance Bond"
        subtitle="Contract Guarantee Solutions"
        heroDescription="Demonstrate your commitment to project completion with our performance bonds. We help contractors build trust with clients by guaranteeing that projects will be completed according to contract terms."
        features={features}
        steps={steps}
        whatsappMessage="Hello, I'd like to apply for a Performance Bond. Please provide me with the requirements and a quote."
      />
      <Footer />
    </>
  );
}

