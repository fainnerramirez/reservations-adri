import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box height={"100vh"} width={"100vw"}>
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
