import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";

const news = [
  {
    mini: "Training",
    img: "https://fruitsandveggiesng.com/wp-content/uploads/2021/09/LAMP-ASSAY-Training-2.jpg",
    title: "Quality Potato Seeds For Farmers",
    des: "Fruits and Veggies is committed to helping farmers access quality potato seeds that are free from Bacterial Wilt caused by Ralstonia Solanacerum",
  },
  {
    mini: "Awards",
    img: "https://fruitsandveggiesng.com/wp-content/uploads/2021/09/WUWM-fv-certificate-570x359.jpg",
    title: "World Union Of Wholesale Markets (WUWM)",
    des: "This year, Fruits and Veggies Global Limited, became the first organization in Nigeria and second in Africa, to become a member of the World Union of Wholesale Markets",
  },
  {
    mini: "Training",
    img: "https://fruitsandveggiesng.com/wp-content/uploads/2021/09/LAMP-ASSAY-Training.jpg",
    title: "F&V Attends LAMP ASSAY Training",
    des: "Fruits and Veggies staff attended a LAMP ASSAY training in September of 2021, which covers the detection of Bacteria Wilt of Potatoes This was organized by it’s partners CIP (International Potato Center) and GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH.",
  },
];

export default function News() {
  return (
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px" p={10}>
      {news?.map((all) => (
        <Box>
          <Container maxW={"7xl"}>
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={all.img}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                mb={5}
                h={{ base: "80%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Text color="#35AF6A" fontFamily={"Pacifico ,cursive"} mb={-6}>
                {all.mini}
              </Text>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.6}
                  fontWeight={600}
                  fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
                  _hover={{
                    textDecoration: "underline",
                    color: " #35AF6A",
                  }}
                >
                  {all.title}
                </Heading>
                <Text color="gray.900" fontWeight={200} fontSize={"sm"}>
                  {all.des}
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: " #35AF6A",
                  }}
                  color="#ff0000"
                >
                  READ MORE
                </Text>
              </Box>
            </Stack>
          </Container>
        </Box>
      ))}
      {/* <Box></Box> */}
    </SimpleGrid>
  );
}
