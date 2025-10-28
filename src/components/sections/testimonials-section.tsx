import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-accent/80">
            Hear from businesses we've helped elevate to new heights.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatar);
              return (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="bg-background">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <p className="text-lg italic text-accent/90">
                          "{testimonial.quote}"
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar>
                            {avatarImage && (
                              <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                            )}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-accent">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
