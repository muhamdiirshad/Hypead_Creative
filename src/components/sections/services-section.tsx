import { services } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-accent/80">
            We deliver a complete suite of digital marketing services designed for growth and impact.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group transform-gpu bg-background/50 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                <CardDescription className="pt-2 text-base text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
