"use client";

import React, { FC, useState } from "react";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  fallbackSrc: string;
}

const ImageWithFallback: FC<Props> = (props) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
