import React from 'react';
import { render } from '@testing-library/react-native';

import AccountCreate from './account-create';

describe('AccountCreate', () => {
  it('should render successfully', () => {
    const { root } = render(<AccountCreate />);
    expect(root).toBeTruthy();
  });
});
