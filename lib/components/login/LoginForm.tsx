'use client'

import React, { useState, FormEvent } from 'react'
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'

// Custom Component Imports
import CustomTextField from '../TextField'

// Theme Config Import
import themeConfig from '../../theme/themeConfig'

// Props interface
export interface LoginFormProps {
  onSubmit?: (email: string, password: string, rememberMe: boolean) => void
  forgotPasswordUrl?: string
  registerUrl?: string
  logoComponent?: React.ReactNode
  showSocialLogin?: boolean
}

const LoginForm = ({
  onSubmit,
  forgotPasswordUrl = '/forgot-password',
  registerUrl = '/register',
  logoComponent,
  showSocialLogin = true
}: LoginFormProps) => {
  // States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Handlers
  const handleClickShowPassword = () => setIsPasswordShown(show => !show)
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(email, password, rememberMe)
    }
  }

  return (
    <div className="login-form">
      {logoComponent && (
        <div className="logo-container mb-6 flex justify-center">
          {logoComponent}
        </div>
      )}
      
      <div className="mb-6">
        <Typography variant="h4">{`Welcome to ${themeConfig.templateName}! 👋🏻`}</Typography>
        <Typography>Please sign-in to your account and start the adventure</Typography>
      </div>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit} className="flex flex-col gap-6">
        <CustomTextField
          autoFocus
          fullWidth
          label="Email or Username"
          placeholder="Enter your email or username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <CustomTextField
          fullWidth
          label="Password"
          placeholder="············"
          type={isPasswordShown ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                    <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                  </IconButton>
                </InputAdornment>
              )
            }
          }}
        />
        
        <div className="flex justify-between items-center gap-x-3 gap-y-1 flex-wrap">
          <FormControlLabel 
            control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />} 
            label="Remember me" 
          />
          
          {forgotPasswordUrl && (
            <Typography
              className="text-end"
              color="primary.main"
              component={Link}
              href={forgotPasswordUrl}
            >
              Forgot password?
            </Typography>
          )}
        </div>
        
        <Button fullWidth variant="contained" type="submit">
          Login
        </Button>
        
        <div className="flex justify-center items-center flex-wrap gap-2">
          <Typography>New on our platform?</Typography>
          {registerUrl && (
            <Typography
              component={Link}
              href={registerUrl}
              color="primary.main"
            >
              Create an account
            </Typography>
          )}
        </div>
        
        {showSocialLogin && (
          <>
            <Divider className="gap-2 text-textPrimary">or</Divider>
            <div className="flex justify-center items-center gap-1.5">
              <IconButton className="text-facebook" size="small">
                <i className="tabler-brand-facebook-filled" />
              </IconButton>
              <IconButton className="text-twitter" size="small">
                <i className="tabler-brand-twitter-filled" />
              </IconButton>
              <IconButton className="text-textPrimary" size="small">
                <i className="tabler-brand-github-filled" />
              </IconButton>
              <IconButton className="text-error" size="small">
                <i className="tabler-brand-google-filled" />
              </IconButton>
            </div>
          </>
        )}
      </form>
    </div>
  )
}

export default LoginForm