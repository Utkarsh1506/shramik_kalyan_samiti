# Google Indexing Checklist - JSKS Trust

Quick reference for indexing your website on Google.

## 🚀 IMMEDIATE ACTIONS (Do Today)

### ✅ Step 1: Verify Google Search Console

1. Go to: https://search.google.com/search-console
2. Click **"Add Property"**
3. Enter: `https://jskstrust.org`
4. **Verification Method - Choose One:**

   **Option A: HTML Meta Tag** (Recommended - Already Setup!)
   - Google will give you a code like: `<meta name="google-site-verification" content="abc123...">`
   - Copy only the content value: `abc123...`
   - Update in `src/app/layout.tsx`:
     ```tsx
     verification: {
       google: "abc123...",  // Replace with your code
     },
     ```
   - Commit, push, wait 2 minutes for deployment
   - Click "Verify" in Search Console

   **Option B: HTML File Upload**
   - Download the HTML file from Google
   - Save it in `public/` folder
   - Commit and push
   - Click "Verify" in Search Console

### ✅ Step 2: Submit Sitemap

1. In Search Console, left sidebar → **"Sitemaps"**
2. Enter: `sitemap.xml`
3. Click **"Submit"**
4. Wait for success status (may take few hours)

### ✅ Step 3: Request Indexing - Priority Pages

Request indexing for these URLs **in this order**:

#### Priority 1 (Do First - Critical Pages):
```
1. https://jskstrust.org
2. https://jskstrust.org/about
3. https://jskstrust.org/programs
4. https://jskstrust.org/contact
```

#### Priority 2 (Do Next - Important Pages):
```
5. https://jskstrust.org/impact
6. https://jskstrust.org/technology
7. https://jskstrust.org/team
```

#### Priority 3 (Do Later - Supporting Pages):
```
8. https://jskstrust.org/certifications
9. https://jskstrust.org/compliance
10. https://jskstrust.org/gallery
11. https://jskstrust.org/privacy
12. https://jskstrust.org/terms
```

---

## 📝 HOW TO REQUEST INDEXING (For Each URL)

1. **Open URL Inspection Tool**
   - Top search bar in Search Console
   - Paste URL (e.g., `https://jskstrust.org`)
   - Press Enter

2. **Wait for Google to Check** (10-20 seconds)

3. **If "URL is not on Google":**
   - Click **"REQUEST INDEXING"** button
   - Wait 1-2 minutes (loading)
   - Success message: "Indexing requested"
   - ✅ Done for this URL!

4. **If "URL is on Google":**
   - Already indexed! ✅
   - Optional: Click "Request re-indexing" if content updated

5. **Repeat for all priority URLs**

---

## ⏱️ EXPECTED TIMELINE

| Timeline | What Happens |
|----------|--------------|
| **Day 1** (Today) | Submit all indexing requests |
| **Days 2-3** | Homepage starts appearing in Google |
| **Days 3-7** | Main pages (about, programs, contact) indexed |
| **Week 2** | Most pages indexed |
| **Weeks 3-4** | All pages indexed, rankings start |
| **Month 2-3** | Better rankings, more traffic |

---

## 🔍 HOW TO CHECK IF INDEXED

### Method 1: Google Search
```
site:jskstrust.org
```
Shows all indexed pages from your domain

### Method 2: Specific Page
```
site:jskstrust.org/about
```
Check if specific page is indexed

### Method 3: Search Console
- Go to **"Coverage"** section
- Shows indexed pages count

---

## ✅ DAILY CHECKLIST

### Day 1 (Today):
- [ ] Verify Google Search Console property
- [ ] Submit sitemap.xml
- [ ] Request indexing: Homepage
- [ ] Request indexing: About page
- [ ] Request indexing: Programs page
- [ ] Request indexing: Contact page

### Day 2-3:
- [ ] Request indexing: Impact page
- [ ] Request indexing: Technology page
- [ ] Request indexing: Team page

### Day 4-7:
- [ ] Request indexing: Remaining pages
- [ ] Check `site:jskstrust.org` in Google
- [ ] Monitor Search Console for errors

### Week 2:
- [ ] Review Coverage report
- [ ] Check Performance tab for impressions
- [ ] Fix any errors shown in Search Console

---

## 🔗 IMPORTANT LINKS

**Google Search Console:**
https://search.google.com/search-console

**Your Sitemap:**
https://jskstrust.org/sitemap.xml

**Your Robots.txt:**
https://jskstrust.org/robots.txt

**Testing Tools:**
- Rich Results: https://search.google.com/test/rich-results
- Mobile-Friendly: https://search.google.com/test/mobile-friendly
- PageSpeed: https://pagespeed.web.dev

---

## 📊 MONITORING

### What to Check Weekly:

1. **Coverage Report**
   - Search Console → Coverage
   - Look for errors, warnings
   - Fix any issues found

2. **Performance Report**
   - Search Console → Performance
   - Track: Clicks, Impressions, CTR, Position
   - See which keywords bringing traffic

3. **Index Status**
   ```
   site:jskstrust.org
   ```
   Count should increase weekly

---

## 🆘 TROUBLESHOOTING

### Issue: "URL is not on Google" even after days

**Solutions:**
- Request indexing again
- Check robots.txt isn't blocking
- Verify sitemap submitted correctly
- Wait more (can take 1-2 weeks for new sites)

### Issue: Sitemap errors

**Solutions:**
- Check sitemap.xml loads correctly
- Verify all URLs use https://jskstrust.org
- Re-submit sitemap
- Check for broken links

### Issue: Pages indexed but not ranking

**Solutions:**
- Add more quality content
- Improve page titles and descriptions
- Build backlinks
- Be patient (takes 2-3 months)

---

## 💡 PRO TIPS

1. **Don't spam requests** - Max 10-12 URLs per day
2. **Start with important pages** - Homepage, About, Programs first
3. **Check mobile version** - Use Mobile-Friendly Test
4. **Monitor regularly** - Check Search Console weekly
5. **Be patient** - SEO takes time (2-3 months for results)
6. **Content is key** - Keep adding quality content
7. **Fix errors fast** - Address Search Console errors immediately

---

## 📈 SUCCESS METRICS

### Week 1:
- [ ] Property verified ✅
- [ ] Sitemap submitted ✅
- [ ] Homepage indexed ✅
- [ ] 3-4 pages indexed ✅

### Month 1:
- [ ] All pages indexed ✅
- [ ] Showing in Google search ✅
- [ ] Getting impressions (Search Console) ✅

### Month 3:
- [ ] Getting clicks from Google ✅
- [ ] Ranking for brand name ✅
- [ ] Ranking for some keywords ✅

---

**Remember:** Google indexing is automatic once sitemap is submitted, but manual requests speed it up!

**Good Luck! 🚀**

---

**Last Updated:** December 13, 2025
**Domain:** jskstrust.org
