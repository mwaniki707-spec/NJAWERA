'use client';

import React from 'react';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Bid Bond',
      slug: 'bid-bond',
      description:
        'Guarantee that bidders will honor their tender commitments, providing security to project owners during the bidding process. Fast processing in less than 1 hour.',
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Performance Bond',
      slug: 'performance-bond',
      description:
        'Assurance that contractors will complete projects according to contract terms, protecting project owners from default. Essential for winning contracts.',
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Advance Payment Guarantee',
      slug: 'advance-payment-guarantee',
      description:
        'Security for advance payments made to contractors, ensuring funds are used appropriately or refunded if needed. Build trust with clients.',
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Contractor All Risk (CAR)',
      slug: 'contractor-all-risk',
      description:
        'Comprehensive coverage for construction projects, protecting against physical loss or damage during construction phases. Mandatory for most projects.',
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: 'Worker Injury Benefit Act (WIBA)',
      slug: 'wiba-insurance',
      description:
        'Mandatory coverage ensuring compensation for workers injured or disabled during employment activities. Protect your workforce and comply with the law.',
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Free Consultation',
      slug: 'contact',
      description:
        'Get expert advice at no cost. Our team will assess your needs and recommend the best insurance and bond solutions for your specific projects.',
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-500 pb-2">
            Our Services
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-800 to-orange-500 mx-auto mt-4"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Comprehensive bonding and insurance solutions tailored for contractors in Kenya
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.slug === 'contact' ? '/#contact' : `/services/${service.slug}`}
              className="group bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 fade-in block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-800 to-orange-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Learn More Link */}
              <div className="flex items-center text-orange-500 font-semibold text-lg group-hover:text-blue-800 transition-colors">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
