export default function Button(props) {
    const { type, title, style } = props;
  return (
    <button
      type={type}
      className={style}
    >
      {title}
    </button>
  );
}
