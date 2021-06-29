import type { NextPage } from "next";
import { useGetTodayNewsQuery } from "src/apollo/schema";
// import type { GetStaticProps, NextPage } from "next";
// import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
// import type { GetTodayNewsQuery, GetTodayNewsQueryVariables } from "src/apollo/schema";
// import { GetTodayNewsDocument } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsForm } from "src/components/NewsForm";
import { NewsList } from "src/components/NewsList";

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
  const { data } = useGetTodayNewsQuery({
    pollInterval: process.env.NODE_ENV === "development" ? 1000 * 60 * 60 : 1000,
  });

  return (
    <Layout metaTitle="Qin 夜活ニュースシェア" currentPagePath="/">
      <div className="flex">
        <div className="w-1/2">
          <Headline2 text="ニュースをシェア" />
          <NewsForm />
        </div>
        <div className="w-1/2">
          <div className="border-l">
            <Headline2 text="今日のニュース" />
            {/* <NewsList data={props.todayNewsData.todayNews} /> */}
            <NewsList data={data?.todayNews} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
