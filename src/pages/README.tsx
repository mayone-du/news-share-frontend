import type { NextPage } from "next";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";

const README: NextPage = () => {
  return (
    <Layout metaTitle="使い方 | Qin 夜活ニュースシェア" currentPagePath="/README">
      <Headline2 text="夜活ニュースシェアアプリの使い方" />
      <article>
        <section>
          <h2>使い方</h2>
          <ul>
            <li>シェアしたいニュースのURLを入力するだけで使用可能です。</li>
            <li>ニックネームは匿名可能ですが、なるべく入力してもらえると助かります！</li>
            <li>過去にシェアしたことのあるニュースは再度登録不可です。</li>
            <li>アーカイブページより、日付ごとのアーカイブを閲覧可能です。</li>
            <li>
              ニュースシェア終了後にSlackのニュースシェアチャンネルにその日のニュースが投稿されます。
            </li>
            <li>バグ発見時や要望等ある場合は、まよねーづまでご連絡いただけると助かります！</li>
          </ul>
        </section>
        <section>
          <h2>このアプリの使用技術</h2>
          <h3>フロントエンド</h3>
          <ul>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Apollo Client</li>
            <li>Vercel</li>
          </ul>
          <p>GitHubのURL</p>
          <h3>バックエンド</h3>
          <ul>
            <li>Django</li>
            <li>Graphene-Django</li>
            <li>BeautifulSoup</li>
            <li>Herokus</li>
          </ul>
          <p>GitHubのURL</p>
        </section>
      </article>
    </Layout>
  );
};

export default README;
