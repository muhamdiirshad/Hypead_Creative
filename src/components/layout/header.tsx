'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-accent transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button onClick={toggleMenu} variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-accent" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm md:hidden" onClick={closeMenu}>
          <div className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-background p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <Logo />
              <Button onClick={closeMenu} variant="ghost" size="icon">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="#contact" onClick={closeMenu}>Get a Quote</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
