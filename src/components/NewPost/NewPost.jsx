import { Container, FormBtn, FormContainer } from "../Form/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import "./styles.css";
import { NavLink, redirect } from "react-router-dom";

const topics = ["trabalho", "lazer", "viagem", "animais", "outros"];

const Topic = ({ topic, onClick, picked }) => (
  <div
    className={`topic ${picked ? "topic-active" : ""}`}
    onClick={() => onClick(topic)}
  >
    <p>{topic}</p>
  </div>
);

const PostSchema = Yup.object().shape({
  post: Yup.string()
    .min(3, "Diga algo legal! o post deve ter pelo menos 3 letras")
    .required("Diga algo legal! o post não pode ficar vazio"),
  topics: Yup.array().min(1, "Selecione uma tag"),
});

const CreateNewPost = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("faça login para criar novos posts.");
    window.location.href = '/login';
  }

  const initialValues = {
    post: "",
    topics: [],
  };

  const handleSubmit = async (values, { resetForm }) => {
    const newPost = {
      autor: user.name,
      conteudo: values.post,
      data_publicacao: new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      imagem_url: user.imagem_url,
      topics: values.topics,
    };

    try {
      const response = await fetch(
        "https://forum-51b05-default-rtdb.firebaseio.com/posts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );

      if (response.ok) {
        alert("Post criado com sucesso e você ganhou 3 pontos!");
        user.score += 3;
        localStorage.setItem("user", JSON.stringify(user));
        resetForm();
      } else {
        alert("Falha ao criar o post.");
      }
    } catch (error) {
      console.error("Erro ao criar post:", error);
      alert("Ocorreu um erro ao criar o post. Tente novamente.");
    }
  };

  return (
    <div className="post-container">
      <Formik
        initialValues={initialValues}
        validationSchema={PostSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormContainer as={Form} id="post-box">
            <NavLink to={"/home"} className="close-icon__content">
              <IoClose className="close-icon" />
            </NavLink>
            <h2 className="title">No que você está pensando?</h2>
            <div className="topics">
              <span className="topic-title">tópicos:</span>
              {topics.map((topic, i) => (
                <Topic
                  topic={topic}
                  onClick={() => {
                    const currentTopics = values.topics;
                    if (currentTopics.includes(topic)) {
                      setFieldValue(
                        "topics",
                        currentTopics.filter((t) => t !== topic)
                      );
                    } else {
                      setFieldValue("topics", [...currentTopics, topic]);
                    }
                  }}
                  picked={values.topics.includes(topic)}
                  key={i}
                />
              ))}
            </div>
            <ErrorMessage name="topics" component="div" className="error" />
            <Field as="textarea" name="post" id="post" />
            <ErrorMessage name="post" component="div" className="error" />
            <FormBtn className="btn" type="submit">
              POSTAR
            </FormBtn>
          </FormContainer>
        )}
      </Formik>
    </div>
  );
};

export default CreateNewPost;
