import React from "react";
import Button from "./Button";

const list = [
  "ALl",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Comedy",
  "Finance",
  "Money",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Button name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
