import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from './theme-provider';

describe('ThemeProvider', () => {
  it('should render successfully', () => {
    const { root } = render(<ThemeProvider />);
    expect(root).toBeTruthy();
  });
});
