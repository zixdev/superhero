import React from 'react';
import { render } from '@testing-library/react-native';

import SharedProviders from './shared-providers';

describe('SharedProviders', () => {
  it('should render successfully', () => {
    const { root } = render(<SharedProviders />);
    expect(root).toBeTruthy();
  });
});
