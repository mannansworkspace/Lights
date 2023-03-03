import type { StoryblokComponent } from "storyblok-js-client";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import { ImageSlider, ImageSliderItem } from "@components/ImageSlider";
import { SwiperSlide } from "swiper/react";
import { storyblokImageUrlParser } from "@sb-utils";
import { Box } from "@chakra-ui/react";
import storyblokTableParser from "storyblok/utils/storyblokTableParser";
import styled from '@emotion/styled'

interface Content extends StoryblokComponent<string> {
  image: StoryblokAsset | undefined;
}

type ImageSliderAdapterProps = {
  heading: string;
  content: Content[];
  display: any
};

const StyledWrapper = styled.div`
  .swiper-slide {
    display : grid;
  }
`;


const ImageSliderAdapter = ({ blok: { heading, content, display } }: ReactStoryblokComponent<ImageSliderAdapterProps>) => {
  let displayStyles = storyblokTableParser(display)
  return <StyledWrapper> <Box display={displayStyles}>
    <ImageSlider heading={heading}>
      {content.map(({ _uid, image }) => (
        <SwiperSlide key={_uid} >
          <ImageSliderItem image={storyblokImageUrlParser(image)} />
        </SwiperSlide>
      ))}
    </ImageSlider>
  </Box>
  </StyledWrapper>
};

export default ImageSliderAdapter;