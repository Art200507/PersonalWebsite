# Vercel Deployment Guide

This guide will help you deploy your portfolio website to Vercel.

## Prerequisites
- GitHub account (already done ✅)
- Vercel account (create one at https://vercel.com)

## Deployment Steps

### 1. Sign Up / Login to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### 2. Import Your Project
1. Once logged in, click "Add New..." → "Project"
2. You'll see a list of your GitHub repositories
3. Find "PersonalWebsite" and click "Import"

### 3. Configure Project Settings

#### **Framework Preset**
```
Framework Preset: Other (or None)
```
Since this is a static HTML/CSS/JS site, no framework is needed.

#### **Build & Output Settings**
```
Build Command: (leave empty or use "echo 'No build needed'")
Output Directory: ./
Root Directory: ./
```

#### **Environment Variables**
```
NO ENVIRONMENT VARIABLES NEEDED FOR NOW
```
(You'll add Firebase config later when you set it up)

### 4. Deploy
1. Click "Deploy"
2. Wait 30-60 seconds for deployment to complete
3. You'll get a live URL like: `https://personal-website-xyz.vercel.app`

## Post-Deployment

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `atharvabadgujar.com`)
3. Follow Vercel's DNS configuration instructions

### Future Updates
Every time you push to GitHub, Vercel will automatically redeploy:
```bash
git add .
git commit -m "Update website"
git push origin main
```

## Firebase Configuration (When Ready)

When you're ready to set up Firebase for the contact form:

1. Set up Firebase project (follow FIREBASE_SETUP.md)
2. In Vercel Dashboard, go to Project Settings → Environment Variables
3. Add these variables:
   - `VITE_FIREBASE_API_KEY`: Your Firebase API key
   - `VITE_FIREBASE_AUTH_DOMAIN`: Your auth domain
   - `VITE_FIREBASE_PROJECT_ID`: Your project ID
   - `VITE_FIREBASE_STORAGE_BUCKET`: Your storage bucket
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`: Your sender ID
   - `VITE_FIREBASE_APP_ID`: Your app ID

**Note**: For now, the Firebase config is directly in index.html (with placeholder values). This works fine for a static site. The environment variables approach is optional and more secure for production.

## Vercel Configuration File (Optional)

If you want more control, create a `vercel.json` file:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "*.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

This is **optional** - Vercel auto-detects static sites.

## Quick Deploy Settings Summary

For easy copy-paste when deploying:

```
Repository: Art200507/PersonalWebsite
Framework: Other (None)
Root Directory: ./
Build Command: (leave empty)
Output Directory: ./
Install Command: (leave empty)
```

## Troubleshooting

### Issue: Site not loading correctly
- Check Vercel deployment logs
- Ensure all files were pushed to GitHub
- Verify file paths are relative (not absolute)

### Issue: Images not showing
- Check image paths in HTML
- Ensure images are committed to GitHub
- File names are case-sensitive

### Issue: 404 errors
- Make sure `index.html` is in root directory
- Check Vercel deployment logs for errors

## Performance Optimization (Optional)

Once deployed, you can:
1. Enable Vercel Analytics (Settings → Analytics)
2. Add Vercel Speed Insights
3. Configure caching headers
4. Enable compression (automatic on Vercel)

## Expected URLs

After deployment, you'll get:
- **Production**: `https://personal-website-xyz.vercel.app` (or your custom domain)
- **Preview**: Every git branch gets its own preview URL
- **Development**: Local testing with `python3 -m http.server 8080`

## Next Steps After Deployment

1. ✅ Test all sections on the live site
2. ✅ Test on mobile devices
3. ✅ Set up Firebase and update config in index.html
4. ✅ Add custom domain (optional)
5. ✅ Share your portfolio link!

---

**That's it!** Your portfolio will be live in under 2 minutes. 🚀
