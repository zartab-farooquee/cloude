export const whyChoose = [
  {
    icon: "Rocket",
    title: "Fast, Measurable ROI",
    description:
      "We prioritize automations that pay for themselves quickly, with clear metrics and reporting from day one.",
  },
  {
    icon: "ShieldCheck",
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with strict access controls, private deployments, and compliance-first architecture.",
  },
  {
    icon: "Puzzle",
    title: "Works With Your Stack",
    description:
      "We integrate with 1,000+ tools and your custom APIs — no need to rip and replace what already works.",
  },
  {
    icon: "Users",
    title: "Dedicated AI Experts",
    description:
      "A senior team of automation engineers and strategists guides you from idea to production and beyond.",
  },
  {
    icon: "Gauge",
    title: "Built to Scale",
    description:
      "Resilient automations with monitoring, alerting, and error handling that grow with your business.",
  },
  {
    icon: "Headphones",
    title: "Ongoing Support",
    description:
      "We don't disappear after launch — we monitor, optimize, and expand your automations continuously.",
  },
];

export const benefits = [
  {
    icon: "Clock",
    title: "Save 20+ Hours a Week",
    description:
      "Automate repetitive manual tasks and give your team their time back for high-value work.",
  },
  {
    icon: "TrendingDown",
    title: "Reduce Operating Costs",
    description:
      "Cut costs by replacing manual processes with reliable AI systems that run 24/7.",
  },
  {
    icon: "TrendingUp",
    title: "Increase Productivity",
    description:
      "Do more with the same team by removing bottlenecks and eliminating busywork.",
  },
  {
    icon: "Zap",
    title: "Respond Instantly",
    description:
      "Never keep a customer or lead waiting — AI responds in seconds, day and night.",
  },
  {
    icon: "BarChart3",
    title: "Make Better Decisions",
    description:
      "Real-time dashboards and reporting give you visibility into what's working.",
  },
  {
    icon: "Smile",
    title: "Delight Customers",
    description:
      "Faster, more consistent service that improves satisfaction and retention.",
  },
];

export const coreValues = [
  {
    icon: "Rocket",
    title: "Results Over Hype",
    description:
      "We care about outcomes you can measure — hours saved, costs cut, and revenue gained.",
  },
  {
    icon: "ShieldCheck",
    title: "Trust & Security",
    description:
      "We treat your data and your customers' data with the highest standards of care.",
  },
  {
    icon: "Heart",
    title: "Genuine Partnership",
    description:
      "We act as an extension of your team, invested in your long-term success.",
  },
  {
    icon: "Sparkles",
    title: "Relentless Innovation",
    description:
      "We stay on the frontier of AI so you always benefit from what's possible.",
  },
];

export const trustReasons = [
  "Senior AI engineers and automation strategists on every project",
  "Transparent, fixed-price quotes with no surprises",
  "Security-first architecture and compliance-aligned practices",
  "Ongoing monitoring, support, and optimization after launch",
  "A proven track record across multiple industries",
  "Automations designed to deliver measurable ROI",
];

export const industries = [
  { icon: "Building2", name: "Real Estate", blurb: "Automated lead capture, nurturing, and viewings booking." },
  { icon: "HeartPulse", name: "Healthcare", blurb: "Appointment scheduling, reminders, and patient intake." },
  { icon: "ShoppingCart", name: "E-commerce", blurb: "Support automation, cart recovery, and order updates." },
  { icon: "Scale", name: "Legal", blurb: "Client intake, document generation, and follow-ups." },
  { icon: "GraduationCap", name: "Education", blurb: "Enrollment, student support, and admin automation." },
  { icon: "Landmark", name: "Finance", blurb: "Onboarding, KYC workflows, and client communication." },
  { icon: "UtensilsCrossed", name: "Hospitality", blurb: "Reservations, reviews, and guest messaging." },
  { icon: "Wrench", name: "Home Services", blurb: "Quote requests, scheduling, and dispatch automation." },
];

export const trustBadges = [
  "SOC 2 Aligned",
  "GDPR Compliant",
  "WhatsApp Business Partner",
  "99.9% Uptime",
  "Official API Integrations",
];

