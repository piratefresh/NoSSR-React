import {NavLink, withRouter} from "react-router-dom";
import styled from "styled-components";

const SubNavLinkStyles = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 16px;
  text-decoration: none;
  color: #708eb0;
  margin-bottom: 2em;
  cursor: pointer;
  svg {
    fill: #708eb0 !important;
  }
`;

export default withRouter(SubNavLinkStyles);
