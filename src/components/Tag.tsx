"use client";

import React from "react";
import { UseFilters } from "src/contexts/FilterContext";

interface Props {
  name: string;
}

export default function Tag(props: Props) {
  const context = UseFilters();

  const onClick = () => {
    context.dispatch({
      type: "ADD",
      payload: { filter: props.name },
    });
  };

  return (
    <div
      onClick={onClick}
      className="m-1 mr-3 p-2 px-3 bg-lightGrayishCyan text-desaturatedDarkCyan hover:text-white hover:bg-desaturatedDarkCyan font-bold rounded-md cursor-pointer"
    >
      {props.name}
    </div>
  );
}
