'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: 'James Mwangi',
      role: 'Managing Director',
      company: 'BuildRight Construction Ltd',
      content:
        'NJAWERA has been instrumental in our growth. Their quick turnaround on bid bonds has helped us secure multiple government contracts. Highly recommend their services!',
      rating: 5,
    },
    {
      name: 'Grace Wanjiku',
      role: 'Operations Manager',
      company: 'Premier Contractors Kenya',
      content:
        'The team at NJAWERA understands the urgency of tender deadlines. They delivered our performance bond within 24 hours. Professional and reliable service.',
      rating: 5,
    },
    {
      name: 'Peter Odhiambo',
      role: 'CEO',
      company: 'Odhiambo & Sons Engineering',
      content:
        'I was struggling to find affordable CAR insurance until I found NJAWERA. Their rates are competitive and their customer service is exceptional.',
      rating: 5,
    },
    {
      name: 'Sarah Kimani',
      role: 'Finance Director',
      company: 'Nairobi Civil Works',
      content:
        'Working with NJAWERA has simplified our bonding process significantly. One call and everything is handled. They truly understand contractor needs.',
      rating: 5,
    },
  ];

  const changeTestimonial = (newIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeTestimonial((currentIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length]);

  const handlePrev = () => {
    changeTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    changeTestimonial((currentIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      changeTestimonial(index);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-orange-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-500 pb-2">
            What Our Clients Say
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-800 to-orange-500 mx-auto mt-4 mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what contractors across Kenya have to say about our services.
          </p>
        </div>

        {/* Testimonials with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left - Image */}
          <div className="relative hidden lg:flex">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
              <Image
                src="/images/testimonials-bg.jpg"
                alt="Engineers and technicians working together"
                width={720}
                height={720}
                className="w-full h-full object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-orange-500/20"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right - Testimonials Carousel */}
          <div className="relative flex flex-col">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden flex-1 flex flex-col justify-center">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-blue-100">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div 
                className={`relative z-10 transition-all duration-300 ease-in-out ${
                  isAnimating 
                    ? 'opacity-0 translate-x-4' 
                    : 'opacity-100 translate-x-0'
                }`}
              >
                {/* Stars */}
                <div className="flex mb-6">{renderStars(testimonials[currentIndex].rating)}</div>

                {/* Content */}
                <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-800 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-base text-gray-600">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-800">
                  <circle cx="100" cy="100" r="100" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-800 to-orange-500 w-8'
                      : 'bg-gray-300 hover:bg-orange-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-blue-800 hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-blue-800 hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
