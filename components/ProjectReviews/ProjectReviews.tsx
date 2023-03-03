import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";
import type { ReactNode } from "react";
import MediaAsset from "@components/MediaAsset";

type ProjectReviewsItemProps = {
  heading: string;
  subHeading: string;
  text: string;
  posterImage: ImageMetadata | undefined;
  posterImageMobile: ImageMetadata | undefined;
  videoAsset: ImageMetadata | undefined;
  imagePosition: 1 | 0;
  imageWidth?: any;
  imageHeight?: any;
  objectFit?: any;
  layout?: any;
};

const ProjectReviewsItem = ({
  heading,
  posterImage,
  posterImageMobile,
  videoAsset,
  text,
  imagePosition,
  subHeading,
  imageWidth,
  imageHeight,
  objectFit,
  layout,
}: ProjectReviewsItemProps) => (
  <Flex
    p={{ md: "32px", lg: "50px", lg1: "56px", xl: "64px" }}
    justifyContent="space-between"
    borderRadius="24px"
    bg={{ md: "brand.gray" }}
    alignItems="flex-start"
    flexDir={{ base: "column", md: "row" }}
  >
    <Flex
      flexDir="column"
      order={{ base: 0, md: imagePosition }}
      p={{ base: "24px", md: "unset" }}
      bg={{ base: "brand.gray" }}
      borderRadius={{ base: "24px", md: "unset" }}
      w={{ base: "full", md: "40%" }}
    >
      {subHeading && (
        <Text
          color="brand.darker"
          mb={{ base: "20px", md: "10px", lg: "20px", xl: "30px" }}
          fontSize={{ base: "12px", md: "16px", lg: "24px", xl: "32px" }}
        >
          {subHeading}
        </Text>
      )}
      <Heading
        mb={{ base: "20px", md: "40px", xl: "64px" }}
        fontSize={{ base: "32px", md: "32px", lg: "45px", lg1: "60", xl: "80px" }}
        lineHeight={{ xl: "97px", lg1: "75px", lg: "55px", md: "40px", base: "40px" }}
        fontWeight={500}
      >
        {heading}
      </Heading>
      <Box
        fontSize={{ base: "16px", lg: "24px", lg1: "26", xl: "32px" }}
        lineHeight={{ xl: "44px", lg1: "36px", lg: "33px", base: "23px" }}
      >
        {text}
      </Box>
    </Flex>
    <Box w={{ base: "full", md: "57%", lg: "50.77%", lg1: "55.6%", xl: "53.2%" }} my={{ base: "20px", md: "unset" }}>
      <MediaAsset
        width="100%"
        image={posterImage}
        imageMobile={posterImageMobile}
        overlay
        overlayMobile
        video={videoAsset}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        objectFit={objectFit}
        layout={layout}
      />
    </Box>
  </Flex>
);

type ProjectReviewsProps = {
  children: ReactNode;
};

const ProjectReviews = ({ children }: ProjectReviewsProps) => (
  <VStack align="stretch" spacing={{ md: "32px", lg: "60px", xl: "40px" }}>
    {children}
  </VStack>
);

export { ProjectReviews, ProjectReviewsItem };
