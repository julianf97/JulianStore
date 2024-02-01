import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import ProductCategories from '../ProductCategories/ProductCategories.jsx';
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
  const [items, setItems] = useState({});

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://localhost:3000/api/items?q=${query}`);
      
      const data = await response.json();

      setItems(data)

      console.log(items)

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
        setProductDescription(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDescription();
  }, [itemId]);

  console.log(productDetails);

  if (!productDetails) {
    return <div>Cargando...</div>; // Otra opción es renderizar un spinner u otro indicador de carga
  }

  if (!productDescription) {
    return <div>Cargando...</div>; // Otra opción es renderizar un spinner u otro indicador de carga
  }

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <ProductCategories />
      <ContainerProductDetail>
        <InnerContainerProductDetail>
          <ImgAndPriceProductDetail>
            <ImgProductDetail>
              <img src={productDetails.item.img[0].secure_url} alt={productDetails.item.title} />
            </ImgProductDetail>
            <PriceProductDetail>
              <CantidadProductDetail>
              <span>{productDetails.item.condition === "new" ? "Nuevo" : "Usado"} - {productDetails.item.available_quantity} vendidos</span>
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
