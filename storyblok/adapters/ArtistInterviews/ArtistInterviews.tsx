import { ArtistInterview, ArtistInterviews } from "@components/ArtistInterviews";
import { renderRichText, storyblokImageUrlParser } from "@sb-utils";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import type { Richtext, StoryblokComponent } from "storyblok-js-client";

// TODO |  Need to be removed

interface ArtistInterviewsProps extends StoryblokComponent<string> {
  heading: string;
  subHeading: string;
  mediaLink: string;
  image: StoryblokAsset | undefined;
  imageMobile: StoryblokAsset | undefined;
}

type ArtistInterviewsAdapterProps = {
  heading: string;
  subHeading: Richtext;
  content: ArtistInterviewsProps[];
};

const ArtistInterviewsAdapter = ({
  blok: { heading, subHeading, content },
}: ReactStoryblokComponent<ArtistInterviewsAdapterProps>) => (
  <ArtistInterviews heading={heading} subHeading={renderRichText(subHeading)}>
    {content.map(({ _uid, heading, subHeading, mediaLink, image, imageMobile }) => (
      <ArtistInterview
        key={_uid}
        heading={heading}
        subHeading={subHeading}
        mediaLink={mediaLink}
        image={storyblokImageUrlParser(image)}
        imageMobile={storyblokImageUrlParser(imageMobile)}
      />
    ))}
  </ArtistInterviews>
);

export default ArtistInterviewsAdapter;
