import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { PostProvider } from "@/lib/PostContext";
import { ModalProvider } from "@/lib/ModalContext";
import "@/styles/globals.css";
import Layout from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <PostProvider>
        <ModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalProvider>
      </PostProvider>
    </ThemeProvider>
  );
}
