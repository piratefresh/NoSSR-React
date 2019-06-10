import React, {Component} from "react";
import styled from "styled-components";
import setvilogo from "../../images/setvilogo.png";
import NavLink from "./NavLink";
import auth from "../../auth/Auth";
// icons
import HomeIcon from "../../icons/HomeIcon";
import ResourcesIcon from "../../icons/app/ResourceIcon";
import PresentationsIcon from "../../icons/PresentationIcon";
import TemplatesIcon from "../../icons/TemplateIcon";
import SharedIcon from "../../icons/SharedIcon";
import UsersIcon from "../../icons/UsersIcon";
import PushNotifyIcon from "../../icons/app/PushNotifyIcon";
import SettingsIcon from "../../icons/app/SettingsIcon";
import ActivityLogIcon from "../../icons/app/Activitylog";
import LiveHelpIcon from "../../icons/app/LiveHelpIcon";
import LogoutIcon from "../../icons/LogoutIcon";
import AnalyticsIcon from "../../icons/AnalyticsIcon";

const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: #fff;
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
  }
  img {
    height: 42px;
    width: 42px;
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background-color: #1f98f4;
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

class Navigation extends Component {
  logout = () => {
    auth.logout();
    this.props.history.replace("/");
  };
  render() {
    return (
      <Nav>
        <div className="logo-container">
          <a href="http://">
            <img src={setvilogo} alt="" srcSet="" />
          </a>
        </div>
        <div className="nav-container">
          <NavLink
            to="/"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <HomeIcon />
            Home
          </NavLink>
          <NavLink
            to="/resources"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <ResourcesIcon />
            Resources
          </NavLink>
          <NavLink
            to="/presentations"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <PresentationsIcon />
            Presentations
          </NavLink>
          <NavLink
            to="/templates"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <TemplatesIcon />
            Templates
          </NavLink>
          <NavLink
            to="/shared"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <SharedIcon />
            Shared
          </NavLink>
          <NavLink
            to="/analytics/dashboard"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <AnalyticsIcon />
            Analytics
          </NavLink>
          <NavLink
            to="/users"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <UsersIcon />
            Users
          </NavLink>
          <NavLink
            to="/pushnotifications"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <PushNotifyIcon />
            Push Notifications
          </NavLink>
          <NavLink
            to="/settings"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <SettingsIcon />
            Settings
          </NavLink>
          <NavLink
            to="/activitylog"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <ActivityLogIcon />
            Activity Log
          </NavLink>
          <NavLink
            to="/livehelp"
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <LiveHelpIcon />
            LiveHelp
          </NavLink>
          <NavLink
            to="/login"
            onClick={() => {
              this.logout();
            }}
            activeStyle={{
              color: "#1F98F4"
            }}
          >
            <LogoutIcon />
            Logout
          </NavLink>
        </div>
      </Nav>
    );
  }
}

export default Navigation;
