import React from "react";

const Button = (props) => {
  return (
    <div className="">
      <button className="py-2 px-5 rounded-lg m-2 bg-gray-200">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
