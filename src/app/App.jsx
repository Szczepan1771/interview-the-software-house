import React from 'react';

import { AppRoutes } from '../routing/AppRoutes';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../utils/globalStyles"
import theme from "../utils/theme";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <main>
                <AppRoutes/>
            </main>
        </ThemeProvider>
    );
};
