# ScriptZen Website — Test Plan

App under test: local production build at `http://localhost:3000` (PR #1, branch `devin/1783024853-scriptzen-website`).

Evidence basis: `src/components/layout/ThemeToggle.tsx`, `src/components/layout/FloatingWhatsApp.tsx`, `src/components/forms/ConsultationForm.tsx`, `src/app/api/contact/route.ts`, `src/components/blog/BlogList.tsx`, `src/lib/blog.ts`, `src/components/ui/FAQAccordion.tsx`.

## Test 1 — Home hero renders (primary landing)
- Navigate to `/`.
- PASS: H1 reads exactly "Automate Your Business with AI"; two CTAs visible ("Book Free Consultation", "Get Started"); stats row shows 4 values (120k+, 180+, 950+, 98%).
- Broken-looks-different: if styling/data broke, hero text or stats would be missing.

## Test 2 — Dark/Light theme toggle (main interactive feature)
- Default load should be dark (dark background). Click the theme toggle button (sun/moon icon, top-right of navbar).
- PASS: page background switches from near-black (dark) to white (light); toggle icon flips (sun↔moon). Click again returns to dark.
- Broken-looks-different: if `next-themes`/`.dark` variant wiring broke, colors would not change.

## Test 3 — Services page + FAQ accordion
- Navigate to `/services`. Confirm all 8 service section headings present (AI Chatbots … Custom AI Development).
- Under one service, click a FAQ question.
- PASS: the answer text expands into view (e.g. AI Chatbots "How long does it take to launch..." reveals "Most chatbots go live within 1–2 weeks...").
- Broken-looks-different: accordion is closed by default per-service; a broken toggle would show no answer.

## Test 4 — Blog category filter
- Navigate to `/blog`. Count post cards = 6 (all posts).
- Click the "Chatbots" category tab.
- PASS: exactly 1 card remains — "AI Chatbots vs. Live Chat: Which Is Right for Your Business?". Click "All" restores 6.
- Broken-looks-different: if filter state broke, all 6 would remain after clicking Chatbots.

## Test 5 — Contact form success (lead capture golden path)
- Navigate to `/contact`. Fill Full name = "Jane Doe", Work email = "jane@company.com", message = "Please automate our lead flow." Submit "Book My Free Consultation".
- PASS: form is replaced by a success panel with heading "Request received!" and text "Thanks! We'll be in touch within one business day."
- Broken-looks-different: if API/route or client handler broke, an error message would show instead.

## Test 6 — Contact form validation (adversarial negative)
- On `/contact`, submit the form with all fields empty.
- PASS: a red error message appears reading exactly "Please fill in your name, email, and message." and no success panel appears.
- Broken-looks-different: a broken validation path would either show success or a native browser popup (form uses `noValidate`, so the server 422 path must be exercised).

## Test 7 — Floating WhatsApp button (conversion element)
- On any page, confirm the green floating WhatsApp button is fixed at bottom-right.
- PASS: hovering/clicking targets `https://wa.me/15550123456?text=...` (href contains `wa.me/15550123456`).
- Broken-looks-different: missing button or wrong href would indicate broken conversion wiring.
