export interface PartnerLogo {
  name: string;
  category: string;
  code?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
  badge?: string;
  image?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CalculatorItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  portfolioTier: string;
}

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  badgeText: string;
}

export interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image?: string;
  isRead?: boolean;
  isFeatured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'HDFC Mutual Fund', category: 'AMC Partner', code: 'HDFC' },
  { name: 'ICICI Prudential MF', category: 'AMC Partner', code: 'ICICI' },
  { name: 'SBI Mutual Fund', category: 'AMC Partner', code: 'SBI' },
  { name: 'Axis Mutual Fund', category: 'AMC Partner', code: 'AXIS' },
  { name: 'Nippon India MF', category: 'AMC Partner', code: 'NIPPON' },
  { name: 'Aditya Birla Sun Life', category: 'AMC Partner', code: 'ABSL' },
];

export const STATS_DATA = [
  { label: 'Assets Under Advisory', value: 3500, prefix: '₹', suffix: 'Cr+', decimals: 0 },
  { label: 'Satisfied Investors', value: 25000, prefix: '', suffix: '+', decimals: 0 },
  { label: 'AMFI Reg. Validity', value: 2028, prefix: 'Till ', suffix: '', decimals: 0 },
  { label: 'Certified Wealth Managers', value: 120, prefix: '', suffix: '+', decimals: 0 },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'mutual-fund',
    title: 'Mutual Funds (SIP & Lumpsum)',
    description: 'Basket of equity, debt, and hybrid mutual funds working with 40+ trusted AMCs.',
    iconName: 'PieChart',
    category: 'Wealth Growth',
    badge: 'Popular',
    image: '/images/service_mf.jpg',
  },
  {
    id: 'fixed-deposit',
    title: 'High-Yield Fixed Deposits',
    description: 'Corporate and bank fixed deposits with guaranteed high interest payouts.',
    iconName: 'Coins',
    category: 'Fixed Income',
    image: '/images/service_fd.jpg',
  },
  {
    id: 'structured-products',
    title: 'Structured Products',
    description: 'Market-linked debentures and capital-protected structured instruments.',
    iconName: 'Layers',
    category: 'Structured Yield',
    badge: 'Exclusive',
    image: '/images/stat_growth.jpg',
  },
  {
    id: 'pms',
    title: 'Portfolio Management Services (PMS)',
    description: 'Bespoke direct equity portfolios managed by experienced fund managers for HNWIs.',
    iconName: 'TrendingUp',
    category: 'Private Wealth',
    badge: 'HNW Special',
    image: '/images/service_pms.jpg',
  },
  {
    id: 'aif',
    title: 'Alternate Investment Funds (AIFs)',
    description: 'Category I, II & III funds for private equity, real estate, and venture capital.',
    iconName: 'Building2',
    category: 'Alternative Assets',
    image: '/images/stat_investors.jpg',
  },
  {
    id: 'loans',
    title: 'Loans & Mortgages',
    description: 'Home loans, business loans, and loans against property from 20+ leading banks.',
    iconName: 'CreditCard',
    category: 'Borrowing',
    image: '/images/service_loans.jpg',
  },
  {
    id: 'insurance',
    title: 'Life & Health Insurance',
    description: 'Comprehensive term protection, health cover, and critical illness plans.',
    iconName: 'Umbrella',
    category: 'Protection',
    image: '/images/stat_advisors.jpg',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Goal Discovery & Profiling',
    description: 'Assessing your financial aspirations, time horizon, and risk tolerance.',
    iconName: 'Search',
  },
  {
    step: '02',
    title: 'Strategic Asset Allocation',
    description: 'Designing custom portfolios across Mutual Funds, FDs, PMS, and AIFs.',
    iconName: 'Compass',
  },
  {
    step: '03',
    title: 'Quantitative Risk Audit',
    description: 'Stress-testing portfolios against market downturns and interest rate shifts.',
    iconName: 'Shield',
  },
  {
    step: '04',
    title: 'Execution & Continuous Monitoring',
    description: 'Seamless onboarding, annual rebalancing, and transparent reporting.',
    iconName: 'TrendingUp',
  },
];

