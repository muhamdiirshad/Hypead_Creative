import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-white text-center p-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-accent/70" />
      <div className="relative container mx-auto px-4 md:px-6 z-10 animate-fade-in-up">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl">
            Elevate Your Brand's Digital Presence
          </h1>
          <p className="mt-6 text-lg leading-8 text-background/90 max-w-2xl">
            We are a full-service digital marketing agency that helps businesses
            grow through innovative strategies and data-driven results.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#contact">
                Start Your Project <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
