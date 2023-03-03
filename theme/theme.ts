import { extendTheme } from "@chakra-ui/react";
import components from "./components";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "brand.black",
      },
    },
  },
  fonts: {
    heading: "Helvetica Neue",
    body: "Helvetica Neue",
  },
  breakpoints: {
    sm: "36em", //576px
    md: "48em", // 768px
    md1: "52em",// 900px
    lg: "80em", // 1280px
    lg1: "90em", //1440px
    lg2: "97.5em", //1560px
    xl: "120em", // 1920px
    // lg2: "100em", //1600px
  },
  colors: {
    brand: {
      gray: "#F1F1F1",
      grayer: "#9E9E9E",
      dark: "#E2E2E2",
      darker: "#A3A3A3",
      black: "#131313",
      danger: "#F74646",
    },
  },
  components,
});

export default theme;
