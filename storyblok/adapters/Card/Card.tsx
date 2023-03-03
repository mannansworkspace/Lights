import Card from "@components/Card";
import type { ReactStoryblokComponent, StoryblokAsset, StoryblokSimpleLink } from "@sb-types";
import type { Richtext } from "storyblok-js-client";
import { renderRichText, storyblokImageUrlParser } from "storyblok/utils";

type CardAdapter = {
  image: StoryblokAsset;
  imageTablet: StoryblokAsset;
  text: Richtext;
  subText: Richtext;
  buttonLink: StoryblokSimpleLink;
  buttonText: string;
};

const CardAdapter = ({ blok }: ReactStoryblokComponent<CardAdapter>) => {
  const { image, text, subText, buttonText, buttonLink, imageTablet } = blok;
  return (
    <Card
      image={storyblokImageUrlParser(image)}
      imageTablet={storyblokImageUrlParser(imageTablet)}
      text={renderRichText(text)}
      subText={renderRichText(subText)}
      buttonText={buttonText}
      buttonLink={buttonLink?.url}
    />
  );
};

export default CardAdapter;
