import React, { useRef } from "react";

import * as S from "./styles";
import close from "../../assets/images/close.png";
import { withOrientationChange } from "react-device-detect";
import { useClickOutside } from "../../utils/hooks/useClickOutside";

function ProductPreview({data, callback, isLandscape}) {
    const {id, name, description, image} = data;
    const ref = useRef(null);

    useClickOutside(ref, callback);

    return (
        <S.PreviewContainer ref={ref} isLandscape={isLandscape}>
            <S.Close
                onClick={callback}
                src={close}
                alt="close icon"
            />
            <S.ImageContainer>
                <img src={image} alt={`${name}-${id}`}/>
            </S.ImageContainer>
            <S.Section>
                <S.Name>{name}</S.Name>
                <S.Description>{description}</S.Description>
            </S.Section>
        </S.PreviewContainer>
    )
}

export default withOrientationChange(ProductPreview);
