'use client';
import React, { useRef } from 'react';
import useCloudflareTurnstile from '@/customHooks/useCloudflareTurnstile';

interface VerificationWrapperProps {
  children: React.ReactNode;
}

const VerificationWrapper: React.FC<VerificationWrapperProps> = ({ children }) => {
  const { verified, scriptLoaded, scriptError, siteKey } = useCloudflareTurnstile();
  const widgetRef = useRef<HTMLDivElement>(null);


  if (!verified) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Red Hat Display, DM Sans, sans-serif'
      }}>
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '48px',
          boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
          border: '1px solid #EBEBFF',
          maxWidth: '480px',
          width: '90%',
          textAlign: 'center'
        }}>
          {/* Logo */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src="/logo.svg" 
                alt="Re-Learn" 
                style={{
                  height: '40px',
                  width: 'auto',
                  marginBottom: '16px'
                }}
              />
              <div style={{
                width: '142px', 
                height: '4px',
                background: 'linear-gradient(90deg, #7BC042 0%, #E36E1E 100%)',
                borderRadius: '2px'
              }}></div>
            </div>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1F1F1F',
            marginBottom: '12px',
            fontFamily: 'Red Hat Display, sans-serif',
            lineHeight: '1.2'
          }}>
            Security Verification
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '16px',
            color: '#424242',
            marginBottom: '32px',
            fontFamily: 'DM Sans, sans-serif',
            lineHeight: '1.5'
          }}>
            Please complete the verification below to access the Re-Learn platform
          </p>

          {/* Verification Widget */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '24px'
          }}>
            {scriptLoaded && siteKey && (
              <div
                className="cf-turnstile"
                data-sitekey={siteKey}
                data-callback="onTurnstileSuccess"
                data-theme="light"
                ref={widgetRef}
                style={{ minHeight: '65px' }}
              ></div>
            )}
            {!scriptLoaded && !scriptError && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#424242',
                fontSize: '14px'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid #E36E1E',
                  borderTop: '2px solid transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                Loading verification...
              </div>
            )}
            {scriptError && (
              <div style={{
                color: '#E36E1E',
                fontSize: '14px',
                padding: '12px',
                background: '#FFF5F0',
                borderRadius: '8px',
                border: '1px solid #FFE4D6'
              }}>
                ⚠️ Verification service temporarily unavailable. Loading site...
              </div>
            )}
            {!siteKey && (
              <div style={{
                color: '#E36E1E',
                fontSize: '14px',
                padding: '12px',
                background: '#FFF5F0',
                borderRadius: '8px',
                border: '1px solid #FFE4D6'
              }}>
                ⚠️ Security verification is currently unavailable. Please contact the administrator.
              </div>
            )}
            

          </div>

          {/* Footer */}
          <div style={{
            fontSize: '12px',
            color: '#6B7280',
            fontFamily: 'DM Sans, sans-serif'
          }}>
            Powered by Cloudflare
          </div>
        </div>

        {/* CSS for spinner animation */}
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
};

export default VerificationWrapper; 