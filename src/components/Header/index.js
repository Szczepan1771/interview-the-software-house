import React from "react";
import {useHistory} from "react-router-dom";
import { isMobileOnly } from "react-device-detect";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { AppRoute } from "../../routing/AppRoute.enum";

function Header({searchConfig, filterConfig}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(AppRoute.home);
    };

    const headerContent = () => {
        if (!isMobileOnly) {
            return (
                <DesktopHeader
                    searchConfig={searchConfig}
                    filterConfig={filterConfig}
                    handleClick={handleClick}
                />
            )
        }

        return (
            <MobileHeader
                searchConfig={searchConfig}
                filterConfig={filterConfig}
                handleClick={handleClick}
            />
        )
    };

    return headerContent()
}

export default Header
