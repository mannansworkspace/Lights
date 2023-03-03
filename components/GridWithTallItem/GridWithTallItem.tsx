import { Grid, Flex, AspectRatio, Text, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from '@components/Image'

const Overlay = () => (
  <Box
    bg="brand.black"
    pos="absolute"
    w="full"
    h="full"
    opacity="0.35"
    zIndex="0"
    //borderRadius={{ base: "none", xl: "20px" }}
    transition="opacity 0.4s ease-in-out"
    _groupHover={{ opacity: "0.75" }}
  />
);

const CenteredText = ({ text }: { text: string }) => (
  <Text zIndex={1} transition="transform 0.4s ease-in-out" _groupHover={{ transform: "scale(1.3)" }}>
    {text}
  </Text>
);

interface GridWithTallItem {
  items: Array<{
    imageUrl: string;
    text: string;
    href: string;
  }>;
}

const GridWithTallItem = ({ items }: GridWithTallItem) => {
  if (!items) return <></>;

  const [tallItem, squareTopItem, squareBottomItem] = items;

  return (
    <Grid
      templateColumns={{ base: "1fr", xl: "6.7fr 5fr", lg1: "6.899fr 5fr", lg: "4.99fr 5fr", md: "5.9fr 5fr", }}
      templateRows={{ base: "1fr 1fr 1fr", md: "1fr 1fr" }}
      templateAreas={{ base: "'tall' 'square-top' 'square-bottom'", md: "'tall square-top' 'tall square-bottom'" }}
      gap={{ base: "1px", md: "1px" }}
      color="white"
      fontSize={{ base: "20px", md: "20px", lg: "24px", lg1: "32px", xl: "45px" }}
      lineHeight={{xl: "55px", lg1: "41px", lg: "29px", md: "24px",}}
      fontWeight="medium"
    >
      {tallItem && (
        <NextLink href={tallItem.href} passHref>
          <Flex
            gridArea="tall"
            justifyContent="center"
            alignItems="center"
            pos="relative"
            bgPosition="center"
            role="group"
            cursor="pointer"
            height={{sm:"auto" , base: "576px"}}
            
          >
            <Image 
              src={tallItem.imageUrl} 
              layout="fill"  
              alt="Banner" 
              objectFit="cover"
            />
            <CenteredText text={tallItem.text} />
            <Overlay />
          </Flex>
        </NextLink>
      )}
      {squareTopItem && (
        <AspectRatio ratio={1 / 1} gridArea="square-top" pos="relative" >
          <NextLink href={squareTopItem.href} passHref>
            <Flex
              justifyContent="center"
              alignItems="center"
              bgPosition="center"
              role="group"
              cursor="pointer"
            >
              <Image src={squareTopItem.imageUrl} layout="fill" alt="Banner" objectFit="cover"/>
              <CenteredText text={squareTopItem.text} />
              <Overlay />
            </Flex>
          </NextLink>
        </AspectRatio>
      )}
      {squareBottomItem && (
        <AspectRatio ratio={1 / 1} gridArea="square-bottom" pos="relative" >
          <NextLink href={squareBottomItem.href} passHref>
            <Flex
              justifyContent="center"
              alignItems="center"
              bgPosition="center"
              role="group"
              cursor="pointer"
            >
              <Image 
                src={squareBottomItem.imageUrl} 
                layout="fill" 
                alt="Banner" 
                objectFit="cover"
              />
              <CenteredText text={squareBottomItem.text} />
              <Overlay />
            </Flex>
          </NextLink>
        </AspectRatio>
      )}
    </Grid>
  );
};

export default GridWithTallItem;