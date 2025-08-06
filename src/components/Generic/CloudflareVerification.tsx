'use client';
import React, { useRef } from 'react';
import useCloudflareTurnstile from '@/customHooks/useCloudflareTurnstile';

interface CloudflareVerificationProps {
  onVerificationComplete: () => void;
}

const CloudflareVerification: React.FC<CloudflareVerificationProps> = ({ onVerificationComplete }) => {
  const { verified, scriptLoaded, scriptError, siteKey } = useCloudflareTurnstile();
  const widgetRef = useRef<HTMLDivElement>(null);

  console.log('CloudflareVerification: rendered with:', { verified, scriptLoaded, scriptError, siteKey });

  React.useEffect(() => {
    if (verified) {
      onVerificationComplete();
    }
  }, [verified, onVerificationComplete]);

  // Manual widget rendering as fallback
  React.useEffect(() => {
    if (scriptLoaded && siteKey && widgetRef.current && window.turnstile) {
      console.log('Manually rendering Turnstile widget');
      try {
        window.turnstile.render(widgetRef.current, {
          sitekey: siteKey,
          callback: function(token: string) {
            console.log('Turnstile verification successful:', token);
          },
          'expired-callback': function() {
            console.log('Turnstile verification expired');
          },
          'error-callback': function() {
            console.log('Turnstile verification error');
          }
        });
      } catch (error) {
        console.error('Error rendering Turnstile widget:', error);
      }
    }
  }, [scriptLoaded, siteKey]);

  if (!verified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-400 px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-300 max-w-md w-full text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex flex-col items-center">
              <img 
                src="/logo.svg" 
                alt="Re-Learn" 
                className="h-12 w-auto mb-4"
              />
              <div className="w-36 h-1 bg-gradient-to-r from-orange-100 to-red-100 rounded-sm"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-neue font-bold text-black-100 mb-3 leading-tight">
            Security Verification
          </h1>

          {/* Subtitle */}
          <p className="text-base text-gray-200 mb-8 font-matter leading-relaxed">
            Please complete the verification below to access the Re-Learn platform
          </p>

          {/* Verification Widget */}
          <div className="flex justify-center mb-6">
            {scriptLoaded && siteKey && (
              <div
                className="cf-turnstile"
                data-sitekey={siteKey}
                data-callback="onTurnstileSuccess"
                data-theme="light"
                ref={widgetRef}
                style={{ display: 'flex', justifyContent: 'center' }}
              ></div>
            )}
            {!scriptLoaded && !scriptError && (
              <div className="flex items-center gap-3 text-gray-200 text-sm">
                <div className="w-5 h-5 border-2 border-red-100 border-t-transparent rounded-full animate-spin"></div>
                Loading verification...
              </div>
            )}
            {scriptError && (
              <div className="text-red-100 text-sm p-3 bg-seashell rounded-lg border border-red-100/20">
                ⚠️ Verification service temporarily unavailable. Loading site...
              </div>
            )}
            {!siteKey && (
              <div className="text-red-100 text-sm p-3 bg-seashell rounded-lg border border-red-100/20">
                ⚠️ Security verification is currently unavailable. Please contact the administrator.
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-300 font-matter">
            Powered by Cloudflare
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CloudflareVerification; 