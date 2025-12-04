export interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  desc: string;
  files: string;
  gradient: string;
  image: string;
  demoUrl: string;
}

export const CATEGORIES = ['All', 'SaaS', 'Agency', 'E-Commerce', 'Finance', 'Portfolio'];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Authentic | Creative Web Landing Page',
    category: 'Creative',
    price: 'Rp 149.000',
    desc: 'Landing page modern untuk startup teknologi dengan fokus konversi tinggi dan tampilan profesional.',
    files: 'HTML, Vue, React',
    gradient: 'from-blue-600 to-indigo-600',
    image: '/products/authentik.png',
    demoUrl: '/demo/authentik/index.html'
  },
  {
    id: 2,
    title: 'Furniture Landing Page',
    category: 'E-Commerce',
    price: 'Rp 99.000',
    desc: 'Landing page modern untuk agensi furniture dengan fokus konversi tinggi dan tampilan profesional.',
    files: 'HTML, Figma',
    gradient: 'from-purple-600 to-pink-600',
    image: '/products/furniture.png',
    demoUrl: '/demo/furniture/index.html'
  },
  {
    id: 3,
    title: 'Portfolio Landing Page',
    category: 'Portfolio',
    price: 'Rp 199.000',
    desc: 'Landing page modern untuk - portfolio dengan fokus konversi tinggi dan tampilan profesional.',
    files: 'Shopify, HTML',
    gradient: 'from-orange-500 to-red-500',
    image: '/products/portfolio.png',
    demoUrl: '/demo/portfolio/'
  },
  {
    id: 4,
    title: 'Ground Funding Landing Page',
    category: 'Finance',
    price: 'Rp 175.000',
    desc: 'Landing page modern untuk agensi ground funding dengan fokus konversi tinggi dan tampilan profesional.',
    files: 'WordPress, HTML',
    gradient: 'from-slate-700 to-slate-500',
    image: '/products/finance.png',
    demoUrl: '/demo/finance/'
  },
  {
    id: 5,
    title: 'Studio Agency Landing Page',
    category: 'Agency',
    price: 'Rp 120.000',
    desc: 'Landing page modern untuk agensi studio dengan fokus konversi tinggi dan tampilan profesional.',
    files: 'HTML, Tailwind',
    gradient: 'from-emerald-500 to-teal-600',
    image: '/products/studio-agency.png',
    demoUrl: '/demo/agency/'
  },
  {
    id: 6,
    title: 'Interior Agency Landing Page',
    category: 'E-Commerce',
    price: 'Rp 150.000',
    desc: 'Landing page modern untuk agensi interior dengan fokus konversi tinggi dan Luxury.',
    files: 'HTML, Vue',
    gradient: 'from-violet-600 to-fuchsia-600',
    image: '/products/interios.png',
    demoUrl: '/demo/interior/'
  }
];