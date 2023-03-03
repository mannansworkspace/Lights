import { Box, ChakraProps } from "@chakra-ui/react";

type TextContentProps = {
  textContent: string;
  textAlign: ChakraProps["textAlign"];
};

const TextContent = ({ textContent, textAlign }: TextContentProps) => <Box textAlign={textAlign}>{textContent}</Box>;

export default TextContent;
