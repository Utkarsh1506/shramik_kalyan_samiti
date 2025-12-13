# Google Search Console & SEO Setup Guide

यह complete guide है Google पर अपनी website को list करने और SEO optimize करने के लिए।

## 🎯 Overview

आपकी website में अब ये SEO features हैं:
- ✅ **XML Sitemap** - `/sitemap.xml`
- ✅ **Robots.txt** - `/robots.txt`
- ✅ **Meta Tags** - Complete SEO metadata
- ✅ **Open Graph** - Social media sharing
- ✅ **Structured Data** - Google rich results के लिए
- ✅ **Twitter Cards** - Twitter preview

---

## 📍 Step 1: Google Search Console Setup

### 1.1 Account बनाएं

1. **Google Search Console** पर जाएं: https://search.google.com/search-console
2. Google account से **Sign In** करें
3. **"Add Property"** या **"Add a property"** पर क्लिक करें

### 1.2 Domain/URL Prefix चुनें

दो options हैं:

**Option A: Domain** (Recommended)
- पूरे domain को verify करता है (http/https सब)
- Example: `yourdomain.com`
- DNS verification जरूरी है

**Option B: URL Prefix**
- Specific URL prefix verify करता है
- Example: `https://yourdomain.com`
- Multiple verification methods available

### 1.3 Ownership Verify करें

#### Method 1: HTML File Upload (आसान)

1. Google एक HTML file देगा (जैसे: `google1234567890abcdef.html`)
2. इस file को अपने project की `public/` folder में रखें:
   ```
   public/google1234567890abcdef.html
   ```
3. File में content:
   ```html
   google-site-verification: google1234567890abcdef.html
   ```
4. Deploy करें (Vercel पर automatically deploy होगा)
5. Google में **"Verify"** पर क्लिक करें

#### Method 2: HTML Tag (Meta Tag)

1. Google एक meta tag देगा
2. `src/app/layout.tsx` में metadata में add करें:
   ```tsx
   verification: {
     google: "your-actual-verification-code-here",
   },
   ```
3. Already setup है! बस verification code update करना है।

#### Method 3: DNS Record (Hostinger domain के लिए)

1. Google TXT record देगा
2. Hostinger DNS settings में जाएं
3. TXT record add करें:
   - Type: `TXT`
   - Name: `@`
   - Value: `google-site-verification=xxxxx`

---

## 📍 Step 2: Sitemap Submit करें

### 2.1 Verify करें कि Sitemap काम कर रहा है

Deploy के बाद browser में खोलें:
```
https://yourdomain.com/sitemap.xml
```

आपको XML format में सारे pages की list दिखनी चाहिए।

### 2.2 Google Search Console में Submit करें

1. Google Search Console dashboard खोलें
2. Left sidebar में **"Sitemaps"** पर क्लिक करें
3. **"Add a new sitemap"** में enter करें:
   ```
   sitemap.xml
   ```
4. **"Submit"** पर क्लिक करें

**Status** कुछ घंटों में update हो जाएगा:
- ✅ Success - Sitemap processed
- ⏳ Pending - Processing में है
- ❌ Error - Sitemap में issue है

---

## 📍 Step 3: URL Inspection & Indexing

### 3.1 Individual Pages को Index Request करें

1. Search Console में **"URL Inspection"** tool खोलें (top bar)
2. अपना homepage URL डालें:
   ```
   https://yourdomain.com
   ```
3. **"Test Live URL"** पर क्लिक करें
4. अगर "URL is not on Google" दिखे, तो **"Request Indexing"** पर क्लिक करें

### 3.2 Important Pages Index करें

इन pages को manually request करें:
- Homepage: `/`
- About: `/about`
- Programs: `/programs`
- Contact: `/contact`

---

## 📍 Step 4: Google Analytics Setup (Optional but Recommended)

### 4.1 Google Analytics Account बनाएं

1. **Google Analytics** पर जाएं: https://analytics.google.com
2. **"Start measuring"** पर क्लिक करें
3. Account details भरें
4. **Web** property select करें
5. **Measurement ID** मिलेगा (जैसे: `G-XXXXXXXXXX`)

### 4.2 Website में Install करें

**Option A: Next.js Script Component**

