import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Live",
  "TV",
  "Movies",
  "Development",
  "Cricket",
  "Valentines",
  "Cooking",
  "Guitar",
  "Game shows",
  "Mantras",
];

const ButtonsList = () => {
  return (
    <div className="flex ">
      {/* Showing all buttons  */}
      {list.map((buttonn, index) => (
        <Button key={index} name={buttonn}></Button>
      ))}
    </div>
  );
};

export default ButtonsList;
