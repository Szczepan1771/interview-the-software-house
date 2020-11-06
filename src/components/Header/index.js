import React, { useMemo } from "react";

import { isMobileOnly } from "react-device-detect";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header({searchConfig, filterConfig}) {
    return useMemo(() => {
        if (!isMobileOnly) {
            return (
                <DesktopHeader
                    searchConfig={searchConfig}
                    filterConfig={filterConfig}
                />
            )
        }

        return (
            <MobileHeader
                searchConfig={searchConfig}
                filterConfig={filterConfig}
            />
        )
    }, [searchConfig, filterConfig]);
}

export default Header
