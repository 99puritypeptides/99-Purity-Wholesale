# 99 Purity Wholesale — Wholesale B2B Website
## Complete Page-by-Page, Section-by-Section Build Plan

> **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · i18n (EN/ES)
> **Domain suggestion:** `wholesale.99puritypeptides.com` or `99ppwholesale.com`
> **Contact methods:** WhatsApp + Email only (no cart, no checkout)
> **Ads strategy:** Research-chemicals/B2B framing — see compliance section

---

## ⚠️ ADS COMPLIANCE STRATEGY (Read First)

Peptide websites face constant ad disapproval on Google, Meta, and Instagram. Plan around this from day one:

### Safe ad angles (what to run)
- **Google Search ads** — target B2B, research-supply, and compounding-pharmacy queries. Avoid drug-name keywords. Use brand + "wholesale supplier" + "bulk peptide supply."
- **Native/programmatic ads** (Outbrain, Taboola) — science and wellness publications.
- **LinkedIn ads** — target: compounding pharmacies, wellness clinics, supplement formulators, medical spas, anti-aging practices. This is your best paid channel.
- **Reddit ads** — r/Nootropics, r/Peptides communities (B2B angle).
- **Email marketing** — build a list; it's owned and algorithm-proof.

### Language rules for all ad copy and landing pages
- NEVER say: "treats," "cures," "clinical use," "injection," "patient," "prescription."
- ALWAYS say: "research-grade," "laboratory use," "for licensed professionals," "analytical standards," "bulk supply for licensed facilities."
- Every page must carry a **research-use disclaimer** in the footer and on product pages.
- No before/after imagery anywhere on the site.
- No claims about weight loss, muscle growth, or anti-aging results.

### Technical compliance
- Add `noindex` meta to price/catalog pages (avoids Google Shopping policy flags).
- Do NOT run Google Shopping campaigns.
- Use a separate landing page domain for any paid campaigns (thin sites without product names in URLs).

---

## SITE ARCHITECTURE

```
/                          → Homepage (EN)
/es                        → Homepage (ES)
/products                  → All Products Index
/products/[category]       → Category page
/products/[category]/[slug]→ Individual product page
/about                     → About Us
/services                  → B2B Services
/quality                   → Quality & COA Hub
/locations                 → Location/Market pages
/locations/[state-city]    → Individual location pages
/contact                   → Contact page
/wholesale-application     → Wholesale account form (WhatsApp/email CTA)
/blog                      → SEO content hub
/blog/[slug]               → Blog post
/legal/disclaimer          → Research use disclaimer
/legal/privacy             → Privacy policy
/legal/terms               → Terms of service
```

---

## PAGE 1 — HOMEPAGE (`/` and `/es`)

### Section 1.1 — Top Announcement Bar
- "For Licensed Professionals & Researchers Only · Research-Grade Peptides · ≥99% Purity Guaranteed"
- Language toggle: EN | ES
- WhatsApp icon with phone number, always visible

### Section 1.2 — Hero
**Headline (EN):** "America's Trusted Wholesale Peptide Supplier"
**Subheadline:** "U.S.-manufactured, 99%+ purity peptides — bulk pricing for compounding pharmacies, wellness clinics, and licensed distributors."
**CTA buttons:**
- Primary: "Request Wholesale Pricing" → opens WhatsApp
- Secondary: "View Product Catalog" → /products
**Trust badges row:** 🇺🇸 Made in America · ≥99% Purity · Batch-Matched COAs · 50+ Products · B2B Only
**Background:** dark pharmaceutical aesthetic, molecular structure graphic (SVG, not real drug imagery)

**ES version headline:** "El Proveedor Mayorista de Péptidos de Confianza en América"

### Section 1.3 — Why Choose 99 Purity Wholesale (Differentiators)
4-column card grid:

| Card | Headline | Body |
|------|----------|------|
| 🔬 | U.S.-Based Laboratory | Manufactured in America — not imported, not repackaged. Every batch produced under strict quality standards in our U.S. facility. |
| 📋 | Batch-Matched COA on Every Order | Third-party verified Certificates of Analysis for every product, every batch. No guessing. No excuses. |
| 💰 | Tiered Wholesale Pricing | Volume-based pricing with 4 tiers (Start → T1 → T2 → T3). The more you order, the more you save. |
| 🤝 | Full B2B Support | We don't just ship product. We help you launch, grow, and scale — from dropshipping to private label consulting. |

