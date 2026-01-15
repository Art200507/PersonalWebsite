# 🚀 Deploy Your Resume Website to Netlify

This guide will walk you through deploying your resume website to Netlify for free!

## 📋 Prerequisites

- Your resume website files (HTML, CSS, JS, profile picture)
- A GitHub account (recommended)
- A Netlify account (free)

## 🎯 Method 1: Drag & Drop (Simplest)

### Step 1: Prepare Your Files
Make sure you have these files in your project folder:
- `index.html`
- `styles.css`
- `script.js`
- `profile-pic.jpg`
- `netlify.toml` (created automatically)

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with your account
3. Drag and drop your entire project folder onto the Netlify dashboard
4. Wait for deployment (usually takes 1-2 minutes)
5. Your site is live! 🎉

## 🔗 Method 2: Connect to GitHub (Recommended)

### Step 1: Push to GitHub
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit: Resume website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Connect Netlify to GitHub
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose "GitHub"
4. Select your repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `.` (current directory)
6. Click "Deploy site"

## ⚙️ Method 3: Using Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Deploy
```bash
# Run the deployment script
./deploy.sh

# Or manually:
netlify init
netlify deploy --prod
```

## 🌐 Custom Domain (Optional)

1. In your Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow the DNS configuration instructions

## 📱 Testing Your Deployment

After deployment, test:
- [ ] All sections load properly
- [ ] Profile picture displays correctly
- [ ] Navigation works smoothly
- [ ] Links open correctly
- [ ] Mobile responsiveness
- [ ] Contact information is correct

## 🔧 Troubleshooting

### Common Issues:
- **Profile picture not showing**: Make sure `profile-pic.jpg` is in the root directory
- **Styling issues**: Check that all CSS files are included
- **Broken links**: Verify all URLs are correct

### Need Help?
- Check Netlify's [deployment logs](https://docs.netlify.com/site-deploys/deploy-log/)
- Visit [Netlify Community](https://community.netlify.com/)

## 🎉 You're Done!

Your resume website is now live on the internet! Share the URL with potential employers, add it to your LinkedIn profile, and include it in your job applications.

**Pro Tip**: Netlify automatically redeploys your site whenever you push changes to your GitHub repository (if using Method 2). 