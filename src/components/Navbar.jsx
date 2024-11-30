import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-400 text-white p-4 flex justify-center">
      <NavLink to="/" className={({ isActive }) => `${isActive ? "text-blue-500" : "text-white hover:text-blue-300"} ml-2`}>
        Home
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => `${isActive ? "text-blue-500" : "text-white hover:text-blue-300"} ml-2`}>
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;
