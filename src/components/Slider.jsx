// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import images
import firstImg from "../assets/images-1.webp";
import secoundImg from "../assets/slider-2.jpg";
import thirdImg from "../assets/slider-4.avif";

export default function Slider() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={firstImg}
            alt="Slide 1"
            className="w-full h-[220px] md:h-[320px] lg:h-[400px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={secoundImg}
            alt="Slide 2"
            className="w-full h-[220px] md:h-[320px] lg:h-[400px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={thirdImg}
            alt="Slide 3"
            className="w-full h-[220px] md:h-[320px] lg:h-[400px] object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
