import React, {useEffect, useState} from "react";
import Tree from "./Tree";
import styled from "styled-components";
import lodash from "lodash-es";
import deepdash from "deepdash-es";
import rename from "deep-rename-keys";
const _ = deepdash(lodash);

const CardContent = styled.div`
  display: flex;
  height: 100%;
  width: 250px;
  flex-direction: column;
  padding: 1em;
  .cardTitle {
    font-size: 0.875rem;
    letter-spacing: 0.52px;
    color: ${props => props.theme.colors.grey};
    border-bottom: ${props => `${props.theme.colors.lightgrey} 1px solid`};
    width: 100%;
    min-height: 45px;
    margin-top: 0.7em;
    overflow: hidden;
    @media (max-width: 1000px) {
      text-align: center;
    }
  }
`;

function TreeCardSection(props) {
  const [data, setData] = useState({});
  // On mount we run a deep map function to make a new obj with proper formattation for treelist
  useEffect(() => {
    const formattedData = _.mapDeep(
      props.data,
      (value, key, parent, ctx) => {
        return {text: value.Name, id: value.ID};
      },
      {childrenPath: "Children"}
    );
    // mapdeep stores children in "Children" key so need to rename that to items for kendo UI
    const renamedObj = rename(formattedData, key => {
      if (key === "Children") return "items";
      return key;
    });
    // We set the new renamed obj in state
    renamedObj.expanded = true;
    const arr = [renamedObj];
    setData(arr);
  }, []);
  return (
    <CardContent>
      {props.title ? (
        <div className="cardTitle">
          <h3>{props.title ? props.title : ""}</h3>
        </div>
      ) : null}
      <Tree data={data} />
    </CardContent>
  );
}

export default TreeCardSection;
