export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
}

export interface MegaMenuColumn {
  category: string;
  items: NavSubItem[];
}

export interface NavItem {
  title: string;
  href: string;
  type?: 'link' | 'dropdown' | 'megamenu';
  items?: NavSubItem[];
  megaMenuColumns?: MegaMenuColumn[];
  badge?: string;
}

export interface TopBarConfig {
  phone: string;
  email: string;
  workingHours: string;
  socialLinks: {
    platform: string;
    href: string;
    icon: string;
  }[];
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
    badge?: string;
  }[];
}
