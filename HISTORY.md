1. `npx create-next-app -e with-supabase`

1. `supabase init`

1. Add github oauth to local supabase
  1. Go to github > settings > developer settings > github apps
  1. Create new github app
    * url = http://localhost:3000
    * callback url = http://localhost:54321/auth/v1/callback
  1. Goto Permissions & Events > Account Permissions > Email addresses and set Access to Read-Only
  1. Click _Generate a new client secret_
  1. Create `supabase/.env` like this
      ```
      SUPABASE_AUTH_EXTERNAL_GITHUB_CLIENT_ID=xxxxxx
      SUPABASE_AUTH_EXTERNAL_GITHUB_SECRET=xxxxxx
      ```
  1. Update `supabase/config.toml` (see git diff)
