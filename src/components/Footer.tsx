import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#11151C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Impressum</h3>
            <p className="text-gray-400">
              Bine Bastelt<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-400">
              Email: info@binebastelt.de<br />
              Tel: +49 123 456789
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bine Bastelt. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;