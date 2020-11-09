import React from 'react';
import { render } from '../../tests';

import { Products } from './Products';

describe('Products', () => {
    window.HTMLElement.prototype.scrollIntoView = function () {};
    const {getByText} = render(<Products/>);

    test('Displays page header', async () => {
        expect(getByText('join.tsh.io')).toBeInTheDocument();
    });

});

