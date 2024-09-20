import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  withText?: boolean;
  withDescription?: boolean;
}

const Brand: FC<Props> = ({ withText = true, withDescription = true }) => {
  return (
    <Link
      className="flex gap-4 justify-center items-center  uppercase"
      href="/"
    >
      <Image
        width={64}
        height={64}
        src="/brand.png"
        alt="المدرسة الفنية المتقدمة لتكنولوجيا الطاقة النووية - ATSNET"
      />
      {withText && (
        <div>
          <p className="text-2xl font-bold">ATSNET</p>
          {withDescription && (
            <p className="text-xs font-light">
              Advanced Technology School For Nuclear Energy
            </p>
          )}
        </div>
      )}
    </Link>
  );
};

export default Brand;
