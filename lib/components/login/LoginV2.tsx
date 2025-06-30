'use client'

import React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import classnames from 'classnames'

// Custom Component Imports
import LoginForm, { LoginFormProps } from './LoginForm'
import { useTheme as useCustomTheme } from '../../theme/ThemeContext'

// Props interface
export interface LoginV2Props extends LoginFormProps {
  className?: string
  illustrationLight?: string
  illustrationDark?: string
  illustrationBorderedLight?: string
  illustrationBorderedDark?: string
  maskLight?: string
  maskDark?: string
}

// Styled components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 680,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 450
  }
}))

const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 355,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

const LoginV2 = ({
  className,
  illustrationLight = '/images/illustrations/auth/v2-login-light.png',
  illustrationDark = '/images/illustrations/auth/v2-login-dark.png',
  illustrationBorderedLight = '/images/illustrations/auth/v2-login-light-border.png',
  illustrationBorderedDark = '/images/illustrations/auth/v2-login-dark-border.png',
  maskLight = '/images/pages/auth-mask-light.png',
  maskDark = '/images/pages/auth-mask-dark.png',
  ...loginFormProps
}: LoginV2Props) => {
  // Hooks
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const { settings } = useCustomTheme()
  
  // Determine which images to use based on theme mode and skin
  const isBordered = settings.skin === 'bordered'
  const isDark = settings.mode === 'dark'
  
  const illustrationSrc = isDark
    ? (isBordered ? illustrationBorderedDark : illustrationDark)
    : (isBordered ? illustrationBorderedLight : illustrationLight)
  
  const maskSrc = isDark ? maskDark : maskLight

  return (
    <div className={`flex bs-full justify-center ${className || ''}`}>
      <div
        className={classnames(
          'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
          {
            'border-ie': isBordered
          }
        )}
      >
        <LoginIllustration src={illustrationSrc} alt="login-illustration" />
        {!hidden && (
          <MaskImg
            alt="mask"
            src={maskSrc}
            className={classnames({ 'scale-x-[-1]': theme.direction === 'rtl' })}
          />
        )}
      </div>
      <div className="flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]">
        <div className="flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-11 sm:mbs-14 md:mbs-0">
          <LoginForm {...loginFormProps} />
        </div>
      </div>
    </div>
  )
}

export default LoginV2