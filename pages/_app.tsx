import type { AppProps } from "next/app";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "@fontsource/newsreader/400.css";
import "../styles/site.css";

export default function Moonport({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
