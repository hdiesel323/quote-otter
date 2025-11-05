# 📋 QuoteOtter Product Backlog

**Last Updated:** 2025-11-05  
**Total Items:** 24  
**P0 Items:** 8  
**P1 Items:** 10  
**P2 Items:** 6

---

## 🎯 Backlog Overview

Items are prioritized using a modified MoSCoW method:
- **P0** - Must Have (Critical for MVP)
- **P1** - Should Have (Important for launch)
- **P2** - Could Have (Nice to have)
- **P3** - Won't Have (Future iterations)

**Estimation Scale:**
- **XS** - 1 point (~1-2 hours)
- **S** - 2-3 points (~3-6 hours)
- **M** - 5 points (~1-2 days)
- **L** - 8 points (~3-5 days)
- **XL** - 13+ points (~1-2 weeks)

---

## 🔥 P0 - Critical (Must Have for MVP)

### 1. Quote Flow Engine
**Priority:** P0  
**Estimate:** 8 points (L)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 1

**Description:**  
Build the core quote request flow system that renders templates dynamically and collects user responses.

**Acceptance Criteria:**
- [ ] Loads template by service slug
- [ ] Renders questions dynamically based on type
- [ ] Validates responses before advancing
- [ ] Shows progress indicator
- [ ] Allows back/next navigation
- [ ] Collects contact information
- [ ] Submits to API endpoint

**Dependencies:** None

**Related Files:**
- `/types/quote-templates.ts`
- `/lib/quote-templates/`

---

### 2. Question Components (7 types)
**Priority:** P0  
**Estimate:** 5 points (M)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 1

**Description:**  
Create reusable components for each question type used in templates.

**Acceptance Criteria:**
- [ ] Text input component with validation
- [ ] Select dropdown component
- [ ] Multi-select checkbox component
- [ ] Number input with min/max
- [ ] Date picker component
- [ ] Boolean yes/no component
- [ ] Textarea component
- [ ] All components styled consistently

**Dependencies:** None

---

### 3. Quote Data Storage
**Priority:** P0  
**Estimate:** 3 points (S)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 1

**Description:**  
API endpoint and data model to save quote requests.

**Acceptance Criteria:**
- [ ] POST `/api/quotes/submit` endpoint
- [ ] Validates incoming data
- [ ] Saves to database or file
- [ ] Returns quote ID
- [ ] Handles errors gracefully

**Dependencies:** None

---

### 4. Quote Request Pages (Dynamic Routes)
**Priority:** P0  
**Estimate:** 3 points (S)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 1

**Description:**  
Create dynamic routes for quote request flows for all services.

**Acceptance Criteria:**
- [ ] `/quotes/[slug]/request` page works
- [ ] Loads correct template by slug
- [ ] Shows 404 if template doesn't exist
- [ ] Integrates QuoteFlowEngine
- [ ] Redirects to confirmation on submit

**Dependencies:** #1 (Quote Flow Engine)

---

### 5. Quote Confirmation Page
**Priority:** P0  
**Estimate:** 2 points (XS)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 1

**Description:**  
Success page after quote submission with next steps.

**Acceptance Criteria:**
- [ ] Shows success message
- [ ] Displays quote ID
- [ ] Explains what happens next
- [ ] Links to homepage
- [ ] Optional: Email confirmation

**Dependencies:** #4 (Quote Request Pages)

---

### 6. Landing Pages (Initial 5)
**Priority:** P0  
**Estimate:** 10 points (L)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 1

**Description:**  
Create SEO-optimized landing pages for top 5 services.

**Services:**
1. Roofing
2. HVAC
3. Plumbing
4. Auto Insurance
5. Home Insurance

**Acceptance Criteria:**
- [ ] Each page has unique, relevant content
- [ ] Meta tags optimized (title, description, OG tags)
- [ ] Hero section with clear CTA
- [ ] Service benefits listed
- [ ] How it works section
- [ ] FAQ section
- [ ] CTA button links to `/quotes/[slug]/request`

**Dependencies:** None (can work in parallel)

---

### 7. Hero Form → Quote Flow Integration
**Priority:** P0  
**Estimate:** 2 points (XS)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 1

**Description:**  
Connect homepage hero form to quote request pages.

**Acceptance Criteria:**
- [ ] Form submission redirects to `/quotes/[slug]/request?zip=12345`
- [ ] ZIP code pre-fills in quote flow
- [ ] Service selection works
- [ ] Validates before redirect

**Dependencies:** #4 (Quote Request Pages)

---

### 8. Mobile Responsiveness (Quote Flow)
**Priority:** P0  
**Estimate:** 3 points (S)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 1

**Description:**  
Ensure quote flow works perfectly on mobile devices.

