import Link from "next/link";
import styles from "./myNewsNav.module.scss";
import { MyNewsHeader } from "@/types/header.types";
import { useRouter } from "next/router";

const MyNewsNav = ({ header }: { header: MyNewsHeader[] | null }) => {
  console.log(header);
  const router = useRouter();
  const { category } = router.query;
  console.log("QUERY", category);
  return (
    <nav className={styles.myNewsNav}>
      {header?.map((x) => (
        <Link
          style={x.alias == category ? { color: "red" } : { color: "black" }}
          href={x.absolute_url || ""}
          key={x.field_id}
        >
          {x.title}
        </Link>
      ))}
    </nav>
  );
};

export default MyNewsNav;
