import styled from "styled-components";

export const ContainerProducts = styled.div`
  // Mobile
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
`;

export const InnerContainerProducts = styled.section`
  // Mobile
  @media (max-width: 600px) {
    width: 70%;
    height: 100%;
    background-color: #fff !important;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 70%;
    height: 100%;
    background-color: #fff !important;
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
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
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
    width: 100px;
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
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 150px;
    height: 90%;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
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
    width: 50px;
    height: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 400px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 50px;
    height: 60px;
    display: flex;
    align-items: end;
    h3{
        font-size: 0.8rem;
        cursor: pointer;
    }
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 300px;
    height: 80px;
    display: flex;
    align-items: end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 1.5rem;
        cursor: pointer;
    }
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
    width: 110px;
    height: 150px;
    display: flex;
    h5{
        font-size: 0.8rem;
        padding-top: 10px;
        cursor: pointer;
    }
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 300px;
    height: 150px;
    display: flex;
    justify-content: center;
    h5{
        font-size: 1rem;
        padding-top: 10px;
        cursor: pointer;
    }
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
    width: 300px;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: none;
    h6{
        font-size: 1rem;
        margin-top: 40px;
        cursor: pointer;
    }
  
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h6{
        font-size: 0.8rem;
        margin-top: 40px;
        cursor: pointer;
    }
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 300px;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h6{
        font-size: 1rem;
        margin-top: 40px;
        cursor: pointer;
    }
  }
`;

export const DefaultContainer = styled.div`
  // Mobile
  @media (max-width: 600px) {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;