import React from 'react';

import { NativeBaseProvider } from "native-base";

export interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NativeBaseProvider>
      {children}
    </NativeBaseProvider>
  );
};

export default ThemeProvider;
