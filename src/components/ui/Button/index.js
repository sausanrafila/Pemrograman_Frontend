import styled, { css } from "styled-components";


const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};


  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}


      font-size: ${(props) =>
      props.theme.size[props.size] || props.theme.colors["primary"]};

      padding: ${(props) =>
      props.theme.size[props.size] || props.theme.colors["secondary"]};

`;

export default Button;