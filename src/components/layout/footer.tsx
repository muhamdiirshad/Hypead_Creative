import Link from 'next/link';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '@/components/logo';

const socialLinks = [
  // { icon: Twitter, href: '#' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/hype-ad-21a64b3a2/' },
  { icon: Instagram, href: 'https://www.instagram.com/hypead.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Logo />
            <p className="max-w-xs text-center text-sm text-secondary-foreground/80 md:text-left">
              Driving Growth Through Digital Excellence.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-secondary-foreground/80 transition-colors hover:text-primary"
                prefetch={false}
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">
                  {social.icon.displayName}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-foreground/10 pt-8 text-center text-sm text-secondary-foreground/60">
          © {new Date().getFullYear()} Hypead Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
