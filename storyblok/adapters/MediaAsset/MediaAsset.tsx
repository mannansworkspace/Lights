import MediaAsset from "@components/MediaAsset";
import { storyblokImageUrlParser } from "@sb-utils";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import storyblokTableParser from "storyblok/utils/storyblokTableParser";

type MediaAssetAdapterProps = {
  image: StoryblokAsset;
  video: StoryblokAsset;
  imageMobile: StoryblokAsset;
  overlay?: boolean;
  overlayMobile?: boolean;
  height?: string;
  width?: string;
  objectPosition?: any;
  imageWidth?: any;
  imageHeight?: any;
  objectFit?: any;
  layout ? : any;
};

const MediaAssetAdapter = ({
  blok: {
    image,
    imageMobile,
    video,
    overlay = false,
    overlayMobile = false,
    height,
    width,
    objectPosition,
    imageWidth,
    imageHeight,
    objectFit,
    layout,
  },
}: ReactStoryblokComponent<MediaAssetAdapterProps>) => (
  <MediaAsset
    image={storyblokImageUrlParser(image)}
    imageMobile={storyblokImageUrlParser(imageMobile)}
    video={storyblokImageUrlParser(video)}
    overlay={overlay}
    overlayMobile={overlayMobile}
    height={height}
    width={width}
    objectPosition={objectPosition}
    imageWidth={storyblokTableParser(imageWidth)}
    imageHeight={storyblokTableParser(imageHeight)}
    objectFit={storyblokTableParser(objectFit)}
    layout={storyblokTableParser(layout)}

  />
);
export default MediaAssetAdapter;
