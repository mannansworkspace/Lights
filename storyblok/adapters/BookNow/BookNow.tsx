import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import BookNow from "@components/BookNow";
import { storyblokImageUrlParser } from "storyblok/utils";

type BookNowProps = {
  image: StoryblokAsset[];
  imageTablet: StoryblokAsset[];
  text: string;
  subText: string;
};

const BookNowAdapter = ({ blok }: ReactStoryblokComponent<BookNowProps>) => {
  const { image, imageTablet, text, subText } = blok;

  return (
    <BookNow
      image={image.map((img => storyblokImageUrlParser(img)))}
      imageTablet={imageTablet.map((img => storyblokImageUrlParser(img)))}
      text={text}
      subText={subText}
    />
  );
};

export default BookNowAdapter;
