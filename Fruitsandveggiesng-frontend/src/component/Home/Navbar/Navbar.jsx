import React, { useState, useEffect, useContext } from "react";
import {
  Tabs,
  TabList,
  Tab,
  Icon,
  Select,
  Drawer,
  Button,
  MenuList,
  Menu,
  MenuButton,
  Avatar,
  MenuItem,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerOverlay,
  ButtonGroup,
} from "@chakra-ui/react";
import { VscAccount, VscSearch } from "react-icons/vsc";
import { BsEmojiHeartEyes } from "react-icons/bs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./stylenav.css";
import { Link } from "react-router-dom";
import { getcartdata, getwishlistdata } from "../Data/fetchdata";
import { CartContext } from "../../../context/CartContext";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import { BsPerson } from "react-icons/bs";

const Nav = styled.div`
  top: 0;
  display: flex;
  width: 100%;
  z-index: 20;
  position: fixed;
  padding-top: 30px;
  background-color: white;
`;

function Navbar() {
  const [value, setValue] = useState("one");
  const [favcount, setfavcount] = useState(0);
  const [favourite, setfavourite] = useState([]);
  // const { cart, cartcount, total } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hide, sethide] = useState(true);
  const btnRef = React.useRef();
  const cancelRef = React.useRef();
  let token = "qwe";
  let reduxtoken = "qswe";
  // let token = "";
  // let reduxtoken = "";
  useEffect(() => {
    getwishlistdata(setfavourite, setfavcount);
  }, [setfavcount]);

  const navigation = [
    { title: "Home", to: "/" },
    { title: "About F & V", to: "/about" },
    { title: "Services", to: "/services" },
    { title: "Products" },
    { title: "News & Gallery", to: "/newsandgallery" },
    { title: `Contact Us`, to: "/contact" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  const handelchange = (e) => {
    console.log(e.target.value);
    navigate(e.target.value);
  };
  // console.log(hide);

  const handelhideshow = () => {
    sethide(!hide);
  };

  return (
    <Nav>
      <Tabs ml={8}>
        <img
          style={{ marginRight: "100px" }}
          src=" https://fruitsandveggiesng.com/wp-content/uploads/2021/09/fv_logo-96x61-1.png"
        />
      </Tabs>
      <Tabs
        // _selected = {
        //   borderColor= "red"
        // }
        colorScheme="purple"
        variant="enclosed"
        // borderColor= "red.400"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        p={2}
        aria-label="secondary tabs example"
      >
        <TabList>
          {navigation.map((e) =>
            e.title === "Products" ? (
              <Select
                placeholder={e.title}
                w={150}
                border="none"
                mt={3}
                onChange={handelchange}
              >
                <option p={5} value="/fruits">
                  Fresh Fruits
                </option>
                <option p={2} value="/vegetables">
                  Vegetables
                </option>
                <option p={2} value="/HerbsandSpices">
                  Herbs and Spices
                </option>
              </Select>
            ) : (
              <Tab p={5}>
                <Link to={e.to}> {e.title}</Link>
              </Tab>
            )
          )}

          <Tab>
            <Icon as={VscSearch} />
          </Tab>
          {/* <Tab>
            <Link to="/cart">
              <div className="header-cart">
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" />
                <span>{cartcount}</span>
              </div>
            </Link>
          </Tab> */}
          <Tab>
            <Link to="/wishlist">
              <div className="header-cart">
                <img src="https://img.icons8.com/color/48/000000/hearts.png" />
                <span>{favcount}</span>
              </div>
            </Link>
          </Tab>
          <Tab>
            {/* <Icon as={VscAccount} onClick={onOpen} /> */}
            {token == undefined || token == "" || reduxtoken == "" ? (
              <Drawer
                size="lg"
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <ButtonGroup gap="2">
                    <Button
                      leftIcon={<BsPerson />}
                      colorScheme="telegram"
                      mr={6}
                      onClick={onOpen}
                    >
                      Sign In
                    </Button>
                    {!hide ? (
                      <Signin
                        onOpen={onOpen}
                        onClose={onClose}
                        isOpen={isOpen}
                        cancelRef={cancelRef}
                        handelhideshow={handelhideshow}
                      />
                    ) : (
                      <Signup
                        onOpen={onOpen}
                        onClose={onClose}
                        isOpen={isOpen}
                        cancelRef={cancelRef}
                        handelhideshow={handelhideshow}
                      />
                    )}
                  </ButtonGroup>
                </DrawerContent>
              </Drawer>
            ) : (
              <Menu colorScheme={"purple"}>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://bit.ly/broken-link"}
                    mr={5}
                  />
                </MenuButton>
                <MenuList alignItems="end">
                  <MenuItem>Logout</MenuItem>
                  <MenuItem>
                    <Link to="/userprofile">User Profile</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Tab>
        </TabList>
      </Tabs>
    </Nav>
  );
}

export default Navbar;
