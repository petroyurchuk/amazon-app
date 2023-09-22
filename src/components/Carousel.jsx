import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <SwiperSlide key={index} className={item === 3 && "bg-black"}>
            {item !== 3 ? (
              <img src={`../images/carousel_${item}.jpg`} alt="carousel" />
            ) : (
              <video controls muted="muted">
                <source src="../images/carousel_vid.mp4" type="video/mp4" />
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};
export default Carousel;
