import { StoryblokComponent } from "@storyblok/react";
import type { BaseBlok, ReactStoryblokComponent } from "@sb-types";
import { HeaderAdapterProps } from "../Header";

type GlobalComponents = BaseBlok<HeaderAdapterProps>;

type Blok = {
  global: GlobalComponents[];
};

const Global = ({ blok }: ReactStoryblokComponent<Blok>) => {
  const { global } = blok;

  if (!global) return null;

  const globalSingleOption = global[0];

  return <StoryblokComponent blok={globalSingleOption} />;
};

export default Global;
