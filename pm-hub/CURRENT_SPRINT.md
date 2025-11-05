# 🚀 Sprint 1: Core Quote Flow & Landing Pages

**Sprint Dates:** January 6-19, 2025  
**Sprint Goal:** Build functional quote request flow + create 5 landing pages  
**Status:** 🟢 Active

---

## 📊 Sprint Metrics

- **Planned Story Points:** 34
- **Completed Story Points:** 0
- **Team Velocity:** TBD (first sprint)
- **Days Remaining:** 14

---

## 🎯 Sprint Goal

Enable users to complete a full quote request for at least 3 service types and create landing pages to drive traffic.

**Success Criteria:**
- [ ] User can submit quote request end-to-end
- [ ] Quote data is saved (MongoDB or local storage)
- [ ] 5 landing pages are live and SEO-optimized
- [ ] Mobile experience is smooth
- [ ] No critical bugs

---

## 📋 Sprint Backlog

### **P0 - Critical (Must Complete)**

#### 1. Quote Flow Engine - Core Components
**Priority:** P0  
**Estimate:** 8 points (L)  
**Status:** 🔴 Not Started  
**Assignee:** TBD

**Tasks:**
- [ ] Create `QuoteFlowEngine.tsx` component
- [ ] Create `StepRenderer.tsx` for dynamic steps
- [ ] Create `QuestionRenderer.tsx` for question types
- [ ] Create `ProgressBar.tsx` component
- [ ] Create `StepNavigation.tsx` (Back/Next buttons)
- [ ] Add form state management (useState or context)
- [ ] Add validation logic
- [ ] Test with existing templates

**Files to Create:**
- `/components/quote-flow/QuoteFlowEngine.tsx`
- `/components/quote-flow/StepRenderer.tsx`
- `/components/quote-flow/QuestionRenderer.tsx`
- `/components/quote-flow/ProgressBar.tsx`
- `/components/quote-flow/StepNavigation.tsx`

**Blockers:** None

---

#### 2. Question Type Components
**Priority:** P0  
**Estimate:** 5 points (M)  
**Status:** 🔴 Not Started  
**Assignee:** TBD

**Tasks:**
- [ ] Create `TextQuestion.tsx`
- [ ] Create `SelectQuestion.tsx`
- [ ] Create `MultiSelectQuestion.tsx`
- [ ] Create `NumberQuestion.tsx`
- [ ] Create `DateQuestion.tsx`
- [ ] Create `BooleanQuestion.tsx`
- [ ] Create `TextareaQuestion.tsx`
- [ ] Add validation to each component
- [ ] Style with Tailwind + PrimeReact

**Files to Create:**
- `/components/questions/TextQuestion.tsx`
- `/components/questions/SelectQuestion.tsx`
- `/components/questions/MultiSelectQuestion.tsx`
- `/components/questions/NumberQuestion.tsx`
- `/components/questions/DateQuestion.tsx`
- `/components/questions/BooleanQuestion.tsx`
- `/components/questions/TextareaQuestion.tsx`

**Blockers:** None

---

#### 3. Quote Request Pages
**Priority:** P0  
**Estimate:** 3 points (S)  
**Status:** 🔴 Not Started  
**Assignee:** TBD

**Tasks:**
- [ ] Create `/app/quotes/[slug]/request/page.tsx`
- [ ] Load template by slug
- [ ] Integrate QuoteFlowEngine
- [ ] Handle form submission
- [ ] Create confirmation page
- [ ] Add error handling

**Files to Create:**
- `/app/quotes/[slug]/request/page.tsx`
- `/app/quotes/[slug]/request/confirmation/page.tsx`

**Blockers:** Depends on task #1 (QuoteFlowEngine)

---

#### 4. Contact Information Step
**Priority:** P0  
**Estimate:** 2 points (S)  
**Status:** 🔴 Not Started  
**Assignee:** TBD

**Tasks:**
- [ ] Create contact info form component
- [ ] Add fields: First/Last name, Email, Phone
- [ ] Add validation (email format, phone format)
- [ ] Add privacy policy checkbox
- [ ] Style consistently with other steps

