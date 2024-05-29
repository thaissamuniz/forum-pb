import { Container, FormBtn, FormContainer } from "../Form/styles";
import { IoClose } from "react-icons/io5";

import "./styles.css";

const NewPostt = () => {
  return (
    <div className="post-container">
      <FormContainer id="post-box">
        <div className="close-icon__content">
          <IoClose className="close-icon"/>
        </div>
        <h2 className="title">No que você está pensando?</h2>
        <textarea name="post" id="post"></textarea>
        <FormBtn className="btn">POSTAR</FormBtn>
      </FormContainer>
    </div>
  );
};

export default NewPostt;
