'use client'

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react'
import themeConfig, { Mode, Skin, ThemeConfig } from './themeConfig'

// Settings type
export type ThemeSettings = {
  mode: Mode
  skin: Skin
  primaryColor: string
}

// Theme context props
type ThemeContextProps = {
  settings: ThemeSettings
  updateSettings: (settings: Partial<ThemeSettings>) => void
  resetSettings: () => void
}

// Create context with default values
const ThemeContext = createContext<ThemeContextProps | null>(null)

// Props for ThemeProvider
type ThemeProviderProps = {
  children: ReactNode
  initialSettings?: Partial<ThemeSettings>
}

// Theme provider component
export const ThemeProvider = ({ children, initialSettings }: ThemeProviderProps) => {
  // Initial settings
  const defaultSettings: ThemeSettings = {
    mode: themeConfig.mode,
    skin: themeConfig.skin,
    primaryColor: themeConfig.primaryColor
  }

  // Merge default settings with initial settings
  const mergedSettings = { ...defaultSettings, ...initialSettings }

  // State for settings
  const [settings, setSettings] = useState<ThemeSettings>(mergedSettings)

  // Update settings
  const updateSettings = (newSettings: Partial<ThemeSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }

  // Reset settings to defaults
  const resetSettings = () => {
    setSettings(defaultSettings)
  }

  // Memoize context value
  const contextValue = useMemo(
    () => ({
      settings,
      updateSettings,
      resetSettings
    }),
    [settings]
  )

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

// Hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}