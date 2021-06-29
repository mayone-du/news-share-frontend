import type { GetStaticProps, NextPage } from "next";
import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
import type { GetTodayNewsQuery, GetTodayNewsQueryVariables } from "src/apollo/schema";
import { GetTodayNewsDocument } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsForm } from "src/components/NewsForm";
import { NewsList } from "src/components/NewsList";

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo(null);
  const { data: todayNewsData } = await apolloClient.query<
    GetTodayNewsQuery,
    GetTodayNewsQueryVariables
  >({
    query: GetTodayNewsDocument,
  });

  return addApolloState(apolloClient, {
    props: {
      todayNewsData,
      // fallback: false,
    },
    revalidate: 3, // 3seconds
  });
};

type Props<T> = {
  todayNewsData: T;
};
const Index: NextPage<Props<GetTodayNewsQuery>> = (props) => {
  return (
    <Layout metaTitle="Index Page">
      <div className="flex overflow-hidden my-8 w-full bg-white dark:bg-black rounded-lg border">
        <div className="w-1/2">
          <Headline2 text="ニュースをシェア" />
          <NewsForm />
        </div>
        <div className="w-1/2">
          <div className="border-l">
            <Headline2 text="今日のニュース" />
            <NewsList data={props.todayNewsData.todayNews} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
