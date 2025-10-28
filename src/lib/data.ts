import { Code, Megaphone, Search, BarChart } from 'lucide-react';

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Work' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your visibility and rank higher on search engines to attract organic traffic.',
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    description: 'Engage your audience and build a strong brand presence across social platforms.',
  },
  {
    icon: BarChart,
    title: 'PPC Campaigns',
    description: 'Drive targeted traffic and generate leads with strategic pay-per-click advertising.',
  },
  {
    icon: Code,
    title: 'Web Design & Development',
    description: 'Create stunning, high-performance websites that convert visitors into customers.',
  },
];

export const portfolio = [
  {
    id: '1',
    category: 'Web Design',
    title: 'Corporate Website Redesign',
    image: 'portfolio-1',
  },
  {
    id: '2',
    category: 'Social Media',
    title: 'Startup Social Campaign',
    image: 'portfolio-2',
  },
  {
    id: '3',
    category: 'Branding',
    title: 'E-commerce Brand Identity',
    image: 'portfolio-3',
  },
  {
    id: '4',
    category: 'SEO',
    title: 'Local Business SEO Strategy',
    image: 'portfolio-4',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Jane Doe',
    title: 'CEO, Tech Innovators',
    avatar: 'avatar-1',
    quote: "Elevate Agency transformed our online presence. Their expertise in SEO and web design is unmatched. We've seen a 200% increase in organic traffic!",
  },
  {
    id: '2',
    name: 'John Smith',
    title: 'Founder, Creative Co.',
    avatar: 'avatar-2',
    quote: "Working with this team was a game-changer. Their social media strategies doubled our engagement and brought our brand to life. Highly recommended!",
  },
  {
    id: '3',
    name: 'Sarah Jones',
    title: 'Marketing Director, Lifestyle Brands',
    avatar: 'avatar-3',
    quote: "The PPC campaigns they crafted were incredibly effective, delivering a remarkable ROI. Their data-driven approach is what sets them apart.",
  },
];
