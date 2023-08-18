"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function Oauth() {
  const supabase = createClientComponentClient()
  return <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    theme="dark"
    providers={['github', 'google', 'facebook']}
    onlyThirdPartyProviders
    redirectTo='http://localhost:3000/auth/callback'
  />
}
