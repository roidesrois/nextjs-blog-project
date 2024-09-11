import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "../utils/front/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Navbar } from "../components/Navbar";

import "react-quill/dist/quill.snow.css";
import "./global.css";

import { Box, CssBaseline } from "@mui/material";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "All Tech posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Navbar />
              {children}
              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
