import { NavItem, TopBarConfig, FooterSection } from '@/types/navigation';

export const fontConfig = {
  fontPrimary: 'var(--font-primary, sans-serif)',
};

export const TOP_BAR_CONFIG: TopBarConfig = {
  phone: '+91 99712 95533',
  email: 'info@r9wealth.com',
  workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
  socialLinks: [
    { platform: 'Facebook', href: 'https://www.facebook.com/people/R9-Wealth/61575928528330/', icon: 'Facebook' },
    { platform: 'Twitter', href: 'https://x.com/R9Wealth', icon: 'Twitter' },
    { platform: 'Instagram', href: 'https://www.instagram.com/r9wealth/', icon: 'Instagram' },
    { platform: 'LinkedIn', href: 'https://www.linkedin.com/company/r9-wealth/', icon: 'Linkedin' },
    { platform: 'YouTube', href: 'https://www.youtube.com/@R9Wealth', icon: 'Youtube' },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    type: 'link',
  },
  {
    title: 'About Us',
    href: '/about',
    type: 'dropdown',
    items: [
      {
        title: 'Our Profile',
        href: '/our-profile',
        description: 'Comprehensive overview of R9 Wealth and our commitment to financial excellence.',
      },
      {
        title: 'Founder Desk',
        href: '/founder-desk',
        description: 'Visionary insights and message from our leadership and founder.',
      },
      {
        title: 'Our Team',
        href: '/our-team',
        description: 'Meet our certified financial planners and seasoned wealth managers.',
      },
      {
        title: 'Awards & Achievements',
        href: '/awards-achievements',
        description: 'Recognitions, industry honors, and Great Place to Work certifications.',
      },
    ],
  },
  {
    title: 'Services',
    href: '/services',
    type: 'dropdown',
    items: [
      {
        title: 'Mutual Fund',
        href: '/mutual-fund',
        description: 'SIP & Lumpsum solutions working with 40+ top AMCs across India.',
      },
      {
        title: 'Fixed Deposit',
        href: '/fixed-deposit',
        description: 'High-yield guaranteed corporate and bank fixed deposit schemes.',
      },
      {
        title: 'Structured Products',
        href: '/structured-products',
        description: 'Capital-protected equity and market-linked debenture solutions.',
      },
      {
        title: 'Portfolio Management Services (PMS)',
        href: '/portfolio-management-services',
        description: 'Bespoke equity and debt portfolios designed for High Net-Worth Investors.',
      },
      {
        title: 'Alternate Investment Funds (AIFs)',
        href: '/alternate-investment-funds-aifs',
        description: 'Category I, II & III funds for private equity, real estate, and venture debt.',
      },
      {
        title: 'Loan',
        href: '/loans',
        description: 'Home loans, business loans, and loans against property from 20+ banks.',
      },
      {
        title: 'Insurance',
        href: '/insurance',
        description: 'Term life, health, critical illness, and general insurance solutions.',
      },
    ],
  },
  {
    title: 'Learning',
    href: '/learning',
    type: 'dropdown',
    items: [
      {
        title: 'Blogs',
        href: '/blogs',
        description: 'Financial insights, SIP guides, and expert market analysis.',
      },
      {
        title: 'News Media',
        href: '/news-media',
        description: 'R9 Wealth in the news, press releases, and media mentions.',
      },
      {
        title: 'Event Photo Gallery',
        href: '/event-photo-gallery',
        description: 'Highlights from investor seminars, workshops, and corporate events.',
      },
    ],
  },
  {
    title: 'Become Our Partner',
    href: '/become-our-partner',
    type: 'link',
  },
  {
    title: 'Calculators',
    href: '/calculators',
    type: 'dropdown',
    items: [
      {
        title: 'Mutual Fund Return Calculator',
        href: '/mutual-fund-return-calculator',
        description: 'Calculate wealth growth through SIP & Lumpsum investments.',
      },
      {
        title: 'Retirement Planning Test Calculator',
        href: '/retirement-planning-test-calculator',
        description: 'Estimate your required retirement corpus and monthly savings.',
      },
      {
        title: 'Fixed Deposit Return Calculator',
        href: '/fixed-deposit-return-calculator',
        description: 'Project maturity value and interest returns on corporate FDs.',
      },
      {
        title: 'Bond Calculator',
        href: '/bond-calculator',
        description: 'Evaluate yield-to-maturity (YTM) and coupon interest payouts.',
      },
      {
        title: 'Loan Calculator',
        href: '/loan-calculator',
        description: 'Calculate monthly EMI, total interest, and loan tenure details.',
      },
      {
        title: 'Insurance Calculator',
        href: '/insurance-calculator',
        description: 'Determine adequate human life value (HLV) and term cover required.',
      },
      {
        title: 'Education Goal Calculator',
        href: '/education-goal-calculator',
        description: 'Plan for higher education costs adjusted for inflation.',
      },
      {
        title: 'Dream Vacation Calculator',
        href: '/dream-vacation-calculator',
        description: 'Save systematically for your upcoming international travel goals.',
      },
      {
        title: 'Marriage Calculator',
        href: '/marriage-calculator',
        description: 'Build a dedicated goal fund for wedding expenses.',
      },
    ],
  },
  {
    title: 'Real Estate',
    href: '/real-estate',
    type: 'dropdown',
    items: [
      {
        title: '66 Downtown',
        href: '/66-downtown',
        description: 'Ultra-luxurious commercial and retail spaces in prime location.',
      },
      {
        title: 'Amstoria Verti Greens & Gaia Residences',
        href: '/amstoria-verti-greens-gaia-residences',
        description: 'Eco-friendly green residential towers with modern amenities.',
      },
      {
        title: 'Tonino Lamborghini',
        href: '/tonino-lamborghini',
        description: 'Italian branded iconic luxury residences with world-class design.',
      },
      {
        title: 'TARC ISHVA',
        href: '/tarc-ishva',
        description: 'Premium high-rise living designed for elite lifestyle.',
      },
      {
        title: 'LA FORET',
        href: '/la-foret',
        description: 'Serene forest-view luxury villas and estate residences.',
      },
    ],
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
    type: 'link',
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'About R9 Wealth',
    links: [
      { label: 'Our Profile', href: '/our-profile' },
      { label: 'Founder Desk', href: '/founder-desk' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Awards & Achievements', href: '/awards-achievements' },
      { label: 'Become Our Partner', href: '/become-our-partner' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Investment Services',
    links: [
      { label: 'Mutual Fund', href: '/mutual-fund' },
      { label: 'Fixed Deposit', href: '/fixed-deposit' },
      { label: 'Structured Products', href: '/structured-products' },
      { label: 'Portfolio Management (PMS)', href: '/portfolio-management-services' },
      { label: 'Alternate Funds (AIFs)', href: '/alternate-investment-funds-aifs' },
      { label: 'Loans & Mortgages', href: '/loans' },
      { label: 'Life & Health Insurance', href: '/insurance' },
    ],
  },
  {
    title: 'Financial Calculators',
    links: [
      { label: 'Mutual Fund Return Calculator', href: '/mutual-fund-return-calculator' },
      { label: 'Retirement Planning Calculator', href: '/retirement-planning-test-calculator' },
      { label: 'Fixed Deposit Return Calculator', href: '/fixed-deposit-return-calculator' },
      { label: 'Bond & Yield Calculator', href: '/bond-calculator' },
      { label: 'Loan EMI Calculator', href: '/loan-calculator' },
      { label: 'Insurance Cover Calculator', href: '/insurance-calculator' },
      { label: 'Education Goal Calculator', href: '/education-goal-calculator' },
    ],
  },
  {
    title: 'Real Estate Projects',
    links: [
      { label: '66 Downtown', href: '/66-downtown' },
      { label: 'Amstoria Verti Greens & Gaia', href: '/amstoria-verti-greens-gaia-residences' },
      { label: 'Tonino Lamborghini Residences', href: '/tonino-lamborghini' },
      { label: 'TARC ISHVA', href: '/tarc-ishva' },
      { label: 'LA FORET', href: '/la-foret' },
    ],
  },
];
