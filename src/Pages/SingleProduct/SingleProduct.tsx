import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Shopify } from "@/components/Shopify";
import Testimonials from "@/components/Testimonials/Testimonials";
import SizeChartHoddies, {
  SizeChartShort,
} from "@/components/SizeChart/SizeChart";
import SizeChartShirt from "@/components/SizeChart/SizeChart";
import { ProductCard } from "@/components/ProductCard/ProductCard";

const SingleProduct = () => {
  const images = [
    "https://imgs.search.brave.com/zOBiwqqFzmBuvHMY-v59xRYGln3Z3OU5T_CheiRtXAQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdDEu/Ym9sbHl3b29kbGlm/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3Bob3Rvcy9uZWhh/LXNoYXJtYS1pbi1h/LXNleHktcG9zZS1m/b3ItYS1waG90b3No/b290LTIwMTYwNS03/MTM3MzguanBnP2lt/cG9saWN5PU1lZGl1/bV9XaWR0aG9ubHkm/dz0xMjgwJmg9OTAw",
    "https://imgs.search.brave.com/IjFIGKbBOL3Y97awVtsz8dCWHE5ALKBQ444HaJEHAWU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdDEu/Ym9sbHl3b29kbGlm/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3Bob3Rvcy9uZWhh/LXNoYXJtYS1ob3ct/Y2FuLXlvdS1tYW5h/Z2UtdG8tbG9vay1z/by1ob3QtLTIwMTYx/Mi04Njc2NTUuanBn/P2ltcG9saWN5PU1l/ZGl1bV9XaWR0aG9u/bHkmdz0xMjgwJmg9/OTAw",
    "https://imgs.search.brave.com/hURkr5BTlo_dYBSostHCwVGMTJXs07DPDO3iZzWw2Uw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16RTNNall4/WkRrdE9UaGtOaTAw/TkRjd0xUazFZak10/Wm1Vd01tWXhaVGRr/TldWaFhrRXlYa0Zx/Y0dkZVFYVnlNell4/T1RRM01EZ0AuanBn",
    "https://imgs.search.brave.com/5IIpbDfBLM6ZbEni6xNxPrTFIEhKRaeoFy77CYWM22M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpUZ3lNekk0/TkRBdE1qYzBPUzAw/TlRKbUxXSTROREV0/TVRVd1kyUm1OREJo/TURBNFhrRXlYa0Zx/Y0dkZVFYVnlNell4/T1RRM01EZ0AuanBn",
    "https://imgs.search.brave.com/9U-E7U5xEUkRGj_c9bJ8Wlgxc5ZHEtbFe8AeCuSP28Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qTm1ZMk5t/T1RFdE5qRXdPQzAw/TURNMkxUZzJOVFF0/TmprNFpUWmtNVEV4/WkRVeFhrRXlYa0Zx/Y0dkZVFYVnlNell4/T1RRM01EZ0AuanBn",
  ];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col justify-center gap-4 px-4 space-y-20">
      <div className="grid grid-cols-1 md:[grid-template-columns:50%_50%] gap-4 p-2 md:p-10 ">
        {/* Left Column: Images */}
        <div className="flex flex-col-reverse md:flex-row md:gap-4 md:h-screen">
          {/* Thumbnail Images */}
          <div className="flex  md:flex-col gap-2 mt-2 md:mt-0 md:w-1/4 overflow-y-auto ">
            {images.map(
              (image, index) =>
                image !== mainImage && (
                  <div
                    key={index}
                    className="cursor-pointer flex items-center justify-center overflow-hidden"
                    onClick={() => setMainImage(image)}
                  >
                    <img
                      className="object-cover h-full"
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                )
            )}
          </div>
          {/* Large Image */}
          <div className="flex-1">
            <img
              className="w-full h-full "
              src={mainImage}
              alt="Main product"
            />
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col gap-4  overflow-y-auto p-2 md:p-10 md:h-screen">
          <div data-aos="fade-up">
            <h1 className="text-2xl font-bold">Crucified Tee</h1>
          </div>
          <div data-aos="fade-up">
            <span>₹94567</span>
          </div>
          <div data-aos="fade-up" className="space-y-2">
            <label htmlFor="">Size</label>
            <div className="flex flex-wrap gap-2">
              <Button className="rounded-none w-16 h-12 bg-white border border-black text-black hover:text-white">
                S
              </Button>
              <Button className="rounded-none w-16 h-12 bg-white border border-black text-black hover:text-white">
                M
              </Button>
              <Button className="rounded-none w-16 h-12 bg-white border border-black text-black hover:text-white">
                L
              </Button>
              <Button className="rounded-none w-16 h-12 bg-white border border-black text-black hover:text-white">
                XL
              </Button>
              <Button className="rounded-none w-16 h-12 bg-white border border-black text-black hover:text-white">
                XXL
              </Button>
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-2">
            <label htmlFor="">Quantity</label>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="md:w-[120px] rounded-none outline-0 h-12 border-black">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div data-aos="fade-up" className="flex gap-2 flex-col md:flex-row">
            <Button className="min-w-[240px] rounded-none border-black py-8 px-8 ">
              Add to Cart
            </Button>
            <Button
              variant={"outline"}
              className="min-w-[240px] bg-white text-black rounded-none border-black py-8 px-8 "
            >
              Buy it now
            </Button>
          </div>

          <div data-aos="fade-up" className="text-center space-y-10 mt-10">
            <div>
              <h1 className="text-4xl font-semibold">Features</h1>
            </div>
            <div className="text-xl">
              {/* <ul className="flex flex-col items-center"> */}
              <li>OVERSIZED BOXY FIT</li>
              <li>100% HEAVYWEIGHT FRENCH TERRY COTTON</li>
              <li>SCREEN PRINT</li>
              <li>MADE IN INDIA</li>
              <li>250 GSM</li>
              {/* </ul> */}
            </div>
          </div>

          <div className="px-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Size Chart</AccordionTrigger>
                <AccordionContent>
                  <SizeChartShort />
                  <SizeChartHoddies />
                  <SizeChartShirt />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Care instructions</AccordionTrigger>
                <AccordionContent>
                  Use cold water to protect against fading & shrinking . Avoid
                  harsher detergents & turn them inside out for the wash.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Shipping</AccordionTrigger>
                <AccordionContent>
                  all orders are shipped within 3 days
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Shopify />
      </div>
    </div>
  );
};

export default SingleProduct;
