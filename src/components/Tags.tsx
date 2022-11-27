import React from "react";

import Tag from "./Tag";

interface Props {
  tags: string[];
}

export default function Tags({ tags }: Props) {
  return (
    <div className="flex flex-1 flex-wrap xl:items-center xl:justify-end  ml-2 mb-4">
      {tags.map((t) => (
        <Tag key={t} name={t} />
      ))}
    </div>
  );
}
