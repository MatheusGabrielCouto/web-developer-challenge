import { useEffect, useState } from "react";
import useSWR from "swr";

import Form from "../../components/Form";
import Header from "../../components/Header";
import Post from "../../components/Post";
import api from "../../core/api";

import { TransitionGroup } from "react-transition-group";

import { PostInterface } from "../../shared/interfaces/PostInterface";

import * as S from "./styles";

export default function Home() {
  const { data, error } = useSWR(
    "/posts",
    async () => {
      const response = await api.get("/posts?_sort=id&_order=desc");
      return response.data;
    },
    { refreshInterval: 500 }
  );

  const createPost = (name: string, message: string, avatar: string) => {
    api
      .post("/posts", {
        name,
        message,
        avatar,
      })
      .then((resp) => {})
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const deletePost = (id: number) => {
    api
      .delete(`/posts/${id}`)
      .then((resp) => {})
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <S.Container>
      <Header />
      <Form handleClick={createPost} />
      <S.FeedView>
        <S.FeedText>Feed</S.FeedText>
      </S.FeedView>
      {data?.map((d: PostInterface) => (
        <Post deletePost={deletePost} key={d.id} post={d} />
      ))}
    </S.Container>
  );
}