export const clientLogos = [
  "Northwind",
  "Lumen Labs",
  "Vertex Retail",
  "CareBridge",
  "Quantia",
  "Solaris Group",
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  result: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "ScriptZen replaced our manual lead handling with an AI system that qualifies and books calls automatically. Our sales team finally focuses on closing.",
    name: "Amara Chen",
    role: "Head of Growth",
    company: "Vertex Retail",
    result: "3.2x more booked calls",
  },
  {
    quote:
      "The WhatsApp automation they built handles thousands of customer messages a week. Response times went from hours to seconds.",
    name: "Daniel Rossi",
    role: "COO",
    company: "CareBridge",
    result: "70% fewer support tickets",
  },
  {
    quote:
      "Their custom AI agent now generates our reports and updates the CRM automatically. It's like adding three team members overnight.",
    name: "Priya Nair",
    role: "Operations Director",
    company: "Quantia",
    result: "25 hours saved weekly",
  },
  {
    quote:
      "We went from a leaky manual pipeline to a predictable lead machine. ScriptZen understood our business and delivered fast.",
    name: "Marcus Feld",
    role: "Founder",
    company: "Solaris Group",
    result: "42% lower cost per lead",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  service: string;
  summary: string;
  challenge: string;
  solution: string;
  before: string[];
  after: string[];
  metrics: { label: string; value: string }[];
  quote?: { text: string; author: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "vertex-retail-lead-automation",
    title: "From Cold Leads to 3.2x More Booked Calls",
    industry: "E-commerce",
    service: "Lead Generation Systems",
    summary:
      "We built an AI-powered lead qualification and booking system that transformed a slow manual process into an automated pipeline.",
    challenge:
      "Vertex Retail's sales team spent hours manually chasing unqualified leads, and most inbound inquiries went cold before anyone followed up.",
    solution:
      "We deployed an AI chatbot and voice agent to qualify leads instantly, enrich them, and book calls directly into reps' calendars, all synced with their CRM.",
    before: [
      "6+ hour average response time",
      "Manual lead scoring in spreadsheets",
      "Reps buried in admin work",
    ],
    after: [
      "Under 60-second response, 24/7",
      "Automated scoring and routing",
      "Reps focus only on qualified calls",
    ],
    metrics: [
      { label: "More booked calls", value: "3.2x" },
      { label: "Response time", value: "-97%" },
      { label: "Hours saved / week", value: "30+" },
    ],
    quote: {
      text: "ScriptZen turned our lead handling into a machine. It's the best operational upgrade we've made.",
      author: "Amara Chen, Head of Growth",
    },
  },
  {
    slug: "carebridge-whatsapp-support",
    title: "Cutting Support Tickets by 70% with WhatsApp AI",
    industry: "Healthcare",
    service: "WhatsApp Automation",
    summary:
      "An AI-powered WhatsApp assistant now handles the majority of patient inquiries automatically while staying fully compliant.",
    challenge:
      "CareBridge was overwhelmed by repetitive patient questions across phone and email, leading to long wait times and burnout.",
    solution:
      "We implemented WhatsApp automation on the official Business API with AI replies for FAQs, appointment reminders, and smart escalation to staff.",
    before: [
      "Hours-long response times",
      "Overloaded support staff",
      "Missed appointment reminders",
    ],
    after: [
      "Instant automated replies",
      "70% of tickets deflected",
      "Automated reminders reduce no-shows",
    ],
    metrics: [
      { label: "Fewer support tickets", value: "70%" },
      { label: "Faster responses", value: "10x" },
      { label: "No-show reduction", value: "35%" },
    ],
    quote: {
      text: "Our patients get instant answers and our team finally has breathing room.",
      author: "Daniel Rossi, COO",
    },
  },
  {
    slug: "quantia-custom-ai-agent",
    title: "A Custom AI Agent That Saves 25 Hours a Week",
    industry: "Finance",
    service: "Custom AI Development",
    summary:
      "We built a bespoke AI agent that automates reporting and CRM updates, freeing the operations team from tedious manual work.",
    challenge:
      "Quantia's team spent days each month compiling reports and manually updating records across multiple systems.",
    solution:
      "We developed a custom AI agent with secure integrations that gathers data, generates reports, and updates the CRM autonomously.",
    before: [
      "Manual monthly reporting",
      "Data scattered across tools",
      "Frequent human errors",
    ],
    after: [
      "Automated, on-demand reports",
      "Unified, always-current data",
      "Near-zero manual errors",
    ],
    metrics: [
      { label: "Hours saved / week", value: "25" },
      { label: "Reporting time", value: "-90%" },
      { label: "Data accuracy", value: "99.9%" },
    ],
    quote: {
      text: "It's like we added three team members overnight, without the overhead.",
      author: "Priya Nair, Operations Director",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const homeFaqs = [
  {
    question: "What is an AI automation agency?",
    answer:
      "An AI automation agency designs and builds AI-powered systems that automate repetitive business tasks — like customer support, lead generation, CRM updates, and messaging — so your team can focus on high-value work.",
  },
  {
    question: "How quickly can ScriptZen automate my business?",
    answer:
      "Most projects deliver a working automation within 1–3 weeks. We start with a free consultation to identify the highest-impact opportunities and prioritize quick wins.",
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer:
      "Not at all. We handle the strategy, build, and maintenance end to end, and we design everything to fit around your existing tools and team.",
  },
  {
    question: "How much does AI automation cost?",
    answer:
      "Pricing depends on scope, but our automations are designed to pay for themselves through time savings and increased revenue. Book a free consultation for a transparent quote.",
  },
  {
    question: "Which tools and platforms do you integrate with?",
    answer:
      "We integrate with 1,000+ apps including HubSpot, Salesforce, Pipedrive, WhatsApp Business API, Slack, Google Workspace, and custom APIs.",
  },
  {
    question: "Is my data secure with ScriptZen?",
    answer:
      "Yes. We follow a security-first approach with strict access controls, private deployments where needed, and compliance-aligned architecture.",
  },
];
