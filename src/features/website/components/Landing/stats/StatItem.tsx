import React, { HTMLAttributes, useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
}

const StatItem: React.FC<Props> = ({ value, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-bold">{value}</h3>
      <hr className="w-10 border-t-4 border-blue-500 rounded-xl" />
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatItem;
