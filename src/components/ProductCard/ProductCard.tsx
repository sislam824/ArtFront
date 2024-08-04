import { useState } from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ img1, img2 }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={"/singleproduct"}>
      <div className="flex flex-col items-center space-y-8 border w-max hover:cursor-pointer ">
        <div
          data-aos="zoom-out"
          className="flex items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="h-[400px] w-auto max-w-[300px]"
            src={isHovered ? `${img1}` : `${img2}`}
            alt="Product"
          />
        </div>
        <div>
          <h3>Crucified Shorts</h3>
          <p>Rs. 1,299.00</p>
        </div>
      </div>
    </Link>
  );
};
