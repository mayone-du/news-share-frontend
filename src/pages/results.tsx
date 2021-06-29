import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useSearchNewsQuery } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsList } from "src/components/NewsList";

const ResultsPage: NextPage = () => {
  const router = useRouter();
  const searchKeyword = router.query.keyword as string;
  const { data, loading: isLoading } = useSearchNewsQuery({
    variables: { searchTitleKeyword: searchKeyword },
  });

  return (
    <Layout metaTitle={`${searchKeyword}の検索結果 | Qin 夜活ニュースシェア`}>
      <div>
        <Headline2 text={`"${searchKeyword}"を含む検索結果`} />
        {isLoading && <div>loading</div>}
        {data && <NewsList data={data?.allNews} />}
      </div>
    </Layout>
  );
};

export default ResultsPage;
