// see https://testing-library.com/docs/react-testing-library/setup#custom-render
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import GlobalStyles from "../utils/globalStyles";

const Wrapper = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Router>
                {children}
            </Router>
        </ThemeProvider>
    );
};

function customRender(ui, options) {
    return render(ui, {wrapper: options?.wrapper ?? Wrapper, ...options});
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
