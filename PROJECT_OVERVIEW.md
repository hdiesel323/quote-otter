# QuoteOtter - Project Overview

## 🦦 What Is QuoteOtter?

QuoteOtter is a **multi-vertical quote comparison platform** that connects consumers with service providers across 6 major categories and 46+ service types. Think "LendingTree meets HomeAdvisor" - users request quotes, we match them with verified professionals who compete for their business.

### Core Value Proposition
**"Compare quotes. Choose the best."**

Users fill out ONE form and receive multiple competitive quotes from pre-screened providers in their area. Completely free for consumers, we monetize through provider subscriptions and lead generation fees.

---

## 🎯 Current Status (MVP Stage)

### ✅ **What's Built:**

1. **Homepage**
   - Lead generation hero with geolocation & real-time ZIP validation
   - Popular services showcase (6 featured services)
   - Vertical tabs for browsing all 46+ categories
   - Testimonials section
   - Partner logos
   - How It Works, Why Choose Us, FAQ

2. **Template Engine**
   - Dynamic quote request system
   - Service-specific question flows
   - 6 templates ready (Roofing, Plumbing, HVAC, Auto Insurance, Home Insurance, Final Expense)
   - Add new services via configuration, not code

3. **Landing Pages**
   - Final Expense Insurance (complete)
   - Template ready for 45+ more services

4. **Service Categories**
   - 🏠 Home Services (12 categories)
   - 🛡️ Insurance (6 categories)
   - 🚚 Moving (3 categories)
   - ⚖️ Legal (8 categories)
   - 💰 Financial (7 categories)
   - 🚗 Auto (5 categories)

### 🚧 **In Progress:**

- Quote request flow (multi-step forms)
- Provider matching system
- Provider dashboard
- Email notifications

### 📋 **Not Yet Built:**

- User authentication/dashboard
- Payment processing for providers
- Review/rating system
- CRM integration
- Analytics tracking
- Blog/content section

---

## 📁 Project Structure

```
quote-otter/
├── app/                              # Next.js App Router
│   ├── page.tsx                     # Homepage
│   ├── layout.tsx                   # Root layout with headers/footers
│   ├── services/                    # Browse all services
│   │   └── page.tsx
│   ├── quotes/                      # Service-specific pages
│   │   ├── final-expense/
│   │   │   └── page.tsx            # Landing page example
│   │   └── [slug]/                 # Dynamic route (placeholder)
│   │       └── request/            # Quote request flow (TODO)
│   ├── blog/                        # Blog system (from boilerplate)
│   ├── dashboard/                   # User dashboard (needs work)
│   └── api/                         # API routes
│       ├── auth/                    # NextAuth.js
│       ├── stripe/                  # Payment webhooks
│       └── webhook/
│
├── components/                       # React components
│   ├── HeaderQuoteOtter.tsx        # Main navigation
│   ├── FooterQuoteOtter.tsx        # Footer
│   ├── LeadGenHero.tsx             # Homepage hero with smart form
│   ├── PopularServicesSimple.tsx   # Featured services
│   ├── VerticalTabs.tsx            # Browse by category
│   ├── Testimonials.tsx            # Customer testimonials
│   ├── PartnerLogos.tsx            # Trust indicators
│   ├── insurance/                   # Legacy components
│   │   ├── HowItWorks.tsx
│   │   └── WhyChooseUs.tsx
│   ├── verticals/                   # Multi-vertical components
│   │   └── UniversalHero.tsx       # Old hero (replaced)
│   └── quote-flow/                  # Quote flow engine (TODO)
│
├── types/                           # TypeScript definitions
│   ├── verticals.ts                # Service categories & verticals
│   └── quote-templates.ts          # Quote template system types
│
├── lib/                             # Business logic & utilities
│   ├── quote-templates/            # Quote request templates
│   │   ├── index.ts               # Template registry
│   │   ├── home-services.ts       # Roofing, Plumbing, HVAC templates
│   │   └── insurance-services.ts  # Auto, Home, Final Expense templates
│   ├── insurance-constants.ts      # Service category mappings
│   └── next-auth.js               # Auth configuration
│
├── libs/                            # Third-party integrations
│   ├── mongoose.js                 # MongoDB connection
│   ├── resend.js                   # Email service
│   └── stripe.js                   # Payment processing
│
├── models/                          # Database models (Mongoose)
│   ├── User.js
│   └── Lead.js
│
├── public/                          # Static assets
│   └── (various images, icons)
│
├── config.ts                        # App configuration
├── next.config.js                   # Next.js settings
├── tailwind.config.js              # Tailwind CSS
└── package.json                     # Dependencies
```

