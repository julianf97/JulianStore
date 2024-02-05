/* eslint react/prop-types: 0 */
import React, { useEffect, useState } from "react";
import { Categories, ContainerProductCategories, InnerProductCategories } from "./ProductCategories";
import useCategoryItem from "../../hooks/useCategoryItem";

export default function ProductCategories({ items }) {
  const { categoryText, getCategoryItem } = useCategoryItem(); // Utiliza el custom hook
  const [activeCategories, setActiveCategories] = useState([]);

  const usableItems = items ? items.items : [];

  useEffect(() => {
    // Limpiar el localStorage antes de realizar una nueva búsqueda
    localStorage.removeItem('searchItems');
    
    setActiveCategories([])

    fetchCategoryDataForItems();
  }, [items]);

  useEffect(() => {
    // Verificar si la clave 'activeItemCategory' está en el localStorage
    const storedCategories = localStorage.getItem('activeItemCategory');
    if (storedCategories) {
      setActiveCategories(JSON.parse(storedCategories));
    }
  }, []);

  const fetchCategoryDataForItems = () => {
    if (usableItems !== undefined && usableItems.length > 0) {
      const firstItem = usableItems[0];

      if (firstItem.category_id) {
        getCategoryItem(firstItem.category_id);
      } else {
        console.error('ID de categoría de artículo no válido:', firstItem.category_id);
      }
    }
  };

  const renderCategories = () => {
    // Si hay categorías activas, renderízalas
    if (activeCategories.length > 0) {
      return activeCategories.map((category, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span> - </span>}
          <span>{category.name}</span>
        </React.Fragment>
      ));
    }

    // De lo contrario, renderiza las categorías obtenidas del API
    return categoryText.map((category, index) => (
      <React.Fragment key={index}>
        {index > 0 && <span> - </span>}
        <span>{category.name}</span>
      </React.Fragment>
    ));
  };

  return (
    <ContainerProductCategories>
      <InnerProductCategories>
        <Categories>
          {renderCategories()}
        </Categories>
      </InnerProductCategories>
    </ContainerProductCategories>
  );
}