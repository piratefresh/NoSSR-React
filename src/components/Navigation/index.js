import React, {useState, useCallback} from "react";
import {withRouter} from "react-router-dom";
import styled from "styled-components";
import setviLongLogo from "../../images/setvilogo.jpg";
import NavLink from "./NavLink";
import ALink from "./ALink";
import auth from "../../auth/Auth";
import MenuDropdown from "../Dropdown/MenuDropdown";
// icons
import HomeIcon from "../../icons/HomeIcon";
import ResourcesIcon from "../../icons/app/ResourceIcon";
import PresentationsIcon from "../../icons/PresentationIcon";
import TemplatesIcon from "../../icons/TemplateIcon";
import UsersIcon from "../../icons/UsersIcon";
import PushNotifyIcon from "../../icons/app/PushNotifyIcon";
import SettingsIcon from "../../icons/app/SettingsIcon";
import ActivityLogIcon from "../../icons/app/Activitylog";
import LogoutIcon from "../../icons/LogoutIcon";
import AnalyticsIcon from "../../icons/AnalyticsIcon";

const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: ${props => props.theme.navbar};
  min-height: 100%;
  height: 100%;
  width: 150px;
  z-index: 200;
  .nav-container {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: 2em;
    color: ${props => props.theme.colors.inactive};
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
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 80px;
    background-color: ${props => props.theme.navbar};
    img {
      width: 100%;
      height: 30px;
      object-fit: cover;
    }
  }
  .userImg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    img {
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

function Navigation(props) {
  const [listOpen, setListOpen] = useState(false);
  const closeDropdown = useCallback(() => setListOpen(false), []);

  const logout = () => {
    auth.logout();
    this.props.history.replace("/");
  };
  const {isDarkMode, handleDarkMode} = props;
  return (
    <Nav>
      <div className="logo-container">
        <a href="http://">
          <img src={setviLongLogo} alt="" srcSet="" />
        </a>
      </div>
      <div className="nav-container">
        <NavLink
          to="/"
          className="normal"
          activeClassName="active"
          exact={true}
        >
          <HomeIcon />
          Home
        </NavLink>
        <NavLink to="/resources" className="normal" activeClassName="active">
          <ResourcesIcon />
          Resources
        </NavLink>
        {/* <NavLink
          to="/presentations"
          className="normal"
          activeClassName="active"
        >
          <PresentationsIcon />
          Presentations
        </NavLink> */}
        <NavLink to="/templates" className="normal" activeClassName="active">
          <TemplatesIcon />
          Templates
        </NavLink>
        <ALink
          className="normal"
          activeClassName="active"
          onClick={() => {
            setListOpen(prevState => {
              return !prevState;
            });
          }}
        >
          <AnalyticsIcon />
          Analytics
          <MenuDropdown listOpen={listOpen} closeDropdown={closeDropdown} />
        </ALink>
        <NavLink to="/users" className="normal" activeClassName="active">
          <UsersIcon />
          Users
        </NavLink>
        <NavLink
          to="/notifications"
          className="normal"
          activeClassName="active"
        >
          <PushNotifyIcon />
          Push Notifications
        </NavLink>
        <NavLink to="/settings" className="normal" activeClassName="active">
          <SettingsIcon />
          Settings
        </NavLink>
        <NavLink to="/activitylog" className="normal" activeClassName="active">
          <ActivityLogIcon />
          Activity Log
        </NavLink>
        <NavLink
          to="/login"
          onClick={() => {
            logout();
          }}
          className="normal"
          activeClassName="active"
        >
          <LogoutIcon />
          Logout
        </NavLink>
        <button
          onClick={() => {
            handleDarkMode();
            localStorage.setItem("isDarkMode", !isDarkMode);
          }}
        >
          Toggle Dark Mode
        </button>
      </div>
    </Nav>
  );
}

export default withRouter(Navigation);
