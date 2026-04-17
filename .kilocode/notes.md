# Development Notes

## Build Configuration

- **Package Manager**: bun
- **Build Command**: `bun build` (uses next.config.ts)
- **Output Mode**: standalone
- **Framework**: Next.js with App Router
- **TypeScript**: Configured with strict mode
- **CSS**: Tailwind CSS 4
- **Linting**: ESLint with Next.js configuration

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/           # Shared components
├── .kilocode/
│   ├── recipes/              # Feature recipes
│   └── rules/
│       ├── memory-bank/      # AI context
│       └── development.md    # Development rules
├── package.json
├── bun.lock
└── tsconfig.json
```

## Available Scripts

- `bun install` - Install dependencies
- `bun build` - Build production app
- `bun lint` - Check code quality
- `bun typecheck` - Type checking

## Key Dependencies

- `next` - Framework
- `react` / `react-dom` - UI library
- `typescript` - Type checking
- `tailwindcss` - CSS framework