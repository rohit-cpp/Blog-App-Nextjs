'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-800 to-indigo-950 text-white">
      {/* Background Blob Effect */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />

      <div className="container relative z-10 mx-auto flex flex-col-reverse items-center justify-between gap-12 px-6 py-24 md:flex-row md:py-32">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            Explore the world through{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              words
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:mx-0 md:text-xl">
            Discover insightful articles, thought-provoking stories, and expert perspectives on lifestyles and innovations.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button className="rounded-full px-6 py-3 text-lg">
              Start Reading
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white px-6 py-3 text-lg text-white hover:bg-white/10"
            >
              Explore Topics
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto md:mx-0">
            <div className="space-y-1 text-center">
              <div className="text-3xl font-bold text-primary">1K+</div>
              <p className="text-sm text-gray-400">Published Articles</p>
            </div>
            <div className="space-y-1 text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <p className="text-sm text-gray-400">Expert Writers</p>
            </div>
            <div className="space-y-1 text-center">
              <div className="text-3xl font-bold text-primary">10M</div>
              <p className="text-sm text-gray-400">Monthly Readers</p>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className={cn(
              'relative h-80 w-80 rounded-2xl overflow-hidden',
              'bg-gradient-to-br from-white/10 to-transparent',
              'border border-white/10 backdrop-blur-lg',
              'shadow-2xl shadow-indigo-500/30'
            )}
          >
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Hero Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
