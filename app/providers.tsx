"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProviderProps } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
