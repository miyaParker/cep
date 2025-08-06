import { useEffect, useState } from 'react';

const useCloudflareTurnstile = () => {
  const [verified, setVerified] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;
  
  console.log('Cloudflare Turnstile Hook - siteKey:', siteKey);
  console.log('Cloudflare Turnstile Hook - isDevelopment:', typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' || 
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.includes('localhost')
  ));

  // Check if we're in development mode (localhost)
  const isDevelopment = typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' || 
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.includes('localhost')
  );

  useEffect(() => {
    // In development mode, skip verification entirely
    if (isDevelopment) {
      console.log('Development mode detected - skipping Cloudflare Turnstile verification');
      setVerified(true);
      return;
    }

    if (!siteKey) {
      console.error('Cloudflare Turnstile site key not found. Please set NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY in your environment variables.');
      setScriptError(true);
      return;
    }

    const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('Cloudflare Turnstile script loaded successfully');
        setScriptLoaded(true);
      };
      
      script.onerror = (error) => {
        console.error('Failed to load Cloudflare Turnstile script:', error);
        setScriptError(true);
      };
      
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }

    // Set up the global callback function for Turnstile
    window.onTurnstileSuccess = function (token) {
      console.log('Turnstile verification successful:', token);
      setVerified(true);
    };

    return () => {
      if (window.onTurnstileSuccess) {
        window.onTurnstileSuccess = undefined as any;
      }
    };
  }, [verified, siteKey]);

  return {
    verified,
    scriptLoaded,
    scriptError,
    siteKey
  };
};

export default useCloudflareTurnstile; 