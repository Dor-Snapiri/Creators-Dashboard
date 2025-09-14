# Creators Dashboard

A modern React-based dashboard application for searching and viewing creator profiles. This project demonstrates a clean component architecture with TypeScript, SCSS styling, and state management using Zustand.

## 🚀 Features

- **Search Functionality**: Real-time search through creator profiles with filtering capabilities
- **Dual View Modes**: Toggle between grid and list views for optimal user experience
- **Responsive Design**: Modern UI with clean, professional styling
- **Component Architecture**: Modular, reusable React components
- **TypeScript Support**: Full type safety throughout the application
- **State Management**: Global state management using Zustand

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **State Management**: Zustand 5.0.8
- **Styling**: SCSS with CSS custom properties
- **Icons**: SVG icons with SVGR plugin
- **Linting**: ESLint with React hooks plugin

## 📁 Project Structure

```
src/
├── components/
│   ├── Avatar/              # User avatar component with multiple display modes
│   ├── Button/              # Reusable button component with various compositions
│   ├── CoverImages/         # Cover image display with avatar overlay
│   ├── CreatorCard/         # Grid view creator card component
│   ├── CreatorDetails/      # Creator information display
│   ├── Post/                # Post component with comments functionality
│   ├── Row/                 # Table row component
│   ├── SearchField/         # Search input with clear functionality
│   ├── TableHeadRow/        # Table header row component
│   ├── Toggle/              # Generic toggle component
│   └── ViewToggle/          # View mode toggle (grid/list)
├── pages/
│   └── Search/              # Main search page component
├── assets/                  # SVG icons and images
├── CreatorDashboardState.tsx    # TypeScript interfaces
├── useCreatorsDashboard.tsx     # Zustand store configuration
└── variables.scss           # SCSS custom properties
```

## 🎯 Core Components

### SearchPage
The main application component that orchestrates the entire dashboard experience:
- Displays user header with Lightricks logo and user avatar
- Implements search functionality with real-time filtering
- Manages view toggle between grid and list modes
- Renders filtered creator results

### CreatorCard
Grid view component displaying creator information:
- Cover images display (up to 3 images)
- Creator avatar with initials or icon fallback
- Creator details (name, age, location, email)
- Details button for additional actions

### UserRow
List view component for table display:
- Avatar with creator initials
- Creator information in tabular format
- Clickable rows for interaction

### State Management
Uses Zustand for global state management:
- View mode state (grid/list)
- Toggle functionality for switching views
- Clean, minimal state structure

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Creators-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

The application uses a consistent design system with:

- **Color Palette**: Defined in `variables.scss` with semantic color tokens
- **Typography**: Custom font system with mixins for consistent text styling
- **Component Variants**: Multiple button modes, avatar sizes, and view states
- **Responsive Design**: Mobile-first approach with flexible layouts

## 🔧 Development

### Component Development
Each component follows a consistent structure:
- TypeScript interface definitions
- SCSS styling with BEM methodology
- Props validation and default values
- Reusable and composable design

### State Management
The application uses Zustand for simple, effective state management:
- Global view state for grid/list toggle
- Action creators for state updates
- Type-safe store configuration

### Styling
- SCSS with CSS custom properties for theming
- Component-scoped styles
- Responsive design patterns
- Consistent spacing and typography

## 📝 Usage

The dashboard expects creator data to be passed as props to the SearchPage component:

```typescript
interface CreatorInfo {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  state: string;
  email: string;
}

// Usage
<SearchPage 
  userFirstName="John"
  userLastName="Doe"
  creators={creatorsMap}
/>
```

## 🚧 Development History

This project was developed incrementally with the following key milestones:

1. **Infrastructure Setup**: Vite, TypeScript, SCSS, and SVGR configuration
2. **Core Components**: Avatar, Button, SearchField, and Toggle components
3. **Creator Components**: CreatorCard, CreatorDetails, and Post components
4. **Table Components**: Row, UserRow, and TableHeadRow for list view
5. **State Management**: Zustand integration for view state
6. **Search Page**: Complete search functionality and view toggling
7. **Styling**: Comprehensive SCSS styling and design system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of an onboarding exercise and is intended for educational purposes.

---

Built with ❤️ using React, TypeScript, and modern web technologies.