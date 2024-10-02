import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  withText?: boolean;
  withDescription?: boolean;
}

const Brand: FC<Props> = ({ withText = true, withDescription = true }) => {
  return (
    <Link className="flex gap-4 justify-center items-center uppercase" href="/">
      <Image
        width={1024}
        height={1024}
        src="/brand.png"
        alt="المدرسة المتقدمة للتكنولوجيا التطبيقية والطاقة النووية - ATSNEE"
        className="w-16 h-16"
      />
      {withText && (
        <div>
          <p className="text-2xl font-bold">ATSNEE</p>
          {withDescription && (
            <p className="text-xs font-light">
              Applied Technology School for Nuclear Energy in El-Dabaa
            </p>
          )}
        </div>
      )}
    </Link>
  );
};

export default Brand;
