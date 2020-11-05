import React, {useState} from 'react';

function StyledCheckbox({item, callback}) {
    const [checked, setChecked] = useState(item.defaultValue);

    const handleChange = () => {
      setChecked(!checked) ;
      callback && callback(!checked);
    };

    return (
        <div>
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
        </div>
    )
}

export default StyledCheckbox
