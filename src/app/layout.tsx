import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import {
  createTheme,
  MantineColorsTuple,
  MantineProvider,
} from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ekspresi",
  description: "",
};

const ekspresiColor: MantineColorsTuple = [
  "#fff0e4",
  "#ffe0cf",
  "#fac0a1",
  "#f69e6e",
  "#f28043",
  "#f06d27",
  "#f06418",
  "#d6530c",
  "#bf4906",
  "#a73c00",
];

const theme = createTheme({
  colors: {
    ekspresi: ekspresiColor,
  },
  primaryColor: "ekspresi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider forceColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
