import type { Richtext } from "storyblok-js-client";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import BasicHero from "@components/BasicHero";
import { renderRichText, storyblokImageUrlParser } from "storyblok/utils";

type BasicHeroProps = {
  bgImage?: StoryblokAsset;
  mainText: Richtext;
  bodyTextStyleOption?: "center" | "zigzag" | "right";
  withLogo?: boolean;
  footerCardText: Richtext;
  footerText: Richtext;
};

const BasicHeroAdapter = ({ blok }: ReactStoryblokComponent<BasicHeroProps>) => {
  const { bgImage, mainText, bodyTextStyleOption, withLogo, footerCardText, footerText } = blok;

  return (
    <BasicHero
      bgImg={storyblokImageUrlParser(bgImage)?.src}
      text={renderRichText(mainText)}
      bodyTextStyleOption={bodyTextStyleOption}
      withLogo={withLogo}
      footerCardText={renderRichText(footerCardText)}
      footerText={renderRichText(footerText)}
    />
  );
};

export default BasicHeroAdapter;
