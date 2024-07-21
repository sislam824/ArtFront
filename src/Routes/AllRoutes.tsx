import Cart from "@/Pages/Cart";
import Home from "@/Pages/Home";
import { Route, Routes } from "react-router-dom";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
