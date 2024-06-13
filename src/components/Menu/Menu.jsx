import { NavLink } from "react-router-dom";
import { Logo, MenuContainer, Search, UserImage } from "./styles";
import { useState } from "react";

const Menu = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisisble] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const userScore = user ? user.score : 0;
  const handleChange = (e) => {
    setSearch(e.target.value);
    onFilter && onFilter(e.target.value);
  };

  return (
    <MenuContainer>
      <div className="logo-container">
        <Logo>Forum</Logo>
        <Search
          type="search"
          placeholder="procure por tópico..."
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="user-container" onClick={() => setIsVisisble(!isVisible)}>
        <UserImage src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <div className="points">
          <span>{userScore}pts</span>
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
