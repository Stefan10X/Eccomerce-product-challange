/* eslint-disable react/prop-types */
import logo from "../images/logo.svg";
import cartImg from "../images/icon-cart.svg";
import user from "../images/image-avatar.png";

const Navbar = ({ cart, setCart, quantity }) => {
  return (
    <nav className="flex justify-between max-w-screen-xl h-28 mx-auto border-b">
      <div className="flex items-center gap-12">
        <img src={logo} className="h-5" alt="Logo"></img>
        <ul className="flex items-center gap-6 h-28 text-gray-500 ">
          <li className="flex items-center h-full hover:text-gray-700 hover:border-b-4 hover:border-orange-500">
            <a href="#">Collections</a>
          </li>
          <li className="flex items-center h-full hover:text-gray-700 hover:border-b-4 hover:border-orange-500">
            <a href="#">Men</a>
          </li>
          <li className="flex items-center h-full hover:text-gray-700 hover:border-b-4 hover:border-orange-500">
            <a href="#">Women</a>
          </li>
          <li className="flex items-center h-full hover:text-gray-700 hover:border-b-4 hover:border-orange-500">
            <a href="#">About</a>
          </li>
          <li className="flex items-center h-full hover:text-gray-700 hover:border-b-4 hover:border-orange-500">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative">
          <div
            className={
              quantity == 0
                ? "hidden"
                : "flex items-center justify-center absolute left-[12px] bottom-[12px] w-3 h-3 p-2 text-xs text-white bg-orange-500 rounded-full"
            }
          >
            {quantity}
          </div>
          <img
            onClick={() => {
              setCart(!cart);
            }}
            src={cartImg}
            alt="cart"
            className="cursor-pointer"
          ></img>
        </div>
        <img
          onClick={() => {
            setCart(!cart);
          }}
          src={user}
          alt="avatar"
          className="w-10 cursor-pointer hover:border-2 border-orange-500 rounded-full"
        ></img>
      </div>
    </nav>
  );
};

export default Navbar;
