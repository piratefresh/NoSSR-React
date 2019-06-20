import styled from "styled-components";

const BaseButtonStyle = styled.button`
  display: inline-block;
  background: ${props => (props.disabled ? "#1f98f4" : "#ffffff")};
  box-shadow: 0 2px 15px 1px rgba(18, 106, 211, 0.11);
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: ${props => (props.small ? "14px" : "16px")};
  color: ${props => (props.disabled ? "#fff" : "#4e5a69")};
  letter-spacing: 0;
  text-align: right;
  padding: ${props => (props.small ? "0.5em 1em" : "0.7em 1.5em")};
  border: none;
  align-self: center;
  margin: 0 5px;
  :active {
    border: none;
  }
  :focus {
    border: none;
    outline: none;
  }
`;

export default BaseButtonStyle;

export const ButtonStylePrimary = styled(BaseButtonStyle)`
  background: ${props => (props.disabled ? "#1f98f4" : "#ffffff")};
  color: ${props => (props.disabled ? "#fff" : "#4e5a69")};
`;
export const ButtonStyleBlue = styled(BaseButtonStyle)`
  background: #1f98f4;
  color: #fff;
`;
export const ButtonStyleSecondary = styled(BaseButtonStyle)`
  border: 1px solid #ecf4fd;
  box-shadow: none;
`;
export const ButtonGraphStylePrimary = styled(BaseButtonStyle)`
  background-color: #1f98f4;
  border-radius: 20px;
  box-shadow: none;
  color: #fff;
`;
export const ButtonGraphStyleSecondary = styled(BaseButtonStyle)`
  box-shadow: none;
`;
export const ButtonDatePicker = styled(BaseButtonStyle)`
  background: #f0f6ff;
  border-radius: 5px;
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #617182;
  letter-spacing: 0;
  padding: 0.2em 0.5em;
  box-shadow: none;
`;
export const ButtonRoundedBlue = styled(BaseButtonStyle)`
  background: #1f98f4;
  border-radius: 50%;
  box-shadow: none;
  color: #fff;
  padding: 0.3em 0.5em;
`;
export const ButtonRoundedRed = styled(BaseButtonStyle)`
  background: #f44336;
  border-radius: 50%;
  box-shadow: none;
  padding: 0.3em 0.5em;
`;

export const ButtonRoundedGreen = styled(BaseButtonStyle)`
  background: #4caf50;
  border-radius: 50%;
  box-shadow: none;
  padding: 0.5em 0.5em;
`;
export const ButtonHalfRounded = styled(BaseButtonStyle)`
  background: #1f98f4;
  border-radius: 20px;
  box-shadow: none;
  padding: 0.5em 2em;
  color: #fff;
`;
export const ButtonRoundedOverlay = styled(BaseButtonStyle)`
  background: #1f98f4;
  border-radius: 50%;
  box-shadow: none;
  padding: 0.1em 0.2em;
`;
export const ButtonStyleLogin = styled(BaseButtonStyle)`
  background: #1f98f4;
  color: #fff;
  width: 100%;
  border-radius: 20px;
`;
