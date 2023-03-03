import { Box, Flex, List, ListItem, Text, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";
import styled from "@emotion/styled";
import Image from "next/image";

type SpecificationCardTextProps = { text: string };

const StyledWrapper = styled.div`
  .css-16guwvg {
    padding-bottom: 16px;
    border-bottom: 1px solid;
    border-color: rgba(163, 163, 163, 0.2);
    @media (max-width: 768px) {
      padding-bottom: 8px;
    }
    
  }
  .ImageBorderRadius  img {
    border-radius : 24px;
    @media (max-width: 768px) {
      width: 768px !important;
    }
  }
`; 

const SpecificationCardText = ({ text }: SpecificationCardTextProps) => (
  <StyledWrapper>
    <ListItem
      py={{ base: "16px", xl: "24px" }}
      _last={{ border: "none" }}
      borderBottom="1px solid"
      borderColor="rgba(163, 163, 163, .2)"
    >
      <Box fontSize={{ base: "16px", lg1: "24px", lg: "20px", xl: "32px" }}>{text}</Box>
    </ListItem>
  </StyledWrapper>
);

type SpecificationCardProps = {
  image: ImageMetadata | undefined;
  name: string;
  children: ReactNode;
};

const SpecificationCard = ({ children, image, name }: SpecificationCardProps) => (
  <StyledWrapper>
  <Flex flexDir="column">
    <Box borderRadius="20px" className="ImageBorderRadius">
      <Image src={image?.src as string} alt={image?.alt} width={587} height={587} />
    </Box>
    <Text
      mt={{ base: "20px", md: "24px", xl: "32px" }}
      fontSize={{ base: "32px", md: "20px", lg: "24px", xl: "45px" }}
      fontWeight={500}
    >
      {name}
    </Text>
    <List mt={{ base: "20px", md: "32px", xl: "60px" }}>
      <VStack align="left">{children}</VStack>
    </List>
  </Flex>
  </StyledWrapper>
);

export { SpecificationCard, SpecificationCardText };
