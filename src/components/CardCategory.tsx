import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Image,
  Box,
  Button,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { CategoryData } from "../types/type";

type Props = {
  category: CategoryData;
};

const CardCategory: React.FC<Props> = ({ category }) => {
  return (
    <Card mt={10} mb={10}>
      <CardHeader>{category.name}</CardHeader>
      <CardBody>
        <Image src={category.image} height={250} width={300} />
        <Text>{category.description}</Text>
      </CardBody>
      <CardFooter
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Box>
          <Button colorScheme="blue">Reservar Cita</Button>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default CardCategory;
