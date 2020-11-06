import React, {useState} from 'react';

import * as S from "./styles";

function StyledCheckbox({item, callback}) {
    const [checked, setChecked] = useState(item.defaultValue);

    const handleChange = () => {
      setChecked(!checked) ;
      callback && callback(!checked);
    };

    return (
        <S.Container>
            <input
                value={checked}
                type="checkbox"
                id={item.id}
                onChange={handleChange}
            />
            <label
                htmlFor={item.id}
            >
                {item.name}
            </label>
        </S.Container>
    )
}

export default StyledCheckbox
