import { Box, Heading } from "@chakra-ui/react";
import { Category } from "../data/dataCategory";
import CardCategory from "./CardCategory";

const Categories = () => {
  return (
    <Box>
      {Category.map((cat) => {
        return <CardCategory category={cat} />;
      })}
    </Box>
  );
};

export default Categories;
