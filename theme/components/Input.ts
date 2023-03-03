const floatingVariant = {
  field: {
    border: "none",
    borderBottom: "1px",
    borderColor: "brand.black",
    borderRadius: "none",
    color: "brand.black",
    px: 0,
    fontSize: { base: "16px", lg: "20px", xl: " 32px" },
    height: { base: "32px", lg: "40px", xl: "56px" },

    _invalid: {
      boxShadow: "none",
      borderColor: "brand.danger",
    },

    _disabled: {
      opacity: 1,
      color: "brand.gray",
      borderColor: "brand.gray",
    },
  },
};

const variants = {
  floating: floatingVariant,
};

const defaultProps = {
  variant: "floating",
};

const Input = {
  variants,
  defaultProps,
};

export default Input;