export const CALCULATOR_ITEMS: CalculatorItem[] = [
  {
    id: 'sip',
    title: 'Mutual Fund Return Calculator',
    shortDesc: 'Calculate wealth growth through Systematic Investment Plans (SIP) & Lumpsum.',
    iconName: 'TrendingUp',
    category: 'Mutual Funds',
  },
  {
    id: 'retirement',
    title: 'Retirement Planning Test Calculator',
    shortDesc: 'Estimate your required retirement corpus and monthly savings target.',
    iconName: 'PiggyBank',
    category: 'Retirement',
  },
  {
    id: 'fd',
    title: 'Fixed Deposit Return Calculator',
    shortDesc: 'Calculate interest returns and maturity values on corporate & bank FDs.',
    iconName: 'Coins',
    category: 'Fixed Income',
  },
  {
    id: 'bond',
    title: 'Bond Yield Calculator',
    shortDesc: 'Evaluate yield-to-maturity (YTM) and coupon interest payouts on bonds.',
    iconName: 'FileText',
    category: 'Fixed Income',
  },
  {
    id: 'loan',
    title: 'Loan EMI Calculator',
    shortDesc: 'Compute monthly loan EMI, interest payout, and total repayment schedule.',
    iconName: 'Calculator',
    category: 'Loans',
  },
  {
    id: 'insurance',
    title: 'Insurance Cover Calculator',
    shortDesc: 'Determine adequate human life value (HLV) and term insurance cover.',
    iconName: 'Umbrella',
    category: 'Insurance',
  },
  {
    id: 'education',
    title: 'Education Goal Calculator',
    shortDesc: 'Plan for your child’s higher education expenses adjusted for inflation.',
    iconName: 'Target',
    category: 'Goal Planning',
  },
  {
    id: 'vacation',
    title: 'Dream Vacation Calculator',
    shortDesc: 'Systematically save for your international dream travel goals.',
    iconName: 'Sparkles',
    category: 'Lifestyle',
  },
  {
    id: 'marriage',
    title: 'Marriage Goal Calculator',
    shortDesc: 'Build a dedicated investment fund for upcoming wedding expenses.',
    iconName: 'Target',
    category: 'Milestone',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Himanshu Arora',
    title: 'Founder & Managing Director',
    company: 'R9 Wealth India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'Our goal at R9 Wealth is to empower every investor with transparent, goal-oriented asset allocation strategies backed by top-tier AMCs.',
    rating: 5,
    portfolioTier: 'Founders Insight',
  },
  {
    id: '2',
    name: 'Rajesh Sharma',
    title: 'Senior Business Partner',
    company: 'Apex Logistics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'R9 Wealth fundamentally transformed our corporate liquid treasury and PMS investments. Exceptional advisory team and transparent reporting!',
    rating: 5,
    portfolioTier: 'PMS & Mutual Fund Client',
  },
  {
    id: '3',
    name: 'Pooja Agarwal',
    title: 'Tech Lead & Investor',
    company: 'Innovate Tech',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote: 'The calculator suite and seamless SIP execution make managing retirement and child education goals completely hassle-free.',
    rating: 5,
    portfolioTier: 'SIP & Insurance Investor',
  },
];

export const AWARDS_DATA: AwardItem[] = [
  {
    year: '2026',
    title: 'Great Place to Work Certified',
    organization: 'Great Place to Work® Institute India',
    badgeText: 'Certified',
  },
  {
    year: '2025',
    title: 'AMFI Registered Excellence',
    organization: 'AMFI Reg. ARN – 334421',
    badgeText: 'Valid 2025-2028',
  },
  {
    year: '2024',
    title: 'Best Wealth Management Platform',
    organization: 'Financial Leadership Awards',
    badgeText: 'Winner',
  },
];

export const BLOGS_DATA: BlogItem[] = [
  {
    id: '3',
    title: 'Smart Tips for Business Loan: A Complete Guide',
    excerpt: 'Navigating working capital loans, machinery financing, and collateral-free NBFC credit solutions for mid-market enterprises.',
    category: 'Business Wealth',
    readTime: '6 min read',
    date: 'July 2026',
    author: 'Himanshu Arora, Founder',
    isRead: false,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'A Beginner’s Guide to Personal Loans: Everything You Need to Know',
    excerpt: 'How to compare interest rates, evaluate processing fees, and maintain a healthy CIBIL score.',
    category: 'Loans',
    readTime: '5 min read',
    date: 'August 2026',
    author: 'R9 Financial Team',
    isRead: false,
    isFeatured: false,
  },
  {
    id: '1',
    title: 'Does Health Insurance Really Benefit Your Family?',
    excerpt: 'Understanding critical illness coverage, cashless hospitalizations, and tax benefits under Section 80D.',
    category: 'Insurance',
    readTime: '4 min read',
    date: 'August 2026',
    author: 'R9 Advisory Desk',
    isRead: true,
    isFeatured: false,
  },
  {
    id: '4',
    title: 'Asset Allocation Strategies in Volatile Markets',
    excerpt: 'Quantitative rebalancing frameworks for capital preservation and risk-adjusted alpha generation.',
    category: 'Wealth Advisory',
    readTime: '5 min read',
    date: 'June 2026',
    author: 'R9 Quantitative Research Desk',
    isRead: true,
    isFeatured: false,
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'General',
    question: 'What financial services does R9 Wealth offer under one platform?',
    answer: 'R9 Wealth offers a complete range of financial solutions including Mutual Funds, Fixed Deposits, Bonds, Portfolio Management Services (PMS), Alternate Investment Funds (AIFs), Stock Market Investments, Insurance, Loans, and Real Estate - all under one trusted platform.',
  },
  {
    category: 'Advisory',
    question: 'How do R9 Wealth advisors choose suitable investment strategies?',
    answer: 'Our advisors assess your financial goals, risk profile, income stability, and investment time horizon before recommending suitable multi-asset solutions tailored to your needs.',
  },
  {
    category: 'Compliance',
    question: 'Is R9 Wealth registered with regulatory financial bodies?',
    answer: 'Yes! R9 Wealth is an AMFI registered Mutual Fund distributor (ARN – 334421, valid from 18-July-2025 to 17-July-2028), ensuring strict compliance and transparency across all investment services.',
  },
  {
    category: 'SIP',
    question: 'What is the minimum investment required to start investing?',
    answer: 'The minimum investment depends on the product selected. For example, Mutual Fund SIPs can be started with as little as ₹500/month, while other instruments like FDs, Bonds, PMS, or Real Estate have specific minimum thresholds. Our advisors guide you based on your capacity.',
  },
  {
    category: 'Safety',
    question: 'How does R9 Wealth manage market volatility and risk?',
    answer: 'We follow a disciplined 6 P’s asset allocation framework, diversify across 40+ AMCs and multi-asset classes, and conduct periodic portfolio rebalancing to protect capital against market fluctuations.',
  },
];
