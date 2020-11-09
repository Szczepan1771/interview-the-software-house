import React from 'react';

import { render } from '../../tests';

import Header from "./index";

describe("Header", () => {
    test("Active Filter is visible", async () => {
        const {getByText} = render(
            <Header
                filterConfig={{
                    filter: true,
                    handleFilter: () => {
                    },
                    filterArray: [{id: 1, name: "Active", defaultValue: false}]
                }}
            />
        );
        expect(getByText('Active')).toBeInTheDocument();
    });

    test("Promo Filter is visible", async () => {
        const {getByText} = render(
            <Header
                filterConfig={{
                    filter: true,
                    handleFilter: () => {
                    },
                    filterArray: [{id: 1, name: "Promo", defaultValue: false}]
                }}
            />
        );
        expect(getByText('Promo')).toBeInTheDocument();
    });

    test("Other Filter is visible", async () => {
        const {getByText} = render(
            <Header
                filterConfig={{
                    filter: true,
                    handleFilter: () => {
                    },
                    filterArray: [{id: 1, name: "Other", defaultValue: false}]
                }}
            />
        );
        expect(getByText('Other')).toBeInTheDocument();
    });

    test("Many Filter is visible", async () => {
        const {getByText} = render(
            <Header
                filterConfig={{
                    filter: true,
                    handleFilter: () => {
                    },
                    filterArray: [
                        {id: 1, name: "Active", defaultValue: false},
                        {id: 2, name: "Promo", defaultValue: false},
                        {id: 3, name: "Other", defaultValue: false},
                        {id: 4, name: "Next", defaultValue: false}
                    ]
                }}
            />
        );
        expect(getByText('Active')).toBeInTheDocument();
        expect(getByText('Promo')).toBeInTheDocument();
        expect(getByText('Other')).toBeInTheDocument();
        expect(getByText('Next')).toBeInTheDocument();
    });

    test("Search is visible", async () => {
        const {getByLabelText} = render(
            <Header
                searchConfig={{search: true, handleSearch: (e) => console.log(e)}}
            />
        );
        getByLabelText("search-input");
    });

    test("Search and Filter are visible", async () => {
        const {getByText, getByLabelText} = render(
            <Header
                searchConfig={{
                    search: true, handleSearch: () => {
                    }
                }}
                filterConfig={{
                    filter: true,
                    handleFilter: e => console.log(e),
                    filterArray: [{id: 1, name: "Active", defaultValue: false}]
                }}
            />
        );
        getByLabelText("search-input");
        expect(getByText('Active')).toBeInTheDocument();
    });
});