### Section 1.4 — Product Categories Preview
Grid of 6 category cards, each with a brief descriptor and "View Products →" CTA:
1. GLP-1 / Weight Management Peptides
2. Growth Hormone Peptides
3. Healing & Recovery Peptides
4. Cognitive & Nootropic Peptides
5. Anti-Aging & Longevity Peptides
6. Cosmetic / Aesthetic Peptides

### Section 1.5 — COA & Quality Assurance Hub (Homepage Teaser)
**Headline:** "Proof in Every Vial"
**Copy:** "We don't ask you to trust us. We give you the data. Every product in our catalog is backed by third-party, batch-matched Certificates of Analysis — downloadable, shareable, and tied to your specific order."
- 3 featured products with COA download buttons (PDF links)
- "View All COAs →" → /quality
**Visual:** COA document preview mockup

### Section 1.6 — Wholesale Tier Breakdown
Replicate and expand your catalog's tier system visually:
- **Start Tier** — Minimum entry order, ideal for new practices starting their peptide program
- **Tier 1** — Growing clinics, consistent monthly reorder
- **Tier 2** — Established distributors, multi-location operations
- **Tier 3** — High-volume buyers, compounding pharmacies, regional distributors
CTA: "Find Out Which Tier You Qualify For" → WhatsApp

### Section 1.7 — Services Teaser
**Headline:** "We Build Peptide Businesses, Not Just Orders"
Brief 3-point summary of services (dropshipping, business setup, website development), with "Learn More →" → /services

### Section 1.8 — Social Proof / Trust Section
- Partner logos (if available) or "Trusted by 200+ clinics and distributors across the U.S."
- 2–3 anonymized testimonials (e.g., "A compounding pharmacy in Texas" — keep HIPAA/identity neutral)
- Key stats: 50+ peptides in catalog · 4 pricing tiers · Ships from the U.S. · COA on every batch

### Section 1.9 — Contact / WhatsApp CTA Banner
**Full-width section:**
"Ready to place a bulk order or get wholesale pricing? Talk to our team directly."
- WhatsApp button: "Chat on WhatsApp"
- Email button: "Send an Email"
- Response time: "Typical reply within 2 business hours"

### Section 1.10 — Footer
- Logo · tagline · links
- Legal disclaimer: *"All products are sold strictly for research and laboratory use by licensed professionals. Not for human consumption. Not for retail sale."*
- Links: Disclaimer · Privacy · Terms · Contact
- Language switcher
- Payment methods accepted: Bitcoin · Zelle · Stripe · Bank Transfer

---

## PAGE 2 — PRODUCTS INDEX (`/products`)

### Section 2.1 — Page Hero
**H1:** "Wholesale Peptide Catalog — Bulk Research-Grade Supply"
**Subheading:** "U.S.-manufactured peptides with ≥99% purity. Minimum order quantities apply. Contact us for current tier pricing."
Research-use disclaimer banner

### Section 2.2 — Category Grid
6 large category cards with:
- Category name
- Number of products
- Top 3 example products listed
- "View Category →" link

**Categories:**

#### Cat 1: GLP-1 & Metabolic Peptides
Products: Semaglutide, Tirzepatide, Retatrutide, Cagrilintide, Cagrisema, Dulaglutide
*Keyword angle:* "bulk GLP-1 peptides for licensed providers," "wholesale semaglutide supply"

#### Cat 2: Growth Hormone Peptides
Products: Ipamorelin, CJC-1295 (w/ DAC & no DAC), CJC+Ipamorelin blend, Sermorelin Acetate, Tesamorelin, GHRP-2, GHRP-6
*Keyword angle:* "bulk growth hormone secretagogues," "wholesale GHRP peptides"

#### Cat 3: Healing & Recovery Peptides
Products: BPC-157, TB-500, BPC+TB combos, LL37, KPV, B7-33
*Keyword angle:* "bulk BPC-157 wholesale," "peptide recovery compounds bulk order"

