import React from 'react';
import { render } from '@testing-library/react-native';

import AccountCard from './account-card';

describe('AccountCard', () => {
  it('should render successfully', () => {
    const { root } = render(<AccountCard />);
    expect(root).toBeTruthy();
  });
});
