import styled from "styled-components";

export const ContainerProductDetail = styled.section`
  // Mobile
  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: #EEEE;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 100%;
    height: 100vh;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: #EEEE;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: 100vh;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: #EEEE;
  }
`;

export const InnerContainerProductDetail = styled.article`
  // Mobile
  @media (max-width: 600px) {
    width: 100%;
    height: auto !important;
    height: auto;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    padding-top: 20px;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 70%;
    height: auto !important;
    height: auto;
    display: flex;
    margin-left: -50px;
    background-color: #fff;
    flex-direction: column;
    padding-top: 20px;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 70%;
    height: auto !important;
    height: auto;
    display: flex;
    margin-left: -50px;
    background-color: #fff;
    flex-direction: column;
    padding-top: 20px;
  }
`;

export const ImgAndPriceProductDetail = styled.div`
  // Mobile
  @media (max-width: 600px) {
    display: flex;
    height: 50%;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    display: flex;
    height: 70%;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    display: flex;
    height: 70%;
  }
`;

export const ImgProductDetail = styled.div`
  // Mobile
  @media (max-width: 600px) {
    width: 60%;
    height: 100% !important;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 60%;
    height: 100% !important;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 60%;
    height: 100% !important;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
`;


export const PriceProductDetail = styled.div`
  // Mobile
  @media (max-width: 600px) {
    width: 40%;
    height: 100% !important;
    height: auto;
    display: flex;
    align-items: center;
    background-color: #fff;
    flex-direction: column;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 40%;
    height: 100% !important;
    height: auto;
    display: flex;
    align-items: center;
    background-color: #fff;
    flex-direction: column;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 40%;
    height: 100% !important;
    height: auto;
    display: flex;
    align-items: center;
    background-color: #fff;
    flex-direction: column;
  }
`;

export const CantidadProductDetail = styled.div`
  // Mobile
  @media (max-width: 600px) {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
  }

`;

export const TitleProduct = styled.div`
  // Mobile
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    margin-top: 20px;
    h1{
        font-size: 1rem;
    }
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    h1{
        font-size: 1.6rem;
    }
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    h1{
        font-size: 1.6rem;
    }
  }

`;

export const PriceProduct = styled.div`
  // Mobile
  @media (max-width: 600px) {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    h3{
        font-size: 2rem;
    }
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    h3{
        font-size: 2.5rem;
    }
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    h3{
        font-size: 2.5rem;
    }
  }

`;

export const BtnBuyProduct = styled.div`
  // Mobile
  @media (max-width: 600px) {
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    h3{
        font-size: 2.5rem;
    }
    .btnBuyProduct{
        width: 150px;
        height: 50px;
        background-color: #3783FA;
        outline: none !important;
        border: none !important;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        margin-left: -10px;
    }
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    h3{
        font-size: 2.5rem;
    }
    .btnBuyProduct{
        width: 250px;
        height: 50px;
        background-color: #3783FA;
        outline: none !important;
        border: none !important;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        margin-right: 20px;
    }
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    h3{
        font-size: 2.5rem;
    }
    .btnBuyProduct{
        width: 250px;
        height: 50px;
        background-color: #3783FA;
        outline: none !important;
        border: none !important;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
    }
  }

`;

export const ContainerDescriptionDetail = styled.div`
  // Mobile
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h3{
        margin-top: 15px;
        margin-left: 15px;
    }
    p{
        margin-top: 15px;
        margin-left: 15px;
        color: #808080; 
    }
  }
  // Ipad
  @media only screen and (min-width: 601px) and (max-width: 1025px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h3{
        margin-top: 15px;
        margin-left: 15px;
    }
    p{
        margin-top: 15px;
        margin-left: 15px;
        color: #808080; 
    }
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h3{
        margin-top: 15px;
        margin-left: 15px;
    }
    p{
        margin-top: 15px;
        margin-left: 15px;
        color: #808080; 
    }
  }

`;






