import React, {Fragment, useState} from "react";
import styled from "styled-components";
import {
  TreeCardStyles as MiniCard,
  ResourceTopBarCardStyles
} from "../components/cards";
import {
  ButtonRoundedRed,
  ButtonRoundedBlue,
  ButtonHalfRounded
} from "../components/buttons";
import TreeView from "../components/treelist/TreeView";
import GridCard from "../components/grid/Card/GridCard";
import Modal from "../components/modal";
import AddForm from "../components/AddForm/Form";
import SearchInput from "../components/form/SearchInput";
import LottieLoader from "../components/loading/lottieLoader";
// GRAPHQL
import {useQuery} from "react-apollo-hooks";
import {GET_MASTERLISTS} from "../queries/queries";
// Styles/Icons
import {MainPageTitle} from "../components/titles";
import PlusIcon from "../icons/PlusIcon";
import DeleteIcon from "../icons/DeleteIcon";
import PencilIcon from "../icons/PencilIcon";
import "@progress/kendo-theme-material/dist/all.css";

const ResourceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  .cardTitle {
    display: flex;
    color: ${props => props.theme.colors.cardHeader};
    border-bottom: 1px solid #eff6ff;
    width: 100%;
    min-height: 45px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
      text-align: center;
    }
  }
`;

const ResourceContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ResourceHeaderStyle = styled.div`
  position: relative;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
  width: 100%;
  height: 100%;
  padding: 0 2em;
`;

// Sets selected category id in cache, which we later extract to filter items in our resource array
const filterResources = (resources, selectedCategoryId) => {
  if (selectedCategoryId === 2246) {
    return resources;
  }

  return resources.filter(resource => {
    return resource.ResourceCategoryMembership.map(
      resource => resource.ResourceCategoryID
    ).includes(selectedCategoryId);
  });
};

function Resource() {
  const [show, setShowState] = useState(false);
  const [listView, setListView] = useState(false);

  const {data, loading, error} = useQuery(GET_MASTERLISTS);

  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }

  const categories = data.getCategories;
  const selectedCategoryId = data.selectedCategoryId.categoryId;

  const resources = filterResources(data.GetResources, selectedCategoryId);

  const showModal = () => {
    setShowState(true);
  };

  const hideModal = () => {
    setShowState(false);
  };

  const toggleList = () => {
    setListView(prevState => !prevState);
  };
  return (
    <Fragment>
      <MainPageTitle>Resource Management</MainPageTitle>
      <ResourceWrapper>
        <MiniCard>
          <div className="cardTitle">
            <ButtonRoundedBlue type="button" onClick={showModal}>
              <PlusIcon />
            </ButtonRoundedBlue>
            <ButtonRoundedBlue>
              <PencilIcon />
            </ButtonRoundedBlue>
            <ButtonRoundedRed>
              <DeleteIcon />
            </ButtonRoundedRed>
          </div>
          <TreeView data={categories} />
        </MiniCard>

        {/* Modal */}
        <Modal show={show} handleClose={hideModal} modalTitle="Add Category">
          <AddForm />
        </Modal>

        <ResourceContainer>
          <ResourceTopBarCardStyles>
            <ResourceHeaderStyle>
              <SearchInput />

              <div className="buttons">
                <ButtonHalfRounded type="button" onClick={toggleList}>
                  {listView ? "Card View" : "List View"}
                </ButtonHalfRounded>
                <ButtonHalfRounded>+ Add</ButtonHalfRounded>
                <ButtonHalfRounded>Select All</ButtonHalfRounded>
              </div>
            </ResourceHeaderStyle>
          </ResourceTopBarCardStyles>
          <GridCard resources={resources} listView={listView} />
        </ResourceContainer>
      </ResourceWrapper>
    </Fragment>
  );
}

export default Resource;
