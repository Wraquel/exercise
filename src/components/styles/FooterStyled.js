import styled from "styled-components";

export const FooterStyled =styled.div`
background-color: ${({ theme }) => theme.colors.footer};
  color: #00252E;
  padding: 70px 0 30px;
  ul {
    list-style-type: none;
  }
  ul li {
    letter-spacing: 1.3px;
    line-height: 1.5;
    margin:20px;
    text-align: left;
    
  }
  p {
    margin: 0px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }`
