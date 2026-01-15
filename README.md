# Atharva Badgujar - Resume Website

A modern, tech-focused resume website built with HTML, CSS, and JavaScript. Features a sleek black and blue design with smooth animations and interactive elements.

## 🚀 Features

- **Modern Design**: Clean, professional layout with a tech-focused aesthetic
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations, hover effects, and scroll-triggered animations
- **Performance**: Optimized for fast loading and smooth scrolling
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🎨 Design Highlights

- **Color Scheme**: Black and blue tech aesthetic with gradient accents
- **Typography**: Modern Inter font family for excellent readability
- **Animations**: Smooth fade-ins, parallax effects, and interactive hover states
- **Layout**: Grid-based responsive layout with proper spacing and hierarchy

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Interactive functionality and smooth scrolling
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Inter font family

## 📱 Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal description and key statistics
3. **Experience**: Professional experience with emphasis on Research Assistant role
4. **Projects**: Featured projects with live demos and GitHub links
5. **Skills**: Technical skills with animated progress bars
6. **Contact**: Contact information and social media links

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/resume-website.git
   git push -u origin main
   ```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Deploy!

### Option 2: GitHub Pages

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "GitHub Pages" section
   - Select source branch (main)
   - Save

2. **Your site will be available at**:
   `https://yourusername.github.io/resume-website`

### Option 3: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

## 📁 File Structure

```
resume-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎯 Customization

### Adding Your Photo

1. Replace the profile placeholder in the hero section
2. Update the `hero-image` div in `index.html`:
   ```html
   <div class="hero-image">
       <img src="your-photo.jpg" alt="Atharva Badgujar" class="profile-photo">
   </div>
   ```

3. Add CSS for the photo in `styles.css`:
   ```css
   .profile-photo {
       width: 300px;
       height: 300px;
       border-radius: 50%;
       object-fit: cover;
       border: 3px solid #0066ff;
       box-shadow: 0 10px 30px rgba(0, 102, 255, 0.2);
   }
   ```

### Updating Information

- **Personal Details**: Edit the hero section and about section
- **Experience**: Modify the experience items in the experience section
- **Projects**: Update project links and descriptions
- **Skills**: Adjust skill levels and add/remove skills
- **Contact**: Update contact information and social media links

### Color Scheme

The current color scheme uses:
- **Primary Blue**: `#0066ff`
- **Secondary Blue**: `#00ccff`
- **Background**: `#0a0a0a` (dark)
- **Secondary Background**: `#0f0f0f`
- **Card Background**: `#1a1a1a` to `#2a2a2a`

You can customize these colors in the CSS variables or directly in the CSS file.

## 🌟 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minify CSS/JS**: Use build tools to minify files for production
3. **Lazy Loading**: Implement lazy loading for images if adding more
4. **CDN**: Use CDN for external resources

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Contact

For questions or suggestions, please reach out through the contact section on the website.

---

**Built with ❤️ and lots of ☕** 