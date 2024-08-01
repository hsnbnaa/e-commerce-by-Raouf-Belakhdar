import { SwiperSlide } from "swiper/react";

export default function MainContainer(props) {
  const { images, name, brand, price, discount } = props;

  return (
    <div className="flex flex-col font-bold items-center gap-3 w-183 h-324 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
      <img src={images} alt="" className="aspect-square" />
      <h3 className="text-base text-dark-blue">{name.substring(0, 15)}</h3>
      <h4 className="text-sm text-light-grey">{brand}</h4>
      <h4 className="text-green text-base items-center">
        <span className="text-muted-color pr-1 line-through">${price}</span>$
        {discount}
      </h4>
    </div>
  );
}
