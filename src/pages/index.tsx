import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MetaHeader from "@/components/metaHeader/MetaHeader.component";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MetaHeader title="Hello world" description="HEY" />
      <main>
        go to article:{" "}
        <Link href={"/singapore/4-room-hdb-resale-flat-sold-100k"}>Here</Link>{" "}
      </main>
    </>
  );
}
