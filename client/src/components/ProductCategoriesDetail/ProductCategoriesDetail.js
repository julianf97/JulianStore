import styled from "styled-components";

export const ContainerProductCategories = styled.div`
  // Mobile
  @media (max-width: 700px) {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    padding-top: 60px;
  }
  // Ipad
  @media only screen and (min-width: 701px) and (max-width: 1025px) {
    width: 100%;
    height: 40px;
    display: flex;
    padding-top: 40px;
    justify-content: center;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
`;

export const InnerProductCategories = styled.div`
  // Mobile
  @media (max-width: 600px) {
    width: 70%;
    height: 100%;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 70%;
    height: 100%;
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
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
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