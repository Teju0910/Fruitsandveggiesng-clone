// import React, { useState, useEffect, useContext } from "react";
// import {
//   Tabs,
//   TabList,
//   Tab,
//   Icon,
//   Select,
//   Drawer,
//   Button,
//   MenuList,
//   Menu,
//   MenuButton,
//   Avatar,
//   MenuItem,
//   DrawerContent,
//   Text,
//   useDisclosure,
//   DrawerOverlay,
//   ButtonGroup,
// } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { VscAccount, VscSearch } from "react-icons/vsc";
// import { BsEmojiHeartEyes } from "react-icons/bs";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import "./stylenav.css";
// import { Link } from "react-router-dom";
// import Signin from "../Signin/Signin";
// import Signup from "../Signup/Signup";
// import { BsPerson } from "react-icons/bs";
// import { useSearchParams } from "react-router-dom";
// import { fetchFruits } from "../../../Redux/Fruits/action";
// import { getdataSuccess } from "../../../Redux/Filter/action";
// import { fetchCart } from "../../../Redux/Cart/action";
// // import { getwishlistdata } from "../../../Redux/Wishlist/action";
// // import { fetchCart } from "../../../Redux/Cart/action";

// const Nav = styled.div`
//   top: 0;
//   display: flex;
//   width: 100%;
//   z-index: 20;
//   position: fixed;
//   padding-top: 30px;
//   background-color: white;
// `;

// function Navbar() {
//   const [wish, setwish] = useState(0);
//   const [value, setValue] = useState("one");
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [filter, setfilter] = useState("");
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [hide, sethide] = useState(true);
//   const btnRef = React.useRef();
//   const cancelRef = React.useRef();
//   const dispatch = useDispatch();
//   // let token = "qwe";
//   // let reduxtoken = "qswe";
//   let token = "";
//   let reduxtoken = "";
//   const cart = useSelector((state) => state.Cart.cart);
//   const products = useSelector((state) => state.Fruits.fruits);

//   useEffect(() => {
//     dispatch(fetchFruits({ filter }));
//     dispatch(fetchCart());
//     dispatch(getdataSuccess({ filter }));
//   }, [dispatch, filter]);

//   const handelwishlist = () => {
//     products
//       .map((p) => {
//         p.isfavoutite == true && wish++;
//       })
//       .then(setwish(wish));
//   };
//   const navigation = [
//     { title: "Home", to: "/" },
//     { title: "About F & V", to: "/about" },
//     { title: "Services", to: "/services" },
//     { title: "Products" },
//     { title: "News & Gallery", to: "/newsandgallery" },
//     { title: `Contact Us`, to: "/contact" },
//   ];

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handelhideshow = () => {
//     sethide(!hide);
//   };

//   return (
//     <Nav>
//       <Tabs ml={8}>
//         <img
//           style={{ marginRight: "100px" }}
//           src=" https://fruitsandveggiesng.com/wp-content/uploads/2021/09/fv_logo-96x61-1.png"
//         />
//       </Tabs>
//       <Tabs
//         colorScheme="purple"
//         variant="enclosed"
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         p={2}
//         aria-label="secondary tabs example"
//       >
//         <TabList>
//           {navigation.map((e) =>
//             e.title === "Products" ? (
//               <Tab key={e.title}>
//                 <Menu colorScheme={"purple"}>
//                   <Link to="/products">
//                     <MenuButton
//                       alignItems={"center"}
//                       // as={Button}
//                       rounded={"full"}
//                       variant={"link"}
//                       cursor={"pointer"}
//                       minW={0}
//                     >
//                       Products
//                     </MenuButton>
//                   </Link>
//                   <MenuList alignItems="start">
//                     <MenuItem onClick={() => setfilter("")}>All</MenuItem>
//                     <MenuItem onClick={() => setfilter("Fruits")}>
//                       Fresh Fruits
//                     </MenuItem>
//                     <MenuItem onClick={() => setfilter("Vegetables")}>
//                       Vegetables
//                     </MenuItem>
//                     <MenuItem onClick={() => setfilter("HerbsandSpices")}>
//                       Herbs and Spices
//                     </MenuItem>
//                   </MenuList>
//                 </Menu>
//               </Tab>
//             ) : (
//               <Tab p={5} key={e.title}>
//                 <Link to={e.to}> {e.title}</Link>
//               </Tab>
//             )
//           )}

//           <Tab>
//             <Icon as={VscSearch} />
//           </Tab>
//           <Tab>
//             <Link to="/cart">
//               <div className="header-cart">
//                 <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" />
//                 <span>{cart.length}</span>
//               </div>
//             </Link>
//           </Tab>
//           <Tab>
//             <Link to="/wishlist">
//               <div className="header-cart">
//                 <img src="https://img.icons8.com/color/48/000000/hearts.png" />
//                 {/* <span>{wish}</span> */}
//               </div>
//             </Link>
//           </Tab>
//           <Tab>
//             {/* <Icon as={VscAccount} onClick={onOpen} /> */}
//             {token === undefined || token === "" || reduxtoken === "" ? (
//               // <Drawer
//               //   size="lg"
//               //   isOpen={isOpen}
//               //   placement="right"
//               //   onClose={onClose}
//               //   finalFocusRef={btnRef}
//               // >
//               //   <DrawerOverlay />
//               //   <DrawerContent>
//               <ButtonGroup gap="2">
//                 <Button
//                   leftIcon={<BsPerson />}
//                   colorScheme="telegram"
//                   mr={6}
//                   onClick={onOpen}
//                 >
//                   Sign In
//                 </Button>
//                 {hide ? (
//                   <Signin
//                     onOpen={onOpen}
//                     onClose={onClose}
//                     isOpen={isOpen}
//                     cancelRef={cancelRef}
//                     handelhideshow={handelhideshow}
//                   />
//                 ) : (
//                   <Signup
//                     onOpen={onOpen}
//                     onClose={onClose}
//                     isOpen={isOpen}
//                     cancelRef={cancelRef}
//                     handelhideshow={handelhideshow}
//                   />
//                 )}
//               </ButtonGroup>
//             ) : (
//               //   </DrawerContent>
//               // </Drawer>
//               <Menu colorScheme={"purple"}>
//                 <MenuButton
//                   alignItems={"center"}
//                   // as={Button}
//                   rounded={"full"}
//                   variant={"link"}
//                   cursor={"pointer"}
//                   minW={0}
//                 >
//                   <Avatar
//                     size={"sm"}
//                     src={"https://bit.ly/broken-link"}
//                     mr={5}
//                   />
//                 </MenuButton>
//                 <MenuList alignItems="end">
//                   <MenuItem>Logout</MenuItem>
//                   <MenuItem>
//                     <Link to="/userprofile">User Profile</Link>
//                   </MenuItem>
//                 </MenuList>
//               </Menu>
//             )}
//           </Tab>
//         </TabList>
//       </Tabs>
//     </Nav>
//   );
// }

// export default Navbar;

