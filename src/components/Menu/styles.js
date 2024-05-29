import styled from "styled-components";
import searchIcon from "../../assets/simbolo_busca.svg";

export const MenuContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  width: 99%;
  justify-content: space-between;

  .user-container {
    text-align: center;
    position: relative;
  }

  .logout {
    color: #fff;
    background-color: red;
    padding: 5px;
    margin-top: 5px;
    width: 50px;
    text-decoration: none;
    border-radius: 5px;
    z-index: 2;
    display: block;
    position: absolute;
  }
  .logout-hide {
    display: none;
  }
  .points {
    border: 1px solid #fff;
    border-image: linear-gradient(to left, #7c89d5, #d3c6d0) 1;
    padding: 5px;
    font-size: 13px;
    color: #fff;
    font-weight: bold;
  }

  @media (min-width: 855px) {
    align-items: center;
    .logo-container {
      display: flex;
      align-items: center;
    }
  }
`;
export const Logo = styled.h1`
  font-size: 23px;
  margin-right: 10px;
  display: inline;
  color: #fff;

  @media (min-width: 855px) {
    font-size: 50px;
    margin-right: 47px;
  }
`;
const MenuItems = styled.ul``;
export const Search = styled.input`
  border-radius: 7px;
  background-color: transparent;
  border: 1px solid #fff;
  box-shadow: 1px -3px 12px 0px rgba(0, 0, 0, 0.11);
  padding: 8px;
  background-image: url(${searchIcon});
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: 95%;

  &::placeholder {
    color: #fff;
    font-size: 15px;
  }

  @media (min-width: 855px) {
    background-size: 20px;
    padding: 8px 13px;
    width: 515px;
    height: 40px;

    &::placeholder {
      font-size: 15px;
    }
  }
`;
export const UserImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
`;
