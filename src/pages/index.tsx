import type { NextPage } from "next";
// import { useEffect } from "react";
import { useGetTodayNewsQuery } from "src/apollo/schema";
// import type { GetStaticProps, NextPage } from "next";
// import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
// import type { GetTodayNewsQuery, GetTodayNewsQueryVariables } from "src/apollo/schema";
// import { GetTodayNewsDocument } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsForm } from "src/components/news/NewsForm";
import { NewsList } from "src/components/news/NewsList";
import { NewsLoading } from "src/components/news/NewsLoading";
import { useSubmitSlack } from "src/libs/hooks/useSubmitSlack";
// export const getStaticProps: GetStaticProps = async () => {
//   const apolloClient = initializeApollo(null);
//   const { data: todayNewsData } = await apolloClient.query<
//     GetTodayNewsQuery,
//     GetTodayNewsQueryVariables
//   >({
//     query: GetTodayNewsDocument,
//   });

//   return addApolloState(apolloClient, {
//     props: {
//       todayNewsData,
//       // fallback: false,
//     },
//     revalidate: 3, // 3seconds
//   });
// };

// type Props<T> = {
//   todayNewsData: T;
// };
// const Index: NextPage<Props<GetTodayNewsQuery>> = (props) => {
const Index: NextPage = () => {
  // 開発環境では1時間、本番環境では1秒ごとにポーリング
  const { data, loading: isLoading } = useGetTodayNewsQuery({
    pollInterval: process.env.NODE_ENV === "development" ? 1000 * 60 * 60 : 1000,
  });

  // useEffect(() => {

  // }, [data])

  const { handleSubmitSlack } = useSubmitSlack();

  const handleClickSlack = () => {
    const todayNews = data?.todayNews?.edges.map((news) => {
      return `- ${news?.node?.title ? news.node.title : "タイトルなし"}[${news?.node?.url}]\n`;
    });

    const payload = {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `# 今日のニュース \n
${todayNews}`,
          },
        },
      ],
    };
    handleSubmitSlack(payload);
  };

  return (
    <Layout metaTitle="Qin 夜活ニュースシェア" currentPagePath="/">
      <div className="md:flex">
        <div className="md:w-1/2">
          <Headline2 text="ニュースをシェア" />
          <NewsForm />
          <button className="block py-2 px-4 mx-auto rounded-3xl border" onClick={handleClickSlack}>
            Slackに送信する
          </button>
        </div>
        <div className="md:w-1/2">
          <div className="md:border-l">
            <Headline2 text="今日のニュース" />
            {data?.todayNews && <NewsList data={data?.todayNews} />}
            {isLoading && <NewsLoading />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
