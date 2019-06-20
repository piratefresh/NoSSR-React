import React from "react";
import styled from "styled-components";
import {
  Grid,
  GridColumn as Column,
  GridToolbar
} from "@progress/kendo-react-grid";
import "@progress/kendo-theme-material/dist/all.css";
import {Renderers} from "./renderers";
import {ButtonStyleSecondary, ButtonStyleBlue} from "../buttons";
import TemplateGridHeader from "./TemplateGridHeader";
import LottieLoader from "../loading/lottieLoader";

const CardStyles = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 10px;
  width: 100%;
  padding: 2%;
  margin-top: ${props => (props.template ? "1em" : "2.5")};
`;

// Clone product before edit to keep an original copy
function cloneProduct(product) {
  return Object.assign({selected: false}, product);
}

class GridContainer extends React.Component {
  lastSelectedIndex = 0;
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
        .map(cloneProduct)
        .map(dataItem => Object.assign({selected: false}, dataItem)),
      editItem: undefined,
      changes: false
    };

    this.saveChanges = this.saveChanges.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
    this.itemChange = this.itemChange.bind(this);

    this.renderers = new Renderers(
      this.enterEdit.bind(this),
      this.exitEdit.bind(this),
      "inEdit"
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      this.setState((prevState, props) => ({
        data: props.data
          .map(cloneProduct)
          .map(dataItem => Object.assign({selected: false}, dataItem))
      }));
    }
    return null;
  }

  selectionChange = event => {
    event.dataItem.selected = !event.dataItem.selected;
    this.forceUpdate();
  };

  rowClick = event => {
    let last = this.lastSelectedIndex;
    const current = this.state.data.findIndex(
      dataItem => dataItem === event.dataItem
    );

    if (!event.nativeEvent.shiftKey) {
      this.lastSelectedIndex = last = current;
    }

    if (!event.nativeEvent.ctrlKey) {
      this.state.data.forEach(item => (item.selected = false));
    }
    const select = !event.dataItem.selected;
    for (let i = Math.min(last, current); i <= Math.max(last, current); i++) {
      this.state.data[i].selected = select;
    }
    this.forceUpdate();
  };

  headerSelectionChange = event => {
    const checked = event.syntheticEvent.target.checked;
    this.state.data.forEach(item => (item.selected = checked));
    this.forceUpdate();
  };

  render() {
    let columnNames = Object.keys(this.props.data[0]);
    let forDeletion = [
      "Children",
      "__typename",
      "ID",
      "ResourceCategoryMembership",
      "ChildResources",
      "Resources",
      "PresentationItems",
      "CategoryName",
      "CategoryID",
      "ResourceID"
    ];

    columnNames = columnNames.filter(item => !forDeletion.includes(item));

    console.log(columnNames);
    const {rounded, template} = this.props;
    return (
      <CardStyles>
        {this.state.data.length == 0 ? (
          <LottieLoader />
        ) : (
          <Grid
            data={this.state.data}
            rowHeight={50}
            onItemChange={this.itemChange}
            cellRender={this.renderers.cellRender}
            rowRender={this.renderers.rowRender}
            editField="inEdit"
            selectedField="selected"
            onSelectionChange={this.selectionChange}
            onHeaderSelectionChange={this.headerSelectionChange}
            onRowClick={this.rowClick}
          >
            <GridToolbar>
              {this.state.changes ? (
                <>
                  <ButtonStyleSecondary
                    small
                    title="Cancel Changes"
                    onClick={this.cancelChanges}
                    disabled={!this.state.changes}
                  >
                    Cancel Changes
                  </ButtonStyleSecondary>
                  <ButtonStyleBlue
                    small
                    title="Save Changes"
                    onClick={this.saveChanges}
                    disabled={!this.state.changes}
                  >
                    Save Changes
                  </ButtonStyleBlue>
                </>
              ) : (
                <span />
              )}
            </GridToolbar>
            <Column
              field="selected"
              width="50px"
              headerSelectionValue={
                this.state.data.findIndex(
                  dataItem => dataItem.selected === false
                ) === -1
              }
            />
            {columnNames.map(name => {
              if (name == "Thumbnail") {
                return (
                  <Column
                    key={name}
                    field={name}
                    width="100px"
                    style={{border: "none"}}
                    cell={props => (
                      <td>
                        <img
                          src={props.dataItem[props.field]}
                          style={{
                            width: rounded ? "60px" : "90px",
                            height: rounded ? "60px" : "50px",
                            objectFit: "cover",
                            borderRadius: rounded ? "50%" : "0px"
                          }}
                        />
                      </td>
                    )}
                  />
                );
              } else {
                return (
                  <Column
                    key={name}
                    field={name}
                    title={name.replace(/([A-Z])/g, " $1").trim()}
                  />
                );
              }
            })}
          </Grid>
        )}
      </CardStyles>
    );
  }

  enterEdit(dataItem, field) {
    if (dataItem.inEdit && field === this.state.editField) {
      return;
    }
    this.exitEdit();
    dataItem.inEdit = field;
    this.setState({
      editField: field,
      data: this.state.data
    });
  }

  exitEdit() {
    this.state.data.forEach(d => {
      d.inEdit = undefined;
    });
    this.setState({
      data: this.state.data,
      editField: undefined
    });
  }

  saveChanges() {
    this.props.data.splice(0, this.props.data.length, ...this.state.data);
    this.setState({
      data: this.props.data.map(cloneProduct),
      editField: undefined,
      changes: false
    });
  }

  cancelChanges() {
    this.setState({
      data: this.props.data.map(cloneProduct),
      changes: false
    });
  }

  itemChange(event) {
    event.dataItem[event.field] = event.value;
    this.setState({
      changes: true
    });
  }
}

export default GridContainer;
