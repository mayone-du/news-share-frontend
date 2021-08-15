import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
import type { GetAllDateQuery, GetAllDateQueryVariables } from "src/apollo/schema";
import { GetAllNewsDocument } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { getDay } from "src/libs/getDay";

// すべてのニュースから全ての日付を取得
export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo(null);
  const { data: allDate } = await apolloClient.query<GetAllDateQuery, GetAllDateQueryVariables>({
    query: GetAllNewsDocument,
  });

  return addApolloState(apolloClient, {
    props: {
      allDate,
    },
    revalidate: 1, // 1seconds
  });
};

type Props<T> = {
  allDate: T;
};
const ArchivePage: NextPage<Props<GetAllDateQuery>> = (props) => {
  const allDays = props.allDate.allNews
    ? props.allDate.allNews.edges.map((news) => {
        // 日付をフォーマット
        return getDay(news?.node?.createdAt);
      })
    : [];

  // 日付順にソート
  const sortedAllDays = allDays.sort().reverse();

  // 日付ごとの件数を取得
  // TODO: any型の修正
  const dayCount: any = {};
  for (let i = 0; i < sortedAllDays.length; i++) {
    const day = sortedAllDays[i];
    dayCount[day] = (dayCount[day] || 0) + 1;
  }

  // 重複する値を削除
  const validateDays = Array.from(new Set(sortedAllDays));

  // eslint-disable-next-line no-console
  console.log("props.allDate", props.allDate);
  // eslint-disable-next-line no-console
  console.log("allDays", allDays);
  // eslint-disable-next-line no-console
  console.log("sortedAllDays", sortedAllDays);
  // eslint-disable-next-line no-console
  console.log("dayCount", dayCount);
  // eslint-disable-next-line no-console
  console.log("validateDays", validateDays);

  const dayOfTheWeek = ["日", "月", "火", "水", "木", "金", "土"];
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
                  <a className="flex items-center p-2 w-full text-blue-600 border-b">
                    <div className="px-2">
                      {day} （{dayOfTheWeek[new Date(day).getDay()]}）
                    </div>
                    <div className="px-2">
                      <span className="font-bold">{dayCount[day]}</span>件
                    </div>
                  </a>
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
