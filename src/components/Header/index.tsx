import Logo from "../../assets/logo.svg";

import * as S from "./styles";

export default function Header() {
  return (
    <S.Container>
      <S.LogoImage src={Logo} />
    </S.Container>
  );
}
