import type { NextPage } from "next";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";

const CategoryPage: NextPage = () => {
  return (
    <Layout metaTitle="カテゴリー | Qin 夜活ニュースシェア" currentPagePath="/category">
      <div>
        <Headline2 text="カテゴリー" />
        <p className="text-xl text-center">
          現在開発中です
          <span role="img" aria-label="お辞儀">
            🙇‍♂️
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default CategoryPage;
