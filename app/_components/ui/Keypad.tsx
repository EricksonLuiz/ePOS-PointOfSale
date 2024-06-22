"use client";

import React, { useState, FC } from "react";

interface KeypadProps {
  onKeyPress: (key: number | string) => void;
}

const Keypad: FC<KeypadProps> = ({ onKeyPress }) => {
  const [keys] = useState<(number | string)[][]>([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["", 0, "←"],
  ]);

  const handleClick = (key: number | string) => {
    if (key !== "") {
      onKeyPress(key);
    }
  };

  return (
    <div className="grid grid-cols-3 justify-items-center gap-2 ">
      {keys.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((key, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className={`h-9 w-9 rounded-full border-2 border-[#f2b885] bg-b5 p-0 text-sm font-bold text-[#f2b885] ${key === "" ? "invisible" : ""}`}
              onClick={() => handleClick(key)}
            >
              {key}
            </button>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Keypad;
