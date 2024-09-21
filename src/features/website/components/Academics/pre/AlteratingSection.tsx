"use client";

import { FC, ReactNode, useRef } from "react";

const AlternatingSection: FC<{
  title: string;
  content: string;
  items: string[];
  image: ReactNode;
  reverse: boolean;
}> = ({ title, content, items, image, reverse }) => (
  <section
    className={`container mx-auto flex flex-col gap-8 ${
      reverse ? "flex-col" : "flex-col-reverse"
    } lg:flex-row items-center lg:space-x-8 `}
  >
    {!reverse && <div className="lg:w-1/2 text-center">{image}</div>}
    <div className="lg:w-1/2 space-y-4">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>{content}</p>
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
    {reverse && <div className="lg:w-1/2 text-center">{image}</div>}
  </section>
);

export default AlternatingSection;
