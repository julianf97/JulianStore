/* eslint react/prop-types: 0 */
import React from "react";
import { useState, useEffect } from "react";
import { Categories, ContainerProductCategories, InnerProductCategories } from "./ProductCategories";

export default function ProductCategories({ items }) {
  const [categoryText, setCategoryText] = useState([]);

  const usableItems = items ? items.items : [];

  const getCategoryData = async (itemCategoryId) => {
    try {
      const response = await fetch(`https://api.mercadolibre.com/categories/${itemCategoryId}`);
      const data = await response.json();
  
      if (response.ok) {
        const firstFourElements = data.path_from_root.slice(0, 3);
  
        setCategoryText( () => [ ...firstFourElements]);
      } else {
        console.error(`Error fetching category data for item ${itemCategoryId}:`, data);
      }
    } catch (error) {
      console.error(`Error fetching category data for item ${itemCategoryId}:`, error);
    }
  };
  
  useEffect(() => {
    fetchCategoryDataForItems();
  }, [items]);



  const fetchCategoryDataForItems = () => {
    if (usableItems !== undefined) {
      usableItems.forEach(item => {
        if (item.category_id) {
          getCategoryData(item.category_id);
        } else {
          console.error('Invalid item category ID:', item.category_id);
        }
      });
    }
  };



  return (
    <ContainerProductCategories>
      <InnerProductCategories>
        <Categories>
          {categoryText.map((category, index) => (
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
