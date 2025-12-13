# Vercel Deployment Guide - Shramik Kalyan Samiti

यह guide आपको Vercel पर deployment और custom domain setup करने में मदद करेगी।

## ✨ Vercel Deployment (बहुत आसान!)

### Step 1: Vercel Account बनाएं

1. **Vercel.com** पर जाएं: https://vercel.com
2. **Sign Up** करें (GitHub account से recommended)
3. GitHub से connect करें

### Step 2: GitHub Repository तैयार करें

```powershell
# Current directory में हैं (shramik_kalyan_samiti)
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 3: Vercel पर Deploy करें

#### Option A: Vercel Dashboard से (आसान!)

1. **Vercel Dashboard** खोलें: https://vercel.com/dashboard
2. **"Add New Project"** या **"Import Project"** पर क्लिक करें
3. **"Import Git Repository"** चुनें
4. अपना GitHub repository **"Utkarsh1506/shramik_kalyan_samiti"** select करें
5. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detect हो जाएगा)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-fill)
   - Output Directory: `.next` (auto-fill)
   - Install Command: `npm install` (auto-fill)
6. **Environment Variables** (optional, बाद में भी add कर सकते हैं):
   - कोई special env vars नहीं चाहिए अभी के लिए
7. **"Deploy"** button पर क्लिक करें! 🚀

#### Option B: Vercel CLI से (Terminal में)

```powershell
# Vercel CLI install करें (globally)
npm install -g vercel

# Project directory में जाएं
cd C:\Users\Admin\Desktop\jskstrust\shramik_kalyan_samiti

# Deploy करें
vercel

# Production deploy के लिए
vercel --prod
```

**CLI prompts का जवाब:**
- Set up and deploy? **Y**
- Which scope? **Your account**
- Link to existing project? **N**
- What's your project's name? **shramik-kalyan-samiti**
- In which directory is your code located? **./**
- Want to override settings? **N**

### Step 4: Custom Domain Add करें

#### Vercel Dashboard में:

1. अपना deployed project खोलें
2. **"Settings"** tab पर जाएं
3. Left sidebar में **"Domains"** पर क्लिक करें
4. **"Add"** button पर क्लिक करें
5. अपना domain name enter करें (जैसे: `yourdomain.com`)
6. **"Add"** पर क्लिक करें

#### DNS Settings (Domain Provider में):

Vercel आपको DNS records देगा जो add करने होंगे:

**For Root Domain (yourdomain.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**या फिर (Recommended - Nameservers):**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### Step 5: SSL Certificate (Automatic!)

Vercel automatically SSL certificate provision करता है। कुछ करने की जरूरत नहीं! ✅

---

## 🚀 Deployment होने के बाद

### Auto-Deploy Setup (Already Active!)

- हर `git push` पर automatically deploy होगा
- Preview deployments हर PR के लिए
- Production deployment `main` branch के लिए

### Deployment URLs

आपको 3 types के URLs मिलेंगे:

1. **Production**: `https://your-custom-domain.com` (custom domain के बाद)
2. **Vercel Default**: `https://shramik-kalyan-samiti.vercel.app`
3. **Preview**: हर commit के लिए unique URL

---

## 📊 Monitoring & Analytics

### Vercel Dashboard में देख सकते हैं:

- Real-time logs
- Performance analytics
- Build history
- Deployment status
- Error tracking

---

## 🔄 Updates Deploy करना

बिल्कुल सीधा:

```powershell
# Code में changes करें
# Git में commit करें
git add .
git commit -m "Your changes"
git push origin main

# Bas! Automatic deploy हो जाएगा
```

---

## ⚙️ Advanced Configuration (Optional)

### Environment Variables Add करें

Dashboard → Project → Settings → Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

### Custom Build Configuration

`vercel.json` file already included है project में।

---

## 🎯 Popular Domain Providers के लिए DNS Setup

### Hostinger Domain के लिए:

1. Hostinger में login करें
2. **Domains** → अपना domain select करें
3. **DNS / Name Servers** section में जाएं
4. **"Change Nameservers"** चुनें
5. Vercel के nameservers add करें:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

### GoDaddy के लिए:

1. GoDaddy account में login करें
2. **My Products** → **Domains**
3. Domain के पास **DNS** button पर क्लिक करें
4. **Nameservers** section में **"Change"**
5. **"Custom"** चुनें
6. Vercel nameservers add करें

### Namecheap के लिए:

1. Namecheap में login करें
2. **Domain List** → अपना domain
3. **"Manage"** button
4. **"Custom DNS"** select करें
5. Vercel nameservers add करें

---

## ✅ Deployment Checklist

Before going live:

- [ ] Git repository updated है
- [ ] `npm run build` locally successful है
- [ ] Vercel project create किया है
- [ ] Deployment successful है
- [ ] Preview URL test किया है
- [ ] Custom domain add किया है
- [ ] DNS records configure किए हैं
- [ ] SSL certificate active है (automatic)
- [ ] All pages working हैं
- [ ] Mobile responsive test किया है

---

## 🆘 Troubleshooting

### Build Fails?
- Vercel dashboard में **"Deployments"** → failed deployment → **"View Build Logs"**
- Locally `npm run build` test करें

### Domain Not Working?
- DNS propagation में 24-48 hours लग सकते हैं
- Check करें: https://dnschecker.org

### 404 Errors?
- Vercel automatically Next.js routing handle करता है
- Check करें कि pages properly exported हैं

---

## 💰 Pricing

**Free Tier** में मिलता है:
- ✅ Unlimited deployments
- ✅ Automatic SSL
- ✅ 100GB bandwidth/month
- ✅ Serverless functions
- ✅ Preview deployments
- ✅ Custom domains

**यह project Free Tier में perfectly run होगा!** 🎉

---

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Documentation**: https://vercel.com/docs
- **Next.js on Vercel**: https://vercel.com/docs/frameworks/nextjs
- **Custom Domains**: https://vercel.com/docs/concepts/projects/custom-domains

---

## 📞 Support

- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions
- **Twitter**: @vercel

---

**Deployment Time: ~2-3 minutes** ⚡
**Difficulty Level: बहुत आसान!** 😊

---

**Last Updated**: December 2025
