import React, { FC } from "react";
import { NoDataIllustration } from "./Illustrations/NoData";

interface Props {
  title?: string;
}

const NoData: FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <NoDataIllustration height={250} />
      <span className="text-lg px-4 py-2 text-primary/50">
        {title || "No Data"}
      </span>
    </div>
  );
};

export default NoData;
