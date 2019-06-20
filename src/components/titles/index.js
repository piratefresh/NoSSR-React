import styled from "styled-components";

export const MainPageTitle = styled.h2`
  margin-top: 1em;
  margin-bottom: 2em;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  letter-spacing: 0.52px;
  color: #617182;
  border-bottom: ${props => `${props.theme.colors.lightgrey} 1px solid`};
  width: 100%;
  padding: 1em;
  overflow: hidden;
`;

export const CardTitleAnalytics = styled.h3`
  font-size: 1rem;
  letter-spacing: 0.52px;
  color: ${props => props.theme.colors.grey};
  width: 100%;
  padding: 1em;
  overflow: hidden;
`;
