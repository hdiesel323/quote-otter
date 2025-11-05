# 🦦 QuoteOtter

**Multi-vertical quote comparison platform.** Connect consumers with service providers across home services, insurance, moving, legal, financial, and auto categories.

**Live:** [Your Production URL]  
**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · MongoDB

---

## 🚀 Quick Start

### **For New Developers:**
```bash
# 1. Clone & install
git clone https://github.com/hdiesel323/quote-otter.git
cd quote-otter
npm install

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local with your values

# 3. Run development server
npm run dev

# 4. Open browser
http://localhost:3000
```

**Detailed guide:** [START.md](START.md)

---

## 📚 Documentation

**Complete documentation index:** → **[DOCS_INDEX.md](DOCS_INDEX.md)**

### **Essential Reading:**
| Document | Purpose | Time |
|----------|---------|------|
| **[DOCS_INDEX.md](DOCS_INDEX.md)** | Central navigation hub | 2 min |
| **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** | Complete project guide | 15 min |
| **[DEPLOYMENT.md](DEPLOYMENT.md)** | Deploy to production | As needed |
| **[optimization-hub/QUICK_START.md](optimization-hub/QUICK_START.md)** | Start improving the site | 5 min |

---

## 🎯 What Is QuoteOtter?

**For Consumers:**
- Request quotes for any service (home, insurance, legal, etc.)
- Receive 3-5 competitive quotes from pre-screened providers
- Compare and choose the best option
- 100% free

**For Providers:**
- Receive qualified leads in your area
- Pay per lead or subscription model
- Compete fairly with other providers
- Manage leads through dashboard

**Revenue Model:** Lead generation fees + provider subscriptions

---

## 🏗️ Current Status

**✅ Built:**
- Homepage with smart lead gen form (geolocation, ZIP validation)
- 46+ service categories across 6 verticals
- Template-driven quote request system
- 1 service landing page (Final Expense Insurance)
- Deployed to production

**🚧 In Progress:**
- Quote request flow (multi-step forms)
- More landing pages (5-10 needed)
- Provider dashboard
- Email notifications

**📋 Roadmap:** [optimization-hub/PRIORITY_ROADMAP.md](optimization-hub/PRIORITY_ROADMAP.md)

---

## 🛠️ Tech Stack

**Frontend:**
- Next.js 15.4.6 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- PrimeReact 10.6.3

**Backend/Services:**
- NextAuth.js (authentication)
- MongoDB (database)
- Resend (email)
- Stripe (payments)

**Deployment:**
- Coolify (primary)
- Vercel (alternative)
- VPS (manual option)

**Full details:** [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)

---

## 📁 Project Structure

```
quote-otter/
├── app/                    # Next.js pages (App Router)
├── components/             # React components
├── lib/                    # Business logic & utilities
│   └── quote-templates/   # Service quote templates
├── types/                  # TypeScript definitions
├── optimization-hub/       # CRO, testing, roadmap
├── docs/                   # Documentation
└── public/                 # Static assets
```

**Detailed breakdown:** [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)

---

## 🎓 For Developers

### **First Time Here?**
1. Read [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) (15 min)
2. Run locally with [START.md](START.md) (10 min)
3. Check [optimization-hub/PRIORITY_ROADMAP.md](optimization-hub/PRIORITY_ROADMAP.md) for what to build next

### **Adding a New Service?**
1. Create template in `lib/quote-templates/`
2. Add to registry in `lib/quote-templates/index.ts`
3. Add category in `types/verticals.ts`
4. Create landing page in `app/quotes/[slug]/page.tsx`

**Guide:** [QUOTE_FLOW_ARCHITECTURE.md](QUOTE_FLOW_ARCHITECTURE.md)

### **Want to Optimize?**
**Start here:** [optimization-hub/QUICK_START.md](optimization-hub/QUICK_START.md)

---

## 🚀 Deployment

**Primary Method: Coolify**
- Full guide: [DEPLOYMENT.md](DEPLOYMENT.md)
- Step-by-step walkthrough
- Environment variables reference
- Troubleshooting

**Alternative: Vercel**
- Guide: [DEPLOYMENT.md](DEPLOYMENT.md)
- One-click deployment
- Automatic SSL

---

## 📊 Key Features

✅ **Smart Form UX**
- Geolocation ("Use my location")
- Real-time ZIP validation
- Grouped service dropdown
- Visual feedback

✅ **Template System**
- Add services via configuration
- No code changes needed for new services
- 6 templates ready

✅ **Multi-Vertical**
- Home Services (12 categories)
- Insurance (6 categories)
- Moving (3 categories)
- Legal (8 categories)
- Financial (7 categories)
- Auto (5 categories)

✅ **SEO-Ready**
- Service-specific landing pages
- Proper meta tags
- Clean URL structure
- Sitemap generated

---

## 🎯 Roadmap

**This Week:**
- [ ] Build quote request flow (CRITICAL)
- [ ] Create 5 more landing pages
- [ ] Add trust signals (+15-30% conversion)
- [ ] Mobile optimization

**Next Month:**
- [ ] Provider dashboard
- [ ] Email automation
- [ ] Analytics setup
- [ ] 20+ landing pages

**Full Roadmap:** [optimization-hub/PRIORITY_ROADMAP.md](optimization-hub/PRIORITY_ROADMAP.md)

---

## 🤝 Contributing

**Before Making Changes:**
1. Check [optimization-hub/PRIORITY_ROADMAP.md](optimization-hub/PRIORITY_ROADMAP.md) for priorities
2. Create branch: `git checkout -b feature/your-feature`
3. Build and test locally
4. Submit PR with clear description

**Code Style:**
- TypeScript for everything
- Tailwind for styling
- Follow existing patterns
- Document complex logic

---

## 📞 Support

**Questions?** Check [DOCS_INDEX.md](DOCS_INDEX.md) for all documentation.

**Issues?** See [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📄 License

Copyright © 2025 QuoteOtter. All rights reserved.

---

**Built with ❤️ by the QuoteOtter team** 🦦
