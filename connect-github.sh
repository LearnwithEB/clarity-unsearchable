#!/bin/bash

echo "🔗 Connecting Clarity and the Unsearchable to GitHub"
echo ""
echo "Your Git is configured as: LearnwithEB (eric@ericbrownjr.com)"
echo ""

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "✅ Remote already exists:"
    git remote -v
    echo ""
    read -p "Do you want to use this remote? (y/n) " use_existing
    if [ "$use_existing" != "y" ]; then
        git remote remove origin
    else
        echo "Pushing to existing remote..."
        git push -u origin main
        exit 0
    fi
fi

echo "First, create a new repository on GitHub:"
echo "1. Go to: https://github.com/new"
echo "2. Repository name: clarity-unsearchable (or your choice)"
echo "3. Make it Public or Private"
echo "4. DO NOT check 'Add a README file'"
echo "5. Click 'Create repository'"
echo ""
read -p "Have you created the repository? (y/n) " repo_created

if [ "$repo_created" != "y" ]; then
    echo "Please create the repository first, then run this script again."
    exit 1
fi

echo ""
read -p "Enter your GitHub username: " github_username
read -p "Enter repository name (default: clarity-unsearchable): " repo_name
repo_name=${repo_name:-clarity-unsearchable}

repo_url="https://github.com/${github_username}/${repo_name}.git"

echo ""
echo "Adding remote: $repo_url"
git remote add origin "$repo_url"

echo ""
echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Success! Your code is now on GitHub:"
    echo "   https://github.com/${github_username}/${repo_name}"
    echo ""
    echo "Next steps:"
    echo "1. npm install"
    echo "2. Add images to /public/images/"
    echo "3. npm run dev"
else
    echo ""
    echo "❌ Push failed. This might be because:"
    echo "   - The repository doesn't exist yet"
    echo "   - You need to authenticate (GitHub will prompt for credentials)"
    echo "   - You need a Personal Access Token"
    echo ""
    echo "If you need to set up authentication, visit:"
    echo "https://github.com/settings/tokens"
fi
