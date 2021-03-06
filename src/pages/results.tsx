import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useSearchNewsQuery } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsList } from "src/components/news/NewsList";
import { NewsLoading } from "src/components/news/NewsLoading";

const ResultsPage: NextPage = () => {
  const router = useRouter();
  const searchKeyword = router.query.keyword as string;
  // const pageNumber = parseFloat(router.query.page as string);
  const {
    data,
    loading: isLoading,
    error,
  } = useSearchNewsQuery({
    variables: { searchTitleKeyword: searchKeyword },
  });

  return (
    <Layout
      metaTitle={`${searchKeyword}の検索結果 | Qin 夜活ニュースシェア`}
      currentPagePath="/results"
    >
      {error && (
        <div>
          エラーが発生しました。時間を開けてからもう一度お試しください。
          {console.error(error)}
        </div>
      )}
      <div>
        <Headline2 text={`"${searchKeyword}"を含む検索結果 ${data?.allNews?.edges.length}件`} />
        {isLoading && <NewsLoading />}
        {data && <NewsList data={data?.allNews} />}
      </div>
    </Layout>
  );
};

export default ResultsPage;
