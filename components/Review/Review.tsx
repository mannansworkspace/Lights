import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import MediaAsset from "@components/MediaAsset";
import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";

type ReviewProps = {
  heading: string;
  subHeading: string;
  text: string;
  posterImage: ImageMetadata | undefined;
  posterImageMobile: ImageMetadata | undefined;
  videoAsset: ImageMetadata | undefined;
  imageAsLink: string;
  viewType: "quote" | "decorationText";
  containerHeight?: any;
  objectPosition?: any;
  imageWidth?: any;
  imageHeight?: any;
};

const Review = ({
  heading,
  subHeading,
  text,
  posterImage,
  posterImageMobile,
  videoAsset,
  viewType,
  objectPosition,
  containerHeight,
  imageWidth,
  imageHeight
}: ReviewProps) => (
  <Flex flexDir="column">
    <Flex
      mb={{ base: "16px", sm: "24px", md: "32px", lg: "40px", lg1: "70px", xl: "100px" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        width={{ base: "full", md: "50%" }}
        order={{ base: 1, md: 0 }}
        my={{ base: "20px", md: "unset" }}
        height={containerHeight}
      >
        <MediaAsset
          image={posterImage}
          imageMobile={posterImageMobile}
          video={videoAsset}
          overlay={!!videoAsset?.src}
          overlayMobile={!!videoAsset?.src}
          objectPosition={objectPosition}
          imageWidth = {imageWidth}
          imageHeight = {imageHeight}
        />
      </Box>
      <Flex
        flexDir="column"
        align="flex-start"
        justify={viewType === "decorationText" ? "space-between" : "flex-start"}
        width={"50%"}
        pl={{ md: "20px", lg1: "50px", lg: "60px", xl: "80px" }}
      >
        <Text
          color="brand.darker"
          fontSize={{ base: "16px", lg: "24px", lg1: "22px", xl: "32px" }}
          mb={{ base: "8px", md: "4px", lg: "16px", xl: "24px" }}
          lineHeight={{ xl: "38px", lg1: "30px", lg: "28px", base: "19px" }}
        >
          {subHeading}
        </Text>
        <Heading
          fontSize={{ base: "55px", md: "88px", lg: "126px", lg1: "140px", xl: "200px" }}
          lineHeight={{ base: "65.61px", md: "104px", lg: "150.32px", lg1: "182px", xl: "250px" }}
          fontWeight={400}
        >
          {heading}
        </Heading>
        {viewType === "decorationText" && (
          <Box
            px={{ base: "20px", lg: "32px", xl: 10 }}
            py={{ base: "10px", lg: "14px", xl: 4 }}
            bg="brand.gray"
            typeof="button"
            fontWeight={{ base: "700", lg1: "500" }}
            background={"none"}
            textColor="black"
            width={{ xl: "82.7%", lg1: "100%", lg: "98%", base: "100%" }}
            justifyContent="center"
            alignItems={"center"}
            border={"1px"}
            borderRadius="171px"
            display={{ base: "none", md: "flex" }}
            height={{ lg1: "80px", lg: "60px", md: "45px" }}
            fontSize={{ xl: "24px", lg1: "24px", lg: "20px", base: "16px" }}
          >
            &larr;<Box ml={{ base: 2, lg: 4 }}>{text}</Box>
          </Box>
        )}
      </Flex>
    </Flex>
    {viewType === "quote" && (
      <Box
        w={{ base: "91vw", lg: "85vw", xl: "90vw" }}
        sx={{
          p: {
            boxDecorationBreak: "clone",
            bg: "brand.gray",
            px: { base: 2.5, md: 2, lg: 5, lg1: 10 },
            py: { lg: 4, base: "6px" },
            borderRadius: { base: "12px", lg: "20px" },
            display: "inline",
            lineHeight: { base: "33.6px", md: "44.8px", lg: "66px", lg1: "78px", xl: "112px" },
            fontSize: { base: "24px", md: "32px", lg: "45px", lg1: "56px", xl: "80px" },
            fontStyle: "italic",
            fontFamily: "Times New Roman",
          },
        }}
      >
        {text}
      </Box>
    )}
    {viewType === "decorationText" && (
      <Box
        px={{ base: "20px", lg: "32px", xl: 10 }}
        py={{ base: "10px", lg: "14px", xl: 4 }}
        bg="none"
        border="1px"
        borderRadius="171px"
        display={{ base: "flex", md: "none" }}
        alignItems="center"
        justifyContent={"center"}
        height={"45px"}
        fontSize={{ lg1: "24px", lg: "20px", base: "16px" }}
      >
        &larr;<Box ml={{ base: 2, lg: 4 }}>{text}</Box>
      </Box>
    )}
  </Flex>
);

export default Review;