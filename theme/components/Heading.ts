import { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  fontWeight: 500,
};

const sizes: Record<string, SystemStyleObject> = {
  "4xl": {
    fontSize: ["90px", "90px", "182px", "300px", "300px", "460px"],
    lineHeight: [1.2, 1.2, 1.45],
  },
  "3xl": {
    fontSize: ["55px", "55px", "90px", "126px", "126px", "200px"],
    lineHeight: 1.25,
  },
  xl: {
    fontSize: ["32px", "32px", "45px", "80px", "80px", "126px"],
    lineHeight: 1.2,
  },
  lg: {
    fontSize: ["32px", "32px", "32px", "45px", "45px", "80px"],
    lineHeight: 1.2,
  },
  md: {
    fontSize: ["24px", "24px", "20px", "24px", "24px", "45px"],
    lineHeight: 1.2,
  },
};

const defaultProps = {
  size: "xl",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};

export default Heading;
