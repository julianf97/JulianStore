/* eslint react/prop-types: 0 */
import {
    ContainerProducts,
    DescriptionContainer,
    ImgProductSection,
    InnerContainerProducts,
    LocationProductContainer,
    PriceAndDescription,
    PriceContainer,
    ProductSection
} from "./Products.styled";
import { Link } from "react-router-dom";

export default function Products({ items }) {

    const usableItems = items ? items.items : [];

    console.log(usableItems)

    return (
        <ContainerProducts>
            <InnerContainerProducts>
                <ProductSection>
                    {usableItems && usableItems.map((item) => (
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
                                <h6>Capital Federal</h6>
                            </LocationProductContainer>
                        </Link>
                        ))
                    }
                </ProductSection>
            </InnerContainerProducts>
        </ContainerProducts>
    );
}
