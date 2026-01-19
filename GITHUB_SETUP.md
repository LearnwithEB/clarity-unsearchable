# GitHub Setup Guide

Your project is committed and ready to push to GitHub! Follow these steps:

## Option 1: Create Repository on GitHub.com (Recommended)

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** in the top right → "New repository"
3. **Repository name:** `clarity-unsearchable` (or your preferred name)
4. **Description:** "Clarity and the Unsearchable - AI and the Dream landing page"
5. **Visibility:** Choose Public or Private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. **Click "Create repository"**

## Option 2: Use the Push Script

After creating the repository on GitHub, run:

```bash
cd /Users/ericbrownjr./clarity-unsearchable
./push-to-github.sh
```

The script will ask for your GitHub repository URL and push everything.

## Option 3: Manual Push Commands

If you prefer to do it manually:

```bash
cd /Users/ericbrownjr./clarity-unsearchable

# Add your GitHub repository as remote (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/clarity-unsearchable.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## After Pushing

Once your code is on GitHub, you can:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add images:**
   - Place images in `/public/images/`
   - See `public/images/.gitkeep` for the list of required images

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Deploy to Vercel (recommended for Next.js):**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

## Repository URL Format

Your GitHub repository URL will look like:
- HTTPS: `https://github.com/YOUR_USERNAME/clarity-unsearchable.git`
- SSH: `git@github.com:YOUR_USERNAME/clarity-unsearchable.git`

Use HTTPS if you're not sure which one to use.
