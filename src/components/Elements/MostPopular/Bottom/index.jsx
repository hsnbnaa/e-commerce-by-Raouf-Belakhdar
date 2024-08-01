export const Bottom = (props) => {
  const { number, title, description } = props;

  return (
    <div className="flex flex-row w-265 items-center">
      <h2 className="text-danger-text font-bold text-40">{number}</h2>
      <div className="flex flex-col ml-5">
        <h5 className="text-dark-grey font-bold text-sm">{title}</h5>
        <p className="text-xs text-light-grey pt-5">{description}</p>
      </div>
    </div>
  );
};
