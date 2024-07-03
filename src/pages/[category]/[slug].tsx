import MetaHeader from "@/components/metaHeader/MetaHeader.component";
import MyNewsLayout from "@/components/myNewsLayout/MyNewsLayout.component";
import Trending from "@/components/trending/Trending.component";
import styles from "@/styles/article.module.scss";
import { NewsArticleType } from "@/types/article.types";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import he from "he";

const NewsArticle = ({ article }: { article: NewsArticleType }) => {
  // create structured data for google
  const title = he.decode(article.title);
  const brief = removeHTML(article.brief);
  const content = article.content
    .find((x) => x.bundle == "text")
    ?.body?.replaceAll("\n\n", "");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    image: [article?.image?.media_image],
    datePublished: article?.byline_detail?.[0]?.created,
    author: [
      {
        "@type": "Person",
        name: article?.byline_detail?.[0]?.title,
        url: article?.byline_detail?.[0]?.url,
      },
    ],
  };

  return (
    <>
      <MetaHeader title={title} description="HEY">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        ></script>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={brief} />
        <meta property="og:image" content={article?.image?.media_image} />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content={article?.byline_detail?.[0]?.title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={brief} />
      </MetaHeader>

      <section className={styles.article}>
        <Trending />
        <article>
          <span className={styles.caption}>
            Written by{" "}
            <Link href={article?.byline_detail?.[0]?.url}>
              {article?.byline_detail?.[0]?.title}
            </Link>
            , Published on {article?.byline_detail?.[0]?.created}
          </span>
          <h1>{he.decode(article.title)}</h1>
          <div
            className={styles.imgContainer}
            style={{ backgroundImage: `url('${article?.image?.media_image}')` }}
          ></div>
          <span
            className={styles.caption}
            style={{
              float: "right",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            {removeHTML(article?.image?.description)}
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html: article?.tldr,
            }}
          ></div>

          <div
            dangerouslySetInnerHTML={{
              __html: content || "",
            }}
          ></div>

          <p></p>
          <h3>Related Topics:</h3>
          <div className={styles.categories}>
            {article.topics.map((x) => (
              <Link key={x.id} href={x.link}>
                {x.name}
              </Link>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default NewsArticle;

interface Params extends ParsedUrlQuery {
  slug: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }

  const { slug, req } = context.params as Params;
  console.log("REQ", context.req.headers);
  try {
    // get blog details
    const data = await axios.get<NewsArticleType[]>(
      `${context.req.headers["x-forwarded-proto"]}://${context.req.headers["x-forwarded-host"]}/api/getArticle?page=${slug}`
    );
    return {
      props: { article: data.data[0] },
    };
  } catch (e) {
    //redirect if error.
    return {
      /*  redirect: {
        permanent: false,
        destination: "/",
      }, */
      props: {},
    };
  }
};

function removeHTML(text: string): string {
  const regex = /(<([^>]+)>)/gi;
  const result = text.replace(regex, "");
  return result;
}
