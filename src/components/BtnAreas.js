import React from "react";
import { Button } from "./Button";

export const BtnAreas = ({ handleOnClick }) => {
  const btns = [
    { lable: "AC", cls: "btn-ac" },
    { lable: "C", cls: "btn-c" },
    { lable: "%", cls: "btn-perc" },
    { lable: "/", cls: "btn-divide" },
    { lable: "7", cls: "btn-7" },
    { lable: "8", cls: "btn-8" },
    { lable: "9", cls: "btn-9" },
    { lable: "*", cls: "btn-x" },

    { lable: "4", cls: "btn-4" },
    { lable: "5", cls: "btn-5" },
    { lable: "6", cls: "btn-6" },

    { lable: "-", cls: "btn-sub" },
    { lable: "1", cls: "btn-1" },
    { lable: "2", cls: "btn-2" },
    { lable: "3", cls: "btn-3" },

    { lable: "+", cls: "btn-plus" },
    { lable: "0", cls: "btn-0" },
    { lable: "00", cls: "btn-0" },
    { lable: ".", cls: "btn-dot" },
    { lable: "=", cls: "btn-equal" },
  ];
  return (
    <>
      {btns.map((btn, i) => (
        <Button
          key={i}
          lable={btn.lable}
          cls={btn.cls}
          handleOnClick={handleOnClick}
        />
      ))}
    </>
  );
};
