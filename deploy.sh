#!/bin/bash

echo "🚀 Deploying Resume Website to Netlify"
echo "======================================"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
else
    echo "✅ Netlify CLI found"
fi

# Initialize Netlify (if not already done)
if [ ! -f ".netlify/state.json" ]; then
    echo "🔧 Initializing Netlify project..."
    netlify init
else
    echo "✅ Netlify project already initialized"
fi

# Deploy to Netlify
echo "📤 Deploying to Netlify..."
netlify deploy --prod

echo "🎉 Deployment complete!"
echo "Your site should be live at the URL shown above" 