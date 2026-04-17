# Next.js Standalone Build Configuration

## Overview
This project is configured for a standalone Next.js build using Bun as the package manager.

## Build Configuration
- **Framework**: Next.js with App Router
- **Output Mode**: standalone
- **Package Manager**: bun
- **TypeScript**: Configured with strict mode
- **CSS**: Tailwind CSS 4

## Configuration Files

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

### package.json
```json
{
  "name": "nextjs-standalone",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "build": "next build"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "typescript": "latest",
    "@types/node": "latest",
    "@types/react": "latest"
  }
}
```

## Build Commands
- `bun install` - Install dependencies
- `bun build` - Build production app
- `bun lint` - Check code quality
- `bun typecheck` - Type checking

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
└── next.config.ts
```