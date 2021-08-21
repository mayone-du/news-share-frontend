import type { GetStaticProps, NextPage } from "next";
import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
import type { GetYesterdayNewsQuery, GetYesterdayNewsQueryVariables } from "src/apollo/schema";
import { GetYesterdayNewsDocument } from "src/apollo/schema";
import { ArchivesForm } from "src/components/ArchivesForm";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsList } from "src/components/news/NewsList";

// 昨日のニュースを取得
export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo(null);
  const { data: yesterdayNews } = await apolloClient.query<
    GetYesterdayNewsQuery,
    GetYesterdayNewsQueryVariables
  >({
    query: GetYesterdayNewsDocument,
  });

  return addApolloState(apolloClient, {
    props: {
      data: yesterdayNews,
    },
    revalidate: 1, // 1seconds
  });
};

type Props = {
  data: GetYesterdayNewsQuery;
};

// 昨日のニュース一覧と検索するためのフォームを表示
const ArchivesPage: NextPage<Props> = (props) => {
  return (
    <Layout metaTitle="アーカイブ | Qin 夜活ニュースシェア" currentPagePath="/archives">
      <div className="md:flex w-full">
        {/* 左半分 */}
        <div className="md:w-1/2 border-r">
          <Headline2 text="日付を選択" />
          <ArchivesForm />
        </div>
        {/* 右半分 */}
        {props.data.yesterdayNews?.edges.length === 0 ? (
          <div className="md:w-1/2">昨日のニュースはありません。</div>
        ) : (
          <div className="md:w-1/2">
            <Headline2
              text={`昨日のニュース ${props.data.yesterdayNews?.edges.length.toString()}件`}
            />
            <NewsList data={props.data.yesterdayNews} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArchivesPage;
