import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
import type { GetAllDateQuery, GetAllDateQueryVariables } from "src/apollo/schema";
import { GetAllNewsDocument } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { getDay } from "src/libs/getDay";

// すべての日付を取得
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
        <p className="pb-2 mb-2 text-lg text-center text-blue-600">
          <Link href="/archive/all-news">
            <a>すべてのニュース一覧</a>
          </Link>
        </p>
        <ul className="p-4">
          {validateDays.map((day, index) => {
            return (
              <li key={index} className={`${index === 0 && "border-t"}`}>
                <Link href={`/archive/${day}`}>
                  <a className="block py-2 px-4 text-blue-600 border-b">{day}</a>
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
