import {NavLink, withRouter} from "react-router-dom";
import styled from "styled-components";

const NavLinkStyles = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: ${props => props.theme.font.nav};
  text-decoration: none;
  color: ${props => props.theme.colors.inactive};
  margin-bottom: 2em;
  cursor: pointer;
  .normal {
    svg {
      fill: ${props => props.theme.colors.inactive};
      transform: scale(0.7);
    }
  }
  .active {
    border-left: ${props => `${props.theme.colors.blue} 5px solid`};
    color: ${props => props.theme.colors.blue};
    svg {
      fill: ${props => props.theme.colors.blue};
      transform: scale(0.7);
    }
  }
`;

export default withRouter(NavLinkStyles);

// border-left: ${props =>
//   props.style.color == "#1F98F4" ? "5px solid #1F98F4" : ""};
// padding-right: ${props => (props.style.color == "#1F98F4" ? "5px" : "")};
