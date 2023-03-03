const baseStyle = {
  px: { base: 4, md: 8, lg: 14 },
  maxW: {
    base: "100vw",
  },
};

const variants = {
  container: {
    px: { base: 4, md: 8, lg: "60px" },
    minW: {
      base: "100vw",
    },

    maxWidth: "1920px",
   
    
  },
  fluid: {
    px: 0,
    minW: {
      base: "100vw",
    },
  },
};

const defaultProps = {
  variant: "container",
};

const Container = {
  baseStyle,
  variants,
  defaultProps,
};

export default Container;
