export const FeatureCard = (props) => {
  const {
    images,
    source_1,
    source_2,
    source_3,
    title,
    description,
    time,
    comment,
  } = props;

  return (
    <div className="flex flex-col w-328 bg-white shadow-md">
      <img src={images} alt="" />
      <div className="px-25 pt-25">
        <h6 className="text-blue flex flex-row gap-15 text-xs">
          {source_1}
          <span className="text-light-grey">{source_2}</span>
          <span className="text-light-grey">{source_3}</span>
        </h6>
        <h3 className="text-dark-grey text-xl py-3">{title}</h3>
        <p className="text-light-grey text-sm pb-6">{description}</p>
        <div className="flex flex-row justify-between text-xs pb-6">
          <h6 className="flex flex-row">
            <img src="public/images/watch.png" alt="" className="pr-2" />
            {time}
          </h6>
          <h6 className="flex flex-row">
            <img src="public/images/stat.png" alt="" className="pr-2" />
            {comment}
          </h6>
        </div>
        <h5 className="flex flex-row items-center font-bold text-light-grey text-sm pb-35">
          Learn More
          <img
            src="public/images/right.png"
            alt=""
            className="pl-3 aspect-auto h-16"
          />
        </h5>
      </div>
    </div>
  );
};
