"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProviderProps } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
