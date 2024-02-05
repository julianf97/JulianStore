/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";
import {
    ContainerProducts,
    DescriptionContainer,
    ImgProductSection,
    InnerContainerProducts,
    LocationProductContainer,
    PriceAndDescription,
    PriceContainer,
    ProductSection, 
    DefaultContainer
} from "./Products.styled";

export default function Products({ items }) {
    const storedSearchItems = localStorage.getItem('searchItems');
    const itemsFromStorage = storedSearchItems ? JSON.parse(storedSearchItems) : null;
    const usableItems = (itemsFromStorage ? itemsFromStorage.items : (items ? items.items : [])) || [];

    console.log(items);

    return (
        <ContainerProducts>
            <InnerContainerProducts>
                {usableItems.length === 0 ? (
                    <DefaultContainer>
                        <h1>Realiza una búsqueda</h1>
                    </DefaultContainer>
                ) : (
                    <ProductSection>
                        {usableItems.map((item) => (
                            <Link className="link" to={`/productdetail/${item.id}`} key={item.id}>
                                <ImgProductSection>
                                    <img src={item.picture} alt="foto" />
                                </ImgProductSection>
                                <PriceAndDescription>
                                    <PriceContainer>
                                        <h3>{`${item.price.currency} $${item.price.amount}`}</h3>
                                    </PriceContainer>
                                    <DescriptionContainer>
                                        <h5>{item.title}</h5>
                                    </DescriptionContainer>
                                </PriceAndDescription>
                                <LocationProductContainer>
                                    <h6>{item.seller_address.state}</h6>
                                    <h6>{item.seller_address.city}</h6>
                                </LocationProductContainer>
                            </Link>
                        ))}
                    </ProductSection>
                )}
            </InnerContainerProducts>
        </ContainerProducts>
    );
}
