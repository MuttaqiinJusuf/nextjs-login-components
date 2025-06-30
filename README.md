# NextJS Login Components

A reusable login component library for NextJS applications with theme support.

## Features

- Two login form variants (V1 and V2)
- Theme support (light/dark mode, bordered/default skin)
- Customizable components
- TypeScript support
- Material UI integration
- Responsive design

## Installation

```bash
# If you're using npm
npm install nextjs-login-components

# If you're using yarn
yarn add nextjs-login-components
```

## Usage

### Basic Usage

```tsx
import { LoginV1, ThemeProvider } from 'nextjs-login-components';

const LoginPage = () => {
  const handleLogin = (email, password, rememberMe) => {
    // Handle login logic
    console.log(email, password, rememberMe);
  };

  return (
    <ThemeProvider>
      <LoginV1 
        onSubmit={handleLogin}
        forgotPasswordUrl="/forgot-password"
        registerUrl="/register"
      />
    </ThemeProvider>
  );
};

export default LoginPage;
```

### Using LoginV2 (Split Screen Layout)

```tsx
import { LoginV2, ThemeProvider } from 'nextjs-login-components';
import Logo from '../components/Logo';

const LoginPage = () => {
  const handleLogin = (email, password, rememberMe) => {
    // Handle login logic
    console.log(email, password, rememberMe);
  };

  return (
    <ThemeProvider>
      <LoginV2 
        onSubmit={handleLogin}
        logoComponent={<Logo />}
        forgotPasswordUrl="/forgot-password"
        registerUrl="/register"
        // Custom illustration images
        illustrationLight="/images/login-light.png"
        illustrationDark="/images/login-dark.png"
      />
    </ThemeProvider>
  );
};

export default LoginPage;
```

### Customizing Theme

```tsx
import { ThemeProvider, themeConfig } from 'nextjs-login-components';

const customTheme = {
  ...themeConfig,
  templateName: 'My App',
  primaryColor: '#FF5722', // Custom primary color
  mode: 'dark' // Default to dark mode
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider initialSettings={customTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
```

## Components

### LoginV1

A centered login form with decorative background elements.

#### Props

| Prop | Type | Description |
|------|------|-------------|
| onSubmit | `(email: string, password: string, rememberMe: boolean) => void` | Function called when form is submitted |
| forgotPasswordUrl | `string` | URL for forgot password link |
| registerUrl | `string` | URL for registration link |
| logoComponent | `ReactNode` | Custom logo component |
| showSocialLogin | `boolean` | Whether to show social login buttons |
| className | `string` | Additional CSS class |

### LoginV2

A split-screen login layout with illustration on one side and form on the other.

#### Props

| Prop | Type | Description |
|------|------|-------------|
| onSubmit | `(email: string, password: string, rememberMe: boolean) => void` | Function called when form is submitted |
| forgotPasswordUrl | `string` | URL for forgot password link |
| registerUrl | `string` | URL for registration link |
| logoComponent | `ReactNode` | Custom logo component |
| showSocialLogin | `boolean` | Whether to show social login buttons |
| className | `string` | Additional CSS class |
| illustrationLight | `string` | Path to light mode illustration |
| illustrationDark | `string` | Path to dark mode illustration |
| illustrationBorderedLight | `string` | Path to light mode bordered illustration |
| illustrationBorderedDark | `string` | Path to dark mode bordered illustration |
| maskLight | `string` | Path to light mode mask image |
| maskDark | `string` | Path to dark mode mask image |

## Theme Configuration

The library includes a theme system that supports:

- Light/dark mode
- Default/bordered skin
- Custom primary color
- Custom template name

You can customize these settings by passing an `initialSettings` object to the `ThemeProvider`.

## License

MIT