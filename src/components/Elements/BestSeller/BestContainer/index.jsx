import React, { useEffect, useState } from "react";
import MainContainer from "../MainContainer";
import TopContainer from "../TopContainer";
import { getBrands } from "../../../../services/product.service";

export default function BestContainer() {
  const [brands, setBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    getBrands((data) => {
      setBrands(data);
    });
  }, []);

  const paginatedBrands = brands.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(brands.length / itemsPerPage) - 1));
  };

  const canGoPrevious = currentPage > 0;
  const canGoNext = currentPage < Math.ceil(brands.length / itemsPerPage) - 1;

  return (
    <section className="flex flex-col w-full">
      <TopContainer
        onPrevious={goToPreviousPage}
        onNext={goToNextPage}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
      />
      <section className="w-full inline-block">
        {brands.length > 0 ? (
          <div className="flex flex-wrap pt-10 pl-6 gap-30">
            {paginatedBrands.map((brand) => (
              <MainContainer
                key={brand.id}
                images={brand.image}
                name={brand.title}
                brand={brand.category}
                price={brand.price}
                discount={brand.price / 2}
              />
            ))}
          </div>
        ) : null}
      </section>
    </section>
  );
}
