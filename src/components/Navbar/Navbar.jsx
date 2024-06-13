import { Item, Nav } from "./styles";
import { GoHome, GoHomeFill } from "react-icons/go";
import { PiPlusCircleFill, PiPlusCircleLight } from "react-icons/pi";
import { BsFillPeopleFill, BsPeople } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const options = [
  {
    title: "home",
    icon: <GoHome className="iconStyles" />,
    iconFill: <GoHomeFill className="iconStyles" />,
    link: "/home",
  },
  {
    title: "nova publicação",
    icon: <PiPlusCircleFill className="iconStyles" />,
    iconFill: <PiPlusCircleLight className="iconStyles" />,
    link: "/new-post",
  },
  {
    title: "pessoas",
    icon: <BsPeople className="iconStyles" />,
    iconFill: <BsFillPeopleFill className="iconStyles" />,
    link: "/people",
  },
];

const Navbar = () => {
  return (
    <Nav>
      <ul className="items">
        {options.map((option, i) => (
          <NavLink key={i} to={option.link} style={{}}>
            <Item>{option.icon}</Item>
          </NavLink>
        ))}
      </ul>
    </Nav>
  );
};

export default Navbar;
