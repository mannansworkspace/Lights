import type { ReactStoryblokComponent, StoryblokAsset, StoryblokSimpleLink } from "@sb-types";
import type { StoryblokComponent } from "storyblok-js-client";
import GridWithTallItem from "@components/GridWithTallItem";
import { storyblokLinkUrlParser } from "@sb-utils";

interface Content extends StoryblokComponent<string> {
  image: StoryblokAsset;
  text: string;
  link: StoryblokSimpleLink;
}

type GridWithTallItemProps = {
  content: Content[];
};

const GridWithTallItemAdapter = ({ blok: { content } }: ReactStoryblokComponent<GridWithTallItemProps>) => {
  const serializedItems = content.map((item) => ({
    imageUrl: item.image.filename,
    text: item.text,
    href: storyblokLinkUrlParser(item.link),
  }));

  return <GridWithTallItem items={serializedItems} />;
};

export default GridWithTallItemAdapter;
