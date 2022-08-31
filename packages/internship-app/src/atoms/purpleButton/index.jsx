const PurpleButton = (props) => {
  return (
    <button
      className="flex items-center font-semibold uppercase tracking-widest text-white bg-gradient-to-l from-purple-1 to-purple-2"
      style={{ padding: "10px 18px 10px 18px" }}
    >
      <span
        style={{
          fontSize: "12px",
          lineHeight: "16px",
        }}
      >
        {" "}
        {props.children}
      </span>
    </button>
  );
};
export default PurpleButton;
