import React, {Component} from "react";
import styled from "styled-components";
import {ButtonStylePrimary} from "../buttons";
import Dropdown from "../Dropdown/";
import ChavronDownIcon from "../../icons/ChavronDownIcon";

const HeaderSectionStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${props => props.theme.colors.grey}
  margin-bottom: 2.5em;
`;

export default class HeaderSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.close = this.close.bind(this);
  }

  close(timeOut) {
    this.setState({
      listOpen: false
    });
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    const {HeaderTitle} = this.props;
    const {dropdownOpen} = this.state;
    return (
      <HeaderSectionStyle>
        <h1>{HeaderTitle}</h1>
        <div
          className="selection-buttons"
          style={{
            position: "relative",
            marginBottom: dropdownOpen ? "50px" : ""
          }}
        >
          <ButtonStylePrimary
            ButtonStylePrimary
            onClick={() => this.toggleDropdown()}
          >
            <span className="text">Date Range</span>{" "}
            <ChavronDownIcon className="icon" />
          </ButtonStylePrimary>
          {dropdownOpen ? (
            <Dropdown
              dropdownOpen={this.state.dropdownOpen}
              closeDropdown={this.close}
            />
          ) : (
            <> </>
          )}
          <ButtonStylePrimary>
            <span className="text">Groups</span>{" "}
            <ChavronDownIcon className="icon" />
          </ButtonStylePrimary>
          <ButtonStylePrimary>
            <span className="text">Users</span>{" "}
            <ChavronDownIcon className="icon" />
          </ButtonStylePrimary>
        </div>
      </HeaderSectionStyle>
    );
  }
}
