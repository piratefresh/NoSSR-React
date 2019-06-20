import React, {Component} from "react";
import styled from "styled-components";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    };
    this.close = this.close.bind(this);
  }

  componentDidUpdate() {
    const {listOpen} = this.state;
    setTimeout(() => {
      if (listOpen) {
        window.addEventListener("click", this.close);
      } else {
        window.removeEventListener("click", this.close);
      }
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.close);
  }

  close(timeOut) {
    this.setState({
      listOpen: false
    });
  }

  selectItem(title) {
    this.setState(
      {
        headerTitle: title,
        listOpen: false
      },
      this.props.resetThenSet(title)
    );
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    const {list} = this.props;
    const {listOpen, headerTitle} = this.state;
    return (
      <Wrapper>
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
        </div>
        {listOpen && (
          <ul className="dd-list" onClick={e => e.stopPropagation()}>
            {list.map(item => (
              <li
                className="dd-list-item"
                key={item}
                onClick={() => this.selectItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </Wrapper>
    );
  }
}

export default Dropdown;

const Wrapper = styled.div`
  user-select: none;
  position: relative;
  width: 222px;

  .dd-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 38px;
    border: 1px solid rgb(223, 223, 223);
    border-radius: 3px;
    cursor: default;
    position: relative;
    background-color: ${props => props.theme.colors.white};

    span {
      margin-right: 20px;
    }

    .dd-header-title {
      font-weight: 300;
      margin: 2px 20px;
      margin-right: 30px;
    }

    .dd-list {
      z-index: 10;
      position: absolute;
      width: 100%;
      border: 1px solid rgb(223, 223, 223);
      border-top: none;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      background-color: ${props => props.theme.colors.white};
      box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
      font-weight: 700;
      padding: 15px 0;
      max-height: 215px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    .dd-list-item {
      width: 100%;
      font-size: 1.5rem;
      padding: 8px 10px;
      line-height: 1.6rem;
      cursor: default;
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;

      &.selected {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.yellow};
      }

      &:hover {
        color: ${props => props.theme.colors.white};
      }
    }
    background-color: ${props => props.theme.colors.yellow};
  }
`;
