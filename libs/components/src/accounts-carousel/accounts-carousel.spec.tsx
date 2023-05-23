import React from 'react';
import { render } from '@testing-library/react-native';

import AccountsCarousel from './accounts-carousel';

describe('AccountsCarousel', () => {
  it('should render successfully', () => {
    const { root } = render(<AccountsCarousel />);
    expect(root).toBeTruthy();
  });
});
