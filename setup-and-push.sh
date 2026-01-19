#!/bin/bash

echo "🚀 Setting up and pushing Clarity and the Unsearchable to GitHub"
echo ""

# Check if repository exists
echo "Checking if repository exists on GitHub..."
if git ls-remote --exit-code origin &> /dev/null; then
    echo "✅ Repository exists!"
    echo ""
    echo "Pushing code..."
    git push -u origin main
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Success! Your code is now on GitHub!"
        echo "   https://github.com/LearnwithEB/clarity-unsearchable"
        exit 0
    else
        echo ""
        echo "❌ Push failed. You may need to authenticate."
        exit 1
    fi
else
    echo "❌ Repository not found on GitHub."
    echo ""
    echo "📝 Please create the repository first:"
    echo ""
    echo "1. Go to: https://github.com/new"
    echo "2. Repository name: clarity-unsearchable"
    echo "3. Description: Clarity and the Unsearchable - AI and the Dream landing page"
    echo "4. Choose Public or Private"
    echo "5. ⚠️  DO NOT check 'Add a README file'"
    echo "6. Click 'Create repository'"
    echo ""
    read -p "Have you created the repository? (y/n) " created
    
    if [ "$created" = "y" ]; then
        echo ""
        echo "Pushing code..."
        git push -u origin main
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ Success! Your code is now on GitHub!"
            echo "   https://github.com/LearnwithEB/clarity-unsearchable"
        else
            echo ""
            echo "❌ Push failed. This might be because:"
            echo "   - You need to authenticate (GitHub will prompt)"
            echo "   - You need a Personal Access Token"
            echo ""
            echo "If you need a token:"
            echo "   https://github.com/settings/tokens"
        fi
    else
        echo ""
        echo "Please create the repository first, then run this script again."
    fi
fi
