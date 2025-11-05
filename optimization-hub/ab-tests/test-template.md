# Test #XXX: [Brief Description]

**Status:** 🔴 Draft / 🟡 Running / 🟢 Complete  
**Start Date:** YYYY-MM-DD  
**End Date:** YYYY-MM-DD  
**Priority:** High / Medium / Low  

---

## 🎯 Hypothesis

**We believe that** [change description]  
**Will result in** [expected outcome]  
**Because** [reasoning based on data/research]  

**Expected lift:** X% increase in [metric]

---

## 📊 Success Metrics

### **Primary Metric**
- **Metric:** [e.g., Form submission rate]
- **Current baseline:** X%
- **Target:** Y% (Z% lift)
- **Minimum detectable effect:** W%

### **Secondary Metrics**
- Metric 2: [e.g., Time on page]
- Metric 3: [e.g., Bounce rate]

### **Guardrail Metrics** (should not get worse)
- Metric: [e.g., Page load time]

---

## 🧪 Test Design

### **Test Type**
- [ ] A/B Test (2 variations)
- [ ] A/B/C Test (3+ variations)
- [ ] Multivariate Test

### **Traffic Split**
- Control: 50%
- Variant A: 50%
- Variant B: (if applicable)

### **Targeting**
- All traffic
- Or: [specific segment]

---

## 🎨 Variations

### **Control (Current)**
**Description:** Current implementation

**Screenshot/Code:**
```tsx
// Current code
```

**Visual:** [Screenshot link or embed]

---

### **Variant A: [Name]**
**Description:** What changed

**Screenshot/Code:**
```tsx
// New code
```

**Visual:** [Screenshot link or embed]

**Rationale:** Why we think this will perform better

---

### **Variant B: [Name]** (if applicable)
**Description:** What changed

**Screenshot/Code:**
```tsx
// New code
```

**Visual:** [Screenshot link or embed]

**Rationale:** Why we think this will perform better

---

## 📈 Sample Size Calculation

**Tool Used:** [Optimizely Calculator, etc.]

**Inputs:**
- Baseline conversion rate: X%
- Minimum detectable effect: Y%
- Statistical significance: 95%
- Statistical power: 80%

**Required Sample Size:**
- Per variation: XXX visitors
- Total: XXX visitors
- Estimated runtime: X days (based on current traffic)

---

## 📅 Timeline

**Preparation:**
- [ ] Design variations
- [ ] Get approval
- [ ] Build variations
- [ ] Set up tracking
- [ ] QA test

**Launch:**
- [ ] Deploy to production
- [ ] Verify tracking
- [ ] Monitor for 24 hours

**Running:**
- [ ] Daily monitoring
- [ ] Check for statistical significance
- [ ] Watch for anomalies

**Completion:**
- [ ] Analyze results
- [ ] Document findings
- [ ] Present to team
- [ ] Implement winner or iterate

---

## 📊 Results

### **Performance Data**

| Metric | Control | Variant A | Variant B | Winner |
|--------|---------|-----------|-----------|--------|
| Sample size | X | X | X | - |
| Conversions | X | X | X | - |
| Conversion rate | X% | X% | X% | - |
| Confidence | - | 95%+ | 95%+ | - |
| Lift vs Control | - | +X% | +X% | - |

### **Segment Analysis**

**Desktop:**
| Metric | Control | Variant A | Winner |
|--------|---------|-----------|--------|
| Conversion rate | X% | X% | - |

**Mobile:**
| Metric | Control | Variant A | Winner |
|--------|---------|-----------|--------|
| Conversion rate | X% | X% | - |

**New vs Returning:**
[If applicable]

---

## 🎯 Statistical Significance

**Calculation:**
- Z-score: X.XX
- P-value: 0.0XX
- Confidence: 95%+
- **Result:** ✅ Statistically significant / ❌ Not significant

**Tool Used:** [Calculator link]

---

## 💡 Insights & Learnings

### **Key Findings**
1. [Finding 1]
2. [Finding 2]
3. [Finding 3]

### **Unexpected Results**
- [Any surprises]

### **Segment Insights**
- Mobile vs Desktop differences
- New vs Returning user behavior
- Geographic variations
- Time-of-day effects

### **Qualitative Feedback**
- User comments
- Support tickets
- Observational notes

---

## ✅ Decision

**Winner:** Control / Variant A / Variant B / No winner

**Action:**
- [ ] Implement winning variation permanently
- [ ] Rollback to control
- [ ] Run follow-up test
- [ ] Archive and move on

**Rationale:**
[Why this decision was made]

---

## 🔄 Next Steps

**If successful:**
- [ ] Deploy winner to 100% of traffic
- [ ] Update documentation
- [ ] Share results with team
- [ ] Plan follow-up optimizations

**If inconclusive:**
- [ ] Analyze why (traffic, implementation, timing)
- [ ] Decide: iterate or move on
- [ ] Document learnings

**If failed:**
- [ ] Rollback to control
- [ ] Analyze why hypothesis was wrong
- [ ] Apply learnings to future tests

---

## 📎 Related Links

- GitHub PR: [link]
- Analytics dashboard: [link]
- Design files: [link]
- Discussion: [link]

---

## 📝 Notes

[Any additional context, observations, or comments]

---

**Created by:** [Name]  
**Reviewed by:** [Name]  
**Last Updated:** YYYY-MM-DD
