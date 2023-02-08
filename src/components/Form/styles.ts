import styled from "styled-components";

import theme from "../../shared/theme";

export const Wrapper = styled.div`
  margin-top: 41px;
  background-color: ${theme.colors.neutral.dark[2]};
  width: 516px;
  height: 353px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 24px;
`;

export const ImgageFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageUpload = styled.input`
  display: none;
`;

export const ImageView = styled.label``;

export const Image = styled.div`
  cursor: pointer;
  width: 88px;
  height: 88px;
  border: 1px solid ${theme.colors.neutral.dark[4]};
  border-radius: 36px;
  color: ${theme.colors.neutral.dark[4]};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ImageUp = styled.input`
  display: none;
`;

export const IconRemove = styled.img`
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: ${theme.colors.neutral.dark[4]};
  border-radius: 8px;
  border: none;
  width: 100%;
  height: 40px;
  padding: 5px;
  color: white;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const InputText = styled.textarea`
  background-color: ${theme.colors.neutral.dark[4]};
  border-radius: 8px;
  border: none;
  width: 100%;
  height: 80px;
  padding: 5px;
  color: white;
  font-size: 14px;
  resize: none;
`;

export const ButtonsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonSend = styled.button`
  border: none;
  background-color: ${theme.colors.chart[4]};
  color: white;
  width: 98px;
  height: 41px;
  font-size: 14px;
  border-radius: 8px;
  margin-left: 15px;
  cursor: pointer;
`;

export const TextCancel = styled.p`
  color: ${theme.colors.neutral.dark[5]};
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`;
