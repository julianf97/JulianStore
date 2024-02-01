import styled from "styled-components";

export const ContainerProducts = styled.div`
  // Mobile
  @media (max-width: 600px) {
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
`;

export const InnerContainerProducts = styled.section`
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
    background-color: #fff !important;
  }
`;

export const ProductSection = styled.article`
  // Mobile
  @media (max-width: 600px) {
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width:  100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .link{
      display: flex;
      text-decoration: none;
      width: 100%;
      transition: 0.3s;
    }
    h3{
      color: #000;
    }
    h5{
      color: #000;
    }
    h6{
      color: #000;
    }
    .link:hover{
      background-color: rgba(184, 184, 184, 0.637); 
    }
  }
`;

export const ImgProductSection = styled.div`
  // Mobile
  @media (max-width: 600px) {
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 300px;
    height: 90%;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    img{
        width: 50%;
        height: 50%;
        object-fit: cover;
        cursor: pointer;
    }
  }
`;

export const PriceAndDescription = styled.div`
  // Mobile
  @media (max-width: 600px) {
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 400px;
    height: 90%;
  }
`;

export const PriceContainer = styled.div`
  // Mobile
  @media (max-width: 600px) {
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 300px;
    height: 80px;
    display: flex;
    align-items: end;
    h3{
        font-size: 1.5rem;
        cursor: pointer;
    }
  }
`;

export const DescriptionContainer = styled.div`
  // Mobile
  @media (max-width: 600px) {
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 300px;
    height: 150px;
    display: flex;
    h5{
        font-size: 1rem;
        padding-top: 10px;
        cursor: pointer;
    }
  }
`;

export const LocationProductContainer = styled.div`
  // Mobile
  @media (max-width: 600px) {
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 300px;
    height: 270px;
    display: flex;
    justify-content: center;
    h6{
        font-size: 1rem;
        margin-top: 40px;
        cursor: pointer;
    }
  }
`;