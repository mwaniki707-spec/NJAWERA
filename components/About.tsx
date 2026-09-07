'use client';

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="fade-in">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/about.jpg"
                alt="NJAWERA Company"
                width={720}
                height={480}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="fade-in">
            <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-500 pb-2 mb-4">
              About NJAWERA
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-800 to-orange-500 mb-10"></div>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Njawera provides reliable, compliant insurance and bond solutions
              that empower contractors to bid and perform with confidence.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We understand the challenges faced by contractors in securing
              projects and meeting regulatory requirements. Our comprehensive
              suite of insurance products and bond guarantees is designed to
              support your business at every stage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-800 to-orange-500 text-white">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-gray-900">
                    Reliable
                  </h4>
                  <p className="text-lg text-gray-600">Trusted by contractors across Kenya</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-800 to-orange-500 text-white">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-gray-900">
                    Compliant
                  </h4>
                  <p className="text-lg text-gray-600">Meets all regulatory requirements</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-800 to-orange-500 text-white">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-gray-900">Fast</h4>
                  <p className="text-lg text-gray-600">Quick processing times</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-800 to-orange-500 text-white">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-gray-900">
                    Competitive
                  </h4>
                  <p className="text-lg text-gray-600">Best rates in the market</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
