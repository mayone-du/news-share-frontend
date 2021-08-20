import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import {
  useEffect,
  // useState
} from "react";
import { useGetSpecificDayNewsLazyQuery } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsList } from "src/components/news/NewsList";

// 昨日のニュース一覧と検索するためのフォームを表示
const DatePage: NextPage = () => {
  const router = useRouter();

  // TODO: 検索する日付をクエリパラメーターで受け取り、検証する
  // const [selctedDate, setSelectedDate] = useState({
  //   date: router.query.date ? router.query.date.toString() : '',
  //  year : selectDate.;
  // })

  // yyyy-mm-dd 形式で日付を受け取る
  const selectDate = router.query.date ? router.query.date.toString() : "";
  const year = parseFloat(selectDate.slice(0, 4));
  const month = parseFloat(selectDate.slice(5, 7));
  const day = parseFloat(selectDate.slice(8, 10));

  const [getSpecificDayNews, { data, loading: isLoading, error }] =
    useGetSpecificDayNewsLazyQuery();

  // 指定した日付のニュースを取得
  useEffect(() => {
    getSpecificDayNews({
      variables: {
        year,
        month,
        day,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, selectDate]);

  return (
    <Layout metaTitle="アーカイブ | Qin 夜活ニュースシェア" currentPagePath="/archives">
      {isLoading ? (
        <Headline2 text="Loading..." />
      ) : error ? (
        <div className="p-4">
          <p>エラーが発生しました。正しい形式で日付を入力してください。</p>
          {console.error("データ取得エラー", error.message)}
        </div>
      ) : (
        <div>
          {/* ニュースが0件の場合 */}
          {data?.specificDayNews?.edges.length === 0 ? (
            <Headline2 text={`${selectDate}のニュースは0件です`} />
          ) : (
            // ニュースが存在する場合
            <div>
              <Headline2
                text={`${selectDate}のニュース一覧 ${data?.specificDayNews?.edges.length.toString()}件`}
              />
              <NewsList data={data?.specificDayNews} />
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default DatePage;
