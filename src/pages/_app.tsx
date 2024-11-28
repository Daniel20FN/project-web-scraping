import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SWRConfig
        value={{
          fetcher: (url: string) => fetch(url).then((res) => res.json()),
        }}
      >
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />;
        </ThemeProvider>
      </SWRConfig>
    </RecoilRoot>
  );
}
