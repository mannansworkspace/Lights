import Review from "@components/Review";
import { renderRichText, storyblokImageUrlParser } from "@sb-utils";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import type { Richtext } from "storyblok-js-client";
import storyblokTableParser from "storyblok/utils/storyblokTableParser";

type ReviewAdapterProps = {
  heading: string;
  subHeading: string;
  text: Richtext;
  posterImage: StoryblokAsset;
  posterImageMobile: StoryblokAsset;
  videoAsset: StoryblokAsset;
  imageAsLink: string;
  viewType: "quote" | "decorationText";
  containerHeight?: any;
  objectPosition?: any;
  imageWidth?: any;
  imageHeight?: any;  
};

const ReviewAdapter = ({
  blok: {
    heading,
    subHeading,
    text,
    posterImageMobile,
    posterImage,
    imageAsLink,
    viewType,
    videoAsset,
    containerHeight,
    objectPosition,
    imageWidth,
    imageHeight
  },
}: ReactStoryblokComponent<ReviewAdapterProps>) => (
  <Review
    viewType={viewType}
    imageAsLink={imageAsLink}
    heading={heading}
    subHeading={subHeading}
    text={renderRichText(text)}
    posterImageMobile={storyblokImageUrlParser(posterImageMobile)}
    posterImage={storyblokImageUrlParser(posterImage)}
    videoAsset={storyblokImageUrlParser(videoAsset)}
    containerHeight={storyblokTableParser(containerHeight)}
    objectPosition={objectPosition}
    imageWidth={storyblokTableParser(imageWidth)}
    imageHeight={storyblokTableParser(imageHeight)}
  />
);

export default ReviewAdapter;