#### Cat 4: Cognitive & Nootropic Peptides
Products: Semax, Selank, Dihexa, Adamax, DSIP, FOXO4, FOXO4-DRI
*Keyword angle:* "nootropic peptides wholesale," "bulk cognitive peptides supplier"

#### Cat 5: Anti-Aging & Longevity
Products: Epithalon, MOTS-c, SS-31, Thymalin/Thymulin, Thymosin Alpha-1, NAD+, AOD9604
*Keyword angle:* "bulk anti-aging peptides," "longevity peptides wholesale USA"

#### Cat 6: Cosmetic & Aesthetic Peptides
Products: GHK-Cu, Snap-8, GLOW Blend, KLOW Blend, Adipotide/FTTP, 5-AMINO-1MQ
*Keyword angle:* "cosmetic peptides bulk supplier," "GHK-Cu wholesale"

#### Cat 7: Vitamins, Supplements & Ancillaries
Products: Glutathione, L-Carnitine, Lipo-C, MIC/Lipo-C+B12, B12, BAC Water, VIP
*Keyword angle:* "bulk injectable vitamins wholesale," "compounding ancillaries supplier"

### Section 2.3 — MOQ & Ordering Info
Simple table/info block:
- MOQ: 10 vials per product (as per catalog — all products listed as ×10 packs)
- Pricing: Tiered — contact for current pricing sheet
- Payment: Bitcoin · Zelle · Stripe · Bank Transfer
- Turnaround: X business days (fill in)

---

## PAGE 3 — CATEGORY PAGES (`/products/[category]`)

Example: `/products/glp1-metabolic-peptides`

### Section 3.1 — Category Hero
**H1:** "Wholesale GLP-1 & Metabolic Peptides — Bulk Supply for Licensed Providers"
**Description:** 2–3 sentences on the category, written for B2B buyers (compounding pharmacies, wellness clinics, medical spas). Include primary keywords naturally.

### Section 3.2 — Product Cards Grid
Each card contains:
- Product name (H3)
- Available specs/sizes (e.g., 5mg×10, 10mg×10, 15mg×10...)
- MOQ: 10 units per spec
- Tier label: Start / T1 / T2 / T3 (with "Contact for pricing" instead of showing prices — protects against ad policy issues)
- COA badge if available: "📋 COA Available"
- CTA: "Inquire on WhatsApp" (green button) + "Email Us About This Product"

### Section 3.3 — Category SEO Content Block
300–500 word section at the bottom (hidden behind "Read More" expand) with:
- What these peptides are used for in research
- Why sourcing quality matters for this category
- Why U.S.-manufactured matters for this category
- Keywords woven in naturally

### Section 3.4 — Related Categories
3 cards linking to other category pages

---

## PAGE 4 — INDIVIDUAL PRODUCT PAGES (`/products/[category]/[slug]`)

Example: `/products/glp1-metabolic-peptides/semaglutide`

### Section 4.1 — Product Header
- Product name (H1): "Semaglutide — Wholesale Bulk Supply"
- Purity badge: "≥99% Purity · U.S. Manufactured · Research Grade"
- Short description (2 sentences, B2B framing, no medical claims)

### Section 4.2 — Available Specifications & MOQ Table

| Specification | MOQ | Tier Pricing |
|--------------|-----|-------------|
| 10mg × 10 vials | 10 units | Contact for pricing |
| 15mg × 10 vials | 10 units | Contact for pricing |
| 20mg × 10 vials | 10 units | Contact for pricing |
| 30mg × 10 vials | 10 units | Contact for pricing |

*(Note: Showing tiers Start/T1/T2/T3 as labels is fine; avoid publishing actual dollar prices publicly if possible for ad compliance.)*

### Section 4.3 — Inquiry CTAs (Sticky on mobile)
- "💬 Inquire on WhatsApp" (large green button)
- "✉️ Email Us About This Product" (secondary button)
- Pre-filled WhatsApp message template: *"Hi, I'm interested in wholesale pricing for Semaglutide. My business type is [clinic/pharmacy/distributor]. Please send me more details."*

