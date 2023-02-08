import styled, { keyframes } from "styled-components";

import theme from "../../shared/theme";

const animation = keyframes`
 from {
  opacity: 0;
  margin-top: -50px;
 }

 to {
  opacity: 1;
  margin-top: 0;
 }
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
  background-color: ${theme.colors.neutral.dark[2]};
  width: 516px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;

  animation: ${animation} 500ms linear;
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 56px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ImageContainer = styled.div`
  margin-right: 32px;
`;

export const ImageAvatar = styled.div`
  width: 88px;
  height: 88px;
  border: 1px solid ${theme.colors.neutral.dark[4]};
  border-radius: 36px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const PostContainer = styled.div`
  flex: 1;
`;

export const DeleteIcon = styled.img`
  position: absolute;
  top: 12px;
  right: 0;
  cursor: pointer;
`;

export const PostText = styled.p`
  color: ${theme.colors.neutral.dark[6]};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  color: ${theme.colors.neutral.dark[5]};
  font-size: 12px;
  margin-bottom: 2px;
`;

export const NameText = styled.h3`
  color: ${theme.colors.neutral.dark[7]};
  font-size: 12px;
`;
