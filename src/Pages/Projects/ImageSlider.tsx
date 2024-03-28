type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
  imageIndex: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images, imageIndex }) => {
  return (
    <div aria-label="Image Slider" className="relative h-full w-full">
      <div className="flex h-full w-full overflow-hidden">
        {images.map(({ url, alt }, index) => (
          <img
            key={index}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={`block h-full w-full flex-shrink-0 flex-grow-0 rounded-lg object-cover transition duration-300 ease-in-out`}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
