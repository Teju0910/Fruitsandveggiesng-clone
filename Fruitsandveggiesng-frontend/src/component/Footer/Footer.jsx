import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  VisuallyHidden,
  Image,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const images1 = [
  "https://fruitsandveggiesng.com/wp-content/uploads/2021/09/LAMP-ASSAY-Training.jpg",
  "https://fruitsandveggiesng.com/wp-content/uploads/2021/09/WUWM-fv-certificate.jpg",
  "https://fruitsandveggiesng.com/wp-content/uploads/2021/09/LAMP-ASSAY-Training-2.jpg",
];
const images2 = [
  "https://fruitsandveggiesng.com/wp-content/uploads/2020/05/s-packaging.jpeg",
  "https://fruitsandveggiesng.com/wp-content/uploads/2020/05/s-lab_small.jpeg",
  "https://fruitsandveggiesng.com/wp-content/uploads/2020/05/s-potato_small.jpeg",
];

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = () => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {"children"}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box pt={150} bg="black" color="white">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <img
                style={{ marginRight: "100px" }}
                src=" https://fruitsandveggiesng.com/wp-content/uploads/2021/09/fv_logo-96x61-1.png"
              />
            </Box>
            <Text fontSize={"sm"}>
              When it comes to fresh fruits, vegetables, spices and herbs, we
              are the preferred choice. At Fruits & Veggies, we carefully source
              our wide range of farm-fresh produce from our farms, from select
              growers and markets daily.
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading size="md">Contact F&V</Heading>
            <Heading size="sm">Address:</Heading>
            <Text size="sm">
              Plot PL 10800, Du Road, Zawan, P.O.Box 13729, Jos, Plateau State.
            </Text>
            <Heading size="sm">Call Us:</Heading>
            <Text size="sm">+234 703 400 0773, 0803 270 3143</Text>
            <Heading size="sm">Mail Us:</Heading>
            <Text size="sm">contact@fruitsandveggies.com</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading size="md">Focus Links</Heading>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Products</Link>
            <Link href={"#"}>News And Gallery</Link>
            {/* font-family: 'Lato', sans-serif; */}
          </Stack>
          <Stack align={"flex-start"}>
            <Heading>Photos</Heading>
            <Stack direction={"row"}>
              {images1.map((e) => (
                <Image src={e} boxSize="100px" />
              ))}
            </Stack>
            <Stack direction={"row"}>
              {images2.map((e) => (
                <Image src={e} boxSize="100px" />
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
