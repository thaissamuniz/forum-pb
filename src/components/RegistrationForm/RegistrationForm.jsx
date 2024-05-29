import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormBtn, FormContainer, FormInput, FormTitle } from "../Form/styles";
import styled from "styled-components";
import { isAdult } from "../../util";

const baseUrl = "https://forum-51b05-default-rtdb.firebaseio.com/posts.json";

export const linkStyles = {
  color: "#201658",
  fontSize: "15px",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "O nome deve conter pelo menos 3 caracteres")
    .required("Nome é obrigatório"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  birth: Yup.date()
    .required("Data de nascimento é obrigatória")
    .test("is-adult", "Você deve ter pelo menos 18 anos", (value) => {
      return isAdult(value) >= 18;
    }),
  password: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
});

const ErrorText = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const RegistrationForm = () => {
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    const user = {
      name: values.name,
      email: values.email,
      birth: values.birth,
      password: values.password,
    };

    fetch(baseUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((_) => console.log("Salvo com sucesso!"))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return (
    <FormContainer>
      <FormTitle>Faça parte do nosso fórum</FormTitle>
      <Formik
        initialValues={{ name: "", email: "", birth: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormikForm>
            <div>
              <Field
                name="name"
                as={FormInput}
                placeholder="Nome"
                className={touched.name && errors.name ? "error" : ""}
              />
              <ErrorMessage name="name" component={ErrorText} />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                as={FormInput}
                placeholder="Email"
                className={touched.email && errors.email ? "error" : ""}
              />
              <ErrorMessage name="email" component={ErrorText} />
            </div>

            <div>
              <Field
                name="birth"
                type="date"
                as={FormInput}
                className={touched.birth && errors.birth ? "error" : ""}
              />
              <ErrorMessage name="birth" component={ErrorText} />
            </div>

            <div>
              <Field
                name="password"
                type="password"
                as={FormInput}
                placeholder="Senha"
                className={touched.password && errors.password ? "error" : ""}
              />
              <ErrorMessage name="password" component={ErrorText} />
            </div>

            <FormBtn type="submit" disabled={isLoading}>
              {isLoading ? "Cadastrando..." : "Cadastrar"}
            </FormBtn>
          </FormikForm>
        )}
      </Formik>

      <NavLink to={"/login"} style={linkStyles}>
        Já tenho conta!
      </NavLink>
      <span>ou</span>
      <NavLink to={"/home"} style={linkStyles}>
        Continuar sem cadastro
      </NavLink>
    </FormContainer>
  );
};

export default RegistrationForm;
