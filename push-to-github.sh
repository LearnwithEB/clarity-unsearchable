#!/bin/bash

# Script to push Clarity and the Unsearchable to GitHub

echo "🚀 Pushing Clarity and the Unsearchable to GitHub"
echo ""

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "✅ Remote 'origin' already exists"
    git remote -v
else
    echo "📝 Please provide your GitHub repository URL:"
    echo "   Example: https://github.com/yourusername/clarity-unsearchable.git"
    read -p "GitHub URL: " repo_url
    
    if [ -z "$repo_url" ]; then
        echo "❌ No URL provided. Exiting."
        exit 1
    fi
    
    git remote add origin "$repo_url"
    echo "✅ Remote added: $repo_url"
fi

echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Done! Your project is now on GitHub."
echo ""
echo "Next steps:"
echo "1. Install dependencies: npm install"
echo "2. Add images to /public/images/"
echo "3. Run dev server: npm run dev"
echo "4. Deploy to Vercel (optional): https://vercel.com"
