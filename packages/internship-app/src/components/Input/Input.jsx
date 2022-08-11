import React, { useId } from "react";

const Input = ({ label, ...extra }) => {
  const id = useId();
  return (
    <div className='inline-block'>
      {label && (
        <label
          htmlFor={id}
          className='capitalize font-bold block py-2 text-bluegrey'
        >
          {label}
        </label>
      )}
      <input
        id={id}
        {...extra}
        className='pr-4 pl-3 h-9 placeholder-bluegrey/70 border border-bg-2 bg-bg-1 rounded'
      />
    </div>
  );
};

export default Input;
