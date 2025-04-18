import type { AppProps } from "next/app";
import { Jost } from "next/font/google";

import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { ConfigProvider } from "antd";

import "@/styles/global.css";

const jost = Jost({
  variable: "--font-jost"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jost.variable} font-sans`}>
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#E88D6A"
            },
            components: {
              Checkbox: {
                colorPrimary: "#E88D6A"
              }
            }
          }}
        >
          <Component {...pageProps} />
        </ConfigProvider>
      </AntdRegistry>
    </main>
  );
}