### Section 4.4 — Product Details
- CAS number (if appropriate for research positioning)
- Molecular formula
- Storage: "No cold chain required"
- Available sizes
- Packaging: lyophilized powder, sealed vials

### Section 4.5 — COA Download Section
"Certificates of Analysis — Batch-Verified Purity"
- Downloadable PDF link(s) for available batches
- "Need a COA for a specific batch? Contact us with your order number."
- Statement: "All 99 Purity Wholesale products are independently tested by third-party U.S. laboratories to confirm ≥99% purity."

### Section 4.6 — Research Context Block
150–300 words of factual, research-framed content about the compound. Written for knowledgeable B2B buyers. No medical claims. Citations to PubMed/NIH if desired for credibility.
*(Important: Frame as "studied in research contexts" not "used to treat")*

### Section 4.7 — Related Products
3–4 related products (same category or commonly paired compounds)

---

## PAGE 5 — QUALITY & COA HUB (`/quality`)

### Section 5.1 — Hero
**H1:** "Our Commitment to 99%+ Purity — Every Batch, Every Product"
**Subheading:** "We're not asking you to take our word for it. Every product in our wholesale catalog is backed by third-party, batch-matched Certificates of Analysis from accredited U.S. laboratories."

### Section 5.2 — How We Test
3-step visual process:
1. **Production** — Synthesized in our U.S.-based laboratory under strict quality controls
2. **Third-Party Testing** — Sent to independent, accredited U.S. labs for HPLC purity verification
3. **Batch-Matched COA** — Your shipment is tied to a specific batch; you can download its COA

### Section 5.3 — Why COAs Matter (Competitor Comparison)
Comparison table framing 99PP vs "typical overseas supplier":

| Factor | 99 Purity Wholesale | Typical Overseas Supplier |
|--------|-------------------|--------------------------|
| Manufacturing location | 🇺🇸 United States | Unknown / China / India |
| COA availability | Batch-matched, always | Generic or unavailable |
| Purity standard | ≥99% verified | Claimed only |
| Cold chain required | No | Often required |
| Regulatory traceability | U.S. standards | Varies |

### Section 5.4 — COA Download Library
Filterable list of available COA PDFs by product:
- Search/filter by product name
- "Download COA (PDF)" button per product
- Note: "Additional COAs available on request for specific batches"

### Section 5.5 — Laboratory Credentials
- U.S.-based manufacturing statement
- Third-party testing partner info (if publicly shareable)
- Purity guarantee statement

---

## PAGE 6 — ABOUT US (`/about`)

### Section 6.1 — Brand Story
**H1:** "Built in America. Trusted by Professionals Nationwide."
**Story:**
99 Purity Wholesale began with a simple conviction: the U.S. peptide market deserved a domestic supplier that professionals could actually trust. No repackaged imports. No mystery purity. No gray-zone sourcing.

We built our operation from the ground up — U.S. laboratory, U.S. testing, U.S. team — so that compounding pharmacies, wellness clinics, and licensed researchers would have a reliable domestic source for research-grade peptides at competitive wholesale pricing.

Today we serve 200+ B2B clients across [X] states, with 50+ products, tiered pricing, and full COA documentation on every order.

### Section 6.2 — Our Values (3-column)
- **Purity** — ≥99% on every product, verified by third-party labs, not just claimed
- **Transparency** — Every batch has a COA. No excuses, no exceptions.
- **Partnership** — We succeed when our clients succeed. That's why we offer business development services, not just product.

### Section 6.3 — The Team (Optional)
If comfortable showing team members, brief bios. If not, keep abstract: "Our team includes chemists, quality assurance specialists, and B2B supply chain professionals based in the United States."

### Section 6.4 — By the Numbers
- 50+ products in catalog
- 4 wholesale tiers
- ≥99% purity standard
- [X] states served
- [X] B2B clients
- U.S.-based lab & team

### Section 6.5 — WhatsApp CTA
"Have questions about our background, lab practices, or sourcing? We welcome the conversation." → WhatsApp + Email buttons

---

## PAGE 7 — SERVICES (`/services`)

**This is a key differentiator page.** Very few peptide wholesalers offer B2B business services.

