# Setup Instructions

## Quick Start

1. **Navigate to the project directory:**
   ```bash
   cd clarity-unsearchable
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add images:**
   Place the following images in `/public/images/`:
   - `algorithm-amplifies-intention.jpg`
   - `mlk-barratt-junior-high.jpg`
   - `uncle-portrait.jpg`
   - `interactive-radar.jpg`
   - `interactive-drafting-table.jpg`
   - `clarity-app-phones.jpg`
   - `bridge-or-hands.jpg`

   You can use Unsplash images or your own. The images should match the descriptions in the main page.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000/clarity-unsearchable`

## GitHub Setup

To push this to GitHub:

1. **Initialize git (if not already):**
   ```bash
   git init
   ```

2. **Create a new repository on GitHub**

3. **Add the remote and push:**
   ```bash
   git add .
   git commit -m "Initial commit: Clarity and the Unsearchable landing page"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

## Deployment

This project is ready to deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting platform**

For Vercel:
1. Push to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy

## Notes

- The project uses Next.js 14 App Router
- All components are client components where needed (using "use client")
- The blueprint theme is defined in `app/globals.css`
- Images are optimized using Next.js Image component
- Parallax effects use Framer Motion's `useScroll` and `useTransform`
