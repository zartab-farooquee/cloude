export const siteConfig = {
  name: "ScriptZen",
  legalName: "ScriptZen AI Automation",
  tagline: "Automate Your Business with AI",
  description:
    "ScriptZen is an AI automation agency helping businesses automate repetitive tasks with AI agents, chatbots, workflow automation, lead generation, CRM and WhatsApp automation, and custom AI solutions.",
  // Update this to your production domain before going live.
  url: "https://www.scriptzen.ai",
  ogImage: "/og.png",
  locale: "en_US",
  email: "hello@scriptzen.ai",
  phone: "+1 (555) 012-3456",
  phoneHref: "+15550123456",
  // International format without symbols for the wa.me link.
  whatsapp: "15550123456",
  whatsappMessage:
    "Hi ScriptZen! I'd like to learn how AI automation can help my business.",
  address: {
    street: "500 Innovation Drive, Suite 210",
    city: "Austin",
    region: "TX",
    postalCode: "78701",
    country: "US",
    countryName: "United States",
  },
  geo: {
    latitude: 30.2672,
    longitude: -97.7431,
  },
  hours: "Mo-Fr 09:00-18:00",
  founded: "2021",
  social: {
    twitter: "https://twitter.com/scriptzen",
    twitterHandle: "@scriptzen",
    linkedin: "https://www.linkedin.com/company/scriptzen",
    github: "https://github.com/scriptzen",
    youtube: "https://www.youtube.com/@scriptzen",
  },
  stats: {
    hoursSaved: "120k+",
    clients: "180+",
    automations: "950+",
    satisfaction: "98%",
  },
} as const;

export function whatsappLink(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
