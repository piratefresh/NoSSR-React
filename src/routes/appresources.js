import React, {Fragment, useState} from "react";
import styled from "styled-components";
import {TreeCardStyles as MiniCard} from "../components/cards";
import {
  ButtonRoundedRed,
  ButtonRoundedBlue,
  ButtonHalfRounded
} from "../components/buttons";
import TreeView from "../components/treelist/TreeView";
import GridCard from "../components/grid/Card/GridCard";
import Modal from "../components/modal";
import AddForm from "../components/AddForm/Form";
// GRAPHQL
import {useQuery, useMutation} from "react-apollo-hooks";
import {
  GET_MASTERLISTS,
  GET_RESOURCES,
  GET_CATEGORIES
} from "../queries/queries";
// Dummy Data
import category from "../data/category";
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
  height: 100;
  display: flex;
  flex-direction: column;
`;

const ResourceHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
  .input-wrapper {
    display: grid;
    grid-template-columns: [input] 1fr [label] auto;
    .searchInput {
      grid-area: input;
      border: none;
      border-radius: 20px;
      flex: 1;
      font-size: 16px;
      font-weight: 200;
      height: 33px;
      margin: 0;
      width: 300px;
      padding: 5px;
      -webkit-appearance: textfield;
      :focus {
        outline: none;
      }
    }
    svg {
      grid-area: label;
      background: #1f98f4;
      height: 100%;
    }
  }
`;

// const result = resourceData.GetResources.filter(
//   item => item.ResourceCategoryMembership[0].ResourceCategoryID === criteria
// );

const filterResources = (resources, selectedCategoryId) => {
  if (selectedCategoryId === 2246) {
    return resources;
  }

  console.log(resources.ResourceCategoryMembership);

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
    return <div>...loading</div>;
  }

  console.log(data, error);

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
        <MiniCard style={{}}>
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
          <ResourceHeaderStyle>
            <div className="input-wrapper">
              <label>
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Search"
                />
              </label>
            </div>

            <div className="buttons">
              <ButtonHalfRounded type="button" onClick={toggleList}>
                {listView ? "Card View" : "List View"}
              </ButtonHalfRounded>
              <ButtonHalfRounded>+ Add</ButtonHalfRounded>
              <ButtonHalfRounded>Select All</ButtonHalfRounded>
            </div>
          </ResourceHeaderStyle>
          <GridCard resources={resources} listView={listView} />
        </ResourceContainer>
      </ResourceWrapper>
    </Fragment>
  );
}

export default Resource;

{
  /* <GridCard
resources={GetResources}
listView={listView}
/> */
}
