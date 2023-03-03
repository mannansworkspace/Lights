import type { Richtext } from "storyblok-js-client";
import type { ReactStoryblokComponent, StoryblokSimpleLink } from "@sb-types";
import ProjectHero from "@components/ProjectHero";
import { renderRichText, storyblokLinkUrlParser } from "storyblok/utils";

type ProjectHeroProps = {
  heading: Richtext;
  text: Richtext;
  subText: Richtext;
  buttonText: string;
  buttonLink: StoryblokSimpleLink;
};

const ProjectHeroAdapter = ({ blok }: ReactStoryblokComponent<ProjectHeroProps>) => {
  const { heading, text, subText, buttonText, buttonLink } = blok;

  return (
    <ProjectHero
      heading={renderRichText(heading)}
      text={renderRichText(text)}
      subText={renderRichText(subText)}
      buttonText={buttonText}
      buttonLink={storyblokLinkUrlParser(buttonLink)}
    />
  );
};

export default ProjectHeroAdapter;
