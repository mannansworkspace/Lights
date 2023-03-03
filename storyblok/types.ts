import type { StoryblokComponent } from "storyblok-js-client";

export type BaseBlok<T> = StoryblokComponent<string> & T;
export type ReactStoryblokComponent<BLOK> = {
  blok: BaseBlok<BLOK>;
};

export type StoryblokSimpleLink = {
  linktype: "url";
  url: string;
  href: string;
};

export type StoryblokAsset = {
  alt?: string;
  title?: string;
  filename: string;
};

export type StoryblokEditable = {
  "data-blok-c": {
    name: string;
    space: string;
    uid: string;
    id: string;
  };
  "data-blok-uid": string;
};