`src/app/layout.tsx` में add करें:
```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Option B: Environment Variable से**

`.env.production` में:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📍 Step 5: Bing Webmaster Tools (Bonus)

Microsoft Bing पर भी list होने के लिए:

1. **Bing Webmaster Tools** पर जाएं: https://www.bing.com/webmasters
2. **"Add a site"** पर क्लिक करें
3. Google Search Console से import कर सकते हैं (आसान!)
4. या manually verify करें
5. Sitemap submit करें: `sitemap.xml`

---

## 📍 Step 6: Social Media Meta Tags Check करें

### Open Graph (Facebook, LinkedIn)

Test करें: https://developers.facebook.com/tools/debug/

आपका URL enter करें और देखें कि preview कैसा दिख रहा है।

### Twitter Cards

Test करें: https://cards-dev.twitter.com/validator

URL enter करें और preview check करें।

---

## 📍 Step 7: Rich Results Test

Google के rich results के लिए structured data test करें:

1. **Rich Results Test** खोलें: https://search.google.com/test/rich-results
2. अपना URL enter करें
3. Check करें कि **Organization** schema detect हो रहा है

---

## 🚀 SEO Best Practices Checklist

### On-Page SEO ✅

- [x] Unique title tags हर page पर
- [x] Meta descriptions (150-160 characters)
- [x] Header tags properly structured (H1, H2, H3)
- [x] Image alt text
- [x] Internal linking
- [x] Mobile-responsive design
- [x] Fast page load speed
- [x] HTTPS enabled (Vercel automatic)

### Technical SEO ✅

- [x] XML Sitemap
- [x] Robots.txt
- [x] Structured data (JSON-LD)
- [x] Canonical URLs
- [x] 404 error page
- [x] Clean URL structure

### Content SEO

- [ ] High-quality, original content
- [ ] Regular content updates
- [ ] Keyword research और optimization
- [ ] Local SEO (Jharkhand specific content)
- [ ] Blog section (future addition recommended)

---

## 📊 Monitoring & Tracking

### Google Search Console में देखें:

1. **Performance** - Clicks, impressions, CTR
2. **Coverage** - Indexed pages, errors
3. **Enhancements** - Mobile usability, core web vitals
4. **Links** - Backlinks tracking

### Regular Tasks

**Weekly:**
- [ ] Search Console performance check करें
- [ ] New errors/warnings check करें

**Monthly:**
- [ ] Traffic analysis (Analytics में)
- [ ] Top performing pages identify करें
- [ ] Keyword rankings track करें

---

## 🎯 Important Keywords for Your Website

Your website के लिए target keywords:

### Primary Keywords:
- Jharkhand Shramik Kalyan Samiti
- Mining Welfare NGO Jharkhand
- Mining Compliance Solutions
- CSR Programs Mining Sector
- Worker Welfare Jharkhand

### Secondary Keywords:
- Mining Safety Programs India
- Labour Welfare Mining Sector
- MMDR Compliance Solutions
- Mining CSR Initiatives
- Jharkhand NGO Workers Rights

### Location-Based:
- NGO in Ranchi
- Jharkhand Social Welfare
- Mining Communities Jharkhand

---

## 📱 Local SEO Setup

### Google Business Profile

1. **Google Business** पर जाएं: https://www.google.com/business/
2. **"Manage now"** पर क्लिक करें
3. Organization details भरें:
   - Name: Jharkhand Shramik Kalyan Samiti
   - Category: Non-Profit Organization
   - Location: Jharkhand, India
4. Verify करें (postcard या phone)
5. Photos, hours, description add करें

---

## 🔍 Expected Timeline

**Indexing:**
- First pages: 1-7 days
- Full site: 2-4 weeks

**Ranking:**
- Initial rankings: 2-4 weeks
- Competitive rankings: 3-6 months
- Strong authority: 6-12 months

---

## ✅ Quick Start Checklist

Day 1:
- [ ] Google Search Console में property add करें
- [ ] Ownership verify करें
- [ ] Sitemap submit करें

Week 1:
- [ ] Main pages को manually index request करें
- [ ] Google Analytics setup करें
- [ ] Rich results test करें

Month 1:
- [ ] Performance monitor करें
- [ ] Content optimize करें based on data
- [ ] Backlinks build करना शुरू करें

---

## 🆘 Troubleshooting

### "URL is not on Google"
**Solution:** Normal है new websites के लिए। Request indexing करें और wait करें।

### "Sitemap could not be read"
**Solution:** 
- Check करें कि `sitemap.xml` accessible है
- URL structure verify करें
- Deploy properly हुआ है check करें

### No impressions in Search Console
**Solution:**
- Patience रखें (2-4 weeks)
- Content quality improve करें
- More pages add करें
- Backlinks build करें

---

## 📞 Support Resources

- **Google Search Central**: https://developers.google.com/search
- **Search Console Help**: https://support.google.com/webmasters
- **Next.js SEO Docs**: https://nextjs.org/learn/seo/introduction-to-seo

---

## 🎓 Pro Tips

1. **Content is King**: Regular, quality content publish करें
2. **Mobile-First**: Mobile experience perfect रखें
3. **Page Speed**: Fast loading crucial है
4. **User Experience**: Easy navigation, clear CTAs
5. **Local Focus**: Jharkhand-specific content create करें
6. **Backlinks**: Quality websites से backlinks पाने की कोशिश करें
7. **Social Signals**: Social media पर active रहें

---

**Remember:** SEO एक marathon है, sprint नहीं। Consistent effort results लाएगी! 🚀

---

**Last Updated**: December 2025
**Version**: 1.0.0
