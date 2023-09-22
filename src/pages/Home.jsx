import {
  Carousel,
  CarouselCategory,
  CarouselProduct,
  HomePageCard,
} from "../components";
import { HomePageCardData } from "../utils";

const Home = () => {
  return (
    <div className="bg-amazonClone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {HomePageCardData.map(({ id, title, link, image }) => (
            <HomePageCard key={id} title={title} link={link} image={image} />
          ))}
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src="../images/banner_image.jpg"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
