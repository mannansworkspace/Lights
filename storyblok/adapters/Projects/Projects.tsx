import { Projects, Project } from "@components/Projects";
import { storyblokEditable } from "@storyblok/react";
import type { ReactStoryblokComponent, StoryblokAsset, StoryblokSimpleLink } from "@sb-types";
import type { Richtext, StoryblokComponent } from "storyblok-js-client";
import { renderRichText, storyblokImageUrlParser } from "storyblok/utils";
import { Box } from "@chakra-ui/react";
import { storyblokLinkUrlParser } from "@sb-utils";

interface Content extends StoryblokComponent<string> {
  image: StoryblokAsset;
  imageMobile: StoryblokAsset;
  heading: Richtext;
  subHeading: Richtext;
  text: Richtext;
  link: StoryblokSimpleLink
}

type ProjectsAdapterProps = {
  content: Content[];
};

const ProjectsAdapter = ({ blok }: ReactStoryblokComponent<ProjectsAdapterProps>) => {
  const { content } = blok;

  return (
    <Projects>
      {content.map((nestedBlok) => {
        const { _uid, heading, text, subHeading, image, imageMobile, link } = nestedBlok;
        return (
          <Box {...storyblokEditable(nestedBlok)} key={_uid} w="100%">
            <Project
              image={storyblokImageUrlParser(image)}
              imageMobile={storyblokImageUrlParser(imageMobile)}
              heading={renderRichText(heading)}
              subHeading={renderRichText(subHeading)}
              text={renderRichText(text)}
              href={storyblokLinkUrlParser(link)}
            />
          </Box>
        );
      })}
    </Projects>
  );
};

export default ProjectsAdapter;