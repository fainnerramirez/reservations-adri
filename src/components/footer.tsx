import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box p={5}>
      <Text textAlign={"center"}>
        © 2024 Estética y estilo Adri. Todos los derechos reservados.
        <br />
        <a href="#">Condiciones de uso</a> y{" "}
        <a href="#">Política de privacidad</a> &nbsp; | &nbsp;
        <a href="#">Contacto</a> &nbsp; | &nbsp;
        <a href="#">Ayuda</a> &nbsp; | &nbsp;
        <a href="#">Soporte técnico</a> &nbsp; | &nbsp;
        <a href="#">Acerca de nosotros</a> &nbsp; | &nbsp;
      </Text>
    </Box>
  );
};

export default Footer;