**Acceptance Criteria:**
- [ ] All question types work on mobile
- [ ] No horizontal scroll
- [ ] Touch targets are ≥44px
- [ ] Forms are easy to fill on phone
- [ ] Progress bar fits on screen
- [ ] Navigation buttons accessible

**Dependencies:** #1, #2 (Quote Flow + Questions)

---

## 🔶 P1 - High Priority (Should Have)

### 9. Provider Matching System
**Priority:** P1  
**Estimate:** 8 points (L)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 2

**Description:**  
Algorithm to match quote requests with relevant providers.

**Acceptance Criteria:**
- [ ] Matches based on service type
- [ ] Matches based on ZIP code
- [ ] Returns 3-5 providers
- [ ] Ranks by relevance
- [ ] Falls back if no matches

**Dependencies:** #3 (Quote Data Storage)

---

### 10. Provider Model & Seed Data
**Priority:** P1  
**Estimate:** 3 points (S)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 2

**Description:**  
Database model for providers + seed with test data.

**Acceptance Criteria:**
- [ ] Provider schema created
- [ ] Fields: name, services, zipCodes, rating, etc.
- [ ] Seed script with 20-30 providers
- [ ] Covers multiple service types
- [ ] Covers multiple ZIP codes

**Dependencies:** None

---

### 11. Email Notifications (Users)
**Priority:** P1  
**Estimate:** 5 points (M)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 2

**Description:**  
Send confirmation email to users after quote submission.

**Acceptance Criteria:**
- [ ] Email sent on successful submission
- [ ] Contains quote details
- [ ] Lists matched providers
- [ ] Branded template
- [ ] Uses Resend API

**Dependencies:** #3, #9 (Storage + Matching)

---

### 12. Landing Pages (Next 10)
**Priority:** P1  
**Estimate:** 13 points (XL)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 2-3

**Services:**
1. Electrical
2. Painting
3. Cleaning
4. Moving
5. Personal Injury
6. Auto Accident
7. Life Insurance
8. Health Insurance
9. Mortgage
10. Auto Repair

**Acceptance Criteria:**
- Same as #6 (Landing Pages Initial 5)

**Dependencies:** None

---

### 13. Quote Flow - File Upload
**Priority:** P1  
**Estimate:** 5 points (M)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 2

**Description:**  
Add support for photo uploads in quote requests.

**Acceptance Criteria:**
- [ ] FileQuestion component created
- [ ] Supports multiple files
- [ ] Shows preview
- [ ] Validates file type/size
- [ ] Uploads to S3 or local storage

**Dependencies:** #2 (Question Components)

---

### 14. Quote Flow - Address Autocomplete
**Priority:** P1  
**Estimate:** 3 points (S)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 2

**Description:**  
Add address autocomplete for property location questions.

**Acceptance Criteria:**
- [ ] AddressQuestion component created
- [ ] Uses Google Places API or similar
- [ ] Returns full address object
- [ ] Falls back to manual entry

**Dependencies:** #2 (Question Components)

---

### 15. Lead Dashboard (Basic)
**Priority:** P1  
**Estimate:** 5 points (M)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 3

**Description:**  
Internal dashboard to view submitted quote requests.

**Acceptance Criteria:**
- [ ] Lists all quote requests
- [ ] Shows key details (service, ZIP, date)
- [ ] Filters by service type
- [ ] Searches by ZIP or email
- [ ] Exports to CSV

**Dependencies:** #3 (Quote Data Storage)

---

### 16. Provider Dashboard - Login
**Priority:** P1  
**Estimate:** 5 points (M)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 3

**Description:**  
Authentication for providers to access dashboard.

**Acceptance Criteria:**
- [ ] Login page for providers
- [ ] Uses NextAuth
- [ ] Email/password auth
- [ ] Forgot password flow
- [ ] Protected routes

**Dependencies:** None

---

### 17. Provider Dashboard - Lead View
**Priority:** P1  
**Estimate:** 8 points (L)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 3-4

**Description:**  
Dashboard for providers to view leads sent to them.

**Acceptance Criteria:**
- [ ] Shows leads for logged-in provider
- [ ] Displays lead details
- [ ] Shows contact information (after payment?)
- [ ] Marks leads as contacted
- [ ] Tracks lead status

**Dependencies:** #16, #9 (Provider Auth + Matching)

---

### 18. SEO - Service Pages Metadata
**Priority:** P1  
**Estimate:** 3 points (S)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 3

**Description:**  
Optimize all service pages for search engines.

**Acceptance Criteria:**
- [ ] Unique title tags for each page
- [ ] Unique meta descriptions
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] Structured data (JSON-LD)

**Dependencies:** #6, #12 (Landing Pages)

---

