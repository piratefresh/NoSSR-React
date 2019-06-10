import gql from "graphql-tag";
import React, {useState, useEffect} from "react";
import {useQuery} from "react-apollo-hooks";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {SingleResourceCardStyles as Card} from "../../cards";
import ResourceGrid from "../Grid";
import {ButtonRoundedGreen, ButtonHalfRounded} from "../../buttons";
import Checkbox from "../../checkbox";
import {ButtonRoundedOverlay} from "../../buttons";
import ProgressiveImage from "react-progressive-image";
import placeholderImg from "../../../images/Rectangle.png";
/* Icons */
import DownloadIcon from "../../../icons/DownloadIcon";
import SearchIcon from "../../../icons/SearchIcon";
import EditIcon from "../../../icons/EditIcon";
import LaunchIcon from "../../../icons/LaunchIcon";
/* Dummy Data */
import products from "../../../data/products.js";

function GridCard(props) {
  const [index, setIndex] = useState(0);
  const [listItems, setListItems] = useState(props.resources.slice(index, 10));
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;

    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    ) {
      setIndex(prevState => prevState + 10);
      return setIsFetching(true);
    }
  }

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => [
        ...prevState,
        ...props.resources.slice(index, index + 10)
      ]);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <ResourceContainer>
      {props.listView ? (
        <ResourceGrid data={props.resources} title="Resource" />
      ) : (
        <ResourceGridContainer>
          {listItems.map((data, i) => {
            return (
              <Link to={`resources/${data.Name}/${data.ID}`} key={data.ID}>
                <Card>
                  <CardContent>
                    <Checkbox labelname={data.Name + index} />
                    <ProgressiveImage
                      src={data.Thumbnail}
                      placeholder={placeholderImg}
                    >
                      {src => <img src={src} alt={data.Name} />}
                    </ProgressiveImage>
                    <div className="text-content">
                      <ButtonRoundedGreen />
                      <span>{data.Name}</span>
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
          {isFetching && "Fetching more list items..."}
        </ResourceGridContainer>
      )}
    </ResourceContainer>
  );
}

const ResourceContainer = styled.div`
  height: 100%;
`;
const ResourceGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
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
  max-width: 320px;
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
    width: 320px;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .text-content {
    justify-content: center;
    align-items: center;
    padding: 2em 1em;
    min-height: 100%:
    span {
      font-size: 16px;
      font-weight: 400;
    }
    button {
      vertical-align: middle;
      margin: 0 0.5em;
    }
  }
`;
const Overlay = styled.div`
  z-index: 1;
  display: none;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0;
  border-radius: 10px;
  ${Card}:hover & {
    display: flex;
    justify-content: flex-end;
  }
  .cba-buttons {
    margin-top: 5px;
  }
  svg {
    transform: scale(0.5);
  }
`;

export default GridCard;
