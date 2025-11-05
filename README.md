# QuoteOtter - Multi-Vertical Quote Comparison Platform 🦦

**Get free quotes for ANY service** - from home repairs to insurance, legal help to moving services.

## 🚀 Quick Start

```bash
# Navigate to the project
cd ship-fast-ts

# Install dependencies (if needed)
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

## 📁 Project Structure

```
quote-otter/
├── ship-fast-ts/              # Main Next.js application
│   ├── app/                   # Next.js app router pages
│   ├── components/            # React components
│   │   ├── verticals/         # Multi-service components
│   │   └── insurance/         # Original insurance components
│   ├── types/                 # TypeScript definitions
│   ├── lib/                   # Utilities and constants
│   └── config.ts              # App configuration
├── old-vite-quoteotter-backup.tar.gz  # Backup of original Vite app
└── README.md                  # This file
```

## 🎯 Features

### 6 Service Verticals
- 🏠 **Home Services** (12 categories) - Roofing, HVAC, Plumbing, Electrical, etc.
- 🛡️ **Insurance** (7 categories) - Auto, Home, Life, Health, Medicare, etc.
- 🚚 **Moving** (5 categories) - Movers, Labor, Auto Shipping, Storage
- ⚖️ **Legal** (10 categories) - Personal Injury, Family Law, DUI, etc.
- 💰 **Financial** (7 categories) - Mortgage, Loans, Refinance, etc.
- 🚗 **Auto** (5 categories) - Repair, Maintenance, Detailing

**Total: 46+ service categories!**

### Key Pages
- **/** - Homepage with universal search
- **/services** - Browse all 46+ categories
- **/blog** - Blog and guides
- **/dashboard** - User dashboard (requires auth)

## 🛠️ Tech Stack

**Frontend:**
- Next.js 15.4.6 (App Router)
- React 19
- TypeScript 5.9
- Tailwind CSS v4
- DaisyUI v5
- PrimeReact 10.6.3

**Backend (Ready to Use):**
- NextAuth v5 (Authentication)
- MongoDB + Mongoose
- Stripe (Payments)
- Resend/Nodemailer (Emails)

## 📖 Documentation

- **MIGRATION_COMPLETE.md** - Original migration from Vite to ShipFast
- **DESIGN_VARIANTS.md** - How to switch between design styles
- **MULTI_VERTICAL_EXPANSION.md** - Complete multi-vertical documentation
- **CLAUDE_INSTRUCTIONS.md** - ShipFast AI instructions

## 🎨 Design Features

- **Genesis-Inspired UI** - Modern gradients and animations
- **Glass-morphism** - Frosted glass effects
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Floating elements, fade-ins, scale effects
- **Vertical Color Coding** - Each service type has unique colors

## 🔧 Development

### Available Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Variables

Create `.env.local` in `ship-fast-ts/`:

```env
# Auth
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000

# Database
MONGODB_URI=your_mongodb_uri

# Stripe
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email
RESEND_API_KEY=re_...
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd ship-fast-ts
vercel
```

### Environment Variables on Vercel
Add all `.env.local` variables to Vercel dashboard

## 📊 Next Steps

### Phase 1: Core Functionality
- [ ] Create service-specific quote forms
- [ ] Build quote submission API
- [ ] Add provider matching logic
- [ ] Email notifications

### Phase 2: User Features
- [ ] User accounts
- [ ] Quote history
- [ ] Provider ratings/reviews
- [ ] Saved preferences

### Phase 3: Provider Features
- [ ] Provider onboarding
- [ ] Quote management dashboard
- [ ] Payment processing
- [ ] Lead analytics

## 🎯 Business Model

### Revenue Streams
1. **Lead Sales** - Charge providers per qualified quote
2. **Subscription** - Premium provider memberships
3. **Advertising** - Featured placement for providers
4. **Partnerships** - White-label solutions

### Target Market
- **Consumers**: 100M+ US households needing services
- **Providers**: 5M+ service businesses looking for customers
- **TAM**: $20B+ lead generation market

## 📈 Success Metrics

- Quote submission rate
- Provider response time
- Customer satisfaction (NPS)
- Revenue per lead
- Repeat customer rate

## 🔒 Security

- NextAuth v5 for authentication
- HTTPS only in production
- CSRF protection
- Rate limiting on APIs
- Input validation
- SQL injection prevention

## 🤝 Contributing

This is a private project. Contact the team for access.

## 📝 License

Proprietary - All rights reserved

## 🆘 Support

For issues or questions:
- Email: support@quoteotter.com
- Documentation: `/ship-fast-ts/*.md` files

---

**Built with ShipFast boilerplate** - Ship your startup fast! ⚡️

Last updated: November 2025
