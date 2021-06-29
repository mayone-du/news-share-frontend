import type { GetStaticProps, NextPage } from "next";
import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
import type { GetAllNewsQuery, GetAllNewsQueryVariables } from "src/apollo/schema";
import { GetAllNewsDocument } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsList } from "src/components/NewsList";

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
      // fallback: false,
    },
    revalidate: 3, // 3seconds
  });
};

type Props<T> = {
  allNewsData: T;
};
const ArchivePage: NextPage<Props<GetAllNewsQuery>> = (props) => {
  return (
    <Layout metaTitle="アーカイブ | Qin 夜活ニュースシェア" currentPagePath="/archive">
      <div>
        <Headline2 text="アーカイブ" />
        <NewsList data={props.allNewsData.allNews} />
      </div>
    </Layout>
  );
};

export default ArchivePage;
