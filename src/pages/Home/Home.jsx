import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "./styles";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [search, setSearch] = useState("");

  const baseUrl = "https://forum-51b05-default-rtdb.firebaseio.com/posts.json";

  const convertData = (data) => {
    const ids = Object.keys(data);
    const posts = Object.values(data);
    return posts.map((post, i) => {
      return {
        id: ids[i],
        ...post,
      };
    });
  };

  useEffect(() => {
    fetch(baseUrl)
      .then(async (res) => {
        const resPosts = await res.json();
        const convertedData = convertData(resPosts);
        setPosts(convertedData);
      })
      .catch((err) => console.log(err.message))
      .finally(() => console.log("final"));
  }, []);

  const filterData = () => {
    if (!search) {
      return posts;
    }
    return posts.filter(
      (post) =>
        post.topics &&
        post.topics.some((topic) =>
          topic.toLowerCase().includes(search.toLowerCase())
        )
    );
  };

  const filteredPosts = filterData();

  return (
    <Container>
      <Menu onFilter={setSearch} />
      {filteredPosts &&
        filteredPosts.map((post, i) => (
          <Post
            name={post.autor}
            date={post.data_publicacao}
            tags={post.topics}
            text={post.conteudo}
            key={i}
          />
        ))}
      <Navbar />
    </Container>
  );
};

export default Home;
