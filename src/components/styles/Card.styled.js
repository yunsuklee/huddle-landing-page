import styled from "styled-components";

export const StyledCard = styled.div`
 display: flex;
 align-items: center;
 background-color: #fff;
 border-radius: 15px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
 margin: 40px 0;
 padding: 60px;
 flex-direction: ${({ layout }) => layout || 'row'};

 img {
  width: 80%;
 }
 
 & > div { // set inmediate div from this element to flex 1 to set the alignment
  flex: 1;
 }

 @media(max-width: ${({ theme }) => theme.mobile}) {
  flex-direction: column;
 }
`

