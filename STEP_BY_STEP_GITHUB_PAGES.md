# Step-by-Step: Enable GitHub Pages

## 🎯 Goal: Get your site live at https://learnwitheb.github.io/clarity-unsearchable/

## Step 1: Create the Workflow File (2 minutes)

Since we can't push the workflow file automatically, let's create it via GitHub:

1. **Go to your repository:**
   https://github.com/LearnwithEB/clarity-unsearchable

2. **Click "Add file" → "Create new file"**

3. **In the file path box, type:**
   ```
   .github/workflows/deploy.yml
   ```
   (GitHub will create the folders automatically)

4. **Copy and paste this entire content:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NODE_ENV: production

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. **Scroll down and click "Commit new file"**
   - Use default commit message
   - Commit directly to `main` branch
   - Click green "Commit new file" button

## Step 2: Enable GitHub Pages (1 minute)

1. **Go to Pages settings:**
   https://github.com/LearnwithEB/clarity-unsearchable/settings/pages

2. **Under "Build and deployment" → "Source"**
   - Click the dropdown
   - Select **"GitHub Actions"**
   - It auto-saves (no button to click)

## Step 3: Watch It Deploy (2-3 minutes)

1. **Go to Actions tab:**
   https://github.com/LearnwithEB/clarity-unsearchable/actions

2. **You'll see:**
   - "Deploy to GitHub Pages" workflow running
   - Yellow dot = in progress
   - Green checkmark = done! ✅

## Step 4: Your Site is Live! 🎉

Once you see the green checkmark, your site is live at:

**Main page:**
https://learnwitheb.github.io/clarity-unsearchable/

**Your presentation page:**
https://learnwitheb.github.io/clarity-unsearchable/clarity-unsearchable

---

## 🆘 Troubleshooting

**If the workflow fails:**
- Check the Actions tab for error messages
- Make sure `next.config.js` has `output: 'export'` (already done)
- Make sure all dependencies are in `package.json` (already done)

**If Pages shows 404:**
- Wait a few more minutes (sometimes takes 5-10 minutes)
- Check that the workflow completed successfully
- Make sure you selected "GitHub Actions" as source

---

## ✅ Quick Checklist

- [ ] Created `.github/workflows/deploy.yml` file
- [ ] Enabled GitHub Pages with "GitHub Actions" source
- [ ] Workflow running in Actions tab
- [ ] Green checkmark appears
- [ ] Site is live!

You've got this! 🚀
