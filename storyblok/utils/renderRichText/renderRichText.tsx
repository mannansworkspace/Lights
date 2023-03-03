import { Box, Divider, Link, Text, Heading, ChakraProps } from "@chakra-ui/react";
import { Richtext } from "storyblok-js-client";
import {
  render,
  MARK_LINK,
  MARK_STYLED,
  NODE_HEADING,
  NODE_HR,
  NODE_OL,
  NODE_PARAGRAPH,
  NODE_UL,
} from "storyblok-rich-text-react-renderer";
import { StoryblokComponent } from "@storyblok/react";
import NextLink from "next/link";
import type { StoryblokSimpleLink } from "@sb-types";

const customClassNames: Record<string, ChakraProps["sx"]> = {
  ".font-times-new-roman": {
    fontFamily: "Times New Roman",
  },
  ".big-roman-font": {
    fontSize: { base: "55px", md: "90px", lg: "126px", xl: "245px" },
    fontFamily: "Times New Roman",
    fontWeight: 400,
  },
  ".grey-left-text": {
    color: "brand.darker",
    fontSize: { base: "20px", lg: "45px", xl: "45px" },
  },
  ".grey-text": { color: "brand.darker" },
  ".red-text": { color: "#F77E21" },
  ".about-us-long-title": {
    fontWeight: "500",
    fontSize:{xl:'80px' , lg1:"60px" , lg:"45px" , sm:"32px" , base:"30px"}
  },
  ".about-us-description": {
    fontSize: { xl: "45px", lg1: "32px", lg: "24px", base: "16px" },
    color: "brand.darker",
  },
  ".gallery-guide-quoteCaption": {
    fontSize: { xl: "45px", lg1: "32px", lg: "24px", base: "16px" },
    color: "brand.darker",
  },
  ".gallery-guide-descriptionOne": {
    fontSize: { xl: "45px", lg1: "32px", md: "20px", sm: "18px", base: "16px" }
  },
  ".gallery-guide-question": {
    fontSize: { xl: "126px", lg1: "90px", lg: "80px", sm: "36px", base: "30px" }
  },
  ".art-gallery-guide-font-size": {
    fontSize: { xl: "32px", lg1: "26px", lg: "20px", sm: "18px", base: "16px" }
  },
  ".gallery-guide-quote": {
    fontSize: { xl: "80px", lg1: "60px", lg: "45px", md: '32px', base: "30px" }
  },
  ".gallery-guide-gray-text": {
    color: "brand.darker",
    fontSize: { xl: "32px", lg1: "26px", base: "16px" }
  },
  ".gallery-guide-choosing-art": {
    fontSize: { xl: "80px", lg1: "60px", lg: "45px", md: '36px', base: "30px" },
    lineHeight :{xl : "97px" , lg1 :"75px" , lg:"54px" , md:"46px" , base:"42px" }
  },
  ".gallery-guide-paragraph": {
    fontSize: { xl: "45px", lg1: "32px", lg: "20px", md: '18px', base: "16px" }
  },
  ".gallery-guide-paragraphType2": {
    fontSize: { xl: "32px", lg1: "26px", lg: "20px", md: '18px', base: "16px" }
  },
  ".gallery-guide-paragraphType3": {
    fontSize: { lg1: "32px", lg: "20px", md: '18px', base: "16px" }
  },
  ".gallery-guide-paragraph-heading": {
    fontSize: { xl: "80px", lg1: "60px", lg: '45px', md: "36px", base: "30px" },
    fontWeight: "500"
  },
  ".gallery-guide-paragraph-sub-heading": {
    fontSize: { xl: "45px", lg1: "32px", lg: '24px', md: "20px", base: "22px" },
    fontWeight: "500"
  },
  ".gallery-guide-gray-text-sub-heading": {
    color: "brand.darker",
    fontSize: { xl: "32px", lg1: "26px", lg: '20px', base: "16px" }
  },
  ".gallery-guide-list-items": {
    fontSize: { xl: "32px", lg1: "26px", lg: "20px", md: '18px', base: "16px" },
    pl:{xl:"64px", lg1:"43px", base:"20px"},
    pb:"10px",
    display: 'block'
  }, 
  ".gallery-guide-specification-text": {
    // height:{xl:"50px"}
  },
  ".delux-lighting-effect": {
    fontSize: { xl: "126px", lg1: "90px", lg: "80px", md: '36px', base: "30px" },
    lineHeight: { xl: "151px", lg1: "108px", lg: "97.68px", md: '48px', base: "42px" },
    fontWeight:'500'
  }

};

const setSize = (level = 1) => ({ 1: "4xl", 2: "3xl", 3: "xl", 4: "lg", 5: "md", 6: "sm" }[level]);

const renderRichText = (richText: Richtext) => {
  if (isEmpty(richText)) {
    return null;
  }

  return render(richText, {
    nodeResolvers: {
      [NODE_HEADING]: (children, props) => {
        const level = props.level as 1 | 2 | 3 | 4 | 5 | 6;
        return (
          <Heading as={`h${level}`} size={setSize(level)}>
            {children}
          </Heading>
        );
      },
      [NODE_PARAGRAPH]: (children) => (children == null ? <Box h={2} /> : <Text>{children}</Text>),
      [NODE_HR]: () => <Divider />,
      [NODE_UL]: (children) => (
        <Box
          as="ul"
          p={{ base: "40px", lg: "60px" }}
          bg="brand.gray"
          borderRadius="20px"
          lineHeight={{ base: "34px", lg: "34px", xl: "54.4px" }}
        >
          {children}
        </Box>
      ),
      [NODE_OL]: (children) => (
        <Box as="ol" pl={6}>
          {children}
        </Box>
      ),
    },
    markResolvers: {
      [MARK_LINK]: (children, options) => {
        const link = options as StoryblokSimpleLink;

        return (
          <NextLink href={link.url} passHref>
            <Link as="a" target={options.target}>
              {children}
            </Link>
          </NextLink>
        );
      },
      [MARK_STYLED]: (children, { class: className }) => (
        <Box sx={customClassNames} as="span">
          <Box as="span" className={className}>
            {children}
          </Box>
        </Box>
      ),
    },
    defaultBlokResolver: (name, props) => <StoryblokComponent blok={{ component: name, ...props } as any} />,
  });
};

const isEmpty = ({ content }: Richtext) => {
  if (!content) {
    return true;
  }
  if (content.length === 0) {
    return true;
  }
  if (content.length === 1 && !content[0].hasOwnProperty("content")) {
    return true;
  }
  return false;
};

export default renderRichText;
