import "@/styles/globals.css";
import type { AppProps } from "next/app";

import TodosContextProvider from "@/store/todos-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TodosContextProvider>
      <Component {...pageProps} />
    </TodosContextProvider>
  );
}
