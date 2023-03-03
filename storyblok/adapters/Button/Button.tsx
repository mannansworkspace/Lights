import { Box, Button, Image } from "@chakra-ui/react";
import type { ReactStoryblokComponent, StoryblokAsset } from "@sb-types";
import { storyblokLinkUrlParser, storyblokImageUrlParser } from "@sb-utils";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { StoryblokSimpleLink } from "storyblok/utils/storyblokLinkUrlParser";
import Constants from "Constants"
import { useContext } from "react";
import { ModalsContext } from "contexts/ModalsContext";

export type ButtonProps = {
  text: string;
  link: StoryblokSimpleLink;
  variant: "white" | "black";
  size: "sm" | "md" | "lg";
  clickFunction: "download" | "catalogue" | "appointment",
  icon: StoryblokAsset
};

const ButtonAdapter = ({ blok: { text, link, variant, size, clickFunction, icon } }: ReactStoryblokComponent<ButtonProps>) => {
  const router = useRouter()
  const { setShowAppointmentModal, setShowCatalogueModal } = useContext(ModalsContext)
  const iconImage = storyblokImageUrlParser(icon)

  const downloadSpecificationsheet = () => {
    router.push({
      pathname: Constants.DOWNLOAD_FILE_API,
      query: {
        url: link.url
      }
    })
  }

  const functionMapper = {
    download: downloadSpecificationsheet,
    catalogue: setShowCatalogueModal,
    appointment: setShowAppointmentModal
  }

  const button = <Button variant={variant} size={size} as={`${clickFunction ? 'div' : 'a'}`}>
              {text}
              {iconImage && <Image
                src={iconImage?.src}
                alt={iconImage?.alt}
                w={{ lg: "24px", base: '20px' }}
                h={{ lg: "24px", base: '20px' }}
                ml={'16px'}
                mt={"5px"}
                mb={"3px"}
              />
              }
            </Button>

  if (clickFunction) {
    const onClick = functionMapper[clickFunction]

    return <Box w={"100%"} onClick={() => onClick(true)}  cursor="pointer">
      {button}
    </Box>
  }

  return (
    <Box w={"100%"}>
      <NextLink href={storyblokLinkUrlParser(link)} passHref>
        {button}
      </NextLink>
    </Box>
  );
};

export default ButtonAdapter;
