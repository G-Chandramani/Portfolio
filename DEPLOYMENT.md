# Deployment Guide

This guide will help you deploy your portfolio to various hosting platforms.

## Pre-Deployment Checklist

- [x] All dependencies are up to date
- [x] Production build works (`npm run build`)
- [x] Environment variables are configured
- [x] No console errors in production
- [x] All images and assets are optimized
- [x] SEO meta tags are added
- [x] Error boundaries are implemented

## Environment Variables Setup

Before deploying, make sure to set these environment variables in your hosting platform:

```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment Options

### 1. Vercel (Recommended)

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Configure environment variables in Project Settings → Environment Variables
5. Deploy!

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Environment Variables:**
Add all three EmailJS variables in the Vercel dashboard.

---

### 2. Netlify

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "New site from Git" → Choose GitHub → Select repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variables in Site settings → Environment variables
6. Deploy!

---

### 3. GitHub Pages

**Steps:**
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Update `vite.config.js`:
   ```js
   base: '/Portfolio/', // Your repository name
   ```
4. Run: `npm run deploy`
5. Enable GitHub Pages in repository settings

**Note:** For GitHub Pages, you'll need to set environment variables differently or use a different approach for EmailJS.

---

### 4. Render

**Steps:**
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new "Static Site"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Add environment variables in Environment section

---

## Post-Deployment

### 1. Test Your Site
- [ ] All pages load correctly
- [ ] 3D models render properly
- [ ] Contact form works
- [ ] All links work
- [ ] Mobile responsive
- [ ] Performance is good

### 2. Update URLs
- Update Open Graph and Twitter meta tags in `index.html` with your actual domain
- Update any hardcoded URLs in your code

### 3. Set Up Custom Domain (Optional)
- Configure DNS settings in your hosting platform
- Update SSL certificate (usually automatic)

### 4. Monitor Performance
- Use Google PageSpeed Insights
- Check browser console for errors
- Monitor EmailJS usage

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors if using TS

### Environment Variables Not Working
- Make sure variable names start with `VITE_`
- Restart build after adding variables
- Check variable names match exactly (case-sensitive)

### 3D Models Not Loading
- Check file paths are correct
- Ensure model files are in `public/` directory
- Check browser console for 404 errors

### Contact Form Not Working
- Verify EmailJS environment variables are set
- Check EmailJS dashboard for errors
- Test EmailJS service directly

## Performance Optimization

After deployment:
1. Enable CDN caching (usually automatic)
2. Compress images if needed
3. Monitor bundle size
4. Use lazy loading for images
5. Enable gzip compression

## Security Checklist

- [x] `.env` file is in `.gitignore`
- [x] No API keys in code
- [x] Environment variables are secure
- [x] HTTPS is enabled (automatic on most platforms)

## Support

If you encounter issues:
1. Check browser console for errors
2. Review hosting platform logs
3. Test locally with `npm run build && npm run preview`
4. Check EmailJS dashboard for service status

---

**Happy Deploying! 🚀**
