# Clymin - React Application

A modern React application built with Vite, TypeScript, and best practices for reusable components.

## Features

- ⚡️ Vite for fast development and building
- ⚛️ React 18 with TypeScript
- 🎨 Reusable component architecture
- 📦 Path aliases for clean imports
- 🧹 ESLint and Prettier configured
- 🎯 Type-safe components with TypeScript

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Button/        # Button component
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   └── index.ts
│   ├── Card/          # Card component
│   │   ├── Card.tsx
│   │   ├── Card.css
│   │   └── index.ts
│   └── index.ts       # Component exports
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── types/             # TypeScript type definitions
├── styles/            # Global styles
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## Component Usage

### Button Component

```tsx
import { Button } from '@/components/Button'

<Button variant="primary" size="medium" onClick={handleClick}>
  Click me
</Button>
```

### Card Component

```tsx
import { Card } from '@/components/Card'

<Card variant="elevated" padding="large">
  <h2>Card Title</h2>
  <p>Card content</p>
</Card>
```

## Path Aliases

The project uses path aliases for cleaner imports:

- `@/components/*` - Components
- `@/hooks/*` - Custom hooks
- `@/utils/*` - Utility functions
- `@/types/*` - Type definitions
- `@/styles/*` - Styles

## Best Practices

1. **Component Structure**: Each component has its own folder with:
   - Component file (`.tsx`)
   - Styles file (`.css`)
   - Index file for exports

2. **TypeScript**: All components are fully typed with interfaces

3. **Reusability**: Components accept props for customization (variants, sizes, etc.)

4. **Forward Refs**: Components use `forwardRef` for ref forwarding

5. **Clean Exports**: Components are exported through index files

