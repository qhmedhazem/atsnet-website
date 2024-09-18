import React, { FC } from "react";
import { Loader2, LucideProps } from "lucide-react";

const Spinner: FC<LucideProps> = ({ ...props }) => {
  return <Loader2 {...props} className="animate-spin" />;
};

export default Spinner;
