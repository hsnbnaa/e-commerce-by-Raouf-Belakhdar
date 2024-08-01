import React from "react";

export default function TopContainer({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) {
  return (
    <div className="flex flex-row items-center pb-6 border-b-2 border-light-gray">
      <h2 className="font-bold text-base pr-35">BESTSELLER PRODUCTS</h2>
      <ul className="flex flex-row gap-10 text-light-grey font-bold text-sm">
        <li>Men</li>
        <li>Women</li>
        <li>Accessories</li>
      </ul>
      <div className="flex ml-auto">
        <button onClick={onPrevious} disabled={!canGoPrevious}>
          <img
            src="public/images/prev.png"
            alt=""
            className={`${canGoPrevious ? "cursor-pointer" : "opacity-50"}`}
          />
        </button>
        <button onClick={onNext} disabled={!canGoNext}>
          <img
            src="public/images/next.png"
            alt=""
            className={`pl-15 ${canGoNext ? "cursor-pointer" : "opacity-50"}`}
          />
        </button>
      </div>
    </div>
  );
}
