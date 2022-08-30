import classNames from "classnames";
const Button = ({ title, className }) => {
  return (
    <button
      className={classNames(
        "text-xs",
        "font-semibold",
        "uppercase",
        "px-8 py-3",
        className
      )}
    >
      {title}
    </button>
  );
};
export default Button;
