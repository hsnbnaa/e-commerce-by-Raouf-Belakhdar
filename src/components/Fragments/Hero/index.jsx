import Button from "../../Elements/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Import from swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./swiper-custom.css";

const banners = [
  {
    id: 1,
    title: "GROCERIES DELIVERY",
    desc: "We know how large objects will act, but things on a small scale just do not act that way.",
  },
  {
    id: 2,
    title: "GROCERIES DELIVERY",
    desc: "We know large objects will act, but things on a small scale just do not act that way.",
  },
];

export default function Hero() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      className="h-screen w-full flex flex-row bg-black"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {banners.map((banner) => (
        <SwiperSlide
          className="flex flex-col justify-center items-center text-center h-screen w-auto bg-hero bg-cover bg-center bg-black opacity-1 hover:opacity-70"
          key={banner.id}
        >
          <h1 className="text-6xl text-white font-bold">{banner.title}</h1>
          <p className="text-xl text-white w-530 py-6">{banner.desc}</p>
          <Button
            type="button"
            title="Start Now"
            style="bg-blue text-white text-2xl font-bold px-10 py-15 rounded-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
