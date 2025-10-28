'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolio } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const categories = ['All', ...Array.from(new Set(portfolio.map((p) => p.category)))];

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All');

  const filteredPortfolio =
    filter === 'All'
      ? portfolio
      : portfolio.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            Our Proven Results
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-accent/80">
            Explore a selection of our finest work and see how we've helped clients succeed.
          </p>
        </div>
        <div className="my-8 flex justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'ghost'}
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredPortfolio.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.image);
            return (
              <Link href="#" key={project.id} className="group block" prefetch={false}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      {projectImage && (
                        <Image
                          src={projectImage.imageUrl}
                          alt={project.title}
                          data-ai-hint={projectImage.imageHint}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <span className="text-sm font-semibold text-primary">{project.category}</span>
                        <h3 className="mt-1 font-headline text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
