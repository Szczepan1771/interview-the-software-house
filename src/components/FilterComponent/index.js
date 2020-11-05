import React from 'react';
import StyledCheckbox from "../StyledCheckbox";

function FilterComponent({filterArray, callback}) {
    return (
        <div>
            {filterArray.map(item => (
                <StyledCheckbox
                    callback={(value) => callback(item.name.toLowerCase(), value)}
                    key={`${item.name}-${item.id}`}
                    item={item}
                />
            ))}
        </div>
    )
}

export default FilterComponent;
