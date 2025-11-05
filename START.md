# 🚀 Start QuoteOtter

## Quick Start (Development)

```bash
cd /Users/admin/Dropbox/Labs/GitHub/quote-otter/quoteotter-app
npm run dev
```

Then open: **http://localhost:3000**

## What You'll See

### Homepage (/)
- **Universal Search Hero** - Search for any service
- **Popular Services** - Quick access to trending categories
- **How It Works** - 3-step process
- **Why Choose Us** - Key benefits
- **FAQ** - Common questions

### All Services (/services)
- Browse all 46+ service categories
- Organized by 6 verticals
- Color-coded by industry

### Service Categories Available

#### 🏠 Home Services
Roofing, HVAC, Plumbing, Electrical, Cleaning, Painting, Flooring, Landscaping, Remodeling, Pest Control, Home Security, Solar

#### 🛡️ Insurance
Auto, Home, Life, Health, Renters, Medicare, Final Expense

#### 🚚 Moving
Full Service Movers, Moving Labor, Auto Shipping, Storage, Utilities

#### ⚖️ Legal
Personal Injury, Auto Accident, Bankruptcy, Family Law, Criminal Defense, DUI, Employment Law, Workers Comp, Immigration, Business Law

#### 💰 Financial
Mortgage, Refinance, Personal Loan, Auto Loan, Home Equity, Reverse Mortgage, Debt Relief

#### 🚗 Auto
Auto Repair, Oil Change, Tire Service, Auto Body, Detailing

## Build for Production

```bash
cd ship-fast-ts
npm run build
npm run start
```

## Troubleshooting

### Port 3000 already in use?
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Missing dependencies?
```bash
cd ship-fast-ts
npm install
```

### Environment variables not set?
```bash
cp .env.example .env.local
# Then edit .env.local with your values
```

## Project Structure

```
quoteotter-app/
├── app/                    # Pages
│   ├── page.tsx           # Homepage
│   └── services/
│       └── page.tsx       # All services
├── components/
│   ├── verticals/         # Multi-service components
│   │   ├── UniversalHero.tsx
│   │   ├── PopularServices.tsx
│   │   └── VerticalSelector.tsx
│   ├── insurance/         # Original insurance
│   ├── HeaderQuoteOtter.tsx
│   └── FooterQuoteOtter.tsx
├── types/
│   └── verticals.ts       # Service definitions
└── config.ts              # App config
```

## Testing the App

1. **Test Universal Search**
   - Type "plumber" in search box
   - Select from dropdown
   - Enter ZIP code
   - Click "Get Free Quotes"

2. **Browse Services**
   - Click vertical icons (Home, Insurance, etc.)
   - Navigate to /services
   - Click on any service card

3. **Check Responsive Design**
   - Open DevTools (F12)
   - Toggle device toolbar
   - Test mobile, tablet, desktop

## Next Steps

1. **Add Environment Variables**
   ```bash
   cd quoteotter-app
   cp .env.example .env.local
   ```

2. **Set Up Database**
   - Create MongoDB Atlas account
   - Add connection string to .env.local

3. **Configure Auth**
   - Set NEXTAUTH_SECRET
   - Set NEXTAUTH_URL

4. **Add Stripe Keys**
   - Get keys from Stripe dashboard
   - Add to .env.local

## Ready to Code?

Check these files:
- `MULTI_VERTICAL_EXPANSION.md` - Full documentation
- `MIGRATION_COMPLETE.md` - Migration details
- `DESIGN_VARIANTS.md` - Design options

---

**Happy Coding!** 🦦
