import { Flex, Text, List, ListItem, Box, useBreakpointValue } from "@chakra-ui/react";
import { LinkedIn } from "@components/Icons";
import type { ReactNode } from "react";
import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";
import { Swiper } from "swiper/react";
import { FreeMode, Mousewheel, Pagination } from "swiper";
import Image from "@components/Image";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  .ImageBorder img {
    border-radius: 50px;
  }
`;

type ReviewCardProps = {
  avatar: ImageMetadata | undefined;
  name: string;
  profession: string;
  desctiption: string;
  comment: string;
};

const ReviewCard = ({ avatar, name, profession, desctiption, comment }: ReviewCardProps) => (
  <StyledWrapper>
    <ListItem
      px={{ base: "16px", sm: "20px", md: "24px", lg: "32px", xl: "60px" }}
      py={{ base: "24px", md: "24px", lg: "32px", lg1: "50px", xl: "60px" }}
      flexDir="column"
      bg="brand.gray"
      borderRadius={{ base: "20px", lg1: "24px" }}
      minW={{ base: "80vw", md: "384px", lg: "490px", xl: "760px" }}
      maxW={{ xl: "740px" }}
      cursor="pointer"
    >
      <Flex>
        <Box
          mr={{ base: "12px", sm: "10px", md: "8px", lg: "24px", lg1: "16px", xl: "40px" }}
          boxSize={{ base: "50px", lg: "66px", lg1: "80px", xl: "100px" }}
          position="relative"
          background={"#F1F1F1"}
          className="ImageBorder"
        >
          <Image src={avatar?.src as string} alt="Avatar" layout="fill" />
          <Box
            boxSize={{ md: "20px", lg: "28px", lg1: "40px", xl: "40px" }}
            bg="brand.gray"
            position={"absolute"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            borderRadius={"50px"}
            right={{ xl: "0px", lg1: "-6px", lg: "-3px", base: "-2px" }}
            bottom={{ xl: "-11px", lg1: "-15px", lg: "-5px", base: "-1px" }}

          >
            <LinkedIn />
          </Box>
        </Box>
        <Flex flexDir="column">
          <Text
            fontWeight={500}
            mb={{ base: "6px", lg: "8px", lg1: "4px", xl: "15px" }}
            fontSize={{ base: "16px", lg: "20px ", lg1: "32px", xl: "45px" }}
            lineHeight={{ xl: "54px", lg1: "41px", lg: "24px", base: "19px" }}
          >
            {name}
          </Text>
          <Text
            fontWeight={400}
            mb={{ base: "5px", md: "4px", lg: "12px", lg1: "2px", xl: "8px" }}
            fontSize={{ base: "11px", lg: "16px", lg1: "22px", xl: "24px", md: "10px" }}
            lineHeight={{ xl: "28px", lg1: "30px", lg: "19px", md: "11px", base: "13px" }}
          >
            {profession}
          </Text>
          <Text
            fontWeight={400}
            fontSize={{ base: "11px", md: "10px", lg: "16px", lg1: "22px", xl: "24px" }}
            lineHeight={{ xl: "28px", lg1: "30px", lg: "19px", md: "11px", base: "13px" }}
            color="brand.darker"
            minHeight={"70px"}
          >
            {desctiption}
          </Text>
        </Flex>
      </Flex>
      <Box
        sx={{
          p: {
            fontWeight: 400,
            fontSize: { base: "16px", lg: "20px", lg1: "26px", xl: "32px" },
            lineHeight: { base: "23px", lg: "27px", lg1: "36px", xl: "44px" },
          },
        }}
      >
        {comment}
      </Box>
    </ListItem>
  </StyledWrapper>
);

type ReviewCardsProps = {
  children: ReactNode;
};

const ReviewCards = ({ children }: ReviewCardsProps) => (
  <List sx={{ ".swiper-pagination": { display: "none" } }}>
    <Swiper
      freeMode={true}
      mousewheel={{
        releaseOnEdges: true,
      }}
      pagination={true}
      spaceBetween={10}
      modules={[FreeMode, Mousewheel, Pagination]}
      slidesPerView={useBreakpointValue({ base: 1.1, md: 1.7, lg: 2.3, xl: 2.3 })}
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingRight: useBreakpointValue({ base: "16px", md: "32px", lg: "56px" }),
        paddingLeft: useBreakpointValue({ base: "16px", md: "32px", lg: "56px" }),
      }}
    >
      {children}
    </Swiper>
  </List>
);

export { ReviewCards, ReviewCard };
