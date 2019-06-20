import React from "react";
import styled from "styled-components";
import {ButtonStyleSecondary, ButtonStyleBlue} from "../buttons";
import Input from "../form/Input";
import {TextArea} from "../form/TextArea";
import FormField from "../form/FormField";
import {AddCategoryForm} from "../form/Form";
import Slider from "../form/Slider";
import MiniGrid from "../grid/MiniGrid";
// data
import users from "../../data/users";

const Title = styled.h3`
  display: flex;
  align-self: flex-start;
  margin-bottom: 2em;
`;
const MiniGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  .mini-grid-wrapper {
    margin-top: 0.5em;
  }
  span {
    margin-bottom: 0;
  }
`;

function AddForm() {
  return (
    <AddCategoryForm>
      <Title>Add New Template</Title>
      <FormField labelName="Template Name">
        <Input className="text-input" />
      </FormField>
      <FormField labelName="Template Description">
        <TextArea className="text-input" rows="4" cols="50" />
      </FormField>
      <FormField labelName="Status">
        <Slider />
      </FormField>
      <MiniGridContainer>
        <div className="mini-grid-wrapper">
          <span>All Users</span>
          <MiniGrid data={users} resize />
        </div>

        <div className="mini-grid-wrapper">
          <span>In Group</span>
          <MiniGrid data={users} resize />
        </div>
      </MiniGridContainer>

      <div className="priamryButtons">
        <ButtonStyleSecondary small>Cancel</ButtonStyleSecondary>
        <ButtonStyleBlue small>Save</ButtonStyleBlue>
      </div>
    </AddCategoryForm>
  );
}

export default AddForm;
