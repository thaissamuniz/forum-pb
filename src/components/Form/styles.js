import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 340px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);

  @media (min-width: 935px) {
    width: 500px;
    padding: 40px 10px;
  }
`;
export const FormTitle = styled.h2`
  color: #201658;
  text-align: center;
  margin-bottom: 25px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FormInput = styled.input`
  padding: 14px 16px;
  background-color: transparent;
  margin-bottom: 12px;
  border: 1px solid #430a5d;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 300px;

  &::placeholder {
    color: #201658;
  }
`;
export const FormBtn = styled.button`
  padding: 14px 16px;
  margin-bottom: 15px;
  color: #fff;
  border: none;
  border-radius: 6px;
  background-color: #201658;
  cursor: pointer;
  width: 300px;
`;
