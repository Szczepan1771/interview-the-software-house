import React from 'react';

import { AppRoutes } from '../routing/AppRoutes';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../utils/globalStyles"
import theme from "../utils/theme";
import GlobalContextProvider from "./GlobalContext";

export const App = () => {
    return (
        <GlobalContextProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <main>
                    <AppRoutes/>
                </main>
            </ThemeProvider>
        </GlobalContextProvider>
    );
};
