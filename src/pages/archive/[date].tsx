import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
import type {
  GetAllDateQuery,
  GetAllDateQueryVariables,
  GetAllNewsQuery,
  GetAllNewsQueryVariables,
} from "src/apollo/schema";
import { GetAllNewsDocument } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsList } from "src/components/news/NewsList";
import { getDay } from "src/libs/getDay";

// すべての日付（paths）を取得
export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo(null);
  const { data: allDate } = await apolloClient.query<GetAllDateQuery, GetAllDateQueryVariables>({
    query: GetAllNewsDocument,
  });
  // すべての日付をY-m-d形式の文字列で配列に格納
  const allDays = allDate.allNews?.edges.map((news) => {
    return getDay(news?.node?.createdAt);
  });

  // 配列から重複を削除
  const validateDays = Array.from(new Set(allDays));
  const paths = validateDays.map((day) => {
    return { params: { date: day } };
  });

  return { paths: paths, fallback: false };
};

// 日付ごとのデータを取得
export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo(null);
  const { data: allNewsData } = await apolloClient.query<GetAllNewsQuery, GetAllNewsQueryVariables>(
    {
      query: GetAllNewsDocument,
    },
  );

  // 指定された日付と合うものだけオブジェクトを返し、それ以外はfalseを返す
  const defaultData = allNewsData.allNews?.edges.map((news) => {
    return getDay(news?.node?.createdAt) === context?.params?.date && news;
  });

  // falseを削除
  const specificData = defaultData?.filter(Boolean);

  return addApolloState(apolloClient, {
    props: {
      specificData,
    },
    revalidate: 1, // 1seconds
  });
};

type Props<T> = {
  specificData: T;
};
const ArchiveAllNewsPage: NextPage<Props<GetAllNewsQuery>> = (props) => {
  const router = useRouter();
  const currentPath = router.asPath.replace("/archive/", "");
  return (
    <Layout
      metaTitle={`${currentPath}のアーカイブ | Qin 夜活ニュースシェア`}
      currentPagePath="/archive"
    >
      <div>
        <Headline2 text={`${currentPath}のアーカイブ`} />
        <NewsList data={{ edges: props.specificData }} />
      </div>
    </Layout>
  );
};

export default ArchiveAllNewsPage;
