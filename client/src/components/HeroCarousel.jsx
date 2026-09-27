import {useState, useEffect} from 'react'

import img1 from '../assets/hccarosel1.jpeg';
import img2 from '../assets/hccarosel2.jpeg';
import img3 from '../assets/hccarosel3.jpeg';
import img4 from '../assets/hccarosel4.jpeg';
import img5 from '../assets/hccarosel5.jpeg';

const images = [img1, img2, img3, img4, img5]

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-ink/70" />
    </div>
  );
}

export default HeroCarousel;