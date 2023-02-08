import styled from "styled-components";
import theme from "../../shared/theme";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.neutral.dark[1]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const FeedText = styled.p`
  color: ${theme.colors.neutral.dark[7]};
  font-size: 14px;
`;

export const FeedView = styled.div`
  width: 516px;
  margin-top: 56px;
  margin-bottom: 8px;
`;
