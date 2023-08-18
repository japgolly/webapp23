"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Oauth2() {
  const supabase = createClientComponentClient()
  const onClick = async () => {
    let { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
    console.log("DATA: ", JSON.stringify(data))
    console.log("ERROR: ", error)
  }
  return <button
    className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    onClick={onClick}
    >LOGIN VIA GITHUB</button>
}
