import React, {Component} from "react";
import styled from "styled-components";
import ResourceGrid from "../grid/Grid";
import {MiniCardStyles as MiniCard} from "../cards";
import TreeView from "../treelist/TreeView";
import products from "../../data/products.js";
import category from "../../data/category";

const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 6em;
`;
class TableSection extends Component {
  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  };
  render() {
    return (
      <TableContainer>
        <MiniCard
          style={{padding: "7px 0", marginRight: "2em", marginTop: "2.5em"}}
        >
          <TreeView title="Categories" data={category} />
        </MiniCard>
        <ResourceGrid style={{}} data={products[0].data} />
      </TableContainer>
    );
  }
}

export default TableSection;
