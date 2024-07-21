import { ChevronRight } from "lucide-react";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <div className="space-y-2 flex flex-col items-center py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 w-full">
        <div data-aos="fade-up" className=" p-10">
          <img
            src="https://imgs.search.brave.com/YY7BrnPLBvHnswhfn4G1Q285g4MuljBAIGnscKeZ9NE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbXViYXNz/aGlyZ3JhcGhpY3Mu/Y29tLm5nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzEwL0RD/VS1Xb25kZXItV29t/YW4tQ2luZW1hdGlj/LUxvZ28tVmFyaWFu/dC0yMDE2LnBuZz9y/ZXNpemU9NjAwLDQy/MyZzc2w9MQ"
            alt=""
            width={"150px"}
          />
        </div>
        <div data-aos="fade-up" className=" p-10 space-y-4">
          <h3>Newsletter</h3>
          <p>
            Stay up to date with the new collections, products and exclusive
            offe
          </p>
          <div className="border border-black flex items-center md:w-1/2 ">
            <Input
              placeholder="Your email"
              className=" rounded-none  border-none outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <span className="p-4 cursor-pointer">
              <ChevronRight strokeWidth={1.25} />
            </span>
          </div>
        </div>
      </div>
      <div>
        <span className="text-sm">© 2024, sam. sports.</span>
      </div>
    </div>
  );
};

export default Footer;
