import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate, createSearchParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { searchCategories } from "../utils";
const CarouselCategory = () => {
  const navigate = useNavigate();
  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category,
        searchTerm: ``,
      })}`,
    });
  };
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by category</div>
      <Swiper
        loop={true}
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {[...new Array(6)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer"
            onClick={() => searchCategory(searchCategories[index + 1].value)}
          >
            <img src={`../images/category_${index}.jpg`} alt="" />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CarouselCategory;
