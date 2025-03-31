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
            Willkommen bei Bine Bastelt
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
            Entdecken Sie die Welt des kreativen Bastelns und lassen Sie sich von unseren 
            Projekten inspirieren. Folgen Sie uns auf Social Media für tägliche Updates 
            und kreative Ideen.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;