import React, {Fragment, useState, useCallback} from "react";
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
import EditForm from "../components/AddForm/EditForm";
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
  .categoryButtons {
    display: flex;
    justify-content: space-around;
    align-items: center;
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
  z-index: 3;
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
  const [typeForm, setTypeForm] = useState(null);
  const [listView, setListView] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = useCallback(
    value => {
      setSelectedItems(prevState => [...prevState, value]);
    },
    [] // Tells React to memoize regardless of arguments.
  );

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
          <div className="categoryButtons">
            <ButtonRoundedBlue
              type="button"
              onClick={() => {
                showModal();
                setTypeForm("Add");
              }}
            >
              <PlusIcon />
            </ButtonRoundedBlue>
            <ButtonRoundedBlue
              onClick={() => {
                showModal();
                setTypeForm("Edit");
              }}
            >
              <PencilIcon />
            </ButtonRoundedBlue>
            <ButtonRoundedRed>
              <DeleteIcon />
            </ButtonRoundedRed>
          </div>
          <TreeView data={categories} />
        </MiniCard>

        {/* Modal */}
        <Modal show={show} handleClose={hideModal}>
          {typeForm === "Add" ? (
            <AddForm />
          ) : (
            <EditForm
              resources={resources}
              data={categories}
              selectedItems={selectedItems}
            />
          )}
        </Modal>

        <ResourceContainer>
          <ResourceTopBarCardStyles>
            <ResourceHeaderStyle>
              <SearchInput rectangle />

              <div className="buttons">
                <ButtonHalfRounded type="button" onClick={toggleList}>
                  {listView ? "Card View" : "List View"}
                </ButtonHalfRounded>
                <ButtonHalfRounded>+ Add</ButtonHalfRounded>
                <ButtonHalfRounded>Select All</ButtonHalfRounded>
              </div>
            </ResourceHeaderStyle>
          </ResourceTopBarCardStyles>
          <GridCard
            resources={resources}
            listView={listView}
            handleItemClick={handleItemClick}
          />
        </ResourceContainer>
      </ResourceWrapper>
    </Fragment>
  );
}

export default Resource;
