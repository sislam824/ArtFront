import { useState } from "react";

export const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div
        data-aos="zoom-out"
        className="flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="h-[400px] w-auto"
          src={
            isHovered
              ? "https://imgs.search.brave.com/FoLgqafEJ2ZlHylyARJBWJjisNjNpkU68SWuYre6AIg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sYXRl/c3Rmb3J5b3V0aC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvTmVoYS1T/aGFybWEtSG90LVBo/b3Rvcy00LmpwZw"
              : "https://imgs.search.brave.com/PJLXcALjOzDT27S3wWypybub2TapQ5_VY_kYO3CexrI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by82NTc5/ODUzNC5jbXM_aW1n/c2l6ZT0xMDM4OTU3"
          }
          alt="Product"
        />
      </div>
      <div>
        <h3>Crucified Shorts</h3>
        <p>Rs. 1,299.00</p>
      </div>
    </div>
  );
};
