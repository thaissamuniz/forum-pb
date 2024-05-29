import { NavLink } from "react-router-dom";
import User from "../../models/User.js";
import { Logo, MenuContainer, Search, UserImage } from "./styles";
import { useState } from "react";

const user = new User("Ma", "maria@email.com", "123456", "06/04/1986");
console.log(user.getAge());

const Menu = () => {
  const [isVisible, setIsVisisble] = useState(false);
  return (
    <MenuContainer>
      <div className="logo-container">
        <Logo>Forum</Logo>
        <Search type="search" placeholder="o que você procura?" />
      </div>
      <div className="user-container" onClick={() => setIsVisisble(!isVisible)}>
        <UserImage src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <div className="points">
          <span>15pts</span>
        </div>
        <div>
          <NavLink
            to={"/login"}
            className={isVisible ? "logout" : "logout-hide"}
          >
            sair
          </NavLink>
        </div>
      </div>
    </MenuContainer>
  );
};

export default Menu;
