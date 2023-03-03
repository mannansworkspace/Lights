import AssetWithCaption from "@components/AssetWithCaption";
import { storyblokImageUrlParser } from "@sb-utils";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import type { StoryblokComponent } from "storyblok-js-client";
import storyblokTableParser from "storyblok/utils/storyblokTableParser";

interface AssetWithCaptionAdapterProps extends StoryblokComponent<string> {
  heading: string;
  type: string;
  subHeading: string;
  posterImage: StoryblokAsset;
  posterImageMobile: StoryblokAsset;
  videoAsset: StoryblokAsset;
  imageWidth?: any;
  imageHeight?: any;
  objectFit?: string;
}

const AssetWithCaptionAdapter = ({
  blok: {
    heading,
    type,
    posterImage,
    posterImageMobile,
    subHeading,
    videoAsset,
    imageWidth,
    imageHeight,
    objectFit,
  },
}: ReactStoryblokComponent<AssetWithCaptionAdapterProps>) => (
  <AssetWithCaption
    heading={heading}
    type={type}
    posterImage={storyblokImageUrlParser(posterImage)}
    posterImageMobile={storyblokImageUrlParser(posterImageMobile)}
    subHeading={subHeading}
    videoAsset={storyblokImageUrlParser(videoAsset)}
    imageWidth={storyblokTableParser(imageWidth)}
    imageHeight={storyblokTableParser(imageHeight)}
    objectFit={storyblokTableParser(objectFit)}

  />
);

export default AssetWithCaptionAdapter;
