import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  return (
    <div aria-label="Image Slider" className="relative h-full w-full">
      <div className="flex h-full w-full overflow-hidden">
        {images.map(({ url, alt }, index) => (
          <img
            key={index}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={`block h-full w-full flex-shrink-0 flex-grow-0 object-cover transition duration-300 ease-in-out`}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className="focus-visible:animate-squish hover:animate-squish absolute bottom-0 left-0 top-0 block cursor-pointer p-4 transition-colors duration-100 ease-in-out hover:bg-[#00000033] focus-visible:bg-[#00000033] focus-visible:outline"
        onClick={showPrevImage}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden className="h-8 w-8 fill-black stroke-white" />
      </button>
      <button
        className="focus-visible:animate-squish hover:animate-squish absolute bottom-0 right-0 top-0 block cursor-pointer p-4 transition-colors duration-100 ease-in-out hover:bg-[#00000033] focus-visible:bg-[#00000033] focus-visible:outline"
        onClick={showNextImage}
        aria-label="View Next Image"
      >
        <ArrowBigRight
          aria-hidden
          className="h-8 w-8 fill-black stroke-white"
        />
      </button>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-1">
        {images.map((_, index) => (
          <button
            className="block h-4 w-4 cursor-pointer transition duration-100 ease-in-out hover:scale-105 focus-visible:scale-105 focus-visible:outline"
            key={index}
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
          >
            {index === imageIndex ? (
              <CircleDot
                aria-hidden
                className="h-full w-full fill-black stroke-white"
              />
            ) : (
              <Circle
                aria-hidden
                className="h-full w-full fill-black stroke-white "
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
