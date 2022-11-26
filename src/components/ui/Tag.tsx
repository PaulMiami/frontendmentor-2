import React from "react";

interface Props {
  name: string;
}

export default function Tag(props: Props) {
  return (
    <div className="m-1 mr-3 p-2 px-3 bg-lightGrayishCyan text-desaturatedDarkCyan hover:text-white hover:bg-desaturatedDarkCyan font-bold rounded-md cursor-pointer">
      {props.name}
    </div>
  );
}
