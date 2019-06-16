import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {SingleResourceCardStyles as Card} from "../../cards";
import ResourceGrid from "../Grid";
import {ButtonRoundedGreen} from "../../buttons";
import Checkbox from "../../checkbox";
import {ButtonRoundedOverlay} from "../../buttons";
import ProgressiveImage from "react-progressive-image";
import placeholderImg from "../../../images/Rectangle.png";
/* Icons */
import DownloadIcon from "../../../icons/DownloadIcon";
import EditIcon from "../../../icons/EditIcon";
import LaunchIcon from "../../../icons/LaunchIcon";

class GridCard extends Component {
  constructor(props) {
    super(props);

    // Sets up our initial state
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      index: 0,
      nextIndex: 16,
      items: []
    };

    // Binds our scroll event handler
    window.onscroll = () => {
      const {
        loadItems,
        state: {error, isLoading, hasMore}
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 600
      ) {
        loadItems();
      }
    };
  }

  componentWillMount() {
    // Loads some users on initial load
    this.loadItems();
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.resources !== prevProps.resources) {
      this.setState((prevState, props) => ({
        items: props.resources
      }));
    }
    return null;
  }

  loadItems = () => {
    this.setState((prevState, props) => ({
      isLoading: true,
      index: prevState.index + 16,
      nextIndex: prevState.nextIndex + 16
    }));

    const nextUsers = this.props.resources.slice(
      this.state.index,
      this.state.nextIndex
    );

    this.setState({
      // Note: Depending on the API you're using, this value may
      // be returned as part of the payload to indicate that there
      // is no additional data to be loaded
      hasMore: this.state.items.length < this.props.resources.length,
      isLoading: false,
      items: [...this.state.items, ...nextUsers]
    });
  };
  render() {
    const {error, hasMore, isLoading, items} = this.state;
    return (
      <Fragment>
        {this.props.listView ? (
          <ResourceGrid data={items} title="Resource" />
        ) : (
          <ResourceGridContainer>
            {items.map((data, i) => {
              return (
                <Link to={`resources/${data.Name}/${data.ID}`} key={data.ID}>
                  <Card>
                    <CardContent>
                      <Checkbox labelname={data.Name + i} />
                      <ProgressiveImage
                        src={data.Thumbnail}
                        placeholder={placeholderImg}
                      >
                        {src => <img src={src} alt={data.Name} />}
                      </ProgressiveImage>
                      <div className="text-content">
                        <ButtonRoundedGreen />
                        <h4>{data.Name}</h4>
                      </div>
                    </CardContent>
                    <Overlay>
                      <div className="cba-buttons">
                        <ButtonRoundedOverlay>
                          <DownloadIcon />
                        </ButtonRoundedOverlay>
                        <ButtonRoundedOverlay>
                          <EditIcon />
                        </ButtonRoundedOverlay>
                        <ButtonRoundedOverlay>
                          <LaunchIcon />
                        </ButtonRoundedOverlay>
                      </div>
                    </Overlay>
                  </Card>
                </Link>
              );
            })}
            {isLoading && <div>Loading...</div>}
            {/* {!hasMore && <div>You did it! You reached the end!</div>} */}
          </ResourceGridContainer>
        )}
      </Fragment>
    );
  }
}

const ResourceContainer = styled.div``;
const ResourceGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2em;
  width: 100%;
  a {
    position: relative;
    text-decoration: none;
  }
`;
const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 350px;
  max-height: 250px;
  color: ${props => props.theme.colors.grey};
  .k-form-field {
    left: 2%;
    top: 4%;
    position: absolute;
    z-index: 5;
  }
  .k-checkbox-label::before {
    background-color: #fff;
  }
  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .text-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1em 1em;
    background: #fff;
    max-width: 300px;
    overflow: hidden;
    border-radius: 10px;
    button {
      vertical-align: middle;
      margin: 0 0.5em;
    }
  }
`;
const Overlay = styled.div`
  z-index: 1;
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0;
  border-radius: 10px;
  ${Card}:hover & {
    display: flex;
    justify-content: flex-end;
    border: ${props => `${props.theme.colors.blue} 1px solid`}
    box-shadow: ${props => props.theme.shadow}
  }
  .cba-buttons {
    margin-top: 5px;
  }
  svg {
    transform: scale(0.5);
  }
`;

export default GridCard;
