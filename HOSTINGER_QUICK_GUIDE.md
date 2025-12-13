# Hostinger Deployment - Quick Reference

## त्वरित तैयारी (Quick Setup)

### 1. पहली बार Deploy करने के लिए:

```bash
# Dependencies install करें
npm install

# Production build बनाएं
npm run build

# Local पर test करें
npm start
```

### 2. Hostinger पर Upload करने से पहले:

**जांच करें कि ये files मौजूद हैं:**
- ✅ `.htaccess` - Apache configuration
- ✅ `DEPLOYMENT.md` - Detailed deployment guide
- ✅ `.env.production.example` - Environment variables template
- ✅ `package.json` - Dependencies और scripts
- ✅ `next.config.mjs` - Production config with standalone output

### 3. Hostinger Dashboard में:

1. **Node.js Application बनाएं**
   - Version: 18.x या higher
   - Mode: Production
   - Port: 3000 (या Hostinger assigned)

2. **Files Upload करें**
   - Git clone (recommended) या
   - File Manager से upload

3. **Setup Commands** (SSH में):
   ```bash
   cd ~/domains/yourdomain.com/public_html/shramik_kalyan_samiti
   npm install --production
   npm run build
   npm start
   ```

## Important URLs

- **Hostinger Control Panel**: https://hpanel.hostinger.com
- **Your Site** (update after deployment): https://yourdomain.com
- **Node.js Manager**: hPanel → Advanced → Node.js

## Support Contact

- Hostinger Support: support@hostinger.com
- Live Chat: Available in hPanel

## Next Steps After Deployment

1. ✅ Test करें कि site load हो रही है
2. ✅ SSL certificate activate करें
3. ✅ Domain name configure करें
4. ✅ Performance monitoring setup करें
5. ✅ Backup schedule बनाएं

---

**विस्तृत जानकारी के लिए `DEPLOYMENT.md` देखें**
