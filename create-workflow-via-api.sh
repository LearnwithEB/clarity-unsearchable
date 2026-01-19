#!/bin/bash

# Script to create GitHub workflow file via API
# This requires a GitHub token with repo and workflow scopes

echo "🔧 Creating workflow file via GitHub API..."

# Check if GITHUB_TOKEN is set
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ GITHUB_TOKEN not set"
    echo ""
    echo "To use this script:"
    echo "1. Get a GitHub Personal Access Token with 'repo' and 'workflow' scopes"
    echo "2. Run: export GITHUB_TOKEN=your_token_here"
    echo "3. Then run this script again"
    echo ""
    echo "Or use the manual method in STEP_BY_STEP_GITHUB_PAGES.md"
    exit 1
fi

# Encode the workflow file content
CONTENT=$(cat .github/workflows/deploy.yml | base64)

# Create the file via GitHub API
curl -X PUT \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/LearnwithEB/clarity-unsearchable/contents/.github/workflows/deploy.yml" \
  -d "{
    \"message\": \"Add GitHub Pages deployment workflow\",
    \"content\": \"$CONTENT\",
    \"branch\": \"main\"
  }"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Workflow file created!"
    echo ""
    echo "Next: Enable GitHub Pages at:"
    echo "https://github.com/LearnwithEB/clarity-unsearchable/settings/pages"
else
    echo ""
    echo "❌ Failed to create workflow file"
    echo "Please use the manual method in STEP_BY_STEP_GITHUB_PAGES.md"
fi
