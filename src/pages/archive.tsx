import type { NextPage } from "next";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";

const ArchivePage: NextPage = () => {
  return (
    <Layout metaTitle="アーカイブ | Qin 夜活ニュースシェア">
      <Headline2 text="アーカイブ" />
    </Layout>
  );
};

export default ArchivePage;
