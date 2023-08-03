import GlobalProvider from "@/Context/GlobalProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Syncopate } from "next/font/google";

const fontFamily = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fontFamily.className}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </main>
  );
}
