import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { useGetTodayNewsQuery } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { Layout } from "src/components/layouts/Layout";
import { NewsForm } from "src/components/news/NewsForm";
import { NewsList } from "src/components/news/NewsList";
import { NewsLoading } from "src/components/news/NewsLoading";
import { useSubmitSlack } from "src/libs/hooks/useSubmitSlack";
import { SLACK_PASSWORD } from "src/utils/PASSWORD";

const Index: NextPage = () => {
  // 開発環境では1時間、本番環境では1秒ごとにポーリング
  const { data, loading: isLoading } = useGetTodayNewsQuery({
    pollInterval: process.env.NODE_ENV === "development" ? 1000 * 60 * 60 : 1000,
  });

  const [password, setPassword] = useState("");

  const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const { handleSubmitSlack } = useSubmitSlack();

  const handleClickSlack = useCallback(() => {
    const todayNews = data?.todayNews?.edges.map((news) => {
      return `<${news?.node?.url}|${news?.node?.title}>`;
    });

    const today = new Date();
    const dayOfTheWeek = ["日", "月", "火", "水", "木", "金", "土"];
    const todaySlackTitle = `*${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}（${
      dayOfTheWeek[today.getDay()]
    }）のニュース*`;

    const payload: any = {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: todaySlackTitle,
          },
        },
      ],
    };
    todayNews?.forEach((news) => {
      payload.blocks.push({ type: "section", text: { type: "mrkdwn", text: `*・* ${news}` } });
    });
    handleSubmitSlack(payload);
    setPassword("");
  }, [data?.todayNews, handleSubmitSlack]);

  return (
    <Layout metaTitle="Qin 夜活ニュースシェア" currentPagePath="/">
      <div className="md:flex">
        <div className="md:w-1/2">
          <Headline2 text="ニュースをシェア" />
          <NewsForm />
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="国王のみぞ知るパスワード"
            className="block p-2 my-2 mx-auto w-3/4 border focus:outline-none"
          />
          {/* パスワードが一致する場合のみslack送信を許可 */}
          {password === SLACK_PASSWORD && (
            <button
              className="block py-2 px-4 my-2 mx-auto rounded-3xl border"
              onClick={handleClickSlack}
            >
              Slackに送信する
            </button>
          )}
        </div>
        <div className="md:w-1/2">
          <div className="md:border-l">
            <Headline2 text="今日のニュース" />
            {data?.todayNews && <NewsList data={data?.todayNews} />}
            {isLoading && <NewsLoading />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
