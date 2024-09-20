import React, { FC } from "react";
import { AuthenticationIllustration } from "./Illustrations/Authentication";

interface Props {
  title?: string;
}

const NoAccess: FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <AuthenticationIllustration height={250} />
      <span className="text-lg px-4 py-2 text-primary/50">
        {title || "No Data"}
      </span>
    </div>
  );
};

export default NoAccess;
