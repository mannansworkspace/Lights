import FeaturedImage from "@components/FeaturedImage";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import { storyblokImageUrlParser } from "@sb-utils";
type FeaturedImageProps = {
  name: string;
  imageXL: StoryblokAsset;
  imageLG1: StoryblokAsset;
  imageLG: StoryblokAsset;
  imageMD: StoryblokAsset;
  imageBase: StoryblokAsset;
};
const FeaturedImageAdapter = ({ blok }: ReactStoryblokComponent<FeaturedImageProps>) => {
  const { name, imageXL, imageLG1, imageLG, imageMD, imageBase } = blok;
  console.log({ blok })
  return (
    <FeaturedImage
        productName={name}
        imageXL={storyblokImageUrlParser(imageXL)}
        imageLG1={storyblokImageUrlParser(imageLG1)}
        imageLG={storyblokImageUrlParser(imageLG)}
        imageMD={storyblokImageUrlParser(imageMD)}
        imageBase={storyblokImageUrlParser(imageBase)}
    />
  );
};
export default FeaturedImageAdapter;