# Hostinger Deployment Guide - Shramik Kalyan Samiti

यह गाइड आपको Hostinger पर Next.js application को deploy करने में मदद करेगी।

## आवश्यकताएँ (Prerequisites)

- Hostinger account with Node.js support enabled
- Node.js version 18.18.0 या उससे ऊपर
- Git installed on your Hostinger hosting

## Deployment Steps

### 1. Hostinger में Node.js Setup करें

1. **Hostinger Control Panel** में login करें
2. **Advanced** section में जाएं
3. **Node.js** सेक्शन को खोलें
4. **Create Application** पर क्लिक करें
5. निम्नलिखित settings करें:
   - **Node.js version**: 18.x या higher
   - **Application mode**: Production
   - **Application root**: `shramik_kalyan_samiti`
   - **Application URL**: आपका domain (जैसे: `yourdomain.com`)
   - **Application startup file**: `server.js` (हम इसे बाद में बनाएंगे)
   - **Port**: 3000 (या Hostinger द्वारा दिया गया port)

### 2. Code को Hostinger पर Upload करें

#### Option A: Git से Deploy (Recommended)

1. **SSH** से अपने Hostinger account में login करें:
   ```bash
   ssh username@yourdomain.com
   ```

2. Application directory में जाएं:
   ```bash
   cd domains/yourdomain.com/public_html
   ```

3. Git repository clone करें:
   ```bash
   git clone https://github.com/Utkarsh1506/shramik_kalyan_samiti.git
   cd shramik_kalyan_samiti
   ```

#### Option B: File Manager से Upload

1. Hostinger File Manager खोलें
2. `public_html` folder में जाएं
3. सभी project files upload करें
4. Ensure करें कि `package.json` और सभी जरूरी files uploaded हों

### 3. Dependencies Install करें

SSH या Terminal में:

```bash
cd ~/domains/yourdomain.com/public_html/shramik_kalyan_samiti
npm install --production
```

### 4. Application Build करें

```bash
npm run build
```

यह command `.next` folder में production build create करेगी।

### 5. Environment Variables Setup करें

Hostinger Node.js panel में या `.env.production` file में:

```env
NODE_ENV=production
PORT=3000
```

### 6. Application को Start करें

Hostinger के Node.js panel में:
1. **Start Application** बटन पर क्लिक करें
2. या SSH में manually start करें:
   ```bash
   npm start
   ```

### 7. Domain Configuration

1. Hostinger domain settings में जाएं
2. Ensure करें कि domain आपके Node.js application पर point कर रहा है
3. SSL certificate enable करें (free Let's Encrypt)

## Automatic Deployment Setup (Optional)

### Git Auto-Deploy

अगर आप हर git push पर automatic deployment चाहते हैं:

1. Hostinger में **Git** section खोलें
2. Repository URL add करें
3. **Auto-deploy** enable करें
4. Branch select करें (usually `main`)

### Post-Deploy Script

`package.json` में script add करें:

```json
{
  "scripts": {
    "deploy": "npm install && npm run build && npm start"
  }
}
```

## Monitoring और Troubleshooting

### Logs देखने के लिए

SSH में:
```bash
cd ~/domains/yourdomain.com/public_html/shramik_kalyan_samiti
pm2 logs
```

या Hostinger Node.js panel में **View Logs** देखें।

### Common Issues

#### Issue 1: Application Start नहीं हो रहा है
**Solution**: 
- Port number check करें
- `package.json` में "start" script verify करें
- Node.js version compatibility check करें

#### Issue 2: 502 Bad Gateway Error
**Solution**:
- Application running है या नहीं check करें
- Port configuration सही है या नहीं verify करें
- Restart application

#### Issue 3: Build Fails
**Solution**:
- Dependencies properly installed हैं verify करें
- Node.js memory limit increase करें
- `npm install --legacy-peer-deps` try करें

## Performance Optimization

### 1. Enable Compression
`.htaccess` file already configured है (included in project)

### 2. Setup Caching
Next.js automatically static assets को cache करता है

### 3. CDN Configuration (Optional)
Hostinger's built-in CDN को enable करें control panel से

## Security Checklist

- ✅ HTTPS/SSL enabled है
- ✅ Environment variables secure हैं (.env.production में)
- ✅ `.gitignore` में sensitive files listed हैं
- ✅ Security headers configured हैं (`.htaccess` में)
- ✅ `next.config.mjs` में `poweredByHeader: false` है

## Updating Your Application

```bash
# SSH में login करें
cd ~/domains/yourdomain.com/public_html/shramik_kalyan_samiti

# Latest code pull करें
git pull origin main

# Dependencies update करें
npm install

# Rebuild application
npm run build

# Application restart करें
npm start
# या Hostinger panel से restart करें
```

## Support

अगर कोई problem हो तो:
1. Hostinger support से contact करें
2. Application logs check करें
3. Next.js documentation देखें: https://nextjs.org/docs

## Important Notes

- **Port Number**: Hostinger automatically port assign करता है। Panel में दिया गया port use करें।
- **File Permissions**: Ensure करें कि files proper permissions के साथ uploaded हों (644 for files, 755 for directories)
- **Memory Limits**: अगर build time पर memory error आए तो Hostinger से higher plan upgrade करें
- **Node Version**: हमेशा `package.json` में specified version use करें (>=18.18.0)

## Production Checklist

Before going live:
- [ ] Build successfully complete हुआ है
- [ ] All pages accessible हैं
- [ ] SSL certificate active है
- [ ] Contact form working है (if applicable)
- [ ] Images properly loading हैं
- [ ] Mobile responsive है
- [ ] SEO meta tags present हैं
- [ ] Analytics setup है (Google Analytics, etc.)
- [ ] Backup strategy in place है

---

**Last Updated**: December 2025
**Version**: 1.0.0
