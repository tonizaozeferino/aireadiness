# AGENTS.md

## Project Overview

**AI Readiness & Compliance (ARC) Assessment** - A landing page for a joint consulting service offering that combines operational AI strategy with legal compliance expertise.

**Tech Stack:**
- Vite 5.4.2
- React 18.3.1
- TypeScript 5.5.3
- Tailwind CSS 3.4.1
- Lucide React (icons)
- Supabase (backend integration)

**Project Type:** Single-page marketing/landing page application

---

## Build & Development

### Prerequisites
- Node.js v20+ required
- npm package manager

### Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Type checking
npm run typecheck
```

### Development Server
The Vite dev server runs on `http://localhost:5173` with HMR (Hot Module Replacement) enabled.

---

## Project Structure

```
src/
├── App.tsx          # Main application component (landing page)
├── main.tsx         # Application entry point
├── index.css        # Global styles + Tailwind directives
└── vite-env.d.ts    # Vite type definitions

public/              # Static assets
```

### Key Files
- [package.json](package.json) - Dependencies and scripts
- [vite.config.ts](vite.config.ts) - Vite configuration
- [tsconfig.app.json](tsconfig.app.json) - TypeScript configuration for app
- [tsconfig.json](tsconfig.json) - Root TypeScript configuration
- [tailwind.config.js](tailwind.config.js) - Tailwind CSS configuration
- [eslint.config.js](eslint.config.js) - ESLint configuration
- [.env](.env) - Environment variables (Supabase configuration)

---

## Code Style & Conventions

### TypeScript
- Strict mode enabled
- ES2020 target
- React JSX transform (`react-jsx`)
- No unused locals/parameters enforced
- All TypeScript errors must be resolved before committing

### React
- Functional components with hooks
- ES6+ syntax
- Component naming: PascalCase
- Props destructuring preferred

### Styling
- Tailwind CSS utility-first approach
- Responsive design: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Color scheme: Sky blue (`sky-*`) and slate (`slate-*`) palette
- Lucide React icons for all iconography

### Component Structure in App.tsx
The landing page is structured as a single-page application with sections:
1. Header/Navigation
2. Hero Section
3. Problem Statement
4. Solution Overview
5. Package Offerings (Compact vs Professional)
6. Team/Expertise
7. Results/Benefits
8. Call-to-Action
9. Footer

---

## Testing

Currently no test framework is configured. When adding tests:
- Consider Vitest (Vite-native testing framework)
- React Testing Library for component tests
- Place tests adjacent to components: `ComponentName.test.tsx`

---

## Dependencies

### Core
- `react` & `react-dom` ^18.3.1
- `@supabase/supabase-js` ^2.57.4
- `lucide-react` ^0.344.0

### Dev Dependencies
- Vite bundler and React plugin
- TypeScript & type definitions
- ESLint with React hooks & refresh plugins
- Tailwind CSS with PostCSS & Autoprefixer

**Note:** `lucide-react` is excluded from Vite's optimizeDeps to prevent bundling issues.

---

## Content & Localization

**Language:** German (de)
- All user-facing text is in German
- Target audience: German-speaking business decision-makers
- Focus: B2B consulting for AI readiness and legal compliance

**Key Terminology:**
- ARC = AI Readiness & Compliance
- DSGVO = GDPR (EU data protection regulation)
- EU AI Act / KIVO = EU AI Regulation
- Use Cases = Use-Cases (German adoption of English term)

---

## Supabase Integration

Environment variables expected in `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Currently, Supabase client is configured but not actively used in the UI. Future enhancements may include:
- Contact form submissions
- Meeting booking system
- User authentication
- Analytics/tracking

---

## Deployment

### Build Output
- Run `npm run build` to create production build
- Output directory: `dist/`
- Optimized, minified assets with content hashing

### Hosting Recommendations
- Vercel (zero-config Vite support)
- Netlify (automatic Vite detection)
- CloudFlare Pages
- GitHub Pages (requires base path configuration)

### Pre-deployment Checklist
1. Run `npm run typecheck` - ensure no TypeScript errors
2. Run `npm run lint` - fix all linting issues
3. Run `npm run build` - verify successful production build
4. Test `.env` variables are properly configured
5. Verify responsive design on multiple screen sizes

---

## Future Enhancements

Potential areas for expansion:
- Contact form with Supabase backend
- Calendar integration for booking consultations
- Multi-language support (English version)
- Blog/resources section
- Customer testimonials
- Case studies
- Interactive ROI calculator
- Video content embedding

---

## Security Considerations

- Environment variables must use `VITE_` prefix to be exposed to client
- Never commit `.env` file (already in `.gitignore`)
- Supabase Row Level Security (RLS) should be configured on backend
- Content Security Policy (CSP) headers recommended for production
- HTTPS required for production deployment

---

## Performance

Current optimizations:
- Vite's fast HMR for development
- Tree-shaking in production builds
- Automatic code splitting
- Optimized asset loading

Monitoring recommendations:
- Lighthouse audits for performance metrics
- Core Web Vitals monitoring
- Bundle size analysis with `vite-bundle-visualizer`

---

## Support & Contact

**Consulting Partners:**
- **Strachwitz Consulting** - António Freiherr von Strachwitz (Operational AI Strategy)
- **2fink Consulting** - Nicole Fink (Legal Compliance & Strategy)

**Service Offerings:**
- ARC "Compact" - Quick entry-level assessment
- ARC "Professional" - Deep-dive comprehensive analysis

---

## Additional Tools

This project can be enhanced with:
- **BMAD-METHOD** - AI-driven development framework (install: `npx bmad-method@alpha install`)
- **Context7** - Up-to-date documentation for LLMs (MCP server integration)
- **agents.md** - This file serves as the agents.md standard for AI coding assistants

---

## Version Control

- Git repository (not initialized yet based on env info)
- Recommended `.gitignore` patterns already configured
- Branch strategy recommendation: main/develop with feature branches
- Conventional commits encouraged

---

## Notes for AI Coding Agents

When working on this project:
1. Always run type checking before making commits
2. Maintain the existing color scheme (sky/slate palette)
3. Keep responsive design in mind - test mobile layouts
4. German language content should maintain professional B2B tone
5. Icons should come from lucide-react only
6. Follow existing component structure patterns
7. Tailwind classes preferred over custom CSS
8. Preserve semantic HTML structure for accessibility
