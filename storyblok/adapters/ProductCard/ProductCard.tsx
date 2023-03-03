import ProductCard from "@components/ProductCard";
import { storyblokImageUrlParser, storyblokLinkUrlParser } from "@sb-utils";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import type { StoryblokLink } from "storyblok/utils/storyblokLinkUrlParser/storyblokLinkUrlParser";
import storyblokTableParser from "storyblok/utils/storyblokTableParser";

export type ProductCardAdapterProps = {
  image: StoryblokAsset;
  name: string;
  subName?: string;
  viewType: "basic" | "longImage";
  url?: StoryblokLink | undefined;
  height?: any;
  objectPosition?: string;
  objectFit?: string;
  containerHeight?: string;
  imageWidth?: any;
  imageHeight?: any;
  imageBoxWidth?: any;
};

const ProductCardAdapter = ({
  blok: {
    name,
    image,
    viewType = "basic",
    subName,
    url,
    height,
    objectPosition,
    objectFit,
    containerHeight,
    imageWidth,
    imageHeight,
    imageBoxWidth,
  },
}: ReactStoryblokComponent<ProductCardAdapterProps>) => (
  <ProductCard
    name={name as any}
    imageSrc={storyblokImageUrlParser(image)}
    subName={subName}
    viewType={viewType}
    link={storyblokLinkUrlParser(url)}
    isBasicView={viewType === "basic"}
    height={storyblokTableParser(height)}
    objectPosition={objectPosition}
    objectFit={objectFit}
    containerHeight={containerHeight}
    imageWidth={storyblokTableParser(imageWidth)}
    imageHeight={storyblokTableParser(imageHeight)}
    imageBoxWidth={storyblokTableParser(imageBoxWidth)}
  />
);

export default ProductCardAdapter;
