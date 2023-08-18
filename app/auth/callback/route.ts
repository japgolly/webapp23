import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try{
    // The `/auth/callback` route is required for the server-side auth flow implemented
    // by the Auth Helpers package. It exchanges an auth code for the user's session.
    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    const error = requestUrl.searchParams.get('error')

    console.log("> ", requestUrl)

    if (error) {
      const error_description = requestUrl.searchParams.get('error_description')
      return NextResponse.json({error, error_description}, {status: 500})
    }

    if (code) {
      const supabase = createRouteHandlerClient({ cookies })
      await supabase.auth.exchangeCodeForSession(code)
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(requestUrl.origin)
  } catch (e) {
    console.error("CALLBACK ERROR: ", e)
    throw e
  }

}
