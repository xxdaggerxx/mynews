import Head from "next/head";
import { GetServerSideProps } from "next/types";
import { ParsedUrlQuery } from "querystring";
import { ReactNode } from "react";

const MetaHeader = ({
  title = "Best News in Singapore",
  description = "Most reliable news, 100% true all the time",
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export default MetaHeader;

interface Params extends ParsedUrlQuery {
  slug: string;
}