**Files to Create:**
- `/components/quote-flow/ContactInfoStep.tsx`

**Blockers:** None

---

#### 5. Quote Data Storage (Temporary)
**Priority:** P0  
**Estimate:** 2 points (S)  
**Status:** 🔴 Not Started  
**Assignee:** TBD

**Tasks:**
- [ ] Create API route `/api/quotes/submit`
- [ ] Store to local file (JSON) or MongoDB
- [ ] Return confirmation/quote ID
- [ ] Add error handling
- [ ] Log submissions to console (dev)

**Files to Create:**
- `/app/api/quotes/submit/route.ts`
- `/models/QuoteRequest.js` (if MongoDB)

**Blockers:** None

---

### **P1 - High Priority (Should Complete)**

#### 6. Landing Pages (5 services)
**Priority:** P1  
**Estimate:** 10 points (L)  
**Status:** 🔴 Not Started  
**Assignee:** TBD

**Tasks:**
- [ ] Create landing page template component
- [ ] Create pages for:
  - [ ] Roofing (`/app/quotes/roofing/page.tsx`)
  - [ ] HVAC (`/app/quotes/hvac/page.tsx`)
  - [ ] Plumbing (`/app/quotes/plumbing/page.tsx`)
  - [ ] Auto Insurance (`/app/quotes/auto-insurance/page.tsx`)
  - [ ] Home Insurance (`/app/quotes/home-insurance/page.tsx`)
- [ ] Add service-specific content
- [ ] Add meta tags for SEO
- [ ] Add "Get Quote" CTAs linking to request flow

**Files to Create:**
- `/components/LandingPageTemplate.tsx`
- 5 landing page files

**Blockers:** None

---

#### 7. Mobile Optimization
**Priority:** P1  
**Estimate:** 3 points (S)  
**Status:** 🔴 Not Started  
**Assignee:** TBD

**Tasks:**
- [ ] Test quote flow on mobile
- [ ] Fix any responsive issues
- [ ] Ensure form inputs are mobile-friendly
- [ ] Test on iOS Safari & Chrome Android
- [ ] Fix any layout shifts

**Blockers:** Depends on task #1 (QuoteFlowEngine)

---

### **P2 - Medium Priority (Nice to Have)**

#### 8. Form Progress Saving
**Priority:** P2  
**Estimate:** 2 points (S)  
**Status:** 🔴 Not Started  
**Assignee:** TBD

**Tasks:**
- [ ] Save form state to localStorage
- [ ] Restore on page reload
- [ ] Add "Resume quote" functionality
- [ ] Clear on submission

**Blockers:** Depends on task #1 (QuoteFlowEngine)

---

## 🚧 Blockers & Risks

### **Current Blockers:**
None currently

### **Risks:**
1. **Time estimate accuracy** - First sprint, estimates may be off
2. **MongoDB setup** - If not set up, may need fallback storage
3. **Mobile testing** - Need devices/browsers for testing

---

## 📈 Daily Progress

### **Monday, Jan 6**
- Sprint planning complete
- Backlog refined
- Ready to start development

### **Tuesday, Jan 7**
- Status: TBD

### **Wednesday, Jan 8**
- Status: TBD

### **Thursday, Jan 9 (Mid-Sprint Check)**
- Status: TBD

### **Friday, Jan 10**
- Status: TBD

---

## ✅ Completed This Sprint
*None yet*

---

## 🔄 Rolled to Next Sprint
*TBD at sprint end*

---

## 💡 Notes & Decisions

- Using PrimeReact components for form fields (already installed)
- Quote flow will use React Context for state management
- Starting with file-based storage, will migrate to MongoDB later
- Mobile-first approach for all components

---

## 📊 Sprint Burndown

| Day | Remaining Points |
|-----|------------------|
| Day 1 | 34 |
| Day 2 | TBD |
| Day 3 | TBD |
| Day 4 | TBD |
| Day 5 | TBD |
| Day 6 | TBD |
| Day 7 | TBD |
| Day 8 | TBD |
| Day 9 | TBD |
| Day 10 | TBD |

---

**Next Sprint Planning:** January 19, 2025
