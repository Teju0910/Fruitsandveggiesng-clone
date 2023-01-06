import Banners from "./Banners/Banners";
import { Flex, Spacer } from "@chakra-ui/react";
import Services from "./Services/Services";
import Labo from "./Labo/Labo";

function Home() {
  return (
    <div>
      <Banners />
      <Services />
      <Labo />
    </div>
  );
}

export default Home;
