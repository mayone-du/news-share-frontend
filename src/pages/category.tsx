import type { NextPage } from "next";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";

const CategoryPage: NextPage = () => {
  return (
    <Layout metaTitle="カテゴリー | Qin 夜活ニュースシェア">
      <Headline2 text="カテゴリー" />
    </Layout>
  );
};

export default CategoryPage;
