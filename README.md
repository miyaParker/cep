# Re-Learn Website

Informational website for Re-Learn by CcHub

## Cloudflare Turnstile Setup

This website uses Cloudflare Turnstile for bot protection. To set up verification:

1. Go to [Cloudflare Turnstile Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Create a new site key
3. Copy your site key
4. Create a `.env.local` file in the root directory with:
   ```
   NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY=your_site_key_here
   ```

**Note:** Verification is automatically disabled in development mode (localhost).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
>1. Install Docker on your machine.
>2. Build your container: docker build -t relearn .
>3. Run your container: docker run -p 3000:3000 relearn


