# @what-to-eat/core

Shared TypeScript core module for business logic and API services.

## Overview

This package contains the shared business logic, type definitions, and API services used across all WhatToEat applications (React Native, Taro WeChat Mini Program).

## Features

- **Type Definitions**: Comprehensive TypeScript types for ingredients, recipes, and recommendations
- **API Service**: Centralized API client for backend communication
- **Business Logic**: Utilities for recipe matching, ingredient management, and recommendations

## Usage

```typescript
import { 
  ApiService, 
  canMakeRecipe, 
  calculateMatchScore,
  type Ingredient,
  type Recipe 
} from '@what-to-eat/core';

// Initialize API service
const api = new ApiService('https://api.example.com');

// Fetch ingredients
const ingredients = await api.getIngredients();

// Check if a recipe can be made
const canMake = canMakeRecipe(recipe, ingredients);
```

## Development

```bash
# Build the package
pnpm build

# Watch mode for development
pnpm dev

# Type checking
pnpm type-check
```
