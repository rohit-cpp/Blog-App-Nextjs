'use client';

import BlogFooter from "@/components/home/blog-footer";
import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticles from "@/components/home/top-articles";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Articles Section */}
      <section className="relative py-16 md:py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Discover our most popular and trending content
            </p>
          </div>

          {/* Article Cards */}
          <TopArticles />

          {/* View All Button */}
          <div className="mt-10 text-center">
            <Link href="/articles">
              <Button className="rounded-full text-lg px-6 py-2 hover:bg-gray-900 hover:text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-gray-200">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <BlogFooter />
    </div>
  );
}
