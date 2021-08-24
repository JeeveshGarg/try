import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #ff0290;
  color: white;
  font-size: ${(props) => (props.cardsbtn ? "1em" : "1em")};
  padding: 0.25em 1em;
  border: none;
  border-radius: ${(props) => (props.cardsbtn ? "20px" : "10px")};
  font-weight: bold;
  line-height:  ${(props) => (props.cardsbtn ? "12px" : "50px")};
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align:center;
  height:${(props) => (props.cardsbtn ? "30px" : "60px")};
  letter-spacing: 0.2px;
  margin-top: ${(props) => (props.primary ? "20px" : "0")};
`;
const Button = ({ children, primary,cardsbtn }) => {
  return (
    <div>
      <StyledButton data-tf-popup="AdHfxkOD" primary={primary} cardsbtn={cardsbtn}>
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;
