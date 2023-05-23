import React from 'react';
import { render } from '@testing-library/react-native';

import AccountCardBase from './account-card-base';

describe('AccountCardBase', () => {
  it('should render successfully', () => {
    const { root } = render(<AccountCardBase />);
    expect(root).toBeTruthy();
  });
});
