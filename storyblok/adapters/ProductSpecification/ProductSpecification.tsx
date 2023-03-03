import ProductSpecification from "@components/ProductSpecification";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import { storyblokImageUrlParser } from "@sb-utils";

type ProductSpecificationAdapterProps = {
  image: StoryblokAsset | undefined;
  productName: string;
  productSubName: string;
  trackType: string;
  singleMount: string;
  colorRendering: string;
  colorTemp: string;
  beamAngle: string;
  powerUsage: string;
  lumens: string;
  color: "only-white-black-special-order" | "black-and-white";
  dimming: string;
  filters: string;
};

const ProductSpecificationAdapter = ({
  blok: {
    beamAngle,
    color,
    colorRendering,
    colorTemp,
    dimming,
    image,
    lumens,
    powerUsage,
    productName,
    productSubName,
    singleMount,
    trackType,
    filters,
  },
}: ReactStoryblokComponent<ProductSpecificationAdapterProps>) => (
  <ProductSpecification
    beamAngle={beamAngle}
    color={color}
    colorRendering={colorRendering}
    colorTemp={colorTemp}
    dimming={dimming}
    image={storyblokImageUrlParser(image)}
    lumens={lumens}
    powerUsage={powerUsage}
    productName={productName}
    productSubName={productSubName}
    singleMount={singleMount}
    trackType={trackType}
    filters={filters}
  />
);

export default ProductSpecificationAdapter;
