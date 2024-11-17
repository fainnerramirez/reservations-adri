import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Categories from "./category";
import { COLORS } from "../const/colors";

const HeadingApp = () => {
  return (
    <Box textAlign={"center"} p={10} bg={COLORS.PURPLE} color={COLORS.WHITE}>
      <Box>
        <Heading>Estética y Estilo Adri</Heading>
        <Text mt={10}>
          Ofrecemos servicios de belleza y cuidado personal para realzar tu
          imagen y bienestar. Con un enfoque profesional y personalizado,
          brindamos manicura, pedicura y más. Nuestro objetivo es que te sientas
          renovado y seguro de ti mismo. ¡Visítanos y déjanos resaltar tu mejor
          versión!
        </Text>
      </Box>
      <Box mt={10}>
        <Text>¿Quieres trabajar con nosotros?</Text>
        <br />
        <Button bg={COLORS.PINK} color={COLORS.WHITE}>
          Quiero trabajar con Adri
        </Button>
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
