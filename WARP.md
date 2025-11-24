# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Monorepo managed by pnpm workspaces and Turborepo.
- Packages:
  - packages/core: shared TypeScript logic (types, API client, business utils) used by all apps.
  - packages/app-rn: React Native app (iOS/Android) using React Navigation; relies on core.
  - packages/app-weapp: Taro-based WeChat Mini Program; relies on core.

Common commands
- Install deps (root):
  - pnpm install
- Build all packages:
  - pnpm build
- Dev (starts per-package watchers via Turbo):
  - pnpm dev
  - Note: For React Native, pnpm dev starts Metro. You still need to launch a simulator/device (see package-specific commands below).
- Lint all packages:
  - pnpm lint
- Type-check all packages:
  - pnpm type-check
- Clean build artifacts:
  - pnpm clean
- Scope commands to a package (examples):
  - pnpm --filter @what-to-eat/core build
  - pnpm --filter @what-to-eat/app-rn ios
  - pnpm --filter @what-to-eat/app-weapp dev

Package-specific commands
- @what-to-eat/core (packages/core)
  - Build: pnpm -F @what-to-eat/core build
  - Watch (dev): pnpm -F @what-to-eat/core dev
  - Type-check: pnpm -F @what-to-eat/core type-check
  - Clean: pnpm -F @what-to-eat/core clean

- @what-to-eat/app-rn (packages/app-rn)
  - Start Metro only: pnpm -F @what-to-eat/app-rn start
  - Run iOS simulator: pnpm -F @what-to-eat/app-rn ios
  - Run Android: pnpm -F @what-to-eat/app-rn android
  - Lint: pnpm -F @what-to-eat/app-rn lint
  - Type-check: pnpm -F @what-to-eat/app-rn type-check
  - Tests (Jest): pnpm -F @what-to-eat/app-rn test
  - Run a single test (pattern):
    - pnpm -F @what-to-eat/app-rn test -- path/to/file.test.tsx
    - Or by name: pnpm -F @what-to-eat/app-rn test -- -t "name pattern"

- @what-to-eat/app-weapp (packages/app-weapp)
  - Dev (watch): pnpm -F @what-to-eat/app-weapp dev:weapp
  - Build: pnpm -F @what-to-eat/app-weapp build:weapp
  - Lint: pnpm -F @what-to-eat/app-weapp lint
  - Type-check: pnpm -F @what-to-eat/app-weapp type-check
  - WeChat DevTools:
    - After build/dev, import packages/app-weapp/dist into WeChat Developer Tools.

Architecture and code structure
- Build system
  - Turborepo orchestrates tasks across packages (turbo.json). Task graph defines dependsOn for build, lint, test, type-check. Build outputs are cached (dist/, build/, .next/, lib/ when present).
  - pnpm workspaces (pnpm-workspace.yaml) manage local package linking.
- Shared core (packages/core)
  - src/types.ts: domain models (Ingredient, Recipe, etc.).
  - src/api.ts: ApiService axios client (default baseURL placeholder) with methods for ingredients, recipes, recommendations; exports a singleton apiService.
  - src/utils.ts: business utilities (canMakeRecipe, calculateMatchScore, filterRecipesByMood, getExpiringSoon, sortRecipesByMatch, formatCookingTime).
  - src/index.ts re-exports types, api, utils.
- React Native app (packages/app-rn)
  - src/App.tsx: NavigationContainer with native stack; routes: Home, Ingredients, Recipes.
  - screens/*: simple UI screens. Current data flows use mock data locally; core utils are used for formatting and types.
  - Metro config present; TypeScript paths map @what-to-eat/core to ../core/src during development.
- Taro WeChat app (packages/app-weapp)
  - src/app.tsx: root component; pages under src/pages/{index,ingredients,recipes}.
  - Uses @tarojs plugins for React + WeApp platform; config in packages/app-weapp/config/*.js.
  - Screens currently use mock data; core utils/types imported.
- TypeScript configuration
  - Each package has its own tsconfig.json. Apps map @what-to-eat/core to ../core/src (development convenience). Core compiles to dist/ via tsc for consumption when built.
- Linting and testing
  - Lint: app packages use eslint; core has a placeholder lint script. There is no repo-wide eslint config.
  - Tests: app-rn includes Jest; no tests are present by default. Root pnpm test runs turbo run test which scopes to packages defining a test script.

Important notes from README
- Requirements: Node >= 18, pnpm >= 8.
- Development quickstart mirrors the commands above; see individual package READMEs for platform specifics and WeChat DevTools import steps.

Tips specific to this repo
- Running pnpm dev launches watchers (Metro, Taro, tsc) but does not automatically open an iOS/Android simulator. Use the ios/android scripts separately.
- When hacking on core while running an app, prefer using the TS path mapping (already configured) so app code sees changes immediately; otherwise run pnpm -F @what-to-eat/core dev to emit types continuously if you depend on built outputs.
