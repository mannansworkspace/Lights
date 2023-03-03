import type { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  borderRadius: "full",
  fontWeight: 500,
};

const variantBlack: SystemStyleObject = {
  border: "1px",
  borderColor: "brand.black",
  color: "white",
  background: "brand.black",
  _hover: {
    background: "white",
    color: "brand.black",
    img: {
      filter: "invert(1)"
    }
  },
};

const variantWhite: SystemStyleObject = {
  border: "1px",
  borderColor: "brand.black",
  color: "brand.black",
  background: "white",
  _hover: {
    color: "white",
    background: "brand.black",
    img: {
      filter: "invert(1)"
    }
  },
};

const variants: SystemStyleObject = {
  black: variantBlack,
  white: variantWhite,
};
const sizes: Record<"sm" | "md" | "lg", SystemStyleObject> = {
  md: {
    w: '100%', mx: "auto", mt: { xl: "80px", lg1: "70px", lg: "60px", md: "40px", sm: "32px", base: "25px" },
    fontSize: { base: "16px", lg: "20px", lg1: "24px", xl: "36px" },
    lineHeight: { xl: "48px", lg1: "32px", lg: "24px", base: "19px" },
    h: { base: "80px", sm: "90px", md: "100px", lg: "140px", lg1: "160px", xl: "200px" },
    fontWeight: "700",
    px: { base: "40px", lg: "60px" },
    py: { base: "22px", lg: "32px", xl: "39px" },
  },
  lg: {
    w: '100%', mx: "auto",
    fontSize: { base: "16px", lg: "20px", lg1: "24px", xl: "36px" },
    lineHeight: { xl: "48px", lg1: "32px", lg: "24px", base: "19px" },
    fontWeight: "700",
    h: { base: "80px", sm: "90px", md: "100px", lg: "140px", lg1: "160px", xl: "200px" },
    width: "full",
  },
  sm: {
    height: { xl: '80px', lg1: '60px', base: '45px' },
    width: { xl: '253px', lg1: '208px', md: '160px', base: '178px' },
    fontSize: { xl: '24px', lg1: '20px', base: '16px' },
    fontWeight: '500px',
  }
};

const defaultProps = {
  size: "md",
  variant: "black",
};

const Button = {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};

export default Button;