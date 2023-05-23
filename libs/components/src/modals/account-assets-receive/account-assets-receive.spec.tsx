import React from 'react';
import { render } from '@testing-library/react-native';

import AccountAssetsReceive from './account-assets-receive';

describe('AccountAssetsReceive', () => {
  it('should render successfully', () => {
    const { root } = render(<AccountAssetsReceive />);
    expect(root).toBeTruthy();
  });
});
