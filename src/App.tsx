import React from 'react';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#212D40]">
      <Header />
      <main>
        <ImageGallery />
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Willkommen bei binebastelt
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
            Entdecke die Welt des kreativen Bastelns und lasse dich von meinen 
            Projekten inspirieren. Folge mir auf Social Media für tägliche Updates 
            und kreative Ideen.
          </p>
        </section>
              <section className="container mx-auto px-4 py-8">
                  <div className="flex justify-center">
                      <video
                          src="/videos/binebastelt.mp4" // <-- Pfad zu deinem Video
                          width="325"
                          height="600"
                          loop
                          autoPlay
                          muted
                          playsInline
                          className="rounded-xl shadow-lg"
                      />
                  </div>
              </section>


      </main>
      <Footer />
    </div>
  );
}

export default App;