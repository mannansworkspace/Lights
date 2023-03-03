import type { ImageMetadata } from "storyblok/utils/storyblokImageUrlParser";
import { Swiper } from "swiper/react";
import { FreeMode, Mousewheel, Pagination } from "swiper";
import Image from "@components/Image";
import type { ReactNode } from "react";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";

type ImageSliderItemProps = {
  image: ImageMetadata | undefined;
};

const ImageSliderItem = ({ image }: ImageSliderItemProps) => (
  <>
    {image?.src && (
      <Image src={image.src} alt={image.alt} blurDataURL={image.src} width="738px" height="738px" placeholder="blur" />
    )}
  </>
);

type ImageSliderProps = {
  heading: string;
  children: ReactNode;
};

const ImageSlider = ({ heading, children }: ImageSliderProps) => (
  <Box sx={{ ".swiper-pagination": { display: "none" } }}>
    {heading && <Heading
      textAlign="center"
      mb={{ xl: "80px", lg1: "70px", lg: "60px", md: "45px", sm: "40px", base: "24px", }}
      fontSize={{ xl: "126px", lg1: "90px", lg: "80px", md: "40px", sm: "36px", base: "32px", }}
    >
      {heading}
    </Heading>
    }
    <Swiper
      freeMode={true}
      mousewheel={{
        releaseOnEdges: true,
      }}
      pagination={true}
      spaceBetween={20}
      modules={[FreeMode, Mousewheel, Pagination]}
      slidesPerView={useBreakpointValue({ base: 1.13, md: 2.23, lg: 2.6 })}
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingRight: useBreakpointValue({ base: "16px", sm: "32px", lg: "60px" }),
        paddingLeft: useBreakpointValue({ base: "16px", sm: "32px", lg: "60px" }),
      }}
    >
      {children}
    </Swiper>
  </Box>
);

export { ImageSlider, ImageSliderItem };