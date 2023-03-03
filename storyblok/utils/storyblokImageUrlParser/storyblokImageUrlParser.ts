import type { StoryblokAsset } from "@sb-types";

export type ImageMetadata = {
  src: string;
  alt?: string;
};

export const altImage = 'alt-image'

const storyblokImageUrlParser = (image: StoryblokAsset | undefined): ImageMetadata | undefined =>
  image?.filename ? { src: image.filename, alt: image.alt || altImage } : undefined;

export default storyblokImageUrlParser;
