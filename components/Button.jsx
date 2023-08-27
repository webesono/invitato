import React from "react";

const Button = ({ label, action }) => {
  return (
    <button
      className="flex justify-center items-center bg-primary-text w-12 h-12 rounded-full text-white border-coral-red hover:bg-black hover:bg-opacity-70"
      onClick={action}
    >
      <span className="scale-75">{label}</span>
      {/* <img
        src={iconURL}
        alt="arrow right"
        className="ml-2 rounded-full w-5 h-5"
      /> */}
    </button>
  );
};

export default Button;
