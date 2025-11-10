# WhatToEat Monorepo - Project Overview

## 🎯 Project Description

WhatToEat is a cross-platform personal fridge manager that recommends what to eat based on your ingredients, mood, and goals. This monorepo contains three main packages:

1. **Core Module** - Shared business logic and API services
2. **React Native App** - Native mobile app for iOS and Android
3. **Taro WeChat App** - WeChat Mini Program

## 📁 Repository Structure

```
what-to-eat/
├── packages/
│   ├── core/                    # Shared TypeScript core module
│   │   ├── src/
│   │   │   ├── types.ts        # Type definitions
│   │   │   ├── api.ts          # API service layer
│   │   │   ├── utils.ts        # Business logic utilities
│   │   │   └── index.ts        # Main exports
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── app-rn/                  # React Native mobile app
│   │   ├── src/
│   │   │   ├── App.tsx         # Main app component
│   │   │   ├── screens/        # Screen components
│   │   │   │   ├── HomeScreen.tsx
│   │   │   │   ├── IngredientsScreen.tsx
│   │   │   │   └── RecipesScreen.tsx
│   │   │   ├── components/     # Reusable components
│   │   │   └── navigation/     # Navigation setup
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── app-weapp/               # Taro WeChat Mini Program
│       ├── src/
│       │   ├── app.tsx          # Main app component
│       │   ├── app.config.ts    # App configuration
│       │   └── pages/           # Page components
│       │       ├── index/       # Home page
│       │       ├── ingredients/ # Ingredients page
│       │       └── recipes/     # Recipes page
│       ├── config/              # Build configuration
│       ├── package.json
│       └── tsconfig.json
│
├── package.json                 # Root package.json
├── pnpm-workspace.yaml          # pnpm workspace config
├── turbo.json                   # Turborepo config
└── README.md                    # Main documentation
```

## 🛠️ Technology Stack

### Core Technologies
- **Package Manager**: pnpm 8.15.0
- **Build System**: Turborepo 2.x
- **Language**: TypeScript 5.3+
- **Node**: >= 18.0.0

### Package-Specific Technologies

#### Core Module
- TypeScript
- Axios (HTTP client)

#### React Native App
- React 18.2
- React Native 0.73
- React Navigation 6
- TypeScript

#### Taro WeChat App
- Taro 3.6
- React 18.2
- TypeScript
- Webpack 5

## 🚀 Getting Started

### Prerequisites
```bash
# Install Node.js >= 18
# Install pnpm
npm install -g pnpm
```

### Installation
```bash
# Clone the repository
git clone https://github.com/zqy1151215064/what-to-eat.git
cd what-to-eat

# Install all dependencies
pnpm install
```

### Development Commands

#### Build All Packages
```bash
pnpm build
```

#### Type Check All Packages
```bash
pnpm type-check
```

#### Lint All Packages
```bash
pnpm lint
```

#### Clean All Build Artifacts
```bash
pnpm clean
```

### Working with Individual Packages

#### Core Module
```bash
cd packages/core

# Build
pnpm build

# Watch mode
pnpm dev

# Type check
pnpm type-check
```

#### React Native App
```bash
cd packages/app-rn

# Start Metro bundler
pnpm start

# Run on iOS
pnpm ios

# Run on Android
pnpm android

# Type check
pnpm type-check
```

#### Taro WeChat App
```bash
cd packages/app-weapp

# Development mode (watch)
pnpm dev:weapp

# Build for production
pnpm build:weapp

# Type check
pnpm type-check
```

## 🔧 Development Workflow

### Adding Dependencies

#### To a specific package
```bash
# Add dependency to core module
pnpm --filter @what-to-eat/core add <package-name>

# Add dev dependency to React Native app
pnpm --filter @what-to-eat/app-rn add -D <package-name>
```

#### To root (dev dependencies only)
```bash
pnpm add -D -w <package-name>
```

### Creating a New Package

1. Create a new directory under `packages/`
2. Add a `package.json` with name `@what-to-eat/<package-name>`
3. The package will automatically be included in the workspace

## 📦 Package Dependencies

### Dependency Graph
```
app-rn      ──┐
              ├──> core
app-weapp   ──┘
```

Both `app-rn` and `app-weapp` depend on `core` for shared business logic and types.

## 🧪 Testing

### Running Tests
```bash
# Run tests for all packages
pnpm test

# Run tests for specific package
pnpm --filter @what-to-eat/core test
```

## 📝 Code Organization

### Core Module (`@what-to-eat/core`)

**Purpose**: Shared business logic, type definitions, and API services

**Key Files**:
- `types.ts` - TypeScript interfaces and types
- `api.ts` - API service class for backend communication
- `utils.ts` - Business logic utilities (recipe matching, ingredient management)

**Usage in Apps**:
```typescript
import { 
  ApiService, 
  canMakeRecipe, 
  type Ingredient,
  type Recipe 
} from '@what-to-eat/core';
```

### React Native App (`@what-to-eat/app-rn`)

**Purpose**: Native mobile application for iOS and Android

**Key Features**:
- Home screen with navigation
- Ingredients management screen
- Recipe recommendations screen
- React Navigation for routing

### Taro WeChat App (`@what-to-eat/app-weapp`)

**Purpose**: WeChat Mini Program

**Key Features**:
- Home page (首页)
- Ingredients page (我的食材)
- Recipes page (推荐菜谱)
- Tab bar navigation

## 🏗️ Build System

### Turborepo Configuration

The project uses Turborepo for efficient builds with caching:

- **Build Tasks**: Automatically handles dependency order
- **Caching**: Speeds up repeated builds
- **Parallel Execution**: Runs independent tasks concurrently

### Task Dependencies
```json
{
  "build": {
    "dependsOn": ["^build"]  // Build dependencies first
  },
  "type-check": {
    "dependsOn": ["^build"]  // Type check after dependencies are built
  }
}
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clean all build artifacts and rebuild
   pnpm clean
   pnpm build
   ```

2. **Dependency Issues**
   ```bash
   # Remove all node_modules and reinstall
   rm -rf node_modules packages/*/node_modules
   pnpm install
   ```

3. **Type Errors**
   ```bash
   # Rebuild core package if apps have type errors
   pnpm --filter @what-to-eat/core build
   ```

## 📚 Additional Resources

- [pnpm Workspaces Documentation](https://pnpm.io/workspaces)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [React Native Documentation](https://reactnative.dev/)
- [Taro Documentation](https://taro.zone/)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and type checks: `pnpm type-check && pnpm test`
4. Build all packages: `pnpm build`
5. Submit a pull request

## 📄 License

See [LICENSE](LICENSE) file for details.
