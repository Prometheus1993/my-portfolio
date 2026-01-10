// src/components/layout/Footer.tsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Haal het huidige jaar op

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-4 mt-12 transition-colors duration-200">
      {" "}
      {/* mt-12 voegt wat ruimte toe boven de footer */}
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {currentYear} Jesus O&apos;Bulan. Alle rechten voorbehouden.</p>
        {/* Voeg hier later links toe naar GitHub, LinkedIn etc. */}
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/Prometheus1993"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jesus-o-bulan-9964802a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            LinkedIn
          </a>
          {/* Voeg eventueel andere links toe */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
