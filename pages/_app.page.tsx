import {CssBaseline, ThemeProvider} from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import {theme} from "dh-marvel/styles/material-theme";
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <LayoutGeneral>
      <Component {...pageProps} />
    </LayoutGeneral>
    <style jsx global>{`
              /* Other global styles such as 'html, body' etc... */

              #__next {
                height: 100%;
              }
            `}</style>
  </ThemeProvider>
}

export default MyApp
