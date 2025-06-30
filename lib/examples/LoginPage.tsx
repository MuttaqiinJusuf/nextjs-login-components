'use client'

import React from 'react'
import { LoginV1, LoginV2, ThemeProvider, useTheme } from '../index'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Simple logo component for demonstration
const Logo = () => (
  <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
    MyApp
  </Typography>
)

// Example login page that demonstrates both login variants
const LoginPage = () => {
  // State to toggle between login variants
  const [variant, setVariant] = React.useState<'v1' | 'v2'>('v1')
  
  // Example login handler
  const handleLogin = (email: string, password: string, rememberMe: boolean) => {
    console.log('Login attempt:', { email, password, rememberMe })
    alert(`Login attempt with email: ${email}, password: ${password}, remember me: ${rememberMe}`)
  }
  
  // Access theme settings
  const { settings, updateSettings } = useTheme()
  
  // Toggle theme mode
  const toggleThemeMode = () => {
    updateSettings({ mode: settings.mode === 'light' ? 'dark' : 'light' })
  }
  
  // Toggle skin
  const toggleSkin = () => {
    updateSettings({ skin: settings.skin === 'default' ? 'bordered' : 'default' })
  }
  
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Theme controls */}
      <Box sx={{ p: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button variant="outlined" onClick={() => setVariant(variant === 'v1' ? 'v2' : 'v1')}>
          Toggle Variant (Current: {variant})
        </Button>
        <Button variant="outlined" onClick={toggleThemeMode}>
          Toggle Theme (Current: {settings.mode})
        </Button>
        <Button variant="outlined" onClick={toggleSkin}>
          Toggle Skin (Current: {settings.skin})
        </Button>
      </Box>
      
      {/* Login component */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
        {variant === 'v1' ? (
          <LoginV1
            onSubmit={handleLogin}
            logoComponent={<Logo />}
            forgotPasswordUrl="/forgot-password"
            registerUrl="/register"
          />
        ) : (
          <LoginV2
            onSubmit={handleLogin}
            logoComponent={<Logo />}
            forgotPasswordUrl="/forgot-password"
            registerUrl="/register"
            // Example of custom illustration paths
            illustrationLight="/images/illustrations/auth/v2-login-light.png"
            illustrationDark="/images/illustrations/auth/v2-login-dark.png"
          />
        )}
      </Box>
    </Box>
  )
}

// Wrap the login page with ThemeProvider
const LoginPageWithTheme = () => (
  <ThemeProvider>
    <LoginPage />
  </ThemeProvider>
)

export default LoginPageWithTheme