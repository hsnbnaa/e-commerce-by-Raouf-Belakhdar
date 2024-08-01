import { Fragment } from "react";

const banners = [
  {
    id: 1,
    images: "../../public/images/extra-1.png",
    alter: "Extra-1",
  },
  {
    id: 2,
    images: "../../public/images/extra-2.png",
    alter: "Extra-2",
  },
  {
    id: 3,
    images: "../../public/images/extra-3.png",
    alter: "Extra-3",
  },
];

export default function HeroExtra() {
  return (
    <main className="flex flex-row gap-43 justify-center items-center py-20  bg-grey-light">
      {banners.map((banner) => (
        <Fragment key={banner.id}>
          <img
            src={banner.images}
            alt={banner.alter}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          />
        </Fragment>
      ))}
    </main>
  );
}
