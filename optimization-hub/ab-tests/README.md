# 🧪 A/B Testing Program

## Overview

This directory contains all A/B tests, experiments, and their results. Use this to make data-driven decisions about changes to QuoteOtter.

---

## 📋 Test Template

When creating a new test, copy `test-template.md` and fill in all sections.

**File naming:** `test-XXX-brief-description.md`

Example: `test-001-cta-copy-hero.md`

---

## 🎯 Active Tests

### **Test #001: Hero CTA Copy**
**Status:** 📅 Planned  
**Start Date:** TBD  
**Priority:** High  
**Hypothesis:** More specific CTA copy increases form submissions by 15%+

**Variations:**
- Control: "Get Started Free"
- Variant A: "Compare 3-5 Free Quotes"
- Variant B: "See Your Quotes Now"

---

## ✅ Completed Tests

*None yet - first test to run after analytics setup*

---

## 📊 Testing Methodology

### **1. Pre-Test Phase**
- [ ] Define clear hypothesis
- [ ] Set success metrics
- [ ] Determine sample size needed
- [ ] Create variations
- [ ] Get stakeholder approval

### **2. Implementation**
- [ ] Build variations
- [ ] Set up tracking
- [ ] Test locally
- [ ] Deploy to production
- [ ] Verify tracking works

### **3. Running Phase**
- [ ] Monitor daily for issues
- [ ] Check for statistical significance
- [ ] Watch for external factors
- [ ] Document observations

### **4. Analysis Phase**
- [ ] Collect results
- [ ] Calculate statistical significance
- [ ] Analyze by segment (mobile/desktop, new/returning)
- [ ] Document insights
- [ ] Make decision (implement winner or iterate)

### **5. Post-Test**
- [ ] Implement winning variation (or rollback)
- [ ] Document learnings
- [ ] Share results with team
- [ ] Archive test files

---

## 🛠️ Testing Tools

### **Current Setup**
**Tool:** TBD (options below)

**Options:**
1. **Next.js Middleware + Cookies** (Free, custom)
   - Pros: Full control, free
   - Cons: Manual tracking, more work

2. **Vercel Edge Config** (Free tier available)
   - Pros: Easy, integrated
   - Cons: Limited free tier

3. **PostHog** (Open source, free self-hosted)
   - Pros: Full featured, free
   - Cons: Need to host

4. **Google Optimize** ❌ (Deprecated Sept 2023)

**Recommendation:** Start with Next.js middleware for MVP

---

## 📏 Statistical Significance

**Minimum Requirements:**
- Sample size: 100+ conversions per variation
- Confidence level: 95%
- Statistical power: 80%
- Runtime: Minimum 1 week (to account for day-of-week effects)

**Calculator:** https://www.optimizely.com/sample-size-calculator/

**When to Stop:**
- ✅ Reached 95% confidence + minimum sample
- ✅ Reached 2 weeks runtime
- ❌ Early stopping risks false positives

---

## 🎯 Test Ideas Queue

### **High Priority**
1. Hero CTA copy variations
2. Hero form simplified (ZIP only) vs current
3. Service card design enhancements
4. Trust signal placement (above vs below hero)
5. Testimonials position on page

### **Medium Priority**
6. FAQ open by default vs collapsed
7. Color scheme variations
8. Service categorization (tabs vs grid)
9. Provider logo carousel vs static
10. Footer CTA presence vs absence

### **Low Priority**
11. Font choices
12. Button shapes (rounded vs square)
13. Animation presence vs absence
14. Image style (photos vs illustrations)

---

## 📝 Test Documentation Template

See: `test-template.md`

Must include:
- Hypothesis
- Success metrics
- Variations (with screenshots)
- Sample size calculation
- Timeline
- Results
- Insights
- Decision

---

## 🚨 Testing Guidelines

### **DO:**
✅ Test one variable at a time  
✅ Run for full weeks (Mon-Sun)  
✅ Wait for statistical significance  
✅ Test on meaningful traffic (100+ conversions)  
✅ Document everything  
✅ Consider mobile vs desktop separately  

### **DON'T:**
❌ Change test mid-flight  
❌ Stop early (false positives)  
❌ Test multiple things simultaneously  
❌ Test on low-traffic pages  
❌ Forget about seasonality  
❌ Test during holidays/special events  

---

## 📊 Results Dashboard

**Location:** TBD (Google Analytics, PostHog, or custom)

**Key Metrics:**
- Impressions (page views)
- Form starts (clicked in form)
- Form completions
- Conversion rate
- Segment breakdowns

---

**Last Updated:** 2025-01-05  
**Next Test:** After analytics installation
