import React from 'react';
import RatingComponent from "../../../../components/RatingComponent";
import Button from "../../../../components/Button";

import * as S from "./styles";

function ProductCard({data}) {
    const {id, name, description, image, rating, active, promo} = data;
    return (
        <S.Container>
            {promo && <S.PromoIcon>Promo</S.PromoIcon>}
            <S.ImageSection active={active}>
                <img src={image} alt={`product-${id}`}/>
            </S.ImageSection>
            <S.InfoSection>
                <div>
                    <S.ProductName>{name}</S.ProductName>
                    <S.ProductDescription>{description}</S.ProductDescription>
                </div>
                <div>
                    <RatingComponent
                        rating={rating}
                    />
                    <Button
                        active={active}
                        text={active ? "Show details" : "Unavailable"}
                    />
                </div>
            </S.InfoSection>
        </S.Container>
    )
}

export default ProductCard
