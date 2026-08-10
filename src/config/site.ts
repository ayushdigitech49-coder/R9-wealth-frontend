export const SITE_CONFIG = {
  name: 'R9 Wealth',
  description: 'Enterprise Wealth Management Platform',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://r9wealth.com',
  ogImage: '/images/og-default.jpg',
  links: {
    twitter: 'https://twitter.com/r9wealth',
    linkedin: 'https://linkedin.com/company/r9wealth',
  },
};

export const ROUTES = {
  home: '/',
  about: '/about',
  services: {
    root: '/services',
    detail: (slug: string) => `/services/${slug}`,
  },
  calculators: {
    root: '/calculators',
    detail: (slug: string) => `/calculators/${slug}`,
  },
  blogs: {
    root: '/blogs',
    detail: (slug: string) => `/blogs/${slug}`,
  },
  contact: '/contact',
  dashboard: '/dashboard',
  admin: '/admin',
} as const;
