import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
import type { GetAllDateQuery, GetAllDateQueryVariables } from "src/apollo/schema";
import { GetAllNewsDocument } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { getDay } from "src/libs/getDay";

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo(null);
  const { data: allDate } = await apolloClient.query<GetAllDateQuery, GetAllDateQueryVariables>({
    query: GetAllNewsDocument,
  });

  return addApolloState(apolloClient, {
    props: {
      allDate,
      fallback: false,
    },
    revalidate: 3, // 3seconds
  });
};

type Props<T> = {
  allDate: T;
};
const ArchivePage: NextPage<Props<GetAllDateQuery>> = (props) => {
  const allDays = props.allDate.allNews?.edges.map((news) => {
    return getDay(news?.node?.createdAt);
  });
  const validateDays = Array.from(new Set(allDays));
  return (
    <Layout metaTitle="アーカイブ | Qin 夜活ニュースシェア" currentPagePath="/archive">
      <div>
        <Headline2 text="アーカイブ" />

        <ul>
          {validateDays.map((day, index) => {
            return (
              <li key={index}>
                <Link href={`/archive/${day}`}>
                  <a className="block text-blue-600 border-b">{day}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default ArchivePage;
