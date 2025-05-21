'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '../../ui/button';
import SearchInput from './search-input';
import ToggleMode from './toggle.mode';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Branding */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Byte
            </span>
            <span className="text-foreground">code</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/articles"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Articles
          </Link>
          <Link
            href="/tutorial"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Tutorial
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <SearchInput />
          <ToggleMode />
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" className="px-4 py-1.5 text-sm">
              Login
            </Button>
            <Button className="px-4 py-1.5 text-sm">Signup</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
