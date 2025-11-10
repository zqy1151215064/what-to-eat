# @what-to-eat/app-weapp

Taro WeChat Mini Program app for WhatToEat.

## Overview

This is the WeChat Mini Program for WhatToEat, built with Taro and TypeScript. It provides a native WeChat experience for managing your fridge ingredients and discovering recipes.

## Features

- **Home Page**: Welcome screen with navigation to main features
- **Ingredients Management**: View and manage your fridge ingredients (我的食材)
- **Recipe Recommendations**: Browse recipes you can make with available ingredients (推荐菜谱)
- **WeChat Native**: Runs as a WeChat Mini Program
- **Shared Core**: Uses `@what-to-eat/core` for business logic and API calls

## Prerequisites

- Node.js >= 18
- pnpm >= 8
- WeChat DevTools

## Development

```bash
# Install dependencies
pnpm install

# Development mode (watch)
pnpm dev:weapp

# Build for production
pnpm build:weapp

# Type checking
pnpm type-check

# Lint
pnpm lint
```

## Project Structure

```
src/
├── app.tsx              # Main app component
├── app.config.ts        # App configuration
├── app.scss             # Global styles
└── pages/               # Page components
    ├── index/           # Home page
    ├── ingredients/     # Ingredients page
    └── recipes/         # Recipes page
```

## Running in WeChat DevTools

1. Build the project: `pnpm build:weapp`
2. Open WeChat Developer Tools
3. Import the `dist` folder as the project directory
4. Start developing and testing

## Tech Stack

- Taro 3.6
- TypeScript
- React
- @what-to-eat/core (shared logic)
