'use client'

import React from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Custom Component Imports
import AuthIllustrationWrapper from './AuthIllustrationWrapper'
import LoginForm, { LoginFormProps } from './LoginForm'

// Props interface
export interface LoginV1Props extends LoginFormProps {
  className?: string
}

const LoginV1 = ({ className, ...loginFormProps }: LoginV1Props) => {
  return (
    <AuthIllustrationWrapper>
      <Card className={`flex flex-col sm:is-[450px] ${className || ''}`}>
        <CardContent className="sm:!p-12">
          <LoginForm {...loginFormProps} />
        </CardContent>
      </Card>
    </AuthIllustrationWrapper>
  )
}

export default LoginV1