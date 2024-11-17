import { Box, Heading, Text } from "@chakra-ui/react";
import Categories from "./category";

const HeadingApp = () => {
  return (
    <Box textAlign={"center"} p={10}>
      <Box>
        <Heading>Estética y Estilo Adri</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          nihil.
        </Text>
      </Box>
      <Box mt={10}>
        <Heading as="h2">Categorías</Heading>
        <Box>
          <Categories />
        </Box>
      </Box>
    </Box>
  );
};

export default HeadingApp;
