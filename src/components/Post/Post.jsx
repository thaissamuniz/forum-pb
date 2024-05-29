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

const editIconsStyle = { position: "absolute", right: "20px" };
const iconStyle = {
  width: "20px",
  height: "20px",
  marginRight: "16px",
};

const Post = ({ name, date, text }) => {
  const [editMode, setEditMode] = useState(false);
  const [like, setLike] = useState(false);
  const handleClick = () => setEditMode(!editMode);
  return (
    <PostContainer>
      <ProfileContent>
        <ProfileImage
          src="https://cdn.pixabay.com/photo/2016/11/22/23/14/terrier-1851108_1280.jpg"
          alt="profile pic"
        />
        <div className="post-infos">
          <ProfileName>{name}</ProfileName>
          <span className="post-date">{date}</span>
        </div>
        <div onClick={handleClick}>
          {editMode ? (
            <MdDone style={editIconsStyle} />
          ) : (
            <MdOutlineEdit style={editIconsStyle} />
          )}
        </div>
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
        <span>
          <PiShareFatLight style={iconStyle} />
        </span>
        <span className="report">denunciar</span>
      </SocialBtns>
    </PostContainer>
  );
};

export default Post;
