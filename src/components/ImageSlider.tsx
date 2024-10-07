// src/ImageSlider.js
import React, { useEffect, FC } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface Props {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageSlider: FC<Props> = ({ images, initialIndex, isOpen, onClose }) => {
  // Convert images into the format required by react-image-gallery
  const galleryImages = images.map((src) => ({
    original: src,
    thumbnail: src, // You can change this to a smaller version of the image if available
  }));

  // Close slider on Escape key press
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  // Add event listener for keydown
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Do not render if the slider is not open
  if (!isOpen) return null;

  return (
    <div className="w-full h-screen fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative flex justify-center items-center w-full h-full">
        {/* Header */}
        <button
          onClick={onClose}
          className="absolute z-30 top-4 right-4 text-white text-2xl"
        >
          ✖
        </button>
        {/* Gallery */}
        <ImageGallery
          items={galleryImages}
          startIndex={initialIndex}
          showThumbnails={true}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={false}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
