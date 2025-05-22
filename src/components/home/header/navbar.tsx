'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SearchInput from './search-input';
import ToggleMode from './toggle.mode';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Branding */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Blog
            </span>
            <span className="text-foreground">verse</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/articles" className="nav-link">
            Articles
          </Link>
          <Link href="/tutorial" className="nav-link">
            Tutorial
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <SearchInput />
          <ToggleMode />

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" className="px-4 py-1.5 text-sm">
              Login
            </Button>
            <Button className="px-4 py-1.5 text-sm">Signup</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-4 text-sm">
            <Link href="/articles" className="nav-link">
              Articles
            </Link>
            <Link href="/tutorial" className="nav-link">
              Tutorial
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </nav>
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="outline" className="w-full">
              Login
            </Button>
            <Button className="w-full">Signup</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
