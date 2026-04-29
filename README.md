# TradePro - Prop Trading Firm Website

A modern, responsive website for a prop trading firm built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Lucide React** for icons
- Fully responsive design
- Smooth scroll navigation
- Interactive FAQ accordion
- Animated pricing cards
- Gradient effects and glass morphism

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd prop-firms-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a static export in the `dist` folder.

## Project Structure

```
prop-firms-nextjs/
├── app/
│   ├── components/     # Reusable components
│   │   └── Navbar.tsx
│   ├── sections/       # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```

## Sections

1. **Hero** - Animated hero section with gradient orbs, stats, and CTAs
2. **Features** - 6 feature cards with icons and hover effects
3. **How It Works** - 3-step process with visual elements
4. **Pricing** - 3 pricing tiers with popular badge
5. **FAQ** - Animated accordion with smooth transitions
6. **CTA** - Final call-to-action section
7. **Footer** - Links, social icons, and disclaimer

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#6366f1',
  'primary-light': '#818cf8',
  secondary: '#10b981',
  // ...
}
```

### Animations

Animations are powered by Framer Motion. Each section has scroll-triggered animations using `useInView` hook.

## License

MIT
