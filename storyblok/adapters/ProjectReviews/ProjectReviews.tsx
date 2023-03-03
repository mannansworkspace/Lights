import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import type { StoryblokComponent, Richtext } from "storyblok-js-client";
import { renderRichText, storyblokImageUrlParser } from "@sb-utils";
import { ProjectReviews, ProjectReviewsItem } from "@components/ProjectReviews";
import storyblokTableParser from "storyblok/utils/storyblokTableParser";

interface Content extends StoryblokComponent<string> {
  heading: string;
  subHeading: string;
  text: Richtext;
  posterImage: StoryblokAsset;
  posterImageMobile: StoryblokAsset;
  videoAsset: StoryblokAsset;
  imagePosition: 1 | 0;
  imageWidth?: any;
  imageHeight?: any;
  objectFit?: any;
  layout?: any;
}

type ProjectReviewsAdapterProps = {
  content: Content[];
};

const ProjectReviewsAdapter = ({ blok: { content = [] } }: ReactStoryblokComponent<ProjectReviewsAdapterProps>) => (
  <ProjectReviews>
    {content.map(
      ({
        _uid,
        heading,
        posterImage,
        posterImageMobile,
        videoAsset,
        text,
        imagePosition,
        subHeading,
        imageWidth,
        imageHeight,
        objectFit,
        layout,
      }) => (
        <ProjectReviewsItem
          key={_uid}
          heading={heading}
          posterImage={storyblokImageUrlParser(posterImage)}
          posterImageMobile={storyblokImageUrlParser(posterImageMobile)}
          text={renderRichText(text)}
          videoAsset={storyblokImageUrlParser(videoAsset)}
          imagePosition={imagePosition}
          subHeading={subHeading}
          imageWidth={storyblokTableParser(imageWidth)}
          imageHeight={storyblokTableParser(imageHeight)}
          objectFit={storyblokTableParser(objectFit)}
          layout={storyblokTableParser(layout)}
        />
      )
    )}
  </ProjectReviews>
);

export default ProjectReviewsAdapter;
