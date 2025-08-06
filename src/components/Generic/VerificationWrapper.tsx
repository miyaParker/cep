'use client';
import React, { useState, useEffect } from 'react';
import CloudflareVerification from './CloudflareVerification';

interface VerificationWrapperProps {
  children: React.ReactNode;
}

const VerificationWrapper: React.FC<VerificationWrapperProps> = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always start with verification required
    console.log('VerificationWrapper: Starting verification process');
    setIsLoading(false);
  }, []);

  const handleVerificationComplete = () => {
    console.log('VerificationWrapper: Verification completed');
    setIsVerified(true);
  };

  if (isLoading) {
    console.log('VerificationWrapper: Loading state');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isVerified) {
    console.log('VerificationWrapper: Showing verification component');
    return <CloudflareVerification onVerificationComplete={handleVerificationComplete} />;
  }

  console.log('VerificationWrapper: Showing main content');
  return <>{children}</>;
};

export default VerificationWrapper; 