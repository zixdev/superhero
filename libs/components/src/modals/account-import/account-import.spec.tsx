import React from 'react';
import { render } from '@testing-library/react-native';

import AccountImport from './account-import';

describe('AccountImport', () => {
  it('should render successfully', () => {
    const { root } = render(<AccountImport />);
    expect(root).toBeTruthy();
  });
});