---

## 🏗️ Architecture Overview

### **Frontend Stack**
- **Next.js 15.4.6** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **PrimeReact 10.6.3** (UI components)

### **Backend/Services**
- **NextAuth.js** - Authentication
- **MongoDB** - Database (optional for MVP)
- **Resend** - Email service
- **Stripe** - Payment processing (for provider subscriptions)

### **Key Architectural Decisions**

1. **Template-Driven Quote System**
   - Services defined as data, not code
   - Add new service = create template config
   - Single flow engine renders all templates
   - Scales to 100+ services without code changes

2. **Multi-Vertical Design**
   - NOT just insurance (unlike competitors)
   - 6 major verticals, 46+ services
   - Shared components, vertical-specific logic
   - Each vertical can have custom questions

3. **Lead Generation Focus**
   - Optimized for conversions
   - Multiple CTAs throughout
   - Trust signals everywhere
   - Mobile-first responsive design

4. **SEO-Ready Structure**
   - Service-specific landing pages
   - Proper meta tags
   - Clean URL structure (`/quotes/service-name`)
   - Next.js static generation where possible

---

## 🔑 Key Features

### **Smart Form UX**
- **Geolocation** - "Use my location" auto-fills ZIP
- **Real-time validation** - ZIP validated as you type
- **Location display** - Shows city/state when valid
- **Grouped dropdown** - Services organized by vertical
- **Visual feedback** - Color-coded states, loading indicators

### **Template System**
```typescript
// Adding a new service is this simple:
export const electricalTemplate: QuoteTemplate = {
  serviceId: 'electrical',
  serviceName: 'Electrical',
  serviceSlug: 'electrical',
  vertical: 'home',
  steps: [
    {
      id: 'project-details',
      questions: [
        {
          id: 'work-type',
          type: 'select',
          label: 'What type of electrical work?',
          options: [...]
        }
      ]
    }
  ]
};
```

### **Question Types Supported**
- text / textarea
- select / multiselect
- number (with validation)
- date picker
- boolean (yes/no)
- file upload
- address autocomplete
- scale (1-10 slider)

---

## 🎨 Design System

### **Colors**
- **Primary:** Indigo (600-700)
- **Secondary:** Purple (600-700)
- **Accent:** Green (for CTAs)
- **Gradients:** Blue→Indigo→Purple

### **Typography**
- **Headings:** Inter (from Next.js font optimization)
- **Body:** System font stack
- **Sizes:** 4xl-6xl for heroes, xl-2xl for sections

### **Components**
- Cards with shadow-lg hover:shadow-xl
- Rounded corners (rounded-xl, rounded-2xl)
- Gradient backgrounds for heroes
- PrimeReact components for forms

---

## 🔄 User Flow

### **Primary Flow:**
```
Homepage
  ↓
Select Service (dropdown or browse)
  ↓
Enter ZIP Code (with geolocation)
  ↓
Submit
  ↓
Quote Request Flow (TODO)
  ↓
Match with Providers (TODO)
  ↓
Receive Quotes
```

### **Alternative Flow:**
```
Landing Page (e.g., /quotes/final-expense)
  ↓
Click "Get Free Quote"
  ↓
Quote Request Flow
  ↓
Match & Receive Quotes
```

---

## 🎯 Business Model

### **Revenue Streams**

1. **Pay-Per-Lead**
   - Providers pay $X per qualified lead
   - Varies by service type and location
   - Lead shared with 3-5 competing providers

2. **Provider Subscriptions** (Future)
   - Monthly subscription for lead access
   - Tiered pricing based on volume
   - Dashboard to manage leads

3. **Featured Placement** (Future)
   - Providers pay to be featured first
   - "Sponsored" badges
   - Premium placement in results

