const fadeInAnimationVariants = (delayMultiplier: number, initialY: number) => {
  return {
    initial: {
      opacity: 0,
      y: initialY,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delayMultiplier * index,
      },
    }),
  };
};

export default fadeInAnimationVariants;
