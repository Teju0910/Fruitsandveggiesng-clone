import Home from "./component/Home/Home";
import Navbar from "./component/Home/Navbar/Navbar"
import Product from "./component/Products/Products"
import { Route, Routes } from "react-router-dom"
import SingleProduct from "./component/Products/SingleFruit/SingleProduct";
import Footer from "./component/Footer/Footer";
import WishList from "./component/WishList/WishList";
import CartData from "./component/Cart/CartData";
import Services from "./component/Home/Services/Services"
import UserProfile from "./component/UserProfile/UserProfile";
import News from "./component/News/News";

import { useDispatch, useSelector } from "react-redux";

function App() {
    const filt = useSelector((state) => state.Filter.filter);

    const top = {
        marginTop: 130
    }
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/userprofile" element={<UserProfile />}></Route>
                <Route path="/products" element={<Product />}></Route>
                <Route path="/products/:categories/:id" element={<SingleProduct />}></Route>
                <Route path="/wishlist" element={<WishList />}></Route>
                <Route path="/cart" element={<CartData />}></Route>
                <Route path="/newsandgallery" element={<News />}></Route>
                <Route path="/contact" element={<div style={top}><Footer /></div>}></Route>
                <Route path="/services" element={
                    <div style={top}><Services /></div>}></Route>
            </Routes>
            <img src="https://fruitsandveggiesng.com/wp-content/uploads/2021/09/fruit-borders-png-free-image_60206891afe67.png" />
            <Footer />
        </div>
    )
}

export default App;