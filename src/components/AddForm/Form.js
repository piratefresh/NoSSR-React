import React from "react";
import {ButtonStyleSecondary, ButtonStyleBlue} from "../buttons";
import Input from "../form/Input";
import FormField from "../form/FormField";
import {AddCategoryForm} from "../form/Form";
import RadioButton from "../form/RadioButton";
import Slider from "../form/Slider";
import CherryDelivery from "../../images/cherry-delivery.png";

function AddForm() {
  return (
    <AddCategoryForm>
      <img src={CherryDelivery} alt="" />
      <ButtonStyleSecondary small>Add Thumbnail</ButtonStyleSecondary>
      <FormField labelName="Category Name">
        <Input className="text-input" />
      </FormField>
      <FormField labelName="Thumbnail include category name?">
        <div className="thumbnailoption">
          <RadioButton name="yes" id="Yes" />
          <RadioButton name="no" id="No" />
        </div>
      </FormField>
      <FormField labelName="Users required to download this category (Standard Sync)?">
        <Slider />
      </FormField>
      <div className="priamryButtons">
        <ButtonStyleSecondary small>Cancel</ButtonStyleSecondary>
        <ButtonStyleBlue small>Save</ButtonStyleBlue>
      </div>
    </AddCategoryForm>
  );
}

export default AddForm;
