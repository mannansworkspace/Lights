import { ReviewCards, ReviewCard } from "@components/ReviewCards";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import { renderRichText, storyblokImageUrlParser } from "@sb-utils";
import type { StoryblokComponent, Richtext } from "storyblok-js-client";
import { SwiperSlide } from "swiper/react";

interface ReviewAdapterProps extends StoryblokComponent<string> {
  avatar: StoryblokAsset | undefined;
  name: string;
  profession: string;
  desctiption: string;
  comment: Richtext;
}

type ReviewCardsAdapterProps = { content: ReviewAdapterProps[] };

const ReviewCardsAdapter = ({ blok: { content } }: ReactStoryblokComponent<ReviewCardsAdapterProps>) => (
  <ReviewCards>
    {content.map(({ _uid, avatar, name, profession, desctiption, comment }) => (
      <SwiperSlide key={_uid}>
        <ReviewCard
          avatar={storyblokImageUrlParser(avatar)}
          name={name}
          profession={profession}
          desctiption={desctiption}
          comment={renderRichText(comment)}
        />
      </SwiperSlide>
    ))}
  </ReviewCards>
);

export default ReviewCardsAdapter;
