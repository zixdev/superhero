import React from 'react';
import { render } from '@testing-library/react-native';

import AccountAssetsSend from './account-assets-send';

describe('AccountAssetsSend', () => {
  it('should render successfully', () => {
    const { root } = render(<AccountAssetsSend />);
    expect(root).toBeTruthy();
  });
});
