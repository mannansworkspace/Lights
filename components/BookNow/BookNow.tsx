import { Box, Text, Button, Grid, GridItem } from "@chakra-ui/react";
import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";
import BookNowLogo from "public/images/BookNowLogo.png";
import Ellipse1 from "public/images/Ellipse 1.png";
import Ellipse2 from "public/images/Ellipse 2.png";
import Ellipse3 from "public/images/Ellipse 3.png";
import Ellipse4 from "public/images/Ellipse 5.png";
import Ellipse5 from "public/images/Ellipse 6.png";
import Ellipse6 from "public/images/Ellipse 7.png";
import Image from "next/image";
import { altImage } from "storyblok/utils/storyblokImageUrlParser/storyblokImageUrlParser";

type BookNowProps = {
  image: (ImageMetadata | undefined)[];
  imageTablet: (ImageMetadata | undefined)[];
  text: string;
  subText: string;
};

const BookNow = ({ text, subText }: BookNowProps) => {
  return (
    <Box w={"100%"} maxWidth={"1800px"} mx={"auto"}>
      <Box
        h={{ xl: "595px", lg1: "549px", lg: "500px", md: "369px", base: "auto" }}
        overflow={"hidden"}
        pl={{ xl: "132px", lg1: "108px", lg: "60px", md: "40px", base: "26px" }}
        pr={{ xl: "132px", lg1: "87px", lg: "57px", md1: "30px", md: "20px", base: "26px" }}
        backgroundColor={"#131313"}
        borderRadius={"24px"}
        textColor={"#FFFFFF"}
        mx={{ lg: "60px", md: "32px", base: "16px" }}
        display={"flex"}
        justifyContent={{ md: "space-between" }}
        alignItems={"center"}
        flexDirection={{ md: "row", base: "column" }}
      >
        <Box
          my={{ xl: "82px", lg1: "96px", lg: "60px", md: "40px", base: "32px" }}
          maxW={{ xl: "620px", lg1: "440px", lg: "370px", md: "320px" }}
          w={"100%"}
        >
          <Box display={{ md: "block", base: "none" }}>
            <Image height={"38px"} width={"82px"} src={BookNowLogo} alt={altImage} />
          </Box>
          <Box display={{ md: "none", base: "block" }}>
            <Image height={"19px"} width={"40px"} src={BookNowLogo} alt={altImage} />
          </Box>
          <Text
            fontWeight={{ lg1: 500, base: 700 }}
            fontSize={{ xl: "45px", lg: "32px", md: "28px", sm: "30px", base: "24px" }}
            lineHeight={{ xl: "54px", lg1: "42px", lg: "39px", md: "34px", sm: "36px", base: "29px" }}
            mt={{ xl: "64px", lg1: "56px", lg: "101px", md: "56px", base: "35px" }}
            pr={{ lg: "0px", md: "20px" }}
          >
            {text}
          </Text>
          <Text
            fontWeight={400}
            textColor={"#A3A3A3"}
            fontSize={{ xl: "32px", lg1: "26px", lg: "20px", md: "16px", base: "20px" }}
            lineHeight={{ xl: "45px", lg1: "36px", lg: "28px", md: "23px", base: "28px" }}
            mt={{ lg1: "32px", lg: "20px", base: "16px" }}
          >
            {subText}
          </Text>
          <Button
            w={{ xl: "275px", lg1: "223px", lg: "165px", md: "130px", base: "180px" }}
            h={{ xl: "80px", lg1: "60px", base: "45px" }}
            bg={"#fff"}
            borderRadius={"171px"}
            textColor={"#131313"}
            fontSize={{ xl: "24px", lg1: "20px", lg: "20px", base: "16px" }}
            fontWeight={{ lg: "500", base: "700" }}
            mt={{ lg1: "56px", base: "24px" }}
          >
            Book now
          </Button>
        </Box>
        <Box
          maxW={{ xl: "697px", lg1: "592px", lg: "492px", md1: "460px", md: "335px" }}
          w={"100%"}
          justifyContent={"space-between"}
          display="flex"
          flexWrap={"wrap"}
          mb={{ md: "0px", base: "20px" }}
        >
          <Grid mb={{ xl: "25px", lg1: "24px", lg: "20px", md: "15px", base: "12px" }} opacity={0.4} templateColumns="repeat(3, 1fr)" gap={{ xl: "26px", lg1: "22px", lg: "19px", md: "16px", base: "11px" }} w={'100%'} display={{ md: "grid", base: "none" }}>
            <GridItem colSpan={1}><Image src={Ellipse6} alt={altImage} /></GridItem>
            <GridItem colSpan={1}><Image src={Ellipse2} alt={altImage} /></GridItem>
            <GridItem colSpan={1}><Image src={Ellipse3} alt={altImage} /></GridItem>
          </Grid>
          <Grid mt={{ md: "0px", base: "10px" }} templateColumns="repeat(3, 1fr)" gap={{ xl: "26px", lg1: "22px", lg: "19px", md: "16px", base: "11px" }} w={'100%'} mb={{ xl: "25px", lg1: "24px", lg: "20px", md: "15px", base: "12px" }}>
            <GridItem colSpan={1}><Image src={Ellipse1} alt={altImage} /></GridItem>
            <GridItem colSpan={1}><Image src={Ellipse4} alt={altImage} /></GridItem>
            <GridItem colSpan={1}><Image src={Ellipse2} alt={altImage} /></GridItem>
          </Grid>
          <Grid templateColumns="repeat(3, 1fr)" gap={{ xl: "26px", lg1: "22px", lg: "19px", md: "16px", base: "11px" }} w={'100%'} mb={{ xl: "25px", lg1: "24px", lg: "20px", md: "15px", base: "12px" }}>
            <GridItem colSpan={1}><Image src={Ellipse5} alt={altImage} /></GridItem>
            <GridItem colSpan={1}><Image src={Ellipse3} alt={altImage} /></GridItem>
            <GridItem colSpan={1}><Image src={Ellipse6} alt={altImage} /></GridItem>
          </Grid>
          <Grid opacity={0.4} templateColumns="repeat(3, 1fr)" gap={{ xl: "26px", lg1: "22px", lg: "19px", md: "16px", base: "11px" }} w={'100%'} display={{ md: "grid", base: "none" }} mb={{ xl: "25px", lg1: "24px", lg: "20px", md: "15px", base: "12px" }}>
            <GridItem colSpan={1}><Image src={Ellipse4} alt={altImage} /></GridItem>
            <GridItem colSpan={1}><Image src={Ellipse5} alt={altImage} /></GridItem>
            <GridItem colSpan={1}><Image src={Ellipse1} alt={altImage} /></GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default BookNow;