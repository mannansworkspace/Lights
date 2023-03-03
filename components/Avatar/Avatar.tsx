import { Box, Flex, Text } from "@chakra-ui/react";
import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";
import Image from "@components/Image";

type AvatarProps = {
  description: string;
  image: ImageMetadata | undefined;
  name: string;
  grayscale: boolean;
  height?: any;
  width?: any;
  isArticlePage?: boolean;
};

const Avatar = ({ description, image, name, grayscale, height, width, isArticlePage }: AvatarProps) => {
  const filter = grayscale ? "grayscale(100%)" : "none";
  const nameBox = (
    <Text
      fontSize={{ base: "20px", md: "24px", lg: "32px", xl: "45px" }}
      mb={{ base: "8px", xl: "16px" }}
      lineHeight={{ xl: "55px", lg1: "41px", lg: "39px", md: "29px", base: "24px" }}
      fontWeight={500}
    >
      {name}
    </Text>
  );

  const descriptionBox = (
    <Text
      color="brand.darker"
      fontSize={{ base: "16px", md: "20px", lg1: "26px", xl: "32px" }}
      lineHeight={{ xl: "44px", lg1: "36px", md: "24px", base: "19px" }}
    >
      {description}
    </Text>
  );

  console.log("Height & width : ", { height, width });
  return (
    <Flex filter={filter} flexDir="column" justify="center" align="center" w="full">
      {image?.src && (
        <Box
          mb={{ base: "10px", md: "20px", lg: "32px", xl: "40px" }}
          boxSize={{ base: "100%" }}
          rounded="full"
          height={height}
          width={width}
        >
          <Image src={image.src} alt={name} width={500} height={500} />
        </Box>
      )}
      {isArticlePage ? (
        <>
          {descriptionBox}
          {nameBox}
        </>
      ) : (
        <>
          {nameBox}
          {descriptionBox}
        </>
      )}
    </Flex>
  );
};

export default Avatar;