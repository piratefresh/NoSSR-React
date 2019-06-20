import React from "react";
import styled from "styled-components";
import TextEditor from "../texteditor/TextEditor";
import BaseCardStyles from "../cards";
import NotificationHeader from "../header/NotificationHeader";
import Input from "../form/Input";
import FormField from "../form/FormField";
// dummy data
import data from "../../data/userdata";

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const NotificationContainer = styled.div`
  display: grid;
  color: ${props => props.theme.colors.grey};
  grid-template-columns: [outbox] 1fr [compose] 3fr [activity] 1fr;
  grid-gap: 2em;
  padding: 2em;
  .outbox {
    grid: outbox;
    border-right: ${props => `${props.theme.colors.lightblue} 1px solid`};
    .notification-item {
      padding: 1em 1em;
      cursor: pointer;
    }
    .selected {
      background: ${props => props.theme.colors.lightblue};
    }
  }
  .compose {
    grid: compose;
  }
  .activity {
    grid: activity;
  }
`;

const MetaData = styled.div`
  .date-recieved {
    font-size: 12px;
  }
  .recievers {
    display: flex;
    align-items: center;
    .user {
      display: flex;
      align-items: center;
      margin: 0 0.2em;
      img {
        width: 32px;
        height: 32px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
`;

const MessageArea = styled.div`
  margin-top: 1em;
  max-width: 100%;
  line-height: 1.5;
  border-right: ${props => `${props.theme.colors.lightblue} 1px solid`};
`;

export default function NotificationView() {
  return (
    <BaseCardStyles>
      <NotificationWrapper>
        <NotificationHeader />
        <NotificationContainer>
          <div className="outbox">
            <h3>Outbox</h3>
            <div className="notification-item">
              <h4>To: Grabriel, Tom</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                pariatur voluptates similique! Cupiditate eos iusto consectetur
                omnis architecto, deleniti provident!
              </p>
            </div>
            <div className="notification-item selected">
              <h4>To: Grabriel, Tom</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                pariatur voluptates similique! Cupiditate eos iusto consectetur
                omnis architecto, deleniti provident!
              </p>
            </div>
            <div className="notification-item">
              <h4>To: Grabriel, Tom</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                pariatur voluptates similique! Cupiditate eos iusto consectetur
                omnis architecto, deleniti provident!
              </p>
            </div>
          </div>
          <div className="compose">
            <FormField labelName="Title">
              <Input className="text-input" />
            </FormField>
            <MetaData>
              <span className="date-recieved">23 March 2019</span>
              <div className="recievers">
                <span>Sent to: </span>
                <div className="user">
                  <img
                    src="https://images.unsplash.com/photo-1542458580-9d880e2a6bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    srcset=""
                  />
                  <span>Rory</span>
                </div>
                <div className="user">
                  <img
                    src="https://images.unsplash.com/photo-1557432107-ed5217c20efd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    srcset=""
                  />
                  <span>Erica</span>
                </div>
                <div className="user">
                  <img
                    src="https://images.unsplash.com/photo-1557265193-56758b5a2f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    srcset=""
                  />
                  <span>Eric</span>
                </div>
              </div>
            </MetaData>
            <MessageArea>
              <TextEditor />
            </MessageArea>
          </div>
          <div className="activity" />
        </NotificationContainer>
      </NotificationWrapper>
    </BaseCardStyles>
  );
}
