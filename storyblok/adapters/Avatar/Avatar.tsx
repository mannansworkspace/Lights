import Avatar from "@components/Avatar";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import { storyblokImageUrlParser } from "@sb-utils";
import storyblokTableParser from "storyblok/utils/storyblokTableParser";

export type AvatarAdapterProps = {
  description: string;
  image: StoryblokAsset;
  name: string;
  grayscale: boolean;
  height?: any;
  width?: any;
  isArticlePage?: boolean;
};

const AvatarAdapter = ({
  blok: { image, name, description, grayscale, height, width, isArticlePage },
}: ReactStoryblokComponent<AvatarAdapterProps>) => (
  <Avatar
    description={description}
    name={name}
    image={storyblokImageUrlParser(image)}
    grayscale={grayscale}
    height={storyblokTableParser(height)}
    width={storyblokTableParser(width)}
    isArticlePage={isArticlePage}
  />
);

export default AvatarAdapter;