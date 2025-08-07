"use client"
import { useEffect, useState } from 'react';

const useCloudflareTurnstile = () => {
  const [verified, setVerified] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY ;

  // Check if we're in development mode (localhost)
  const isDevelopment = typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' || 
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.includes('localhost')
  );

  useEffect(() => {
    // In development mode, skip verification entirely
    // if (isDevelopment) {
    //   console.log('Development mode detected - skipping Cloudflare Turnstile verification');
    //   setVerified(true);
    //   return;
    // }

    if (!siteKey) {
      console.error('Cloudflare Turnstile site key not found. Please set REACT_APP_CLOUDFLARE_TURNSTILE_SITE_KEY in your environment variables.');
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

    window.onTurnstileSuccess = function (token) {
      console.log('Turnstile token:', token);
      setVerified(true);
    };

    return () => {
      if ((window as any).onTurnstileSuccess) {
        delete (window as any).onTurnstileSuccess;
      }
    };
  }, [verified, isDevelopment, siteKey]);

  return {
    verified,
    scriptLoaded,
    scriptError,
    isDevelopment,
    siteKey
  };
};

export default useCloudflareTurnstile; 