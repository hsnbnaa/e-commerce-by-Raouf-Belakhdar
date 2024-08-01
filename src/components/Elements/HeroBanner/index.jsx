import Button from "../../Elements/Button";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HeroBanner() {
  return (
    <>
      <SwiperSlide className="flex flex-col justify-center items-center text-center h-screen w-full bg-hero bg-cover bg-center">
        <h1 className="text-6xl text-white font-bold">GROCERIES DELIVERY</h1>
        <p className="text-xl text-white w-530 py-6">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
        <Button type="button" title="Start Now" />
      </SwiperSlide>
    </>
  );
}
