import { useReactiveVar } from "@apollo/client";
import type { NextPage } from "next";
import party from "party-js";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { slackPasswordVar } from "src/apollo/cache";
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

  const slackPassword = useReactiveVar(slackPasswordVar);

  const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    slackPasswordVar(e.target.value);
  }, []);

  const { handleSubmitSlack } = useSubmitSlack();

  const handleClickSlack = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (slackPassword !== SLACK_PASSWORD) {
        toast.error("パスワードが違います");
        return;
      }
      const today = new Date();
      const dayOfTheWeek = ["日", "月", "火", "水", "木", "金", "土"];
      const todaySlackTitle = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}（${
        dayOfTheWeek[today.getDay()]
      }）のニュース`;

      const payload: any = {
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: todaySlackTitle,
            },
          },
        ],
      };

      data?.todayNews?.edges.forEach((news) => {
        payload.blocks.push({
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*<${news?.node?.url} | ${news?.node?.title}>*\n${news?.node?.summary}`,
          },
          accessory: {
            type: "image",
            // eslint-disable-next-line @typescript-eslint/naming-convention
            image_url: news?.node?.imagePath
              ? news.node.imagePath
              : "https://via.placeholder.com/150",
            // eslint-disable-next-line @typescript-eslint/naming-convention
            alt_text: news?.node?.title,
          },
        });
      });
      payload.blocks.push({
        type: "divider",
      });

      handleSubmitSlack(payload);
      slackPasswordVar("");
      party.sparkles(e.target);
    },
    [data?.todayNews, handleSubmitSlack, slackPassword],
  );

  return (
    <Layout metaTitle="Qin 夜活ニュースシェア" currentPagePath="/">
      <div className="md:flex">
        <div className="md:w-1/2">
          <Headline2 text="ニュースをシェア" />
          <NewsForm />
          <form onSubmit={handleClickSlack}>
            <input
              type="password"
              value={slackPassword}
              onChange={handleChangePassword}
              placeholder="国王のみぞ知るパスワード"
              className="block p-2 my-2 mx-auto w-3/4 border focus:outline-none"
            />
            {/* パスワードが一致する場合のみslack送信を許可 */}
            <button
              type="submit"
              disabled={slackPassword === SLACK_PASSWORD ? false : true}
              className="block py-2 px-4 my-2 mx-auto disabled:line-through disabled:bg-gray-400 rounded-3xl border disabled:cursor-not-allowed"
            >
              Slackに送信する
            </button>
          </form>
        </div>
        <div className="md:w-1/2 md:border-l">
          <div>
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
