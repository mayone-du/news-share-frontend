import type { NextPage } from "next";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";

const SearchPage: NextPage = () => {
  return (
    <Layout metaTitle="検索 | Qin 夜活ニュースシェア">
      <Headline2 text="検索" />
    </Layout>
  );
};

export default SearchPage;
