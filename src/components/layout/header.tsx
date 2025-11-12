'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={false}
              className="text-sm font-medium text-accent hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button onClick={toggleMenu} variant="ghost" size="icon">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-accent" />
            ) : (
              <Menu className="h-6 w-6 text-accent" />
            )}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        >
          <div
            className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-background p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <Logo />
              <Button onClick={closeMenu} variant="ghost" size="icon">
                <X className="h-6 w-6 text-accent" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-accent hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}

              <Button asChild className="mt-6">
                <Link href="#contact" onClick={closeMenu}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
