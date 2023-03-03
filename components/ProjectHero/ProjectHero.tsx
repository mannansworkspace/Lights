import { Box, Container, Flex, Heading } from "@chakra-ui/react";

type ProjectHeroProps = {
  heading: string;
  text: string;
  subText: string;
  buttonText: string;
  buttonLink: string;
  // TODO | Add proper type after merge 'fix-globals-edit' branch
};

const ProjectHero = ({ heading, text }: ProjectHeroProps) => (
  <Box backgroundColor="brand.gray">
    <Container minW='unset' maxW='unset'>
      <Flex pt={{ base: "72px", md: "40px", lg: "98px", lg1: "164px", xl: "173px" }} pb={{ xl: "139px", lg1: "100px", lg: "96px", md: "40px", base: "32px" }} flexDir={{ base: "column", md: "row" }}>
        <Heading
          minW={{ base: "full", md: "45%", lg: "50%" }}
          fontSize={{ base: "55px", sm: '50px', md: "45px", lg: "80px", lg1: "94px", xl: "126px" }}
          lineHeight={{ base: "67.15px", sm: '60px', md: "54.94px", lg: "96px", lg1: '112px', xl: "159.39px" }}
          fontWeight={500}
          mb={{ base: 10, md: 0 }}
        >
          {heading}
        </Heading>
        <Flex flexDir="column" pl={{ md: 5 }}>
          <Box
            sx={{
              p: {
                fontSize: { base: '16px', lg: "24px", lg1: '26px', xl: "32px" },
                fontWeight: 500,
                lineHeight: { base: "23px", lg: "32px", lg1: '36px', xl: "44.8px" },
              },
            }}
            mb={{ base: 5, md: 4, lg: 5, xl: 8 }}
          >
            {text}
          </Box>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

export default ProjectHero;
