import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  padding: 10px 15px;
  bottom: 0;
  width: 100%;
  right: 0;
  box-shadow: 1px -3px 12px 0px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow: 1px -3px 12px 0px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 1px -3px 12px 0px rgba(0, 0, 0, 0.11);
  background-color: #fff;

  .items {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  @media(min-width: 855px) {
    height: 88%;
    top: 100px;
    width: 70px;
    right: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 10px 0;
    position: absolute;

    .items {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

  }
`;

export const Item = styled.li`
  text-decoration: none;

  .item-title {
    display: inline-block;
  }
`;
