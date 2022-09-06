import classNames from "classnames";

const Button = ({ title, className, href, onClick, align }) => {
  if (href) {
    return (
      <a
        href={href}
        className={classNames(
          "text-xs",
          "font-semibold",
          "uppercase",
          align === "left"
            ? "pr-8 py-3"
            : align === "right"
            ? "pl-8 py-3"
            : align === "both"
            ? "py-3"
            : "px-8 py-3",
          className
        )}
      >
        {title}
      </a>
    );
  }
  return (
    <button
      className={classNames(
        "text-xs",
        "font-semibold",
        "uppercase",
        align === "left"
          ? "pr-8 py-3"
          : align === "right"
          ? "pl-8 py-3"
          : align === "both"
          ? "py-3"
          : "px-8 py-3",
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default Button;