### Section 7.1 — Hero
**H1:** "We Don't Just Supply Peptides — We Help You Build a Business Around Them"
**Subheading:** "Whether you're launching a new peptide line, growing an existing practice, or looking to offer peptide products without holding inventory — we have a program for you."

### Section 7.2 — Service Cards

#### Service 1: Dropshipping Program
**Headline:** "Sell Peptides Without Holding Inventory"
**Description:** Partner with 99 Purity Wholesale as your backend supplier. You take orders, we fulfill them — branded or white-label. Perfect for clinics wanting to offer a peptide line without the overhead of managing stock.
**CTA:** "Learn About Dropshipping" → WhatsApp

#### Service 2: New Business Launch Support
**Headline:** "Starting a Peptide Business? We'll Help You Launch."
**Description:** From product selection to pricing strategy, we've helped dozens of clinics and distributors build profitable peptide programs from scratch. We'll help you identify the right products for your market, set your pricing tiers, and get your first orders placed.
**CTA:** "Talk to Our Business Team" → WhatsApp

#### Service 3: Website Development
**Headline:** "We'll Build Your Retail Peptide Website"
**Description:** Need a customer-facing website to sell or present your peptide offerings? Our team has built compliant, professional peptide retail websites. We know the regulatory landscape, the ad compliance requirements, and the design that converts in this industry.
**CTA:** "Inquire About Website Services" → WhatsApp

#### Service 4: Sales & Distribution Development
**Headline:** "Grow Your Distribution Network"
**Description:** We work with established distributors to expand their territory. If you're already moving product and want to scale volume — reach new clinics, medical spas, or compounding customers — we can be your supply backbone with pricing that protects your margins.
**CTA:** "Discuss Distribution Partnership" → WhatsApp

#### Service 5: Private Label / White Label
**Headline:** "Your Brand. Our Product."
**Description:** Want to sell 99%+ purity peptides under your own brand? We offer private label packaging for qualifying volume accounts. Your logo, your label, our laboratory quality.
**CTA:** "Inquire About Private Label" → WhatsApp

#### Service 6: Order Fulfillment Consulting
**Headline:** "Just Get Orders — We Handle the Rest"
**Description:** Focus on marketing and client acquisition. We handle inventory, packing, COA documentation, and shipping. A true turnkey solution for lean peptide businesses.
**CTA:** "How It Works" → WhatsApp

### Section 7.3 — How to Get Started
3-step visual:
1. Contact us via WhatsApp or email
2. Tell us about your business and goals
3. We'll build a custom program for you

---

## PAGE 8 — LOCATIONS (`/locations`)

Purpose: Local SEO — rank for "peptide supplier [city/state]" searches.

### Section 8.1 — Hero
**H1:** "Wholesale Peptide Supplier — Serving Licensed Professionals Across the United States"
**Copy:** "99 Purity Wholesale ships from our U.S.-based laboratory to licensed buyers in all 50 states. Find information specific to your region, including state-specific compliance notes and local B2B market context."

### Section 8.2 — State/Region Grid
Cards for high-priority markets (build these pages first):

**Priority markets (build first):**
- Texas — Dallas, Houston, Austin
- Florida — Miami, Tampa, Orlando
- California — Los Angeles, San Diego, San Francisco
- New York — NYC, Long Island
- Arizona — Scottsdale, Phoenix
- Colorado — Denver, Colorado Springs
- Nevada — Las Vegas
- Georgia — Atlanta
- Illinois — Chicago

Each card: state name, city count, "View [State] →"

### Individual Location Page Structure (`/locations/texas-dallas`)

**H1:** "Wholesale Peptide Supplier in Dallas, Texas — Research-Grade Bulk Supply"

**Sections:**
- Local intro paragraph mentioning Dallas wellness/medical spa industry
- Why licensed Dallas-area professionals choose 99 Purity Wholesale
- Products popular in this market (based on category relevance)
- Compliance note for Texas (any state-specific research-use context)
- Contact CTA for Dallas-area buyers
- WhatsApp + Email CTAs

