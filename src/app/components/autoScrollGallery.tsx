import React, { useEffect, useRef } from "react";

const AutoScrollImageGallery: React.FC<{ images: string[]; speed?: number }> = ({ images, speed = 50 }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const scrollImages = () => {
        scrollContainer.scrollLeft += 1; // Adjust this to change the speed
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset to the start for an infinite loop
        }
      };

      const scrollInterval = setInterval(scrollImages, speed);

      return () => clearInterval(scrollInterval);
    }
  }, [speed]);

  // Duplicate images for an infinite scrolling effect
  const duplicatedImages = [...images, ...images];

  return (
    <div
      ref={scrollContainerRef}
      style={{
        display: "flex",
        overflow: "hidden",
        width: "100%",
        whiteSpace: "nowrap",
        position: "relative",
      }}
      className=" bg-transparent"
    >
      {duplicatedImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{
            marginRight: "10px",
            objectFit: "scale-down",
            flexShrink: 0,
          }}
          className="w-52 md:w-96 h-36 md:h-60 rounded-lg "
        />
      ))}
    </div>
  );
};

export default AutoScrollImageGallery;
