import Link from "next/link";
import Image from "next/image";
import React from "react";

const Brand = () => {
  return (
    <Link
      className="flex gap-4 justify-center items-center text-xl font-bold uppercase"
      href="/"
    >
      <Image
        width={64}
        height={64}
        src="/brand.png"
        alt="المدرسة الفنية المتقدمة لتكنولوجيا الطاقة النووية - ATSNET"
      />
      <div>
        <p className="text-2xl">ATSNET</p>
        <p className="text-xs">Advanced Nuclear Technology School</p>
      </div>
    </Link>
  );
};

export default Brand;
