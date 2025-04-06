import React, { useState } from 'react';

const Footer = () => {
  const [showImpressum, setShowImpressum] = useState(false);

  return (
    <footer className="bg-[#11151C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <button
              onClick={() => setShowImpressum(!showImpressum)}
              className="text-xl font-semibold mb-4 px-6 py-2 rounded-full bg-[#212D40] hover:bg-[#D66853] transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Impressum</span>
              <span className="text-sm ml-2">{showImpressum ? '▼' : '▶'}</span>
            </button>
            {showImpressum && (
              <div className="text-gray-400 bg-[#212D40] p-4 rounded-lg mt-2 animate-fade-in">
                <p>
                  Sabine Göken<br />
                  Kolberger Str. 3,<br />
                  26524 Hage<br />
                  Deutschland
                </p>
                <h3 className="text-xl font-semibold mb-4">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</h3>
                <p className="text-gray-400">
                  USt-IdNr.: 60 134 829 652
                </p>
                <h3 className="text-xl font-semibold mb-4">Redaktionell Verantwortlicher</h3>
                <p className="text-gray-400">
                  Julien Göken<br />
                  Vor der Reihe 17,<br />
                  26197 Großenkneten
                </p>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-400">
              Email: bine.information@gmail.com<br />
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} binebastelt.de Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;