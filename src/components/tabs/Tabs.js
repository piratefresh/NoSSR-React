import React, {useState} from "react";
import Tab from "./Tab";
import styled from "styled-components";
import "./tabs.css";
import {CardTitleAnalytics} from "../titles/index";

export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  const onClickTabItem = tab => {
    setActiveTab(tab);
  };

  const {children, analytics} = props;
  return (
    <TabsContainer>
      <ol className="tab-list">
        {analytics ? <CardTitleAnalytics /> : null}
        {children.map(child => {
          const {label} = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </TabsContainer>
  );
}

const TabsContainer = styled.div`
  .tab-list {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    border: none;
    width: 100%;
  }

  .tab-list-item {
    display: inline-block;
    white-space: nowrap;
    margin-right: 2em;
    list-style: none;
    margin-bottom: 2em;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
  }

  .tab-list-active {
    background-color: #fff;
    border: none;
    border-bottom: ${props => `${props.theme.colors.blue} 3px solid`};
  }
`;
