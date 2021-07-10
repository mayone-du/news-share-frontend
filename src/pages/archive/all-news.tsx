import type { GetStaticProps, NextPage } from "next";
import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
import type { GetAllNewsQuery, GetAllNewsQueryVariables } from "src/apollo/schema";
import { GetAllNewsDocument } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsList } from "src/components/news/NewsList";
import { getDay } from "src/libs/getDay";

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo(null);
  const { data: allNewsData } = await apolloClient.query<GetAllNewsQuery, GetAllNewsQueryVariables>(
    {
      query: GetAllNewsDocument,
    },
  );

  return addApolloState(apolloClient, {
    props: {
      allNewsData,
    },
    revalidate: 1, // 1seconds
  });
};

type Props<T> = {
  allNewsData: T;
};
const ArchiveAllNewsPage: NextPage<Props<GetAllNewsQuery>> = (props) => {
  const newsCopy = props.allNewsData.allNews && [...props.allNewsData.allNews?.edges];
  const news = newsCopy?.sort((a, b) => {
    if (getDay(a?.node?.createdAt) < getDay(b?.node?.createdAt)) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <Layout metaTitle="アーカイブ | Qin 夜活ニュースシェア" currentPagePath="/archive">
      <div>
        <Headline2 text="アーカイブ" />

        <NewsList data={{ edges: news }} />
      </div>
    </Layout>
  );
};

export default ArchiveAllNewsPage;
