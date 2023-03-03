import { Box, ChakraProps, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";
import NextLink from "next/link";
import Image from "@components/Image";

type Product = "Zoom" | "Multi" | "Deluxe";

type ProductCardProps = {
  name: Product;
  imageSrc: ImageMetadata | undefined;
  subName?: string;
  viewType: "basic" | "longImage";
  link?: string;
  isBasicView: boolean;
  height: any;
  objectPosition?: string;
  objectFit?: string;
  containerHeight?: string;
  imageWidth?: any;
  imageHeight?: any;
  imageBoxWidth?: any;
};

const productCardStylesConfig: Record<
  "basic" | "longImage",
  {
    container: ChakraProps["sx"];
    image: ChakraProps["sx"];
    imageContainer: ChakraProps["sx"];
    descContent: ChakraProps["sx"];
    descName: ChakraProps["sx"];
    descSubName: ChakraProps["sx"];
  }
> = {
  basic: {
    descContent: {},
    descSubName: { display: "none" },
    descName: {
      fontWeight: 500,
      color: "white",
      width: "100%",
      display: "flex",
      alignItems: "center",
      px: { base: "24px", sm: "20px", lg: "32px", lg1: "40px" },
      fontSize: { base: "20px", lg: "24px", lg1: "32px", xl: "45px" },
      lineHeight: { xl: "55px", lg1: "41px", lg: "29px", base: "24px" },
      zIndex: 1,
    },
    container: {
      bgColor: "brand.dark",
      borderRadius: "24px",
      overflow: "hidden",
      pos: "relative",
      transition: "background-color 0.4s ease-in-out",
      height: "100%",
      justifyContent: "space-between",
      // _hover: { bgColor: "brand.darker" },
      zIndex: 2,
    },
    image: {
      transition: "transform 0.4s ease-in-out",
      _groupHover: { transform: "scale(1.1)" },
      w: { xl: "71%", lg2: "74%", lg1: "83%", lg: "80%", md1: "100%", md: "75%", sm: "100%", base: "80%" },
      marginLeft: "auto",
      h: "100%",
    },
    imageContainer: {
      h: { base: "auto" },
    },
  },
  longImage: {
    container: {},
    image: {
      transition: "transform 0.4s ease-in-out",
      _groupHover: { transform: "scale(1.05)" },
    },
    imageContainer: {
      borderRadius: { md: "24px", base: "20px" },
      overflow: "hidden",
      zIndex: 1,
      // h: { base: "100%", xl: "80vh", lg1: "82vh" },
    },
    descSubName: {
      color: "brand.darker",
      fontSize: { base: "16px", lg: "24px", lg1: "22px", xl: "24px" },
      lineHeight: { xl: "28px", lg1: "30px", lg: "28px", md: "23px", base: "19px" },
      mb: { base: "8px" },
    },
    descName: {
      textTransform: "uppercase",
      fontSize: { base: "20px", lg: "24px", lg1: "26px", xl: "32px" },
      lineHeight: { xl: "44px", lg1: "36px", lg: "33px", base: "28px" },
      fontWeight: "500",
      mb: { base: "20px", md: "35px", lg: "40px", lg1: "24px", xl: "30px" },
    },
    descContent: {
      mt: { base: "20px", md: "16px", lg: "24px", xl: "32px" },
      fontsize: { base: "16px", md: "24px" },
    },
  },
};

const productCardHeight: Record<"basic" | "longImage", string> = {
  basic: "100%",
  longImage: "",
};

const AsLink = ({
  children,
  link,
  viewType,
  containerHeight,
}: Pick<ProductCardProps, "link" | "viewType" | "containerHeight"> & { children: ReactNode }) => {
  return link ? (
    <NextLink href={link} passHref>
      <Flex
        as="a"
        sx={productCardStylesConfig[viewType].container}
        height={containerHeight || productCardHeight[viewType]}
        flexDir="column"
        role="group"
        width="100%"
      >
        {children}
      </Flex>
    </NextLink>
  ) : (
    <Flex sx={productCardStylesConfig[viewType].container} flexDir="column" role="group" width="100%">
      {children}
    </Flex>
  );
};
const ProductCard = ({
  name,
  imageSrc,
  subName,
  viewType,
  link,
  isBasicView = true,
  height,
  objectFit = "contain",
  containerHeight,
  imageWidth = {},
  imageHeight = {},
  imageBoxWidth = {},
}: ProductCardProps) => {
  if (isBasicView && imageBoxWidth) {
    productCardStylesConfig[viewType].image = {
      ...productCardStylesConfig[viewType].image,
      w: imageBoxWidth,
    };
  }

  if (isBasicView && imageBoxWidth) {
    productCardStylesConfig[viewType].image = {
      ...productCardStylesConfig[viewType].image,
      w: imageBoxWidth,
    };
  }
  return (
    <Box w={"100%"}>
      <AsLink link={link} viewType={viewType} containerHeight={containerHeight} >
        <Box sx={{ height }} overflow="hidden" borderRadius={{ md: "24px", base: "20px" }}>
          <Box
            sx={productCardStylesConfig[viewType].image}
            boxSize="100%"
            borderRadius={{ md: "24px", base: "20px" }}
            position="relative"
          >
            <Image
              src={imageSrc?.src as string}
              alt={name}
              height={useBreakpointValue(imageHeight || {}) || 100}
              width={useBreakpointValue(imageWidth || {}) || 100}
              objectFit={objectFit as any}
              layout={viewType === "basic" ? "responsive" : undefined}
              style={{
                borderRadius: useBreakpointValue({ base: "20px", md: "24px" }),
              }}
            />
          </Box>
        </Box>
        <Flex
          zIndex={20}
          alignItems={isBasicView ? "center" : undefined}
          bgColor={isBasicView ? "brand.black" : undefined}
          height={isBasicView ? { xl: "127px", lg1: "87px", lg: "69px", sm: "56px", md: "56px", base: "64px" } : {}}
          flexDir="column"
          sx={productCardStylesConfig[viewType].descContent}
        >
          <Text sx={productCardStylesConfig[viewType].descSubName}>{subName}</Text>
          <Text display="flex" alignItems={"center"} height="100%" sx={productCardStylesConfig[viewType].descName}>
            {name}
          </Text>
        </Flex>
      </AsLink>
    </Box>
  );
};
export default ProductCard;
