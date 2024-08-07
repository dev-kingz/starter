"use client";
import {ThemeProvider} from "next-themes";
import {Provider} from "react-redux";
import {store} from "@/store";

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
