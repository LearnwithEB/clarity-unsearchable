# GitHub Pages Setup Guide

## ✅ What I've Done

1. ✅ Configured Next.js for static export
2. ✅ Created GitHub Actions workflow for deployment
3. ✅ Set up basePath for GitHub Pages

## 🚀 Enable GitHub Pages (2 Steps)

### Step 1: Enable GitHub Pages
1. Go to: https://github.com/LearnwithEB/clarity-unsearchable/settings/pages
2. Under "Build and deployment" → "Source"
3. Select **"GitHub Actions"** from the dropdown
4. It will auto-save

### Step 2: Push the Changes
I'll commit and push the GitHub Actions workflow now, then you can enable Pages.

## 📊 Watch Deployment

After enabling Pages and pushing:
- Check status: https://github.com/LearnwithEB/clarity-unsearchable/actions
- You'll see "Deploy to GitHub Pages" workflow running
- Takes 2-3 minutes
- Green checkmark when done ✅

## 🌐 Your Live Site

Once deployed, your site will be live at:

**Main page:**
https://learnwitheb.github.io/clarity-unsearchable/

**Clarity and the Unsearchable page:**
https://learnwitheb.github.io/clarity-unsearchable/clarity-unsearchable

## 📝 Notes

- The site uses static export (no server-side features)
- Images need to be optimized (using `unoptimized: true` for GitHub Pages)
- All routes work with the `/clarity-unsearchable` base path

## 🔄 After First Push

Once you push the workflow file and enable Pages:
1. The workflow will run automatically
2. Your site will deploy in 2-3 minutes
3. You'll get a green checkmark when done
4. Site goes live automatically!
