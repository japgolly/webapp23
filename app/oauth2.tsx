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
  return (<div style={{background: "red"}}>
    <button onClick={onClick}>LOGIN VIA GITHUB</button>
  </div>)
}
