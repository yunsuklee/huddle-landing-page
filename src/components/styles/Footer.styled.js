import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
    margin-left: ${({ margin }) => margin || '0'};
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  li:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }  
`