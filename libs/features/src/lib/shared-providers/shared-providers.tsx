import React from 'react';

import ThemeProvider from '../theme-provider/theme-provider';

export interface SharedProvidersProps {
  children: React.ReactNode
}

export function SharedProviders({ children }: SharedProvidersProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default SharedProviders;
