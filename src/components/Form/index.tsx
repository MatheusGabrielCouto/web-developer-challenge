import * as S from "./styles";

import IconTrash from "../../assets/trash.svg";
import { useState } from "react";
import theme from "../../shared/theme";

interface IProps {
  handleClick: (name: string, message: string, avatar: string) => void;
}

export default function Form({ handleClick }: IProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [avatar, setAvatar] = useState("");

  const postMessage = () => {
    handleClick(name, message, avatar);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.ImgageFormContainer>
          <S.ImageContainer>
            <S.ImageView htmlFor="test">
              <S.Image
                style={{
                  backgroundImage: avatar !== "" ? `url(${avatar})` : "",
                }}
              />
            </S.ImageView>
            <S.ImageUp
              onChange={({ target }) => {
                if (target?.files) {
                  setAvatar(URL.createObjectURL(target?.files[0]));
                }
              }}
              id="test"
              type="file"
            />
            {avatar !== "" && (
              <S.IconRemove onClick={() => setAvatar("")} src={IconTrash} />
            )}
          </S.ImageContainer>
        </S.ImgageFormContainer>
        <S.Input
          onChange={({ target }) => {
            setName(target.value);
          }}
          value={name}
          type="text"
          placeholder="Digite seu nome"
        />
        <S.InputText
          onChange={({ target }) => {
            setMessage(target.value);
          }}
          value={message}
          placeholder="Mensagem"
        />
        <S.ButtonsContainer>
          <S.TextCancel
            onClick={() => {
              setAvatar("");
              setName("");
              setMessage("");
            }}
          >
            Descartar
          </S.TextCancel>
          <S.ButtonSend
            disabled={name === "" || message === "" || avatar === ""}
            style={
              name === "" || message === "" || avatar === ""
                ? {
                    backgroundColor: theme.colors.neutral.dark[5],
                    cursor: "auto",
                  }
                : {
                    backgroundColor: theme.colors.chart[4],
                  }
            }
            onClick={async () => {
              await postMessage();
              setAvatar("");
              setName("");
              setMessage("");
            }}
          >
            Publicar
          </S.ButtonSend>
        </S.ButtonsContainer>
      </S.Container>
    </S.Wrapper>
  );
}
