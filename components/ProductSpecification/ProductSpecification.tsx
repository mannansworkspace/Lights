import { background, Box, ChakraProps, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "@components/Image";
import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";
type ProductSpecificationProps = {
  image: ImageMetadata | undefined;
  productName: string;
  productSubName: string;
  trackType: string;
  singleMount: string;
  colorRendering: string;
  colorTemp: string;
  beamAngle: string;
  powerUsage: string;
  lumens: string;
  color: "only-white-black-special-order" | "black-and-white";
  dimming: string;
  filters: string;
};
const descBoxStyle = {
  justify: "space-between",
  borderBottom: "1px solid",
  borderColor: "rgba(163, 163, 163, .2)",
  py: { xl: "28px", lg1: "26px", lg: "24px", md: "18px", base: "16px" },
  _last: { border: "none" },
  p: {
    fontSize: { xl: "32px", lg1: "26px", lg: "20px", base: "16px" },
    lineHeight: { xl: "44.8px", lg1: "36.4px", lg: "23.86px", base: "23.2px" }
  },
  // Left desc item styles
  "p:nth-of-type(1)": {
    color: "brand.darker",
    w: { base: "50%", md: "40%", lg: "40%", xl: "45%" },
  },
  // Right desc item styles
  "p:nth-of-type(2)": {
    w: { base: "50%", md: "60%", lg: "60%", xl: "55%" },
    fontSize: { xl: "32px", lg1: "26px", lg: "24px", base: "16px" }
  },
} as ChakraProps["sx"];
const iconStyle = {
  display: "inline-block",
  borderRadius: "50%",
  boxSize: { base: "20px", lg: "24px", xl: "45px" },
} as ChakraProps["sx"];
const colorIcons = {
  "only-white-black-special-order": (
    <Flex align="center">
      <Box bg="white" sx={iconStyle} />
      <Text as="span" minW="fit-content" ml={{ base: "20px", md: "30px", lg: "35px", xl: "40px" }} color="brand.darker">
        (Black Special Order)
      </Text>
    </Flex>
  ),
  "black-and-white": (
    <HStack spacing={4}>
      <Box bg="white" sx={iconStyle} />
      <Box bg="black" sx={iconStyle} />
    </HStack>
  ),
};
const productDescKeys = [
  { name: "trackType", value: "Track Type" },
  { name: "singleMount", value: "Single Mount" },
  { name: "colorRendering", value: "Color Rendering" },
  { name: "beamAngle", value: "Beam Angle" },
  { name: "filters", value: "Filters" },
  { name: "powerUsage", value: "Power Usage" },
  { name: "lumens", value: "Lumens" },
  { name: "color", value: "Color" },
  { name: "colorTemp", value: "Color Temp" },
  { name: "dimming", value: "Dimming" },
] as any[];
const renderDesciption = (
  props: Omit<ProductSpecificationProps, "image" | "productName" | "productSubName">,
  productDescKeys: { name: keyof typeof props; value: string }[]
) =>
  productDescKeys.map(({ name, value }) => {
    if (!props[name]) return;
    switch (name) {
      case "color":
        return (
          <Flex key={name} sx={descBoxStyle}>
            <Text>Color</Text>
            <Text as="span" fontSize={{ base: "12px", lg: "24px" }}>
              {colorIcons[props[name] as ProductSpecificationProps["color"]]}
            </Text>
          </Flex>
        );
      case "filters":
        return (
          <Flex key={name} sx={descBoxStyle}>
            <Text>{`Filters (${props[name].split(",").length})`}</Text>
            <Text>{props[name]}</Text>
          </Flex>
        );
      default:
        return (
          <Flex key={name} sx={descBoxStyle}>
            <Text>{value}</Text>
            <Text>{props[name]}</Text>
          </Flex>
        );
    }
  });
const ProductSpecification = (props: ProductSpecificationProps) => {
  const { image, productName, productSubName } = props;
  return (
    <Flex
      p={{ xl: "80px", lg1: "64px", lg: "60px", md: "32px", base: "24px" }}
      bg="brand.gray"
      pos="relative"
      borderRadius="20px"
    >
      <Flex flexDir="column" minW={{ base: "100%", md: "68%", lg: "60%" }}>
        <Heading
          fontSize={{ xl: "45px", lg: "32px", md: "24px", base: "20px", sm: "22px" }}
          lineHeight={{ xl: "54.94px", lg1: "45.6px", lg: "39px", md: "29.3px", sm: "25px", base: "24.46px" }}
        >
          {productName}
        </Heading>
        <Text
          fontSize={{ xl: "32px", lg1: "26px", lg: "24px", md: "20px", sm: "18px", base: "16px" }}
          // mb={{ base: "364px", md: "36px", lg: "40px", xl: "85px" }}
          color="brand.darker"
          mb={{ xl: "36px", lg: "34px", md: "32px", base: "24px" }}
          mt={{ xl: "16px", lg1: "8px", lg: "16px", base: "8px" }}
        >
          {productSubName}
        </Text>
        {image?.src && (

          <Box display={{ md: "none", base: "block" }} >
            <Image
              src={image.src}
              alt={image.alt}
              width="291px"
              height="285px"
              blurDataURL={image.src}
              placeholder="blur"
            />
          </Box>
        )}
        <Flex flexDir="column">{renderDesciption(props, productDescKeys)}</Flex>
      </Flex>
      <Box
        alignSelf="flex-start"
        minW={{ base: "291px", lg: "500px", xl: "630px" }}
        pos="absolute"
        top={{ base: "146px", md: "0" }}
        right={{ base: "unset", md: "0" }}
      >
        {image?.src && (

          <Box display={{ md: "block", base: "none" }}>
            <Image
              src={image.src}
              alt={image.alt}
              width="828px"
              height="860px"
              blurDataURL={image.src}
              placeholder="blur"
            />
          </Box>
        )}
      </Box>
    </Flex>
  );
};
export default ProductSpecification;