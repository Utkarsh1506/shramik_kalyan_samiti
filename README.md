# JSKS Trust - Jharkhand Shramik Kalyan Samiti Trust

## 🌍 Mission

Dedicated to improving mining sector practices in India by addressing illegal mining, environmental damage, and health risks through compliance-driven, technology-enabled welfare solutions.

## 🎯 Vision

A mining sector where workers are safe, communities thrive, compliance is embedded, and environmental stewardship is prioritized alongside economic growth.

---

## 📋 Project Overview

This is a **production-ready NGO website** for JSKS Trust, a compliance-driven welfare organization focused on mining sector transformation in Jharkhand, India.

**Tech Stack:**
- **Frontend**: Next.js 14 (React 18) with TypeScript
- **Styling**: Tailwind CSS v3 with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React
- **Components**: Custom UI library + Headless UI
- **Code Quality**: ESLint + Prettier

---

## 📂 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── programs/            # Programs overview
│   ├── technology/          # Technology & innovation
│   ├── impact/              # Impact & data
│   ├── team/                # Team page
│   ├── resources/           # Reports & resources
│   ├── contact/             # Contact & partnerships
│   ├── privacy/             # Privacy policy
│   ├── terms/               # Terms of use
│   └── compliance/          # NGO compliance info
├── components/
│   ├── Header.tsx           # Sticky navigation
│   ├── Footer.tsx           # Footer with compliance
│   ├── sections/            # Home page sections
│   │   ├── Hero.tsx
│   │   ├── Challenges.tsx
│   │   ├── Solution.tsx
│   │   ├── Impact.tsx
│   │   └── CTA.tsx
│   └── ui/                  # Reusable components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       └── Section.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── styles/
│   └── globals.css         # Global styles & typography
└── public/                 # Static assets

tailwind.config.js          # Custom color palette & theme
next.config.mjs            # Next.js configuration
package.json               # Dependencies
tsconfig.json             # TypeScript configuration
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **ink** | #0d1b2a | Primary text, dark backgrounds |
| **midnight** | #10243e | Hover states, secondary dark |
| **moss** | #2f6f56 | Primary brand color (CTA, accents) |
| **amber** | #f0a500 | Secondary accent, highlights |
| **accent** | #e85d3f | Alerts, warnings, impact metrics |
| **sky** | #e8f1ff | Light backgrounds, hover states |
| **sand** | #f4e9d7 | Light text, footer backgrounds |

### Typography

- **Font**: Manrope (Google Fonts)
- **Sizes**: 
  - Display: 32px–64px (bold)
  - Headings: 20px–32px (bold/semibold)
  - Body: 16px (regular)
  - Small: 12px–14px (medium)

### Spacing & Radius

- **Spacing Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- **Border Radius**: 8px, 12px, 20px, 28px
- **Shadows**: Soft (12px blur), Card (10px blur)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Setup** (if needed):
   ```bash
   cp .env.example .env.local
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   
   Visit `http://localhost:3000` in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📄 Pages & Content

### Public Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, challenges, solution, impact metrics, CTA |
| About | `/about` | Mission, vision, values, org overview |
| Programs | `/programs` | 4 core programs with details |
| Technology | `/technology` | Tech stack, innovation, implementation timeline |
| Impact | `/impact` | Metrics, market opportunity (TAM/SAM/SOM), competitive positioning |
| Team | `/team` | Leadership team with bios |
| Resources | `/resources` | Annual reports, impact reports, policy briefs |
| Contact | `/contact` | Contact form, office hours, next steps |
| Privacy | `/privacy` | Privacy policy & data protection |
| Terms | `/terms` | Terms of use |
| Compliance | `/compliance` | NGO registration, certifications, governance |

### Content Highlights

- **Hero Section**: Dynamic background gradient, key metrics, dual CTA
- **Challenges**: 5 problem cards with icons, metrics, and response links
- **Solution**: 2-column layout with pillars + illustrated solution cards
- **Impact**: Metrics grid, TAM/SAM/SOM visualization, business model canvas
- **Competitive Table**: Feature comparison with competitors
- **Team**: 7-member leadership team with roles and expertise
- **Forms**: Contact form with inquiry types and validation
- **Footer**: Compliance info, links, contact details

---

## 🛠️ Component Library

### UI Components

**Button**
```tsx
<Button variant="primary|secondary|outline|ghost" size="sm|md|lg">
  Click me
</Button>
```

**Card**
```tsx
<Card hover>
  <CardHeader><h3>Title</h3></CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer here</CardFooter>
</Card>
```

**Section**
```tsx
<Section id="section-id" className="bg-white">
  <Container>Content</Container>
</Section>
```

**Container**
```tsx
<Container>
  Max-width 6xl centered content with responsive padding
</Container>
```

---

## ✨ Features & Interactions

### Accessibility (WCAG 2.1 AA)

- ✅ Semantic HTML with proper landmarks (`<header>`, `<main>`, `<footer>`)
- ✅ Skip-to-main-content link
- ✅ Focus states on all interactive elements
- ✅ High contrast ratios (4.5:1+)
- ✅ Keyboard navigation support
- ✅ Alt text placeholders for images
- ✅ Proper heading hierarchy
- ✅ Form labels and error handling

