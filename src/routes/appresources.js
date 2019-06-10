import React, {Fragment} from "react";
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
import gql from "graphql-tag";
import {Query} from "react-apollo";
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

class Resource extends React.Component {
  state = {show: false, listView: false};

  showModal = () => {
    this.setState({show: true});
  };

  hideModal = () => {
    this.setState({show: false});
  };

  toggleList = () => {
    this.setState({listView: !this.state.listView});
  };

  render() {
    return (
      <Query query={GET_CATEGORIES}>
        {({loading, error, data}) => {
          if (loading) return null;
          if (error) return `Error! ${error}`;

          return (
            <Fragment>
              <MainPageTitle>Resource Management</MainPageTitle>
              <ResourceWrapper>
                <MiniCard style={{}}>
                  <div className="cardTitle">
                    <ButtonRoundedBlue type="button" onClick={this.showModal}>
                      <PlusIcon />
                    </ButtonRoundedBlue>
                    <ButtonRoundedBlue>
                      <PencilIcon />
                    </ButtonRoundedBlue>
                    <ButtonRoundedRed>
                      <DeleteIcon />
                    </ButtonRoundedRed>
                  </div>
                  <TreeView data={data.getCategories} />
                </MiniCard>

                {/* Modal */}
                <Modal
                  show={this.state.show}
                  handleClose={this.hideModal}
                  modalTitle="Add Category"
                >
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
                      <ButtonHalfRounded
                        type="button"
                        onClick={this.toggleList}
                      >
                        {this.state.listView ? "Card View" : "List View"}
                      </ButtonHalfRounded>
                      <ButtonHalfRounded>+ Add</ButtonHalfRounded>
                      <ButtonHalfRounded>Select All</ButtonHalfRounded>
                    </div>
                  </ResourceHeaderStyle>
                  <Query query={GET_RESOURCES}>
                    {({loading, error, data, client}) => {
                      if (loading) return null;
                      if (error) return `Error! ${error}`;
                      client.writeData({data: {resouces: data.GetResources}});
                      const resourceData = client.readQuery({
                        query: GET_RESOURCES
                      });
                      console.log(resourceData);
                      return (
                        <GridCard
                          data={resourceData.GetResources}
                          listView={this.state.listView}
                        />
                      );
                    }}
                  </Query>
                </ResourceContainer>
              </ResourceWrapper>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default Resource;

const GET_CATEGORIES = gql`
  {
    getCategories {
      ID
      Name
      Children {
        Thumbnail
        ID
        Name
        ...ChildrenRecursive
      }
    }
  }

  fragment ChildrenRecursive on Children {
    Children {
      ...ChildFields
      Children {
        ...ChildFields
        Children {
          ...ChildFields
          Children {
            ...ChildFields
            Children {
              ...ChildFields
            }
          }
        }
      }
    }
  }

  fragment ChildFields on Children {
    Thumbnail
    ID
    Name
  }
`;

const GET_RESOURCES = gql`
  query {
    GetResources {
      ID
      Name
      CategoryID
      Thumbnail
      ResourceCategoryMembership {
        ResourceID
        ResourceCategoryID
        ResourceOrder
      }
      ChildResources {
        ...ChildrenRecursive
      }
    }
  }

  fragment ChildrenRecursive on ChildResources {
    ChildResources {
      ...ResourcesFields
      ChildResources {
        ...ResourcesFields
        ChildResources {
          ...ResourcesFields
          ChildResources {
            ...ResourcesFields
            ChildResources {
              ...ResourcesFields
            }
          }
        }
      }
    }
  }

  fragment ResourcesFields on ChildResources {
    ID
    Thumbnail
    SortOrder
  }
`;
