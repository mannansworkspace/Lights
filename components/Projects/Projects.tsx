import { Box, Flex, List, ListItem, useBreakpointValue, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";
import NextLink from "next/link";
import Image from "@components/Image";
interface ProjectProps {
  image: ImageMetadata | undefined;
  imageMobile: ImageMetadata | undefined;
  heading: string;
  subHeading: string;
  text: string;
  href: string;
}
export const Project = ({ image, heading, subHeading, text, imageMobile, href }: ProjectProps) => (
  <ListItem display="flex" pos="relative" >
    <NextLink href={href} passHref >
      <Box
        borderRadius="16px"
        transition=".2s ease-in-out"
        cursor="pointer"
        filter={{ base: "brightness(0.5)", md: "unset" }}
        _hover={{ filter: "brightness(0.5)" }}
        w={{ base: "100%", md: "368px", lg: "707px", lg1: "781px", xl: "50%" }}
        h={"auto"}
      >
        <Image
          src={useBreakpointValue({ base: imageMobile?.src, md: image?.src }) as any}
          alt={image?.alt}
          width={510}
          height={370}
          style = {{ borderRadius:"20px"}}
        />
      </Box>
    </NextLink>
    <Box
      sx={{ p: { fontSize: "16px", color: "white" } }}
      lineHeight="19px"
      opacity="0.8"
      pos="absolute"
      left="24px"
      bottom="64px"
      display={{ md: "none" }}
    >
      {subHeading}
    </Box>
    <NextLink href={href} passHref>
      <Box
        sx={{ p: { fontSize: "20px", color: "white" } }}
        fontWeight={500}
        lineHeight="24px"
        pos="absolute"
        left="24px"
        bottom="32px"
        display={{ md: "none" }}
        cursor={"pointer"}
      >
        {heading}
      </Box>
    </NextLink>
    <Flex
      flexDir="column"
      pl={{ md: "32px", lg: "60px", lg1: "72px", xl: "80px" }}
      display={{ base: "none", md: "flex" }}
      width = {'50%'}
    >
      <Box
        sx={{ p: { fontSize: { md: "16px", lg: "24px", lg1: "22px", xl: "32px" }, color: "brand.darker" } }}
        mb={{ md: 1, lg: 4, xl: 6 }}
        fontWeight="400"
        lineHeight={{ xl: "38px", lg1: "30px", lg: "28px", md: "19px" }}
      >
        {subHeading}
      </Box>
      <NextLink href={href} passHref>
        <Box
          cursor={"pointer"}
          sx={{ p: { fontSize: { md: "32px", lg: "45px", lg1: "60px", xl: "80px" } } }}
          lineHeight={{ xl: "97px", lg1: "75px", lg: "54px", md: "43px" }}
          mb={{ md: "32px", lg: "64px", lg1: "80px", xl: "63px" }}
          fontWeight={500}
        >
          {heading}
        </Box>
      </NextLink>
      <Box
        sx={{
          p: {
            fontSize: { md: "16px", lg: "24px", lg1: "26px", xl: "32px" },
            lineHeight: { md: "23px", lg: "33px", lg1: "36px", xl: "44px" },
          },
        }}
      >
        {text}
      </Box>
    </Flex>
  </ListItem>
);

type ProjectsProps = {
  children: ReactNode;
};

export const Projects = ({ children }: ProjectsProps) => (
  <VStack>
    <List spacing={{ base: "16px", sm: "20px", md: "24px", lg: "40px", lg1: "50px", xl: "60px" }}>{children}</List>
  </VStack>
);