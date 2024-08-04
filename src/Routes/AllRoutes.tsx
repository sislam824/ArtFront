import Login from "@/components/Login/Login";
import Signup from "@/components/Signup/Signup";
import Cart from "@/Pages/Cart";
import Checkout from "@/Pages/Checkout/Checkout";
import Home from "@/Pages/Home";
import Product from "@/Pages/Product/Product";
import SingleProduct from "@/Pages/SingleProduct/SingleProduct";
import { Route, Routes } from "react-router-dom";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
