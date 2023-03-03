import Footer from "@components/Footer";
import type { ReactStoryblokComponent } from "@sb-types";
import type { AvatarAdapterProps } from "../Avatar/Avatar";
import type { Richtext } from "storyblok-js-client";
import { renderRichText } from "storyblok/utils";


type FooterProps = {
  text: string;
  avatars: AvatarAdapterProps[];
  linksCol1: any[];
  linksCol2: any[];
  footerHeading: string;
  phoneNo: any;
  address: Richtext;
};

const FooterAdapter = ({ blok }: ReactStoryblokComponent<FooterProps>) => {
  const { text, avatars, footerHeading, phoneNo, address, linksCol1, linksCol2 } = blok;

  return (
    <Footer
      text={text}
      avatars={avatars}
      footerHeading={footerHeading}
      phoneNo={phoneNo}
      linksCol1={linksCol1}
      linksCol2={linksCol2}
      address={renderRichText(address)}
    />
  );
};

export default FooterAdapter;
