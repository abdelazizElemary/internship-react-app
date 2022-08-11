import React from "react";

const PrimaryButton = ({ children, className, ...extra }) => {
  return (
    <button
      {...extra}
      className={`px-4 h-9 text-white uppercase ${className ?? ""}`}
      style={{
        background: "linear-gradient(264.86deg, #0316E1 -13.11%, #9314F5 100%)",
      }}
    >
      {children}
    </button>
  );
};

const SecondaryButton = ({ children, className, ...extra }) => {
  return (
    <button
      {...extra}
      className={`px-4 h-9 text-blue uppercase ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

const IconButton = ({ children, className, ...extra }) => {
  return (
    <button {...extra} className={`w-9 h-9 text-blue ${className ?? ""}`}>
      {children}
    </button>
  );
};

const Button = ({ children, shape = "primary", ...extra }) => {
  if (shape === "primary")
    return <PrimaryButton {...extra}>{children}</PrimaryButton>;
  if (shape === "secondary")
    return <SecondaryButton {...extra}>{children}</SecondaryButton>;
  if (shape === "icon") return <IconButton {...extra}>{children}</IconButton>;
  return null;
};

export default Button;
