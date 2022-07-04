import Banners from "./Banners/Banners";
import { Flex, Spacer } from "@chakra-ui/react";
import Services from "./Services/Services";

function Home() {
  return (
    <div>
      <Banners />
      <Services />
      <Spacer />
    </div>
  );
}

export default Home;