**Local keywords to target:**
- "peptide supplier Dallas"
- "wholesale peptides Texas"
- "bulk BPC-157 Dallas"
- "GLP-1 peptides wholesale Texas"
- "compounding peptide supplier Houston"

---

## PAGE 9 — CONTACT (`/contact`)

### Section 9.1 — Contact Hero
**H1:** "Get in Touch — Wholesale Inquiries Welcome"

### Section 9.2 — Contact Methods

**WhatsApp (Primary)**
Large green WhatsApp button
"For fastest response — message us directly on WhatsApp. Our team replies within 2 business hours during business days."
Pre-drafted message opener: "Hi, I'm interested in wholesale pricing for [product]. My business is a [type]."

**Email (Secondary)**
Email address with "mailto:" link
"Prefer email? Send us your inquiry and we'll respond within 1 business day."

**What to include in your message:**
- Your business type (clinic, pharmacy, distributor, etc.)
- Products you're interested in
- Approximate monthly volume
- State/location

### Section 9.3 — Wholesale Account Application
Simple info-capture (email-based, no database needed for MVP):
Fields: Business Name · Business Type · State · Primary Products of Interest · Estimated Monthly Volume · Preferred Contact Method
Submit → sends to your email (use Formspree or Resend for simple implementation)

### Section 9.4 — FAQ
- "Do you ship internationally?" — Currently U.S. only / or specify
- "What is the minimum order quantity?" — 10 units per product
- "Do you require a license to purchase?" — Yes, products are for licensed professionals and researchers only
- "How long does shipping take?" — X business days
- "Can I get a COA before ordering?" — Yes, available on request
- "Do you offer net terms?" — Contact us to discuss

---

## PAGE 10 — BLOG / CONTENT HUB (`/blog`)

**Purpose:** SEO, ad compliance (content pages are safer for running ads against), thought leadership.

### Recommended Blog Topics (first 12 posts):

**B2B / Industry**
1. "How to Start a Peptide Product Line for Your Wellness Clinic" (targets new business buyers)
2. "What Compounding Pharmacies Should Know About Sourcing Research-Grade Peptides"
3. "GLP-1 Peptides: What Licensed Distributors Need to Know in 2025"
4. "Understanding Wholesale Peptide Pricing Tiers — What the Numbers Actually Mean"

**Quality & Trust**
5. "Why COAs Matter: How to Read a Certificate of Analysis for Peptides"
6. "U.S.-Manufactured vs. Imported Peptides: What the Difference Means for Your Business"
7. "What ≥99% Purity Actually Means (and How It's Verified)"

**Product Education (research-framed)**
8. "BPC-157 in Research: An Overview for Scientific Professionals"
9. "The GLP-1 Peptide Class: A Research Summary for Medical Professionals"
10. "NAD+ and Longevity Research: What the Current Literature Shows"

**Business/Market**
11. "How to Launch a Dropship Peptide Business in 2025"
12. "Building a Compliant Peptide Website: What You Need to Know"

---

## PAGE 11 — LEGAL PAGES

### `/legal/disclaimer`
Research-use disclaimer — required on all pages, full text here.
Key language: "For research and laboratory use only. Not intended for human consumption. Not for retail sale. Must be used by licensed professionals in accordance with applicable laws."

### `/legal/privacy`
Standard privacy policy (cookie policy, data collection, GDPR basics if serving international)

### `/legal/terms`
Terms of service including B2B-only purchase terms, no resale to end consumers, buyer responsibility for compliance

---

## TECHNICAL BUILD NOTES (Next.js Specific)

### i18n Setup
Use `next-intl` or `next-i18next`. Folder structure:
```
/messages
  en.json
  es.json
```
Priority translation pages: Homepage, Products Index, Contact, Services, About.
Product pages: auto-translate descriptions, keep product names in English.

### WhatsApp CTA Implementation
```typescript
// utils/whatsapp.ts
export const buildWhatsAppURL = (product?: string) => {
  const phone = "1XXXXXXXXXX"; // your number
  const message = product
    ? `Hi, I'm interested in wholesale pricing for ${product}. My business is a `
    : `Hi, I'd like to learn about your wholesale pricing and tiers. My business is a `;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
