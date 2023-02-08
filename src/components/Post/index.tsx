import * as S from "./styles";

import IconTrash from "../../assets/trash.svg";
import { useState } from "react";
import IconDelete from "../../assets/delete.svg";
import { PostInterface } from "../../shared/interfaces/PostInterface";
import { CSSTransition } from "react-transition-group";

interface IProps {
  post: PostInterface;
  deletePost: (id: number) => void;
}

export default function Post({ post, deletePost }: IProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.DeleteIcon onClick={() => deletePost(post.id)} src={IconDelete} />
        <S.ImageContainer>
          <S.ImageAvatar style={{ backgroundImage: `url(${post.avatar})` }} />
        </S.ImageContainer>
        <S.PostContainer>
          <S.PostText>{post.message}</S.PostText>
          <S.Text>Enviado por</S.Text>
          <S.NameText>{post.name}</S.NameText>
        </S.PostContainer>
      </S.Container>
    </S.Wrapper>
  );
}
