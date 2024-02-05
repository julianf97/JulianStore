import styled from "styled-components";

export const SearchBarContainer = styled.nav`
  // Mobile
  @media (max-width: 700px) {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FEE500;
    position: fixed;
  }
  // Ipad
  @media only screen and (min-width: 701px) and (max-width: 1025px) {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FEE500;
    position: fixed;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FEE500;
    position: fixed;
  }
`;

export const InnerContainer = styled.div`
  // Mobile
  @media (max-width: 700px) {
    width: 1000px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -50px;
  }
  // Ipad
  @media only screen and (min-width: 701px) and (max-width: 1025px) {
    width: 1000px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -50px;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 1000px;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  // Mobile
  @media (max-width: 700px) {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 60%;
        height: 60%;
        object-fit: cover;
    };
  }
  // Ipad
  @media only screen and (min-width: 701px) and (max-width: 1025px) {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 60%;
        height: 60%;
        object-fit: cover;
    };
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 60%;
        height: 60%;
        object-fit: cover;
    };
  }
`;

export const InputContainer = styled.div`
  // Mobile
  @media (max-width: 700px) {
    width: 200px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    input{
        width: 100%;
        height: 100%;
        outline: none !important;
        border:  none !important;
        padding-left: 10px;
    }
    input::placeholder {
        color: #808080; 
        font-size: 14px; 
    }

  }
  // Ipad
  @media only screen and (min-width: 701px) and (max-width: 1025px) {
    width: 550px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    input{
        width: 100%;
        height: 100%;
        outline: none !important;
        border:  none !important;
        padding-left: 10px;
    }
    input::placeholder {
        color: #808080; 
        font-size: 14px; 
    }
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 750px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    input{
        width: 100%;
        height: 100%;
        outline: none !important;
        border:  none !important;
        padding-left: 10px;
    }
    input::placeholder {
        color: #808080; 
        font-size: 14px; 
    }
  }
`;

export const IconSearchContainer = styled.div`
  // Mobile
  @media (max-width: 700px) {
    width: 40px;
    height: 80%;
    background-color: #EFEDEA;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  // Ipad
  @media only screen and (min-width: 701px) and (max-width: 1025px) {
    width: 40px;
    height: 80%;
    background-color: #EFEDEA;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  // Desktop
  @media only screen and (min-width: 1026px) {
    width: 40px;
    height: 80%;
    background-color: #EFEDEA;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;