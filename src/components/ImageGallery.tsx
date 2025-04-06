import React, { useState, useEffect } from 'react';

const images = [
    'https://binebastelt.de/images/carusell/1.jpg',
    'https://binebastelt.de/images/carusell/2.jpg',
    'https://binebastelt.de/images/carusell/3.jpg',
    'https://binebastelt.de/images/carusell/4.jpg',
    'https://binebastelt.de/images/carusell/5.jpg',
    'https://binebastelt.de/images/carusell/6.jpg',
];

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[350px] md:h-[700px] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={image}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-[#D66853]' : 'bg-white/50'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
