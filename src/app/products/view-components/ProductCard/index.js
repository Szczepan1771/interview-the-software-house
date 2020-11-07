import React, { useState } from 'react';
import RatingComponent from "../../../../components/RatingComponent";
import Button from "../../../../components/Button";

import * as S from "./styles";
import ProductModal from "../../../../components/ProductModal";
import theme from "../../../../utils/theme";

function ProductCard({data}) {
    const {id, name, description, image, rating, active, promo} = data;
    const [isActivePreview, setIsActivePreview] = useState(false);

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
                        propsColors={active ? theme.buttonColors.normalColorButton : theme.buttonColors.inactiveButton}
                        text={active ? "Show details" : "Unavailable"}
                        handleClick={() => active && setIsActivePreview(true)}
                    />
                </div>
            </S.InfoSection>
            {isActivePreview && <ProductModal data={data} callback={() => setIsActivePreview(false)}/>}
        </S.Container>
    )
}

export default ProductCard
