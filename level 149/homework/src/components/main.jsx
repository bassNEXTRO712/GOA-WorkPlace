import { useEffect, useRef } from 'react';
import maincover from './videos/maincover.mp4';
import bmw from './videos/bmw.mp4';
import mercedesdark from './videos/mercedesdark.mp4';
import dodge from './videos/dodge.mp4';
import porshe from './videos/porshe.mp4';

const Main = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollWidthPerSet = slider.scrollWidth / 2;

    let scrollLeft = 0;
    const speed = 1;
    const intervalDelay = 20;

    const scroll = () => {
      scrollLeft += speed;
      if (scrollLeft >= scrollWidthPerSet) {
        scrollLeft = 0;
      }
      slider.scrollLeft = scrollLeft;
    };

    const intervalId = setInterval(scroll, intervalDelay);
    return () => clearInterval(intervalId);
  }, []);

  return (
    < >
    
      <div id="maindiv" className="w-full bg-gray-100 flex items-center justify-center">
        <video
          src={maincover}
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-[650px] object-cover shadow-lg"
        />
      </div>

      <section className="mt-10 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-4 w-full overflow-x-scroll no-scrollbar scroll-smooth"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-4">
              <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] h-[300px] sm:h-[400px] md:h-[450px]  rounded-lg flex items-center justify-center">
                <video
                  src={porshe}
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] h-[300px] sm:h-[400px] md:h-[450px]  rounded-lg flex items-center justify-center">
                <video
                  src={dodge}
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] h-[300px] sm:h-[400px] md:h-[450px] rounded-lg flex items-center justify-center">
                <video
                  src={mercedesdark}
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] h-[300px] sm:h-[400px] md:h-[450px]  rounded-lg flex items-center justify-center">
                <video
                  src={bmw}
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;
