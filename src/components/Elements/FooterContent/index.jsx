export const FooterContent = (props) => {
  const { title, list_1, list_2, list_3, list_4 } = props;
  return (
    <div className="flex flex-col w-148">
      <h4 className="font-bold text-base pb-6">{title}</h4>
      <ul className="text-sm font-bold flex flex-col gap-3">
        <li>{list_1}</li>
        <li>{list_2}</li>
        <li>{list_3}</li>
        <li>{list_4}</li>
      </ul>
    </div>
  );
};
