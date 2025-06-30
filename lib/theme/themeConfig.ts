// Type definitions for theme configuration
export type Mode = 'light' | 'dark' | 'system'
export type Skin = 'default' | 'bordered'

// Theme configuration type
export type ThemeConfig = {
  // General
  templateName: string
  mode: Mode
  skin: Skin
  
  // Colors
  primaryColor: string
  
  // Features
  disableRipple: boolean
}

// Default theme configuration
const themeConfig: ThemeConfig = {
  templateName: 'Login Component Library',
  mode: 'system', // 'system', 'light', 'dark'
  skin: 'default', // 'default', 'bordered'
  primaryColor: '#7367F0', // Default primary color
  disableRipple: false // Enable/disable ripple effect
}

export default themeConfig