import { FeatureStepper } from "@components/FeatureStepper";
import { renderRichText, storyblokImageUrlParser } from "@sb-utils";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import type { Richtext, StoryblokComponent } from "storyblok-js-client";
import FeatureStepperSlider from "@components/FeatureStepperSlider";
import storyblokTableParser from "storyblok/utils/storyblokTableParser";

interface Images extends StoryblokComponent<string> {
  image: StoryblokAsset;
  imageMobile: StoryblokAsset;
  video?: StoryblokAsset;
  tagText: string;
  link: string;
  tagIcon: "times" | "check";
  objectPosition?: any;
  containerHeight?: any;
  imgHeight?: any;
  imgWidth?: any;
}

interface Content extends StoryblokComponent<string> {
  heading: string;
  subHeading: Richtext;
  step: "1" | "2" | "3" | "4";
  images: Images[];
}

type FeatureStepperAdapterProps = {
  content: Content[];
  viewType: "basic" | "slider";
};

const serializeImages = (images: Content["images"]) =>
  images.map(
    ({
      image,
      imageMobile,
      tagText,
      link,
      tagIcon,
      _uid,
      objectPosition,
      containerHeight,
      imgHeight,
      imgWidth,
      video,
    }) => ({
      id: _uid,
      link,
      tagIcon,
      tagText,
      imageDesktop: { ...storyblokImageUrlParser(image) },
      imageMobile: { ...storyblokImageUrlParser(imageMobile) },
      objectPosition,
      containerHeight,
      imgWidth: { ...storyblokTableParser(imgWidth) },
      imgHeight: { ...storyblokTableParser(imgHeight) },
      video: storyblokImageUrlParser(video),
    })
  );

const serializeContent = (content: FeatureStepperAdapterProps["content"]) =>
  content.map(({ _uid, heading, images, step, subHeading }) => ({
    id: _uid,
    heading,
    step,
    subHeading: renderRichText(subHeading),
    images: serializeImages(images),
  }));

const FeatureStepperAdapter = ({
  blok: { content: sbContent = [], viewType = "basic" },
}: ReactStoryblokComponent<FeatureStepperAdapterProps>) => {
  const content = serializeContent(sbContent);

  return {
    basic: <FeatureStepper viewType={viewType} content={content} />,
    slider: <FeatureStepperSlider content={content} viewType={viewType} />,
  }[viewType];
};

export default FeatureStepperAdapter;
