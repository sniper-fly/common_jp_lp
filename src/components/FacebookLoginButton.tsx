"use client";

import React from "react";

interface FacebookLoginButtonProps {
  variant?: "default" | "white";
}

export const FacebookLoginButton: React.FC<FacebookLoginButtonProps> = ({
  variant = "default",
}) => {
  const handleClick = async () => {
    const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;
    const clientId = "786687033785284";
    const scope = "public_profile%20email";
    
    const facebookAuthUrl = `https://www.facebook.com/v23.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    
    window.location.href = facebookAuthUrl;
  };

  const baseClasses =
    "inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1";

  const variantClasses =
    variant === "white"
      ? "bg-white text-blue-600 hover:bg-gray-50 border-2 border-transparent hover:border-blue-200"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses}`}
      aria-label="Continue with Facebook"
    >
      {/* Facebook Icon */}
      <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
      Join waiting list with Facebook
    </button>
  );
};