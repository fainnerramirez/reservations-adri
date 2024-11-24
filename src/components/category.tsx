import { Box, Heading, HStack } from "@chakra-ui/react";
import { Category } from "../data/dataCategory";
import CardCategory from "./CardCategory";

const Categories = () => {
  return (
    <HStack spacing={5} justifyContent={"center"} flexWrap={"wrap"}>
      {Category.map((cat) => {
        return <CardCategory category={cat} />;
      })}
    </HStack>
  );
};

export default Categories;
