import MyNewsLayout from "@/components/myNewsLayout/MyNewsLayout.component";
import "@/styles/globals.scss";
import { MyNewsHeader } from "@/types/header.types";
import axios from "axios";
import { NextPageContext } from "next";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
type AppOwnProps = { header: MyNewsHeader[] | null };

export default function App({
  Component,
  pageProps,
  header,
}: AppProps & AppOwnProps) {
  return (
    <main className={`${inter.className} mainContainer`}>
      <MyNewsLayout header={header}>
        <Component {...pageProps} />
      </MyNewsLayout>
    </main>
  );
}

App.getInitialProps = async (context: AppContext): Promise<AppOwnProps> => {
  //get data for header.
  try {
    // get blog details
    const req = context.ctx.req;
    const data = await axios.get<MyNewsHeader[]>(
      `${req?.headers["x-forwarded-proto"]}://${req?.headers["x-forwarded-host"]}/api/getHeader`
    );
    return { header: data?.data };
  } catch (e) {
    //redirect if error.
    //console.log(e);
    return { header: null };
  }
};
