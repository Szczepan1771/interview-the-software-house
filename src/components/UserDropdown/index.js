import React, { useContext, useState, useRef } from 'react';
import { useHistory } from "react-router-dom";

import { AppRoute } from '../../routing/AppRoute.enum';
import { GlobalContext } from "../../app/GlobalContext";
import Button from "../Button";
import theme from "../../utils/theme";

import avatar from "../../assets/images/avatar.png";
import * as S from "./styles"
import { useClickOutside } from "../../utils/hooks/useClickOutside";

const listItems = [
    {
        name: "Logout",
    },
];

function UserDropdown() {
    const history = useHistory();
    const {isLogged, handleLogged} = useContext(GlobalContext);
    const [isActive, setIsActive] = useState(false);
    const listRef = useRef(null);

    const handleClick = (name) => {
        if (name === "Logout") {
            handleLogged(false);
        }
        setIsActive(false);
    };

    const handleLogin = () => {
        history.push(AppRoute.login)
    }

    useClickOutside(listRef, () => setIsActive(false));

    const userDropdown = () => {
        if (history.location.pathname !== AppRoute.login) {
            if (!isLogged) {
                return (
                    <Button
                        text={"Log in"}
                        propsColors={theme.buttonColors.normalWhiteButton}
                        handleClick={handleLogin}
                    />
                )
            }

            return (
                <S.UserDropdownContainer ref={listRef}>
                    <S.AvatarContainer onClick={() => setIsActive(!isActive)}>
                        <img src={avatar} alt="user-avatar"/>
                    </S.AvatarContainer>
                    <S.DropdownList isActive={isActive}>
                        {listItems.map((item, i) => (
                            <S.ListItem
                                onClick={() => handleClick(item.name)}
                                key={`${item}-${i}`}
                            >
                                {item.name}
                            </S.ListItem>
                        ))}
                    </S.DropdownList>
                </S.UserDropdownContainer>
            )
        }

        return null;

    }

    return userDropdown()

}

export default UserDropdown;
