import { useEffect, useState } from "react";
import { getPopular } from "../../../../services/product.service";

export const Top = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular((data) => {
      console.log(data);
      setPopular(data);
    });
  }, []);

  return (
    <section className="flex flex-row gap-6 bg-grey-light w-full">
      <img src="public/images/popular-pct.png" alt="" />
      <div className="flex flex-col text-center items-center pt-20 px-60">
        <h3 className="font-bold text-2xl pb-5  text-dark-grey">MOST POPULAR</h3>
        <p className="text-light-grey text-sm pb-14">{popular.description}</p>
        <img src={popular.image} alt="Popular Image" className="w-238 h-185 mb-14"/>
        <h4 className="text-dark-grey font-bold text-sm pb-6">{popular.category}</h4>
        <h4 className="text-green text-base items-center font-bold">
          <span className="text-muted-color pr-1 line-through">${popular.price}</span>$
          {popular.price/2}
        </h4>
      </div>
    </section>
  );
};
