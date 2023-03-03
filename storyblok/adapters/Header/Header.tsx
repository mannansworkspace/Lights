import Header from "@components/Header";
import { storyblokImageUrlParser, storyblokLinkUrlParser } from "@sb-utils";
import type { ReactStoryblokComponent, StoryblokAsset, StoryblokSimpleLink } from "@sb-types";
import type { StoryblokComponent } from "storyblok-js-client";
import type { LinksGroupProps, SingleLinkProps } from "@components/Header/NavLinks";
import storyblokTableParser from "storyblok/utils/storyblokTableParser";

interface GroupLink extends StoryblokComponent<string> {
  source: StoryblokSimpleLink;
  badge?: string;
  id: string;
  image: StoryblokAsset;
  name: string;
  price: string;
  imageHeight?: any;
  imageWidth?: any;
}

export interface LinkGroups extends StoryblokComponent<string> {
  group: string;
  links: GroupLink[];
  rightLinks: GroupLink[];
  leftLinks:  GroupLink[];
  extraPadding?: boolean;
}

export interface SingleLink extends StoryblokComponent<string> {
  source: StoryblokSimpleLink;
  name: string;
  icon?: StoryblokAsset | undefined
}

type HeaderLinks = (SingleLink | LinkGroups)[];

export type HeaderAdapterProps = {
  rightLinks: HeaderLinks;
  leftLinks: HeaderLinks
};

const parsedLinks = (content: HeaderLinks) =>
  content.map((singleLink) => {
    const { source, name, _uid, component, icon } = singleLink as SingleLink;
    if (component === "headerSingleLink") {
      icon && console.log(singleLink)
      return { type: "singleLink", src: storyblokLinkUrlParser(source), name: name, id: _uid, icon: storyblokImageUrlParser(icon) } as SingleLinkProps;
    } else {
      const { links, group, extraPadding } = singleLink as LinkGroups;
      return {
        group,
        extraPadding,
        id: _uid,
        type: "groupLink",
        links: links.map(({ _uid, name, badge, source, image, price,imageHeight , imageWidth }) => ({
          id: _uid,
          name,
          badge,
          price,
          src: storyblokLinkUrlParser(source),
          image: storyblokImageUrlParser(image),
          imageHeight : storyblokTableParser(imageHeight),
          imageWidth : storyblokTableParser(imageWidth)
        })),
      } as LinksGroupProps;
    }
  });

const HeaderAdapter = ({ blok: { leftLinks = [], rightLinks = [] = [] } }: ReactStoryblokComponent<HeaderAdapterProps>) => (
  <Header leftLinks={parsedLinks(leftLinks)} rightLinks={parsedLinks(rightLinks)} />
);

export default HeaderAdapter;
