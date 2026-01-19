# Clarity and the Unsearchable

A Next.js 14 landing page for "Clarity and the Unsearchable" - a presentation for the National Black AI Literacy Event celebrating Dr. Martin Luther King Jr. Day.

## Features

- Next.js 14 App Router with TypeScript
- Tailwind CSS with custom blueprint theme
- Framer Motion for animations and parallax effects
- shadcn/ui component structure
- Responsive design with mobile-first approach
- Blueprint-inspired visual design (cream canvas, navy type, grid overlays)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up shadcn/ui (if needed):

```bash
npx shadcn-ui@latest init
```

3. Add images to `/public/images/`:

You'll need to add the following images (or use placeholder images from Unsplash):

- `algorithm-amplifies-intention.jpg`
- `mlk-barratt-junior-high.jpg`
- `uncle-portrait.jpg`
- `interactive-radar.jpg`
- `interactive-drafting-table.jpg`
- `clarity-app-phones.jpg`
- `bridge-or-hands.jpg`

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will automatically redirect to `/clarity-unsearchable`.

### Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
clarity-unsearchable/
├── app/
│   ├── clarity-unsearchable/
│   │   └── page.tsx          # Main landing page
│   ├── globals.css            # Global styles + blueprint theme
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home redirect
├── components/
│   └── ui/
│       ├── cube-loader.tsx    # 3D spinning cube loader
│       └── shape-landing-hero.tsx  # Geometric hero section
├── lib/
│   └── utils.ts               # Utility functions (cn helper)
└── public/
    └── images/                # Image assets
```

## Blueprint Theme

The project uses a custom blueprint theme with CSS variables:

- `--bp-canvas`: Cream background (#f3efe4)
- `--bp-panel`: Panel background (#f5f0e6)
- `--bp-ink`: Navy text (#111827)
- `--bp-grid`: Grid overlay color

Helper classes:
- `.bp-grid`: Full grid background
- `.bp-grid-soft`: Soft grid overlay
- `.bp-card`: Card background
- `.bp-section-kicker`: Small uppercase section labels
- `.bp-section-title`: Section title styling

## Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **shadcn/ui**: Component library structure

## License

© 2025 Eric Brown Jr
