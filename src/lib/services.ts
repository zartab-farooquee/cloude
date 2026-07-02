export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  icon: string; // lucide-react icon name
  title: string;
  short: string;
  description: string;
  keywords: string[];
  benefits: string[];
  process: { step: string; detail: string }[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "ai-chatbots",
    icon: "MessageSquareBot",
    title: "AI Chatbots",
    short:
      "24/7 conversational AI that answers questions, qualifies leads, and books meetings automatically.",
    description:
      "Deploy intelligent AI chatbots trained on your business knowledge to handle customer support, capture leads, and guide visitors to conversion around the clock. Our chatbots understand context, hand off to humans when needed, and integrate with your CRM, help desk, and messaging channels.",
    keywords: [
      "AI Chatbot Development",
      "conversational AI",
      "customer support automation",
      "lead qualification chatbot",
    ],
    benefits: [
      "Instant, 24/7 responses that cut first-response time to seconds",
      "Qualify and route leads automatically before they go cold",
      "Deflect up to 70% of repetitive support tickets",
      "Trained on your docs, FAQs, and product data for accurate answers",
    ],
    process: [
      { step: "Discovery", detail: "We map your top use cases, FAQs, and conversion goals." },
      { step: "Knowledge Training", detail: "We ingest your content and tune responses for accuracy and tone." },
      { step: "Integration", detail: "We connect the bot to your website, CRM, and messaging channels." },
      { step: "Optimize", detail: "We monitor conversations and continuously improve resolution rates." },
    ],
    faqs: [
      {
        question: "How long does it take to launch an AI chatbot?",
        answer:
          "Most chatbots go live within 1–2 weeks depending on the number of integrations and the size of your knowledge base.",
      },
      {
        question: "Can the chatbot hand off to a human agent?",
        answer:
          "Yes. We configure smart escalation rules so complex conversations are routed to your team with full context.",
      },
      {
        question: "Which platforms do you support?",
        answer:
          "Website widgets, WhatsApp, Messenger, Instagram, Slack, and most major help desks and CRMs.",
      },
    ],
  },
  {
    slug: "ai-voice-agents",
    icon: "PhoneCall",
    title: "AI Voice Agents",
    short:
      "Human-like AI voice agents that handle inbound and outbound calls, bookings, and follow-ups.",
    description:
      "Never miss a call again. Our AI voice agents answer inbound calls, make outbound follow-ups, book appointments, and update your CRM in real time — with natural, human-like speech in multiple languages. Perfect for scaling sales and support without scaling headcount.",
    keywords: [
      "AI Voice Agent Development",
      "voice AI",
      "AI call automation",
      "conversational voice assistant",
    ],
    benefits: [
      "Answer 100% of calls, even after hours and during peak volume",
      "Book appointments and update your CRM automatically",
      "Consistent, on-brand conversations every time",
      "Reduce staffing costs while improving response times",
    ],
    process: [
      { step: "Script & Persona", detail: "We design call flows, guardrails, and a branded voice persona." },
      { step: "Telephony Setup", detail: "We connect your numbers, SIP, or call platform." },
      { step: "Integrate", detail: "We sync calendars, CRM, and knowledge sources." },
      { step: "Launch & Tune", detail: "We review transcripts and refine intent handling." },
    ],
    faqs: [
      {
        question: "Do the voice agents sound robotic?",
        answer:
          "No. We use the latest neural voice models with natural pacing, interruption handling, and multilingual support.",
      },
      {
        question: "Can voice agents make outbound calls?",
        answer:
          "Yes — for lead follow-up, appointment reminders, surveys, and reactivation campaigns, subject to local calling regulations.",
      },
      {
        question: "How do they integrate with my calendar?",
        answer:
          "We connect to Google Calendar, Outlook, Calendly, and most scheduling tools to book and reschedule in real time.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    icon: "Workflow",
    title: "Workflow Automation",
    short:
      "Connect your apps and automate multi-step business processes end to end.",
    description:
      "Eliminate manual, repetitive work by automating entire workflows across your tools. From data entry and document generation to approvals and notifications, we design reliable automations that run 24/7 so your team can focus on high-value work.",
    keywords: [
      "AI Workflow Automation",
      "Business Process Automation",
      "workflow orchestration",
      "no-code automation",
    ],
    benefits: [
      "Remove hours of manual data entry every week",
      "Reduce human error with consistent, rule-based processes",
      "Connect 1,000+ apps into one seamless workflow",
      "Scale operations without adding headcount",
    ],
    process: [
      { step: "Process Audit", detail: "We map current workflows and find automation opportunities." },
      { step: "Design", detail: "We architect resilient automations with error handling." },
      { step: "Build & Test", detail: "We implement, test edge cases, and document each flow." },
      { step: "Monitor", detail: "We add alerting and optimize as your needs evolve." },
    ],
    faqs: [
      {
        question: "Which tools can you connect?",
        answer:
          "We work with n8n, Make, Zapier, and custom APIs to integrate CRMs, spreadsheets, databases, email, and more.",
      },
      {
        question: "What happens if an automation fails?",
        answer:
          "We build in retries, alerts, and fallbacks so issues are caught and resolved before they impact your business.",
      },
      {
        question: "Do I need to change my existing tools?",
        answer:
          "Usually not. We automate around your current stack to minimize disruption.",
      },
    ],
  },
  {
    slug: "whatsapp-automation",
    icon: "MessageCircle",
    title: "WhatsApp Automation",
    short:
      "Automate WhatsApp conversations, broadcasts, and support with the official Business API.",
    description:
      "Reach customers where they already are. We set up WhatsApp automation with AI replies, broadcast campaigns, order updates, appointment reminders, and lead capture — all on the official WhatsApp Business API with full compliance.",
    keywords: [
      "WhatsApp Automation",
      "WhatsApp Business API",
      "WhatsApp chatbot",
      "conversational marketing",
    ],
    benefits: [
      "98% open rates compared to email marketing",
      "Instant automated replies and 24/7 lead capture",
      "Send order updates, reminders, and broadcasts at scale",
      "Fully compliant on the official WhatsApp Business API",
    ],
    process: [
      { step: "Onboarding", detail: "We set up your verified WhatsApp Business account." },
      { step: "Flows", detail: "We design automated conversation flows and templates." },
      { step: "Integrate", detail: "We connect your CRM, catalog, and payment tools." },
      { step: "Grow", detail: "We optimize campaigns and automations for conversions." },
    ],
    faqs: [
      {
        question: "Is WhatsApp automation compliant?",
        answer:
          "Yes. We use the official WhatsApp Business API and follow Meta's messaging policies and opt-in requirements.",
      },
      {
        question: "Can I send marketing broadcasts?",
        answer:
          "Yes, using approved message templates to opted-in contacts for promotions, updates, and re-engagement.",
      },
      {
        question: "Can it handle customer support?",
        answer:
          "Absolutely — AI handles common questions and hands off to your team for anything complex.",
      },
    ],
  },
  {
    slug: "crm-automation",
    icon: "Database",
    title: "CRM Automation",
    short:
      "Keep your CRM clean, updated, and working for you with automated pipelines and enrichment.",
    description:
      "Turn your CRM into a growth engine. We automate lead capture, data enrichment, pipeline updates, task creation, and reporting so your sales team spends time selling — not updating records. Works with HubSpot, Salesforce, Pipedrive, GoHighLevel, and more.",
    keywords: [
      "CRM Automation",
      "sales automation",
      "HubSpot automation",
      "pipeline automation",
    ],
    benefits: [
      "Auto-capture and enrich every lead with zero manual entry",
      "Trigger follow-ups and tasks at the right moment",
      "Real-time dashboards and pipeline visibility",
      "Clean, deduplicated data your team can trust",
    ],
    process: [
      { step: "Audit", detail: "We review your CRM setup, data quality, and pipeline." },
      { step: "Automate", detail: "We build lead routing, enrichment, and task automations." },
      { step: "Integrate", detail: "We connect forms, ads, email, and calling tools." },
      { step: "Report", detail: "We set up dashboards and revenue reporting." },
    ],
    faqs: [
      {
        question: "Which CRMs do you support?",
        answer:
          "HubSpot, Salesforce, Pipedrive, Zoho, GoHighLevel, and most modern CRMs with an API.",
      },
      {
        question: "Can you migrate data between CRMs?",
        answer:
          "Yes — we handle clean migrations with deduplication and field mapping.",
      },
      {
        question: "Will this replace my sales team?",
        answer:
          "No — it removes admin work so your reps can focus on relationships and closing deals.",
      },
    ],
  },
  {
    slug: "lead-generation-systems",
    icon: "Target",
    title: "Lead Generation Systems",
    short:
      "Automated, multi-channel systems that fill your pipeline with qualified leads.",
    description:
      "Build a predictable pipeline with automated lead generation. We combine AI outreach, enrichment, scraping, and multi-channel sequences to identify, engage, and qualify prospects — then deliver them straight into your CRM ready for your sales team.",
    keywords: [
      "lead generation systems",
      "automated outreach",
      "B2B lead generation",
      "AI prospecting",
    ],
    benefits: [
      "Predictable flow of qualified leads every month",
      "Personalized outreach at scale with AI",
      "Automatic enrichment and lead scoring",
      "Leads delivered directly into your CRM",
    ],
    process: [
      { step: "ICP Definition", detail: "We define your ideal customer profile and channels." },
      { step: "Build Engine", detail: "We set up sourcing, enrichment, and outreach sequences." },
      { step: "Qualify", detail: "We score and route leads based on intent signals." },
      { step: "Scale", detail: "We optimize messaging and expand winning channels." },
    ],
    faqs: [
      {
        question: "Which channels do you use?",
        answer:
          "Email, LinkedIn, WhatsApp, and paid channels — orchestrated into cohesive, compliant sequences.",
      },
      {
        question: "How do you ensure lead quality?",
        answer:
          "We enrich, verify, and score every lead so your team only works genuinely qualified prospects.",
      },
      {
        question: "Is the outreach compliant?",
        answer:
          "Yes — we follow anti-spam and data protection rules including opt-outs and sending limits.",
      },
    ],
  },
  {
    slug: "email-automation",
    icon: "Mail",
    title: "Email Automation",
    short:
      "Behavior-driven email sequences that nurture leads and drive repeat revenue on autopilot.",
    description:
      "Convert more leads with smart email automation. We design and build onboarding, nurture, re-engagement, and post-sale sequences triggered by real customer behavior — complete with segmentation, personalization, and deliverability best practices.",
    keywords: [
      "email automation",
      "email marketing automation",
      "drip campaigns",
      "lead nurturing",
    ],
    benefits: [
      "Nurture leads automatically until they're ready to buy",
      "Behavior-triggered sequences that feel personal",
      "Higher deliverability and inbox placement",
      "Recover abandoned carts and reactivate dormant customers",
    ],
    process: [
      { step: "Strategy", detail: "We map the customer journey and key trigger points." },
      { step: "Build", detail: "We create segments, sequences, and templates." },
      { step: "Deliverability", detail: "We set up authentication and warm-up for inbox placement." },
      { step: "Optimize", detail: "We A/B test and improve open, click, and conversion rates." },
    ],
    faqs: [
      {
        question: "Which email platforms do you use?",
        answer:
          "Klaviyo, Mailchimp, HubSpot, ActiveCampaign, Instantly, and custom SMTP setups.",
      },
      {
        question: "Can you improve my deliverability?",
        answer:
          "Yes — we handle SPF, DKIM, DMARC, list hygiene, and warm-up to keep you out of spam.",
      },
      {
        question: "Do you write the copy too?",
        answer:
          "Yes — our team writes conversion-focused, on-brand email copy for every sequence.",
      },
    ],
  },
  {
    slug: "custom-ai-development",
    icon: "Cpu",
    title: "Custom AI Development",
    short:
      "Bespoke AI agents, integrations, and tools built around your unique business processes.",
    description:
      "When off-the-shelf tools aren't enough, we build custom AI solutions tailored to your workflows — from autonomous AI agents and RAG knowledge assistants to internal tools and API integrations. Secure, scalable, and designed to deliver measurable ROI.",
    keywords: [
      "AI Agent Development",
      "custom AI development",
      "AI Solutions Company",
      "RAG knowledge assistant",
    ],
    benefits: [
      "Solutions built exactly for your processes and data",
      "Autonomous AI agents that complete multi-step tasks",
      "Secure, private deployments that protect your data",
      "Scalable architecture designed for measurable ROI",
    ],
    process: [
      { step: "Scoping", detail: "We define requirements, success metrics, and architecture." },
      { step: "Prototype", detail: "We build a working proof of concept fast." },
      { step: "Develop", detail: "We engineer a production-ready, secure solution." },
      { step: "Deploy & Support", detail: "We ship, monitor, and iterate with you." },
    ],
    faqs: [
      {
        question: "Do you build on OpenAI, Anthropic, or open-source models?",
        answer:
          "All of the above. We pick the right model for your accuracy, cost, and privacy requirements.",
      },
      {
        question: "How do you keep our data secure?",
        answer:
          "We support private deployments, data isolation, and strict access controls tailored to your compliance needs.",
      },
      {
        question: "What does a custom project cost?",
        answer:
          "It depends on scope. Book a free consultation and we'll provide a fixed, transparent quote.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
