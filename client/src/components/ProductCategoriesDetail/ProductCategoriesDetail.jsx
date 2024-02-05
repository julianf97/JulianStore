/* eslint react/prop-types: 0 */
import React, { useEffect, useState } from "react";
import { Categories, ContainerProductCategories, InnerProductCategories } from "./ProductCategoriesDetail.js";
import { ItemCategoryContext } from '../../context/ItemCategoryContext/ItemCategoryContext.jsx';
import { useContext } from "react";

export default function ProductCategoriesDetail() {
  
  const { activeItemCategory, setActiveItemCategory, storedCategories, setStoredCategories } = useContext(ItemCategoryContext);

  // Leer activeItemCategory desde el localStorage al montar el componente
  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('activeItemCategory')) || [];
    setStoredCategories(storedCategories);
    setActiveItemCategory(storedCategories);
  }, [setActiveItemCategory]);

  // Guardar activeItemCategory en el localStorage al cambiar
  useEffect(() => {
    if (activeItemCategory) {
      localStorage.setItem('activeItemCategory', JSON.stringify(activeItemCategory));
    }
  }, [activeItemCategory]);

  return (
    <ContainerProductCategories>
      <InnerProductCategories>
        <Categories>
          {storedCategories && storedCategories.map((category, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span> - </span>}
              <span>{category.name}</span>
            </React.Fragment>
          ))}
        </Categories>
      </InnerProductCategories>
    </ContainerProductCategories>
  );
}
