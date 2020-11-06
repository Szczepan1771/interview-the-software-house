import React from 'react';
import StyledCheckbox from "../StyledCheckbox";

import * as S from "./styles";

function FilterComponent({filterArray, callback}) {
    return (
        <S.Container>
            {filterArray.map(item => (
                <StyledCheckbox
                    callback={(value) => callback(item.name.toLowerCase(), value)}
                    key={`${item.name}-${item.id}`}
                    item={item}
                />
            ))}
        </S.Container>
    )
}

export default FilterComponent;
