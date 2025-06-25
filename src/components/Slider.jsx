import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import room1 from "../assets/banner-1.webp";
import room2 from "../assets/banner-2.avif";
import room3 from "../assets/banner-3.avif";
import room4 from "../assets/banner-4.avif";
import room5 from "../assets/banner-5.avif";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const HeroBanner = () => {
  const { darkMode } = useContext(AuthContext);
  const images = [room1, room2, room3, room4, room5];

  return (
    <section className={`${darkMode ? " text-white" : "text-black"} py-12 lg:py-20 transition-all duration-300`}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-snug">
            Find Your Ideal Roommate!
          </h1>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg`}>
            Browse trusted listings tailored to your lifestyle, budget and location.
          </p>
          <Link
            to="/browse"
            className="btn bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg"
          >
            Browse Listings
          </Link>
        </div>

        {/* Right Side Swiper */}
        <div className="flex-1 flex justify-center">
          <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[340px]">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="w-full h-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-[300px] md:h-[350px] lg:h-[380px]">
                    <img
                      src={img}
                      alt={`room-${i}`}
                      className="w-full h-full object-cover rounded-3xl shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
