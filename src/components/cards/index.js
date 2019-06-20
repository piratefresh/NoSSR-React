import styled from "styled-components";

const BaseCardStyles = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.card};
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export default BaseCardStyles;

export const MainCardStyles = styled(BaseCardStyles)`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  .categoryContent {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 1.5em;
    padding-top: 1em;
    padding-bottom: 1em;
    margin-left: 1em;
    .categorySection {
      h2 {
        font-size: 1.5em;
      }
      h3 {
        font-size: 1.75rem;
        letter-spacing: 0.02em;
        box-shadow: ${props => props.theme.colors.blue};
      }
    }
  }
`;
export const MiniCardStyles = styled(BaseCardStyles)`
  margin-top: 2.5em;
  flex-basis: 30%;
  padding: 0 0.5em;
  z-index: 10;
  @media (max-width: 850px) {
    flex-basis: 20%;
  }
`;
export const PresentationCardStyles = styled(BaseCardStyles)`
  padding: 2%;
  margin-top: 2.5em;
`;
export const TreeCardStyles = styled(BaseCardStyles)`
  position: sticky;
  max-width: 300px;
  top: 5%;
  padding: 1em;
  margin-top: 0;
  margin-right: 2em;
  flex-direction: column;
`;
export const ResourcesCardStyles = styled(BaseCardStyles)`
  padding: 2%;
  margin-top: 2.5em;
`;

export const SingleResourceCardStyles = styled(BaseCardStyles)`
  position: relative;
  max-width: 100%;
  max-height: 250px;
`;
export const ResourceTopBarCardStyles = styled(BaseCardStyles)`
  position: sticky;
  top: 0%;
  z-index: 10;
  margin-bottom: 2em;
`;
export const MapCardStyles = styled(BaseCardStyles)`
  flex-direction: column;
`;
