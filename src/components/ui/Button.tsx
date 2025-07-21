// src/components/ui/Button.tsx
import React from 'react';

// Definieer de verwachte props voor de Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // De inhoud van de knop (tekst, icoon, etc.)
  variant?: 'primary' | 'secondary'; // Optionele variant voor styling
  className?: string; // Optionele extra CSS klassen
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary', // Standaard is 'primary'
  className = '', // Standaard lege string
  ...props // Alle andere standaard button attributen (type, onClick, etc.)
}) => {
  // Basis styling die voor alle varianten geldt - mobile-optimized
  const baseStyle =
    'px-6 py-3 min-h-[44px] rounded-md font-semibold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 text-base touch-manipulation';

  // Specifieke styling per variant
  const variantStyle =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500' // Primaire knop (blauw)
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'; // Secundaire knop (grijs)

  return (
    // Combineer basisstijl, variantstijl en eventuele extra klassen
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props} // Geef alle overige props door aan het <button> element
    >
      {children}
    </button>
  );
};

export default Button;