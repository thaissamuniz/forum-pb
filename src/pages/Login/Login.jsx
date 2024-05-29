import { NavLink } from "react-router-dom";
import {
  Container,
  FormBtn,
  FormContainer,
  FormInput,
  FormTitle,
} from "../../components/Form/styles";

const Login = () => {
  return (
    <Container>
      <FormContainer>
        <FormTitle>Bom ver você de novo!</FormTitle>
        <FormInput type="email" placeholder="email" />
        <FormInput type="password" placeholder="senha" />
        <NavLink to={"/home"}>
          <FormBtn>Entrar</FormBtn>
        </NavLink>
      </FormContainer>
    </Container>
  );
};

export default Login;
