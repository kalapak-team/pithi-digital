export type NavLink = {
  href: string;
  label: string;
  en?: string;
};

export type NavItem = {
  href?: string;
  label: string;
  match?: string;
  dropdown?: NavLink[];
};

export const pithiLinks: NavLink[] = [
  { href: "/pithi/wedding", label: "រៀបការ", en: "Wedding" },
  { href: "/pithi/engagement", label: "ភ្ជាប់ពាក្យ", en: "Engagement" },
  { href: "/pithi/ceremony", label: "ពិធីបុណ្យ", en: "Ceremony" },
  { href: "/pithi/birthday", label: "ខួបកំណើត", en: "Birthday" },
];

export const servicesLinks: NavLink[] = [
  { href: "/services/decoration", label: "Decoration" },
  { href: "/services/photography", label: "Photography" },
  { href: "/services/makeup", label: "Makeup" },
  { href: "/services/catering", label: "Catering" },
  { href: "/services/venue", label: "Venue" },
];

export const packageLinks: NavLink[] = [
  { href: "/packages#wedding", label: "Wedding Packages" },
  { href: "/packages#engagement", label: "Engagement Packages" },
  { href: "/packages#birthday", label: "Birthday Packages" },
  { href: "/packages#custom", label: "Custom Package" },
];

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { label: "Pithi", match: "/pithi", dropdown: pithiLinks },
  { label: "Services", match: "/services", dropdown: servicesLinks },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
