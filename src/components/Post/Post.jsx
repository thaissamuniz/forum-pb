import { GoHeart, GoHeartFill } from "react-icons/go";
import { RiMessage3Line, RiMessage3Fill } from "react-icons/ri";
import { PiShareFatLight, PiShareFatFill } from "react-icons/pi";
import { MdOutlineEdit, MdDone } from "react-icons/md";
import { useState } from "react";
import {
  PostContainer,
  ProfileContent,
  ProfileImage,
  ProfileName,
  SocialBtns,
} from "./styles";

const editIconsStyle = { position: "absolute", right: "20px", cursor: "pointer"
};
const iconStyle = {
  width: "20px",
  height: "20px",
  marginRight: "16px",
  color: "black",
  cursor: "pointer"
};

const Post = ({ name, date, text, tags }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = () => {
    if (user) {
      return user.name === name;
    }
    return false;
  };

  const [editMode, setEditMode] = useState(false);
  const [like, setLike] = useState(false);
  const handleClick = () => setEditMode(!editMode);

  return (
    <PostContainer>
      <ProfileContent>
        <ProfileImage
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile pic"
        />
        <div className="post-infos">
          <ProfileName>{name}</ProfileName>
          <span className="post-date">{date}</span>
          <div>
            {tags.map((tag, i) => (
              <span className="tag" key={i}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
        {isLoggedIn() && (
          <div onClick={handleClick}>
            {editMode ? (
              <MdDone style={editIconsStyle} />
            ) : (
              <MdOutlineEdit style={editIconsStyle} />
            )}
          </div>
        )}
      </ProfileContent>
      <p className="text">{text}</p>
      <SocialBtns>
        <span onClick={() => setLike(!like)}>
          {" "}
          {like ? (
            <GoHeartFill style={iconStyle} />
          ) : (
            <GoHeart style={iconStyle} />
          )}
        </span>
        <span>
          <RiMessage3Line style={iconStyle} />
        </span>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fseusite.com%2Fpost%2F123&t=Confira%20este%20post%20incrível!"
          target="_blank"
          style={{ color: "black" }}
        >
          <PiShareFatLight style={iconStyle} />
        </a>

        <span className="report">denunciar</span>
      </SocialBtns>
    </PostContainer>
  );
};

export default Post;
