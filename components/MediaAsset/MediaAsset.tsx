import {
  Modal,
  Box,
  Flex,
  useBreakpointValue,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Play } from "@components/Icons";
import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";
import storyblokTableParser from "storyblok/utils/storyblokTableParser";
import Image from "next/image";

type MediaAssetProps = {
  image: ImageMetadata | undefined;
  video: ImageMetadata | undefined;
  imageMobile: ImageMetadata | undefined;
  overlay?: boolean;
  overlayMobile?: boolean;
  height?: any;
  width?: string;
  objectPosition?: any;
  imageWidth?: any;
  imageHeight?: any;
  objectFit?: any;
  layout?: any;
};
const MediaAsset = ({
  image,
  imageMobile,
  video,
  overlay,
  overlayMobile,
  height,
  width,
  objectPosition,
  imageWidth,
  imageHeight,
  objectFit,
  layout,
}: MediaAssetProps) => {
  const isInstallSection = width === "install-section";
  const installSectionBreakPoint = isInstallSection ? "lg" : "md";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalSize = useBreakpointValue({ base: "xl", md: "3xl", lg: "6xl" });
  const posterSrc = useBreakpointValue({ base: imageMobile?.src, md: image?.src });
  const filter = overlay ? "brightness(0.5)" : "brightness(1)";
  const filterMobile = overlayMobile ? "brightness(0.5)" : "brightness(1)";
  const heightStyles = storyblokTableParser(height);
  const objectPositionStyles = storyblokTableParser(objectPosition);

  const objectFitStyle = useBreakpointValue(objectFit || {})|| "contain";
  const imageFilter = useBreakpointValue({ base: filterMobile, [installSectionBreakPoint]: filter })
  const imageHeight2 = useBreakpointValue(imageHeight || {}) || 100
  const imageWidth2 = useBreakpointValue(imageWidth || {}) || 100
  const imageLayout = useBreakpointValue(layout || "")
  const imageObjectPosition = useBreakpointValue({ lg1: `${objectPositionStyles?.x} ${ objectPositionStyles?.y }` })
  const borderRadius = useBreakpointValue(isInstallSection ? { base: "0px" } : { md: "24px", base: "20px" })

  const imageStyles = {
    boxSize: "100%",
    width: isInstallSection ? { md: "90%", lg: "73%", lg1: "70%", xl: "62%" } : "100%",
    margin: "0 auto",
    height: "100%",
    borderRadius: {base: "20px", md: "24px"}
  };


  const renderImages = () => {
    
    return (
      <Box
        height={heightStyles}
        borderRadius={isInstallSection ? { base: "0px" } : { md: "24px", base: "20px" }}
        overflow="hidden"
        zIndex={1}
        pos="relative"
        boxSize="100%"
      >
        <Box
          filter={imageFilter}
          sx={imageStyles}
          display={{ base: "block", [installSectionBreakPoint]: "block" }}
          transition="transform 0.4s ease-in-out"
          _hover={{ transform: isInstallSection? "scale(1.02)": "scale(1.04)" }}
          position="relative"
          boxSize="100%"
          borderRadius={{md:"24px" , base:"20px"}}
        >
          <Image
            src={image?.src as string}
            alt={image?.alt}
            objectPosition={imageObjectPosition}
            objectFit={objectFitStyle}
            height={imageHeight2}
            width={imageWidth2}
            layout={imageLayout}
            style={{
                borderRadius
            }}
          />
        </Box>
      </Box>
    );
  };
  if (!video) return renderImages();
  return (
    <Box height={"100%"} w={"100%"}>
      <Flex pos="relative" cursor="pointer" onClick={onOpen} w="100%" height={"100%"}>
        <Play
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          zIndex={2}
          boxSize={{ base: "65px", md: "40px", lg: "95px", xl: "120px" }}
          color="white"
        />
        {renderImages()}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
        <ModalOverlay bg="rgba(19, 19, 19, 0.6)" />
        <ModalContent pos="relative" alignSelf="center">
          <ModalCloseButton zIndex={2} pos="absolute" right="-40px" top="-10px" color="brand.darker" boxSize="32px" />
          <Box as="video" controls autoPlay src={video?.src} poster={posterSrc} background="transparent"></Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default MediaAsset;
