import type { NextPage } from "next";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { SearchForm } from "src/components/SearchForm";

const SearchPage: NextPage = () => {
  return (
    <Layout metaTitle="検索 | Qin 夜活ニュースシェア" currentPagePath="/search">
      <div>
        <Headline2 text="検索" />
        <div className="pb-8 mx-auto w-5/6 md:w-2/3">
          <SearchForm />
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