### 19. Analytics Setup
**Priority:** P1  
**Estimate:** 2 points (XS)  
**Status:** 🔴 Not Started  
**Sprint:** Sprint 3

**Description:**  
Implement Google Analytics and event tracking.

**Acceptance Criteria:**
- [ ] GA4 installed
- [ ] Track page views
- [ ] Track form starts
- [ ] Track form submissions
- [ ] Track quote completions
- [ ] Track errors

**Dependencies:** None

---

## 🟡 P2 - Medium Priority (Could Have)

### 20. Quote Flow - Progress Saving
**Priority:** P2  
**Estimate:** 2 points (XS)  
**Status:** 🔴 Not Started  
**Sprint:** TBD

**Description:**  
Save form progress to localStorage and allow resume.

**Acceptance Criteria:**
- [ ] Saves on each step completion
- [ ] Restores on page reload
- [ ] Shows "Resume" option
- [ ] Clears on submission
- [ ] Expires after 7 days

**Dependencies:** #1 (Quote Flow Engine)

---

### 21. Provider Dashboard - Subscription System
**Priority:** P2  
**Estimate:** 13 points (XL)  
**Status:** 🔴 Not Started  
**Sprint:** TBD

**Description:**  
Stripe integration for provider subscriptions.

**Acceptance Criteria:**
- [ ] Pricing plans defined
- [ ] Checkout flow
- [ ] Subscription management
- [ ] Lead credits system
- [ ] Payment webhooks
- [ ] Invoice generation

**Dependencies:** #17 (Provider Dashboard)

---

### 22. User Reviews & Ratings
**Priority:** P2  
**Estimate:** 8 points (L)  
**Status:** 🔴 Not Started  
**Sprint:** TBD

**Description:**  
Allow users to rate and review providers.

**Acceptance Criteria:**
- [ ] Review submission form
- [ ] Star rating system
- [ ] Text review
- [ ] Moderation queue
- [ ] Display on provider profile
- [ ] Email request after job completion

**Dependencies:** #9 (Provider Matching)

---

### 23. Blog/Content System
**Priority:** P2  
**Estimate:** 5 points (M)  
**Status:** 🔴 Not Started  
**Sprint:** TBD

**Description:**  
Blog for SEO content marketing.

**Acceptance Criteria:**
- [ ] Blog listing page
- [ ] Individual post pages
- [ ] MDX support (already has)
- [ ] Categories/tags
- [ ] Related posts
- [ ] SEO optimized

**Dependencies:** None (already has `/app/blog`)

---

### 24. Multi-Language Support (Spanish)
**Priority:** P2  
**Estimate:** 13 points (XL)  
**Status:** 🔴 Not Started  
**Sprint:** TBD

**Description:**  
Add Spanish language support for all pages.

**Acceptance Criteria:**
- [ ] i18n setup (next-intl)
- [ ] All UI text translated
- [ ] Spanish landing pages
- [ ] Spanish templates
- [ ] Language switcher

**Dependencies:** All major features

---

### 25. Provider Onboarding Flow
**Priority:** P2  
**Estimate:** 8 points (L)  
**Status:** 🔴 Not Started  
**Sprint:** TBD

**Description:**  
Self-service onboarding for new providers.

**Acceptance Criteria:**
- [ ] Registration form
- [ ] Service selection
- [ ] Service area selection
- [ ] Business verification
- [ ] Profile setup
- [ ] Payment setup
- [ ] Email verification

**Dependencies:** #16 (Provider Dashboard)

---

### 26. CRM Integration (HubSpot/Salesforce)
**Priority:** P2  
**Estimate:** 5 points (M)  
**Status:** 🔴 Not Started  
**Sprint:** TBD

**Description:**  
Sync leads to external CRM system.

**Acceptance Criteria:**
- [ ] Choose CRM platform
- [ ] API integration
- [ ] Sync on quote submission
- [ ] Map fields correctly
- [ ] Handle errors/retries

**Dependencies:** #3 (Quote Data Storage)

---

## 📊 Backlog Statistics

### By Priority
- **P0:** 8 items (34 points)
- **P1:** 10 items (67 points)
- **P2:** 8 items (61 points)
- **Total:** 26 items (162 points)

### By Status
- 🔴 Not Started: 26
- 🟡 In Progress: 0
- 🟢 Completed: 0

### By Sprint
- **Sprint 1:** 8 items (36 points)
- **Sprint 2:** 4 items (24 points)
- **Sprint 3:** 5 items (28 points)
- **Unscheduled:** 9 items (74 points)

---

## 🔄 Recent Changes

**2025-11-05:**
- Created backlog
- Prioritized 26 items
- Assigned Sprint 1 items

---

**Next Review:** End of Sprint 1 (Jan 19, 2025)
