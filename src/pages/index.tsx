import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { NewsForm } from "src/components/NewsForm";
import { TodayNewsList } from "src/components/TodayNewsList";

const Index: NextPage = () => {
  return (
    <Layout metaTitle="Index Page">
      <div className="flex my-8 w-full bg-gray-50 rounded-lg">
        <div className="w-1/2">
          <NewsForm />
        </div>
        <div className="w-1/2">
          <TodayNewsList />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
