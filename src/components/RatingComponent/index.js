import React from 'react';
import star from "../../assets/images/star.png";
import starBorder from "../../assets/images/star_border.png";

import * as S from "./styles";

const starsHelper = [1, 2, 3, 4, 5];

function RatingComponent({rating}) {
    return (
        <S.Container>
            {starsHelper.map(item => (
                <img
                    key={`star-${item}`}
                    src={item <= rating ? star : starBorder}
                    alt={`star-${item}`}
                />
            ))}
        </S.Container>
    )
}

export default RatingComponent