### **Target Providers**
- Local contractors (plumbers, electricians, roofers)
- Insurance agencies
- Moving companies
- Legal practices
- Financial advisors
- Auto service centers

---

## 📊 Competitive Landscape

### **Direct Competitors**
- **Billy.com** - Multi-vertical quote platform
- **HomeAdvisor** - Home services focus
- **Angie's List** - Reviews + quote requests
- **Thumbtack** - Service marketplace

### **Vertical-Specific Competitors**
- **Insurance:** QuoteWizard, PolicyGenius
- **Home:** Porch, HomeStars
- **Legal:** LegalZoom, Avvo
- **Financial:** LendingTree, Bankrate

### **Our Differentiators**
1. **Cleaner UX** - Modern design, better flow
2. **Template system** - Add services faster
3. **Multi-vertical** - One platform for everything
4. **Smart form UX** - Geolocation, real-time validation
5. **SEO-focused** - Proper landing pages for each service

---

## 🚀 Getting Started (Quick)

1. **Clone & Install:**
   ```bash
   git clone https://github.com/hdiesel323/quote-otter.git
   cd quote-otter
   npm install
   ```

2. **Set Environment Variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```

4. **Open Browser:**
   ```
   http://localhost:3000
   ```

See `DEPLOYMENT.md` for production deployment guide.

---

## 🧪 Testing

**Currently:** Manual testing only

**TODO:** 
- Unit tests for quote templates
- Integration tests for form flows
- E2E tests for critical paths
- Test coverage targets

---

## 📈 Metrics to Track (When Live)

### **Conversion Funnel**
1. Homepage visits
2. Service selections
3. Form starts
4. Form completions
5. Quote requests submitted
6. Providers matched
7. User conversions

### **Key Metrics**
- **Conversion rate** (visitors → quote requests)
- **Cost per lead** (marketing spend / leads)
- **Provider match rate** (requests → matched providers)
- **Time to quote** (submission → first provider response)
- **User satisfaction** (NPS score, reviews)

---

## 🛠️ Development Workflow

1. **Feature branches** from `main`
2. **Commit messages** should be descriptive
3. **Test locally** before pushing
4. **Build succeeds** before merging
5. **Deploy** to staging → production

---

## 📚 Key Documentation

- `PROJECT_OVERVIEW.md` (this file) - Project introduction
- `DEPLOYMENT.md` - Full deployment guide
- `QUOTE_FLOW_ARCHITECTURE.md` - Template system deep dive
- `IMPROVEMENT_SUGGESTIONS.md` - Future enhancements
- `START.md` - Quick start guide
- `README.md` - High-level overview

---

## 🤝 Contributing

### **Adding a New Service**

1. **Create template** in `lib/quote-templates/[vertical]-services.ts`
2. **Add to registry** in `lib/quote-templates/index.ts`
3. **Add to categories** in `types/verticals.ts`
4. **Create landing page** at `app/quotes/[slug]/page.tsx`
5. **Test the flow**
6. **Deploy**

### **Code Style**
- Use TypeScript for everything
- Follow existing patterns
- Keep components small and focused
- Comment complex logic
- Use Tailwind utility classes

---

## 🐛 Known Issues

1. **Quote flow not complete** - Forms go nowhere yet
2. **No provider matching** - Mock data only
3. **Email notifications disabled** - Need Resend API key
4. **Auth is optional** - MongoDB URI needed for full auth
5. **Stripe not configured** - Payment features disabled

---

## 📞 Support & Questions

For questions or issues:
1. Check documentation files
2. Review existing code patterns
3. Ask in project chat/Slack
4. Contact: [your-email]

---

## 🎯 Next Milestones

1. **Build quote flow engine** (4-6 hours)
2. **Create 10 landing pages** (20-30 hours)
3. **Provider matching system** (8-10 hours)
4. **Email notifications** (3-4 hours)
5. **Deploy to production** (2-3 hours)
6. **Provider dashboard** (20-30 hours)
7. **Analytics integration** (3-4 hours)

---

**Last Updated:** 2025-01-05
**Version:** 0.1.0 (MVP)
**Status:** In Development
