export type StoryblokSimpleLink = {
  linktype: "url";
  url: string;
  href: string;
};

export type StoryblokLinkStory = {
  linktype: "story";
  cached_url: string;
  story: {
    url: string;
  };
};

export type StoryblokLink = StoryblokLinkStory | StoryblokSimpleLink;

const storyblokLinkUrlParser = (link?: StoryblokLink): string => {
  if (!link) return "";

  switch (link.linktype) {
    case "url":
      if (!link.url) return "";

      return link.url;

    case "story":
      if (!link.cached_url) return "";
      return `/${link?.story?.url || link.cached_url}`;

    default:
      return "";
  }
};

export default storyblokLinkUrlParser;
