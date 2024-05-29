import styled from "styled-components";

export const PostContainer = styled.div`
    margin-top: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 5px 10px;
    position: relative;
    box-shadow: 1px -3px 12px 0px rgba(0, 0, 0, 0.11);

    .text {
        margin-bottom: 10px;
    }

    .post-infos {
        line-height: 100%;
        padding-top: 7px;
    }
    .post-date {
        font-size: 12px;
    }

    @media(min-width: 855px) {
        max-width: 720px;
    }
`;

export const ProfileImage = styled.img`
    width: 58px;
    height: 58px;
    border-radius: 50%;
    object-fit: cover;
`;

export const ProfileContent = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-start;
    margin-bottom: 6px;
`;

export const ProfileName = styled.h3`
    margin: 0;
`;

export const SocialBtns = styled.div`
    margin-bottom: 10px;

    .report {
        font-size: 11px;
        color: red;
        text-decoration: underline;
    }
`;