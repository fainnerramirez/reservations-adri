import { useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import HeadingApp from "./components/heading";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Box display={"flex"} justifyContent={"center"}>
        <HeadingApp />
      </Box>
    </Layout>
  );
}

export default App;
