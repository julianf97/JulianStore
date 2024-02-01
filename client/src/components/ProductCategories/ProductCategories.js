import styled from "styled-components";

export const ContainerProductCategories = styled.div`
  // Mobile
  @media (max-width: 600px) {
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center
  }
`;

export const InnerProductCategories = styled.div`
  // Mobile
  @media (max-width: 600px) {
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 70%;
    height: 100%;
  }
`;


export const Categories = styled.div`
  // Mobile
  @media (max-width: 600px) {
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 91%;
    height: 80%;
    display: flex;
    align-items: center;
    color: #808080; 
    span{
        font-size: 0.8rem;
        margin-left: 8px;
    }
  }
`;