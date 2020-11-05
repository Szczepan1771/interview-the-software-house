import React from 'react';

import * as S from "./styles"
import emptyIcon from "../../assets/images/empty-icon.png";

function NoResultsContent({text}) {
    return (
        <S.Container>
            <img src={emptyIcon} alt="empty"/>
            <S.PrimaryText>Ooops... It's empty here</S.PrimaryText>
            <S.SecondaryText>There are no ${text} on the list</S.SecondaryText>
        </S.Container>
    )
}

export default NoResultsContent
