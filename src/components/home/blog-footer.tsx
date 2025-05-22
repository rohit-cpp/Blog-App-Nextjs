'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const BlogFooter = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Blogverse</h2>
          <p className="text-sm text-gray-400 max-w-xs">
            Discover insightful articles, expert opinions, and the latest trends across the world.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-white transition" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-white transition" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-white transition" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-white transition" />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 text-sm">
          <div className="space-y-2">
            <h4 className="text-white font-semibold">Explore</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-white">Home</Link></li>
              <li><Link href="#" className="hover:text-white">Categories</Link></li>
              <li><Link href="#" className="hover:text-white">Top Articles</Link></li>
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-semibold">Resources</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-white">Docs</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-semibold">Community</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-white">Writers</Link></li>
              <li><Link href="#" className="hover:text-white">Newsletter</Link></li>
              <li><Link href="#" className="hover:text-white">Join Discord</Link></li>
              <li><Link href="#" className="hover:text-white">Contribute</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Blogverse. All rights reserved.
      </div>
    </footer>
  );
};

export default BlogFooter;
