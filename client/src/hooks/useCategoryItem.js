import { useState } from 'react';
import { ItemCategoryContext } from '../context/ItemCategoryContext/ItemCategoryContext';
import { useContext } from "react";

const useCategoryItem = () => {
  const [categoryText, setCategoryText] = useState([]);
  const { setActiveItemCategory, activeItemCategory } = useContext(ItemCategoryContext);

  const getCategoryItem = async (itemCategoryId) => {
    try {
      const response = await fetch(`https://api.mercadolibre.com/categories/${itemCategoryId}`);
      const data = await response.json();

      if (response.ok) {
        const firstFourElements = data.path_from_root.slice(0, 3);

        setCategoryText(firstFourElements);
        setActiveItemCategory(firstFourElements);
      } else {
        console.error(`Error fetching category data for item ${itemCategoryId}:`, data);
      }
    } catch (error) {
      console.error(`Error fetching category data for item ${itemCategoryId}:`, error);
    }
  };

  return { categoryText, activeItemCategory, getCategoryItem };
};

export default useCategoryItem;
