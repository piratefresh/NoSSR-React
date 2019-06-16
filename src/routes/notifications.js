import React from "react";
// Styles
import {MainPageTitle} from "../components/titles";
import NotificationView from "../components/notifications/NotificationView";

export default () => {
  return (
    <div>
      <MainPageTitle>Notifications</MainPageTitle>
      <NotificationView />
    </div>
  );
};