```

Floating WhatsApp button: sticky on all pages, bottom-right, visible on mobile and desktop.

### SEO Setup
- `next-sitemap` for auto sitemap generation
- `next-seo` for meta tags
- Structured data: `Organization`, `Product` (LocalBusiness schema for location pages)
- Each page: unique H1, meta title (55 chars), meta description (150 chars)
- Image alt text on all images

### Performance
- All product images: WebP, lazy-loaded
- COA PDFs: hosted on CDN (Cloudflare R2 or AWS S3)
- Core Web Vitals target: LCP < 2.5s, CLS < 0.1

### Analytics
- Google Analytics 4 (with consent banner)
- Track: WhatsApp click events, email click events, COA downloads, catalog page views

---

## KEYWORD TARGETS (Priority List)

### Primary (High intent, B2B)
- "wholesale peptides USA"
- "bulk peptide supplier United States"
- "research grade peptides wholesale"
- "99 Purity Wholesale wholesale"
- "made in America peptides bulk"
- "US manufactured peptides supplier"

### Category-Level
- "wholesale BPC-157 bulk order"
- "bulk semaglutide wholesale supplier"
- "tirzepatide bulk peptide"
- "wholesale GLP-1 peptides"
- "bulk TB-500 supplier USA"
- "wholesale NAD+ peptides"
- "bulk GHK-Cu supplier"

### B2B Audience
- "peptide supplier for compounding pharmacy"
- "peptide wholesale for wellness clinic"
- "bulk peptides for medical spa"
- "peptide dropship program"
- "private label peptides USA"

### Long-tail / Intent
- "buy peptides in bulk for research"
- "peptide business startup supplier"
- "high purity peptides bulk order"
- "COA verified peptides wholesale"

### Spanish (ES)
- "péptidos al por mayor Estados Unidos"
- "proveedor mayorista de péptidos"
- "péptidos a granel fabricados en América"
- "péptidos de 99% pureza al por mayor"

---

## PHASE BUILD ORDER (Recommended)

### Phase 1 — MVP (Weeks 1–3)
- [ ] Homepage
- [ ] Products Index + 2 category pages (GLP-1 and Healing/Recovery — highest demand)
- [ ] Contact page
- [ ] About page
- [ ] Legal/Disclaimer page
- [ ] WhatsApp floating CTA on all pages
- [ ] Basic EN/ES i18n for homepage and contact

### Phase 2 — Content & SEO (Weeks 4–6)
- [ ] All 7 category pages
- [ ] Top 20 individual product pages (Semaglutide, Tirzepatide, BPC-157, TB-500, Ipamorelin, CJC-1295, NAD+, GHK-Cu, Epithalon, Retatrutide as priority)
- [ ] Quality/COA hub
- [ ] Services page
- [ ] 4 blog posts

### Phase 3 — Scale (Weeks 7–10)
- [ ] All product pages
- [ ] Location pages (top 5 states first)
- [ ] Remaining blog posts
- [ ] Full ES translation
- [ ] Wholesale application form
- [ ] Analytics & conversion tracking

---

## PAYMENT METHODS TO DISPLAY

Per catalog:
- **Bitcoin** — Preferred for privacy-conscious buyers
- **Zelle** — Fast U.S. bank transfers
- **Bank Transfer (ACH/Wire)** — For larger orders

Display these clearly on: Contact page, Product pages (in ordering info section), Footer.

---

## DESIGN DIRECTION NOTES

**Palette:** Deep navy/charcoal background, teal/cyan accent (#4FC3D0), white text — mirrors your existing catalog's branding. Professional, clinical, trustworthy.

**Typography:**
- Headings: Rajdhani (bold, technical) — already in your catalog
- Body: DM Sans (clean, readable)
- Code/specs: DM Mono (for purity numbers, molecular specs)

**Tone:** Professional, scientific, B2B. Not consumer wellness vibes. Think: pharma procurement meets premium supplier portal.

**Do not include:** Before/after photos, consumer-facing language, any imagery that could be interpreted as showing drug administration.

---

*Plan version 1.0 — 99 Purity Wholesale Wholesale B2B Website*
*Prepared based on wholesale catalog and brief provided.*
