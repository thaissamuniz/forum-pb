import { NavLink, useNavigate } from "react-router-dom";
import {
  Container,
  FormBtn,
  FormContainer,
  FormInput,
  FormTitle,
} from "../../components/Form/styles";
import { useState } from "react";

async function login(email, password, navigate, setErrorMsg) {
  try {
    const response = await fetch(
      "https://forum-51b05-default-rtdb.firebaseio.com/users.json"
    );
    const data = await response.json();

    let userFound = false;

    for (let key in data) {
      if (data[key].email === email && data[key].password === password) {
        userFound = true;

        localStorage.setItem("user", JSON.stringify(data[key]));
        navigate("/home");
        break;
      }
    }

    if (!userFound) {
      return setErrorMsg("email ou senha inválidos");
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    setErrorMsg("Ocorreu um erro ao fazer login. Tente novamente.");
  }
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Container>
      <FormContainer>
        <FormTitle>Bom ver você de novo!</FormTitle>
        <FormInput
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormBtn
          onClick={() => login(email, password, navigate, setErrorMessage)}
        >
          Entrar
        </FormBtn>
        {errorMessage !== "" && <p className="error">{errorMessage}</p>}
        <NavLink to={"/"} className="navlink">ainda não tem conta? cadastre-se!</NavLink>
      </FormContainer>
    </Container>
  );
};

export default Login;
