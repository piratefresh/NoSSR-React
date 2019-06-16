import {NavLink, withRouter} from "react-router-dom";
import styled from "styled-components";

const NavLinkStyles = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 16px;
  text-decoration: none;
  color: #708eb0;
  margin-bottom: 2em;
  cursor: pointer;
`;

export default withRouter(NavLinkStyles);

// border-left: ${props =>
//   props.style.color == "#1F98F4" ? "5px solid #1F98F4" : ""};
// padding-right: ${props => (props.style.color == "#1F98F4" ? "5px" : "")};
