import React, { useEffect } from "react";
import ProductPreview from "./ProductPreview";

import * as S from "./styles"

function ProductModal({data, callback}) {
    useEffect(() => {
        document.body.style.overflowY = "hidden";

        return () => {
            document.body.style.overflowY = "unset"
        };
    }, []);

    return (
        <S.Container>
            <ProductPreview
                data={data}
                callback={callback}
            />
        </S.Container>
    )
}

export default ProductModal
