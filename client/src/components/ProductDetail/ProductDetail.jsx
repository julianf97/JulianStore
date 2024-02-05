import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import ProductCategoriesDetail from "../ProductCategoriesDetail/ProductCategoriesDetail.jsx"
import { ItemCategoryContext } from '../../context/ItemCategoryContext/ItemCategoryContext.jsx';
import { useContext } from "react";
import useCategoryItem from '../../hooks/useCategoryItem'; // Importa el custom hook

import {
  ContainerProductDetail,
  ImgProductDetail,
  ImgAndPriceProductDetail,
  InnerContainerProductDetail,
  PriceProductDetail,
  CantidadProductDetail,
  TitleProduct,
  PriceProduct,
  BtnBuyProduct,
  ContainerDescriptionDetail,
} from './ProductDetail.styled';

const ProductDetail = () => {
  const { itemId } = useParams(); 
  const [productDetails, setProductDetails] = useState(null);
  const [productDescription, setProductDescription] = useState(null);

  const [newCategoryText, setNewCategoryText] = useState([]);

  const { setActiveItemCategory, setStoredCategories } = useContext(ItemCategoryContext);
  const { getCategoryItem } = useCategoryItem(); // Utiliza el custom hook

  const navigate = useNavigate();

  const handleSearch = async (query) => {
    if (localStorage.getItem('activeItemCategory')) {
      localStorage.removeItem('activeItemCategory');
    }
    
    // Limpiar estados al realizar una nueva búsqueda
    setStoredCategories([]);
    setActiveItemCategory("");

    try {
      const response = await fetch(`http://localhost:3000/api/items?q=${query}`);
      const data = await response.json();

      // Almacena los elementos de la búsqueda en el estado local
      localStorage.setItem('searchItems', JSON.stringify(data));

      console.log(query);
      console.log(data);

      // Utiliza el custom hook para obtener las nuevas categorías
      if (data.items && data.items.length > 0) {
        const firstItem = data.items[0];
        if (firstItem.category_id) {
          await getCategoryItem(firstItem.category_id);

          // Utiliza el custom hook para obtener las nuevas categorías
          const newCategories = await getCategoryItem(firstItem.category_id);
          
          // Almacena las nuevas categorías en el estado local
          setNewCategoryText(newCategories);
        
          // Agrega un console.log para imprimir las categorías
        } else {
          console.error('Invalid item category ID:', firstItem.category_id);
        }
      }

      // Redirigir a la página de productos con la nueva búsqueda
      navigate('/products');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/items/${itemId}`);
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [itemId]);

  useEffect(() => {
    const fetchProductDescription = async () => {
      try {
        const response = await fetch(`https://api.mercadolibre.com/items/${itemId}/description`);
        const data = await response.json();
        setProductDescription(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDescription();
  }, [itemId]);

  if (!productDetails || !productDescription) {
    return <div>Cargando...</div>;
  }

  console.log(productDetails)

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <ProductCategoriesDetail/>
      <ContainerProductDetail>
        <InnerContainerProductDetail>
          <ImgAndPriceProductDetail>
            <ImgProductDetail>
              <img src={productDetails.item.img[0].secure_url} alt={productDetails.item.title} />
            </ImgProductDetail>
            <PriceProductDetail>
              <CantidadProductDetail>
                <span>{productDetails.item.condition === "new" ? "Nuevo" : "Usado"} - {productDetails.item.available_quantity} en stock</span>
              </CantidadProductDetail>
              <TitleProduct>
                <h1>{productDetails.item.title}</h1>
              </TitleProduct>
              <PriceProduct>
                <h3>{`$ ${productDetails.item.price.amount}`}</h3>
              </PriceProduct>
              <BtnBuyProduct>
                <button className="btnBuyProduct"> Comprar </button>
              </BtnBuyProduct>
            </PriceProductDetail>
          </ImgAndPriceProductDetail>
          <ContainerDescriptionDetail>
            <h3>Descripcion del producto</h3>
            <p>{productDescription.plain_text}</p>
          </ContainerDescriptionDetail>
        </InnerContainerProductDetail>
      </ContainerProductDetail>
    </>
  );
};

export default ProductDetail;
