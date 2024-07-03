import Head from "next/head";
import styles from "./trending.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Item, MyNewsSidebar } from "@/types/sidebar.types";
import dayjs from "dayjs";
const Trending = () => {
  const [trendingItems, setTrendingItems] = useState<Item[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data: MyNewsSidebar = (
        await axios.get<MyNewsSidebar>(`/api/getSidebar`)
      )?.data;
      setTrendingItems(data.items);
    };

    getData();
  }, []);

  return (
    <aside className={styles.trending}>
      <h3>TRENDING</h3>

      {trendingItems.map((x) => (
        <section key={x.id}>
          <h4>{x.section_label.toUpperCase()}</h4>

          <Image
            src={x.image}
            alt={x.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />

          <Link href={x.url}>{x.title}</Link>
          <hr />
          <span className={styles.caption}>
            Published on {dayjs(x.publish_date).format("MMMM D, YYYY")}
          </span>
        </section>
      ))}
    </aside>
  );
};

export default Trending;
