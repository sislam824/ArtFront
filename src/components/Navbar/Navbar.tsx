import { useState } from "react";
import { Heart, ShoppingBag, UserRound, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="relative">
      <div className="p-2 flex items-center justify-between">
        <Menu
          className="block md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />
        {/* <div className="flex items-center gap-2">
          <Search
            className="block md:hidden cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <div
            className={`fixed top-0 left-0 w-full p-2 bg-red-500 ${
              isSearchOpen ? "flex" : "hidden"
            } md:block md:relative md:w-auto`}
          >
            <Input className="w-full md:w-auto" />
            <Search
              className="ml-2 cursor-pointer md:hidden"
              onClick={handleSearchSubmit}
            />
          </div>
         
        </div> */}
        <div className="hidden md:flex p-2">
          <div className="flex items-center justify-center flex-grow space-x-4">
            <span>Home</span>
            <span>Hoodies</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        <Link to="/">
          <img
            src="https://imgs.search.brave.com/YY7BrnPLBvHnswhfn4G1Q285g4MuljBAIGnscKeZ9NE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbXViYXNz/aGlyZ3JhcGhpY3Mu/Y29tLm5nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzEwL0RD/VS1Xb25kZXItV29t/YW4tQ2luZW1hdGlj/LUxvZ28tVmFyaWFu/dC0yMDE2LnBuZz9y/ZXNpemU9NjAwLDQy/MyZzc2w9MQ"
            alt="Logo"
            className="w-[60px]"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <UserRound />
          </Link>
          <li>
            <Heart />
          </li>
          <Link to="/cart">
            <ShoppingBag />
          </Link>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div
            className={`relative w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-4">
              <div className="flex justify-between items-center">
                <img
                  src="https://imgs.search.brave.com/YY7BrnPLBvHnswhfn4G1Q285g4MuljBAIGnscKeZ9NE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbXViYXNz/aGlyZ3JhcGhpY3Mu/Y29tLm5nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzEwL0RD/VS1Xb25kZXItV29t/YW4tQ2luZW1hdGlj/LUxvZ28tVmFyaWFu/dC0yMDE2LnBuZz9y/ZXNpemU9NjAwLDQy/MyZzc2w9MQ"
                  alt="Logo"
                  className="w-[60px]"
                />
                <X
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <div className="mt-8 space-y-4">
                <Link to="/" onClick={handleMenuClick}>
                  <span className="block py-2 border-b">Home</span>
                </Link>
                <Link to="/" onClick={handleMenuClick}>
                  <span className="block py-2 border-b">Hoodies</span>
                </Link>
                <Link to="/" onClick={handleMenuClick}>
                  <span className="block py-2 border-b">About</span>
                </Link>
                <Link to="/" onClick={handleMenuClick}>
                  <span className="block py-2 border-b">Contact</span>
                </Link>
                <Link
                  to="/login"
                  className="block py-2 border-b"
                  onClick={handleMenuClick}
                >
                  <div className="flex items-center">
                    <UserRound className="mr-2" />
                    User
                  </div>
                </Link>
                <Link
                  to="/"
                  className="block py-2 border-b"
                  onClick={handleMenuClick}
                >
                  <div className="flex items-center">
                    <Heart className="mr-2" />
                    Favorites
                  </div>
                </Link>
                <Link
                  to="/cart"
                  className="block py-2 border-b"
                  onClick={handleMenuClick}
                >
                  <div className="flex items-center">
                    <ShoppingBag className="mr-2" />
                    Cart
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
