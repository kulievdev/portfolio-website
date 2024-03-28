type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
  imageIndex: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images, imageIndex }) => {
  return (
    <div className="flex overflow-hidden">
      {images.map(({ url, alt }, index) => (
        <img
          key={index}
          src={url}
          alt={alt}
          aria-hidden={imageIndex !== index}
          className={`block h-full w-full rounded-lg object-cover transition duration-300 ease-in-out`}
          style={{ translate: `${-100 * imageIndex}%` }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
