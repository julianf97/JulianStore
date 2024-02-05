/* eslint react/prop-types: 0 */
import { InnerContainer, InputContainer, LogoContainer, SearchBarContainer, IconSearchContainer } from "./SearchBar.styled";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../../public/logo.png";

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Limpiar el localStorage antes de realizar una nueva búsqueda
    localStorage.removeItem('searchItems');

    console.log("Valor del input:", inputValue);

    // Convertir el string a una cadena JSON
    const jsonInputValue = JSON.stringify(inputValue);

    // Enviar el valor como parte de la solicitud
    onSearch(jsonInputValue);
  };

  const handleKeyDown = (event) => {
    // Verificar si la tecla presionada es Enter (código 13)
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <SearchBarContainer>
      <InnerContainer>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <InputContainer>
          <input
            placeholder="Nunca dejes de buscar"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Agregar el manejador de eventos onKeyDown
          />
        </InputContainer>
        <IconSearchContainer onClick={handleSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconSearchContainer>
      </InnerContainer>
    </SearchBarContainer>
  );
}
