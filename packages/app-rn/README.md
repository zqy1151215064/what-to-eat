# @what-to-eat/app-rn

React Native app for iOS and Android platforms.

## Overview

This is the mobile application for WhatToEat, built with React Native and TypeScript. It provides a native mobile experience for managing your fridge ingredients and discovering recipes.

## Features

- **Home Screen**: Welcome screen with navigation to main features
- **Ingredients Management**: View and manage your fridge ingredients
- **Recipe Recommendations**: Browse recipes you can make with available ingredients
- **Cross-Platform**: Runs on both iOS and Android
- **Shared Core**: Uses `@what-to-eat/core` for business logic and API calls

## Prerequisites

- Node.js >= 18
- React Native development environment
- iOS: Xcode and CocoaPods
- Android: Android Studio and SDK

## Development

```bash
# Install dependencies
pnpm install

# Start Metro bundler
pnpm start

# Run on iOS
pnpm ios

# Run on Android
pnpm android

# Type checking
pnpm type-check

# Lint
pnpm lint
```

## Project Structure

```
src/
├── App.tsx              # Main app component with navigation
├── screens/             # Screen components
│   ├── HomeScreen.tsx
│   ├── IngredientsScreen.tsx
│   └── RecipesScreen.tsx
├── components/          # Reusable components
└── navigation/          # Navigation configuration
```

## Tech Stack

- React Native 0.73
- TypeScript
- React Navigation
- @what-to-eat/core (shared logic)
