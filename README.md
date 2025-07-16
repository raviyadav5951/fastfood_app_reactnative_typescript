# Food Delivery App - React Native with TypeScript

A modern food delivery application built with React Native, TypeScript, and Expo Router.

## Project Structure

```
app/
├── _layout.tsx          # Root layout (Shared UI/Logic across all routes)
├── index.tsx           # Home screen with food offers
├── (auth)/             # Auth route group
│   ├── _layout.tsx     # Auth layout (Shared UI/Logic for auth screens)
│   ├── sign-in.tsx     # Sign in screen
│   └── sign-up.tsx     # Sign up screen
└── (tabs)/             # Tabs route group
    ├── _layout.tsx     # Tabs layout (Tab navigation configuration)
    ├── cart.tsx        # Cart screen
    ├── profile.tsx     # Profile screen
    └── search.tsx      # Search screen
```

## Layout System

Expo Router uses a powerful layout system with the `Slot` component for nested routing:

### Understanding Slots

The `Slot` component in Expo Router is a special component that:

- Acts as a placeholder for child routes
- Enables nested layouts without prop drilling
- Allows shared UI elements across routes

Example of a layout with Slot:

```tsx
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Header /> {/* Shared across all child routes */}
      <Slot /> {/* Child routes render here */}
      <Footer /> {/* Shared across all child routes */}
    </View>
  );
}
```

### Layout Hierarchy

Our app uses three levels of layouts:

1. **Root Layout** (`app/_layout.tsx`)
   - Applies to all routes
   - Sets up global providers
   - Handles authentication state

2. **Auth Layout** (`app/(auth)/_layout.tsx`)
   - Specific to authentication screens
   - Handles auth-specific UI/logic
   - Groups sign-in and sign-up screens

3. **Tabs Layout** (`app/(tabs)/_layout.tsx`)
   - Manages bottom tab navigation
   - Shared UI for authenticated screens
   - Controls tab-specific behavior

## Features

- **Expo Router**:
  - File-based routing with shared routes
  - Nested layouts using Slot component
  - Route grouping for better organization
- **Authentication Flow**:
  - Protected routes using route groups
  - Dedicated auth layout with shared UI
  - Seamless auth state management
- **Navigation Structure**:
  - Bottom tab navigation in (tabs) group
  - Shared headers and footers using layouts
  - Type-safe navigation with TypeScript
- **Styling**:
  - NativeWind (Tailwind CSS) for consistent styling
  - Responsive design patterns
  - Theme customization
- **Component Architecture**:
  - Reusable components in `components/` directory
  - Memoized components for better performance
  - Shared layouts for route groups

## Route Groups

This project uses Expo Router's route grouping feature for better organization of navigation flows:

- `(auth)`: Groups authentication-related screens
  - Separates auth flow from main app flow
  - Handles sign-in and sign-up screens
  - Uses shared layout for auth screens

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Tech Stack

- React Native with TypeScript
- Expo & Expo Router
- NativeWind (Tailwind CSS)
- React Native Safe Area Context

## Best Practices

- File-based routing with Expo Router
- Route grouping for better navigation organization
- Shared layouts for related screens
- Component reusability and memoization
- Type safety with TypeScript
- Responsive design with NativeWind

## Learn More

- [Expo Router Documentation](https://docs.expo.dev/router/introduction/): Learn about file-based routing
- [NativeWind Documentation](https://www.nativewind.dev/): Learn about Tailwind CSS in React Native
- [TypeScript Documentation](https://www.typescriptlang.org/docs/): Learn about TypeScript

## Project Status

🚧 Under Development
