import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5em 0;
  padding: 1em;
`;

export default Form;

export const LoginForm = styled(Form)`
  img {
    width: 45%;
    height: 60px;
    object-fit: contain;
    margin: 1em 0;
  }
  span {
    font-weight: 400;
    font-size: 18px;
    color: ${props => props.theme.colors.lightblack};
    margin: 1em 0;
  }
  button {
    margin: 1em 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .secondaryButtons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 1em 0;
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.blue};
    }
  }
`;

export const AddCategoryForm = styled(Form)`
  .thumbnailoption {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    height: 100px;
    object-fit: contain;
    margin: 1em 0;
  }
  span {
    font-weight: 400;
    font-size: 18px;
    color: ${props => props.theme.colors.lightblack};
    margin: 1em 0;
  }
  button {
    margin: 1em 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .priamryButtons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin-top: 2em;
    button {
      margin: 0 0.5em;
    }
  }
`;
