import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import loginPhoto from "../../assets/images/loginPhoto.png"
import * as S from "./styles";
import { GlobalContext } from "../GlobalContext";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { AppRoute } from "../../routing/AppRoute.enum";
import theme from "../../utils/theme";

export const Login = () => {
    const {handleLogged} = useContext(GlobalContext);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogged(true);
        history.push(AppRoute.home)
    };
    return (
        <S.Container>
            <S.ImageWrapper>
                <img src={loginPhoto} alt="login photo"/>
            </S.ImageWrapper>
            <S.FormContainer>
                <Header/>
                <S.FormSection>
                    <S.Form>
                        <S.Login>Login</S.Login>
                        <InputField
                            title={"Username"}
                            name={"username"}
                            placeholder={"Enter username"}
                        />
                        <InputField
                            title={"Password"}
                            name={"password"}
                            type={"password"}
                            placeholder={"Enter password"}
                        />
                        <Button
                            propsColors={theme.buttonColors.normalColorButton}
                            text={"Log in"}
                            handleClick={handleSubmit}
                        />
                        <S.StyledLink to={AppRoute.login}>Forgot password?</S.StyledLink>
                    </S.Form>
                </S.FormSection>
            </S.FormContainer>
        </S.Container>
    );
};
