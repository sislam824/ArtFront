import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Aos from "aos";

import SingleProduct from "./Pages/SingleProduct/SingleProduct";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Navbar />
      {/* 
      <Footer /> */}
      <SingleProduct />
      <Footer />
    </>
  );
}

export default App;