### Animations & Micro-interactions

- **Fade & Slide**: Sections fade/slide in on scroll (Framer Motion)
- **Number Counters**: Impact metrics animate on scroll
- **Hover Effects**: Cards lift with shadow, buttons scale
- **Smooth Transitions**: All interactive elements (0.2s ease-in-out)
- **Scroll Indicators**: Animated chevron on hero section

### Performance

- **Code Splitting**: Next.js automatic route-based splitting
- **Image Optimization**: Next.js Image component (when used)
- **CSS**: Tailwind purging unused styles
- **Font Loading**: Google Fonts with subset optimization
- **Lazy Loading**: Components load on viewport intersection

### Mobile-First Design

- **Responsive Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grids**: Auto-adjusting columns for different screen sizes
- **Touch-Friendly**: Minimum 44px tap targets
- **Mobile Menu**: Collapsible navigation on screens < 768px
- **Readable Text**: Optimized font sizes per breakpoint

---

## 🔧 Configuration Files

### `tailwind.config.js`

Custom theme with:
- JSKS Trust color palette
- Extended typography
- Custom gradients (hero-gradient, mesh)
- Custom box shadows
- Border radius scale

### `tsconfig.json`

- ES2017 target for modern browsers
- Strict mode enabled
- Path aliases: `@/*` → `src/*`
- DOM and ESNext lib included

### `next.config.mjs`

- React Strict Mode enabled
- Powered-by header removed (security)
- Optimizations for production

### `.eslintrc.json`

- Extends Next.js core rules
- React hooks rules enabled
- Custom rules for best practices

### `.prettierrc`

- 100 char line width
- 2-space indentation
- Single quote disabled (double quotes)
- Trailing commas disabled (ES5)

---

## 📊 Content & SEO

### Meta Tags

- Title: "JSKS Trust - Compliance-Driven Mining Welfare Solutions"
- Description: Full mission statement
- OG Graph tags for social sharing
- Robots: "index, follow"

### Page-Specific Meta

Each page has custom:
- Titles (descriptive, keyword-rich)
- Descriptions (compelling, action-oriented)
- Structured meta for sharing

### Sitemap (Auto-generated)

Next.js automatically generates `sitemap.xml` from App Router structure.

---

## 🚢 Deployment

### Recommended Platforms

- **Vercel** (Recommended): Optimal for Next.js, auto-scaling, built-in analytics
- **Netlify**: Full-stack support, good serverless functions
- **AWS Amplify**: Full control, enterprise features
- **DigitalOcean App Platform**: Simple, cost-effective

### Deployment Steps (Vercel)

1. Push code to GitHub repo
2. Link repo in Vercel dashboard
3. Auto-deploy on push to `main` branch
4. Preview deployments for pull requests

### Environment Variables (if needed)

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 📝 NGO Compliance

### Legal Pages

- **Privacy Policy**: Data collection, usage, security practices
- **Terms of Use**: User agreement, licensing, liability disclaimers
- **Compliance Page**: NGO registration #s, certifications, governance

### Registration Placeholders

Replace these in relevant files:
- `[NGO Registration Number]` → Actual registration
- `[UDYAM ID]` → UDYAM/MSME ID
- `[PAN NUMBER]` → Organization PAN
- `[80G Certificate Number]` → 80G certificate
- Contact details, office addresses, hours

---

## 📈 Scalability & Future Enhancements

### Ready for:

- **Database Integration**: Easy to add backend (API routes, Prisma ORM)
- **Authentication**: Auth.js or Firebase for login/donation tracking
- **Blog/News**: Dynamic content from CMS (Sanity, Strapi, Contentful)
- **E-commerce**: Donation/merchandise platform (Stripe/Razorpay)
- **Analytics**: Vercel Analytics, Google Analytics 4
- **Multi-language**: i18n support for regional languages

### Quick Wins

- Add blog functionality with MDX
- Implement newsletter signup with Mailchimp
- Add Donation portal with payment gateway
- Create admin dashboard for content management

---

## 📞 Support & Maintenance

### Code Quality

```bash
# Run linter
npm run lint

# Format code
npm run format

# Build for production (test build)
npm run build
```

### Common Tasks

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Format code | `npm run format` |
| Lint files | `npm run lint` |
| Build for prod | `npm run build` |
| Start prod server | `npm start` |

---

## 📄 License

This project is built for Jharkhand Shramik Kalyan Samiti Trust. All rights reserved.

---

## 🙏 Acknowledgments

- **Design Inspiration**: McKinsey, BCG, development sector NGOs
- **Framework**: Next.js, React, Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Philosophy**: Accessibility-first, mobile-first, impact-focused

---

## 📧 Questions?

For questions, suggestions, or technical issues:

- **Email**: contact@jsks.org.in
- **Phone**: +91 (555) 123-4567
- **Website**: [Your domain when deployed]

---

**Last Updated**: December 2024

**Version**: 1.0.0

**Status**: Production-Ready ✅
