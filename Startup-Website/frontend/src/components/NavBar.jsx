import { NavLink } from "react-router-dom";
import Startup from "../assets/Startup.png";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center text-center m-2 h-10 position">
      <div>
        <img src={Startup} className="h-20" alt="Logo" />
      </div>
      <ul className="flex flex-row gap-5 text-xl mr-4">
        
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? "text-[#07bad2] font-bold  border-b-8 pb-2 border-[#07bad2]" : "text-gray-400"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#07bad2] font-bold border-b-8 pb-2 border-[#07bad2] " : "text-gray-400"
            }
          >
            About
          </NavLink>
        </li>


        <li>
        <NavLink
            to="/startups"
            className={({ isActive }) =>
              isActive ? "text-[#07bad2] font-bold  border-b-8 pb-2 border-[#07bad2] " : "text-gray-400"
            }
          >
            Startups
          </NavLink>
        </li>

        <li>
        <NavLink
            to="/founders"
            className={({ isActive }) =>
              isActive ? "text-[#07bad2] font-bold  border-b-8 pb-2 border-[#07bad2] " : "text-gray-400"
            }
          >
            Founders
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
