# what-to-eat

🍳 A cross-platform personal fridge manager that recommends what to eat based on your ingredients, mood, and goals. Built with React Native + Taro + TypeScript.

## 📦 Monorepo Structure

This is a monorepo managed with **pnpm workspaces** and **Turborepo** containing multiple packages:

### Packages

- **`packages/core`** - Shared TypeScript core module for business logic and API services
- **`packages/app-rn`** - React Native app for iOS and Android
- **`packages/app-weapp`** - Taro app for WeChat Mini Program

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Installation

```bash
# Install pnpm globally if you haven't
npm install -g pnpm

# Install dependencies
pnpm install
```

### Development

```bash
# Build all packages
pnpm build

# Run in development mode
pnpm dev

# Type checking across all packages
pnpm type-check

# Lint all packages
pnpm lint

# Clean all build artifacts
pnpm clean
```

### Working with Individual Packages

```bash
# Build only the core package
pnpm --filter @what-to-eat/core build

# Run React Native app
cd packages/app-rn
pnpm ios  # or pnpm android

# Run Taro WeChat Mini Program
cd packages/app-weapp
pnpm dev:weapp
```

## 🏗️ Architecture

The project follows a monorepo architecture where:

1. **Core Package** (`@what-to-eat/core`) contains:
   - TypeScript type definitions
   - API service layer
   - Business logic utilities
   - Shared between all apps

2. **React Native App** (`@what-to-eat/app-rn`) provides:
   - Native iOS/Android experience
   - Navigation and screens
   - Uses core package for logic

3. **Taro WeChat App** (`@what-to-eat/app-weapp`) provides:
   - WeChat Mini Program experience
   - Chinese UI/UX
   - Uses core package for logic

## 🛠️ Tech Stack

- **Package Management**: pnpm with workspaces
- **Build System**: Turborepo
- **Core**: TypeScript, Axios
- **Mobile**: React Native 0.73
- **Mini Program**: Taro 3.6
- **Language**: TypeScript

## 📝 Features

- 📦 **Ingredient Management**: Track items in your fridge
- 🍽️ **Recipe Recommendations**: Get suggestions based on available ingredients
- 🎯 **Mood-based Filtering**: Find recipes that match your mood
- ⏰ **Expiry Tracking**: Get notified about expiring ingredients
- 📱 **Cross-platform**: iOS, Android, and WeChat Mini Program

## 📖 Documentation

For more details on each package, see their respective README files:

- [Core Package](packages/core/README.md)
- [React Native App](packages/app-rn/README.md)
- [Taro WeChat App](packages/app-weapp/README.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

See [LICENSE](LICENSE) file for details.
