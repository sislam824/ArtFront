import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Aos from "aos";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="mb-16">
        <Navbar />
      </div>
      {/* 
      <Footer /> */}
      {/* <SingleProduct /> */}
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
