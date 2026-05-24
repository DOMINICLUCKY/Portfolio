# 🚀 Deployment Guide

Complete guide to deploy your 3D portfolio online.

## 📋 Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added project images to `public/projects/`
- [ ] Updated social media links
- [ ] Tested locally with `npm run dev`
- [ ] No console errors or warnings
- [ ] Tested on mobile devices
- [ ] Built successfully: `npm run build`
- [ ] All links are working
- [ ] Contact form is functional

---

## 🔧 Local Build Test

Before deploying, test the production build locally:

```bash
cd d:\portfolio

# Build for production
npm run build

# Start production server
npm run start

# Visit http://localhost:3000
```

This simulates how it will run on the server.

---

## 🎯 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the official Next.js hosting platform. Deploys in seconds with automatic optimizations.

**Steps:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Go to vercel.com**
   - Sign up with GitHub
   - Click "New Project"
   - Select your portfolio repository

3. **Configure Project**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Start Command: `npm run start` (default)

4. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically
   - You get a live URL in seconds

5. **Connect Custom Domain** (optional)
   - In Vercel dashboard
   - Go to Domains
   - Add your domain
   - Follow DNS instructions

**Advantages:**
- Completely free tier
- Automatic CI/CD from GitHub
- Edge caching for fast performance
- One-click rollbacks
- Automatic SSL certificates

---

### Option 2: Netlify

Similar to Vercel, but with different features.

**Steps:**

1. **Push to GitHub** (same as above)

2. **Go to netlify.com**
   - Sign up with GitHub
   - Click "New site from Git"
   - Select repository

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Deploy**
   - Click "Deploy site"
   - Netlify builds and deploys

---

### Option 3: AWS/Azure/Google Cloud

For more control and scalability.

**General Steps:**

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy Node.js app** to:
   - AWS EC2
   - Google Cloud Run
   - Azure App Service
   - DigitalOcean

3. **Use process manager**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   ```

---

### Option 4: Docker Container

Deploy as a containerized app.

**Create Dockerfile:**

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Build & Run:**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🌐 Custom Domain Setup

### Add Custom Domain to Vercel

1. Go to Vercel Dashboard → Your Project
2. Settings → Domains
3. Add your domain (e.g., arjunboda.com)
4. Vercel shows DNS records
5. Update DNS at your domain registrar

**Common Registrars:**
- Godaddy.com
- Namecheap.com
- Bluehost.com
- HostGator.com

### DNS Configuration

Point these records to Vercel:

```
Type: A
Name: @
Value: 76.76.19.89

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📊 Environment Variables

Most features work without env vars. If you add backend:

**Create `.env.production`:**
```bash
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
DATABASE_URL=your_database_url
CONTACT_FORM_API=your_email_service_api
```

---

## 🔐 Security Checklist

- [ ] No API keys in code (use env vars)
- [ ] No sensitive data in commits
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Use environment variables for secrets
- [ ] Keep dependencies updated

---

## 📈 Performance Optimization

After deployment, optimize:

1. **Images**
   - Use Next.js Image component
   - Compress project images
   - Use WebP format

2. **Code**
   - Enable code splitting (already done)
   - Minify CSS/JS (automatic)
   - Tree shake unused code

3. **Analytics**
   - Add Google Analytics
   - Monitor Core Web Vitals
   - Check deployment stats

---

## 🧪 Testing After Deployment

**Checklist:**

1. **Load Testing**
   ```bash
   # Test from different browsers
   - Chrome
   - Firefox
   - Safari
   - Edge
   ```

2. **Mobile Testing**
   - Test on iPhone
   - Test on Android
   - Check responsive design

3. **Performance**
   - Check Core Web Vitals
   - Test 3D rendering
   - Verify animations work

4. **Links**
   - Test all navigation links
   - Test project links
   - Test social media links
   - Test email links

5. **Forms**
   - Test contact form
   - Verify email submission (if backend)

---

## 📊 Monitoring & Maintenance

### Daily

- Monitor site uptime
- Check error logs
- Verify backups

### Weekly

- Update dependencies
- Check performance
- Review analytics

### Monthly

- Security patches
- Performance review
- Content updates

---

## 🚨 Troubleshooting Deployment

### Build Fails on Vercel

**Check logs:**
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Find failed deployment
4. Check build logs for errors

**Common issues:**
- Missing dependencies: `npm install`
- Port binding: Use port 3000
- Environment variables: Add in Vercel dashboard

### 404 on Routes

```bash
# Create next.config.ts with redirects if needed
```

### Slow Performance

1. Reduce particle count in hero
2. Optimize images
3. Enable caching
4. Use CDN

---

## 📝 Post-Deployment

### Update URLs

Change all links to production domain:

```typescript
// Before
link: "https://localhost:3000"

// After
link: "https://yourdomain.com"
```

### Add Analytics

```html
<!-- Add to head in layout.tsx -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Monitor Performance

- Use Vercel Analytics
- Monitor in Google Search Console
- Check Core Web Vitals

---

## 🔄 Continuous Deployment

Enable automatic deployments:

**Vercel (automatic):**
- Every push to main → auto deploy
- Pull requests → preview deployments

**Custom:**
```bash
# GitHub Actions workflow (optional)
# Builds on push, deploys on success
```

---

## 💰 Cost Breakdown

### Free Options

- **Vercel**: Completely free tier
- **Netlify**: Free tier with limits
- **GitHub Pages**: Free (static only)

### Premium Options

- **Vercel Pro**: $20/month
- **Netlify Pro**: $19/month
- **AWS**: Pay-as-you-go

---

## 📱 SSL Certificate

All modern hosts provide free SSL:
- Vercel: ✅ Automatic
- Netlify: ✅ Automatic
- Self-hosted: Use Let's Encrypt

---

## 🎯 Quick Start to Live

**Fastest path (5 minutes):**

1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy
5. Share your live URL!

---

## 📞 Support

**If deployment fails:**

1. Check [Vercel Docs](https://vercel.com/docs)
2. Review build logs
3. Clear cache and rebuild
4. Check GitHub Actions

---

**🎉 Congratulations! Your portfolio is live!**

Share your live URL with:
- Potential employers
- Clients
- Network on social media
- In your resume/CV

Good luck! 🚀
