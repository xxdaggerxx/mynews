import { ReactNode } from "react";
import MyNewsNav from "../myNewsNav/MyNewsNav.component";

import styles from "./myNewsLayout.module.scss";
import Footer from "../footer/Footer.component";
import { MyNewsHeader } from "@/types/header.types";

const MyNewsLayout = (props: {
  children: ReactNode;
  header: MyNewsHeader[] | null;
}) => {
  return (
    <main className={styles.myNewsLayout}>
      <hr />
      <header>MyNews</header>
      <DoubleHr />
      <MyNewsNav header={props.header} />
      <DoubleHr />
      {props.children}
      <Footer />
    </main>
  );
};

export default MyNewsLayout;

const DoubleHr = () => {
  return (
    <>
      <hr />
      <hr />
    </>
  );
};
