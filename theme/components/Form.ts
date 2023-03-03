const activeLabelStyles = {
  top: 0,
  bottom: "initial",
  transform: {
    base: "scale(0.85) translateY(-28px)",
    lg: "scale(0.85) translateY(-36px)",
    xl: "scale(0.85) translateY(-48px)",
  },
};

const floatingVariant = {
  container: {
    label: {
      bottom: 0,
      left: 0,
      zIndex: 2,
      position: "absolute",
      pointerEvents: "none",
      my: 2,
      fontSize: { base: "16px", lg: "20px", xl: " 32px" },
      transformOrigin: "left top",
      color: "brand.darker",
      _invalid: {
        color: "brand.danger",
      },
    },
    "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
      ...activeLabelStyles,
    },
    "textarea:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
      ...activeLabelStyles,
    },
    _focusWithin: {
      label: {
        ...activeLabelStyles,
      },
    },
  },
};

const variants = {
  floating: floatingVariant,
};

const Form = {
  variants,
};

export default Form;
