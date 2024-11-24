import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import { CategoryData } from "../types/type";

type Props = {
  category: CategoryData;
};

const LINK_WHATSAPP = `https://api.whatsapp.com/send/?phone=573215733208&
      text=Hola%2C+quiero+apartar+una+cita+con+Estética+Adri.
      &type=phone_number&app_absent=0`;

const CardCategory: React.FC<Props> = ({ category }) => {
  return (
    <Card
      mt={10}
      mb={10}
      key={category.id}
      variant={"filled"}
      width={{ base: "20rem", md: "30rem" }}
    >
      <CardHeader fontWeight={"bold"} fontSize={"1.5em"}>
        {category.name}
      </CardHeader>
      <CardBody>
        <Image
          src={category.image}
          height={350}
          width={"100%"}
          borderRadius={10}
        />
        <Box p={5}>
          <Text>{category.description}</Text>
        </Box>
      </CardBody>
      <CardFooter
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Box>
          <Button
            as="a"
            href={LINK_WHATSAPP}
            target="_blank"
            colorScheme="blue"
          >
            Reservar Cita
          </Button>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default CardCategory;
