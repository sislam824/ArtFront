import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
const CartMenu = ({ setIsMenuOpen }: any) => {
  const close = () => {
    setIsMenuOpen(false);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingBag className="mr-2" />
      </SheetTrigger>
      <SheetContent data-aos="zoom-in" className="cart-section ">
        <div className="mt-10 shadow-md grid grid-cols-1 lg:grid-col-2 lg:justify-between  gap-4 md:grid-cols-2  items-center p-2 border border-gray-300">
          <div className="content flex flex-col lg:flex-row gap:5 items-center justify-between gap-4">
            <div className="pro-img">
              <img
                src={
                  "https://imgs.search.brave.com/8ujL-WfHptyeDbUxjO1jdFlWJQ8aowQNNAlsI7nHsZ0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdDEu/cGhvdG9nYWxsZXJ5/LmluZC5zaC93cC1j/b250ZW50L3VwbG9h/ZHMvaW5kaWFjb20v/bmVoYS1zaGFybWFz/LWhvdG5lc3MtZG9l/c250LWdvLXVubm90/aWNlZC1pbi1uZXct/cGhvdG9zaG9vdC1z/ZWUtdmlyYWwtcGlj/cy1uZWhhLTIwMjIx/MC0xNjY2MDkyODYy/LmpwZz9pbXBvbGlj/eT1NZWRpdW1fV2lk/dGhvbmx5Jnc9NzAw"
                }
                className="w-24"
                alt="oso"
              />
            </div>
            <div className="naming">
              <h4 className="truncate w-48 text-base">AbCdrfhjj</h4>
              <p>Appia Life 2 Group</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="actual-p">
                <strong className="">₹ 999</strong>
              </div>
              <div className="inp">
                <input
                  type="number"
                  value={""}
                  className="w-16 p-2 text-center border border-gray-300"
                />
              </div>
            </div>
          </div>
          <div className="delete flex justify-center text-center lg:text-right px-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer "
            >
              <path
                d="M13.5625 2.1875C13.5625 2.28776 13.542 2.36751 13.501 2.42676C13.4645 2.486 13.4144 2.53158 13.3506 2.56348C13.2868 2.59082 13.2161 2.60905 13.1387 2.61816C13.0612 2.62728 12.9814 2.63184 12.8994 2.63184C12.8538 2.63184 12.8083 2.63184 12.7627 2.63184C12.7171 2.62728 12.6761 2.625 12.6396 2.625L11.5049 12.4482C11.4775 12.667 11.4137 12.8721 11.3135 13.0635C11.2132 13.2503 11.0856 13.4144 10.9307 13.5557C10.7757 13.6924 10.598 13.8018 10.3975 13.8838C10.1969 13.9613 9.9873 14 9.76855 14H4.23145C4.0127 14 3.80306 13.9613 3.60254 13.8838C3.40202 13.8018 3.22428 13.6924 3.06934 13.5557C2.91439 13.4144 2.78678 13.2503 2.68652 13.0635C2.58626 12.8721 2.52246 12.667 2.49512 12.4482L1.36035 2.625C1.31478 2.625 1.26921 2.62728 1.22363 2.63184C1.17806 2.63184 1.13249 2.63184 1.08691 2.63184C1.00944 2.63184 0.931966 2.62728 0.854492 2.61816C0.777018 2.60905 0.70638 2.58854 0.642578 2.55664C0.583333 2.52474 0.533203 2.47917 0.492188 2.41992C0.455729 2.36068 0.4375 2.2832 0.4375 2.1875C0.4375 2.06901 0.480794 1.96647 0.567383 1.87988C0.653971 1.79329 0.75651 1.75 0.875 1.75H4.85352C4.89909 1.49935 4.98796 1.26693 5.12012 1.05273C5.25684 0.838542 5.4209 0.653971 5.6123 0.499023C5.80827 0.339518 6.02474 0.216471 6.26172 0.129883C6.4987 0.0432943 6.74479 0 7 0C7.25521 0 7.5013 0.0432943 7.73828 0.129883C7.97526 0.216471 8.18945 0.339518 8.38086 0.499023C8.57682 0.653971 8.74089 0.838542 8.87305 1.05273C9.00977 1.26693 9.10091 1.49935 9.14648 1.75H13.125C13.2435 1.75 13.346 1.79329 13.4326 1.87988C13.5192 1.96647 13.5625 2.06901 13.5625 2.1875ZM5.7627 1.75H8.2373C8.19173 1.61784 8.12793 1.49935 8.0459 1.39453C7.96387 1.28516 7.86816 1.19173 7.75879 1.11426C7.64941 1.03678 7.53092 0.977539 7.40332 0.936523C7.27572 0.895508 7.14128 0.875 7 0.875C6.85872 0.875 6.72428 0.895508 6.59668 0.936523C6.46908 0.977539 6.35059 1.03678 6.24121 1.11426C6.13184 1.19173 6.03613 1.28516 5.9541 1.39453C5.87207 1.49935 5.80827 1.61784 5.7627 1.75ZM11.7578 2.625H2.24219L3.36328 12.3525C3.39062 12.5804 3.48405 12.7673 3.64355 12.9131C3.80762 13.0544 4.00358 13.125 4.23145 13.125H9.76855C9.87793 13.125 9.98275 13.1068 10.083 13.0703C10.1833 13.0293 10.2721 12.9746 10.3496 12.9062C10.4271 12.8379 10.4909 12.7559 10.541 12.6602C10.5911 12.5645 10.623 12.4619 10.6367 12.3525L11.7578 2.625ZM5.25 10.0625V5.6875C5.25 5.56901 5.29329 5.46647 5.37988 5.37988C5.46647 5.29329 5.56901 5.25 5.6875 5.25C5.80599 5.25 5.90853 5.29329 5.99512 5.37988C6.08171 5.46647 6.125 5.56901 6.125 5.6875V10.0625C6.125 10.181 6.08171 10.2835 5.99512 10.3701C5.90853 10.4567 5.80599 10.5 5.6875 10.5C5.56901 10.5 5.46647 10.4567 5.37988 10.3701C5.29329 10.2835 5.25 10.181 5.25 10.0625ZM7.875 10.0625V5.6875C7.875 5.56901 7.91829 5.46647 8.00488 5.37988C8.09147 5.29329 8.19401 5.25 8.3125 5.25C8.43099 5.25 8.53353 5.29329 8.62012 5.37988C8.70671 5.46647 8.75 5.56901 8.75 5.6875V10.0625C8.75 10.181 8.70671 10.2835 8.62012 10.3701C8.53353 10.4567 8.43099 10.5 8.3125 10.5C8.19401 10.5 8.09147 10.4567 8.00488 10.3701C7.91829 10.2835 7.875 10.181 7.875 10.0625Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <SheetFooter className="mt-2 mb-4">
          <SheetClose asChild>
            <Link to={"/cart"}>
              <Button onClick={close} type="submit">
                Open Cart
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartMenu;
