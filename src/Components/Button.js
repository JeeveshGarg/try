import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: #ff0290;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  line-height: 50px;
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align:center;
  height: 60px;
  letter-spacing: 0.2px;
  margin-top: ${(props) => (props.primary ? "20px" : "0")};
`;
const Button = ({ children, primary }) => {
  return (
    <div>
      <StyledButton data-tf-popup="AdHfxkOD" primary={primary}>
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;
