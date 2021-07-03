import { useReactiveVar } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { slackPasswordVar } from "src/apollo/cache";
import { fixDateFormat } from "src/libs/fixDateFormat";
import { useUpdateNews } from "src/libs/hooks/news/useUpdateNews";
import { SLACK_PASSWORD } from "src/utils/PASSWORD";

type Props = {
  data: any;
};
export const NewsList: React.VFC<Props> = (props) => {
  const slackPassword = useReactiveVar(slackPasswordVar);
  const router = useRouter();
  const { handleUpdateNews } = useUpdateNews();

  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);

  return (
    <ul className="border-b">
      {props.data &&
        props.data.edges.map((news: any, index: any) => {
          return (
            <li key={index} className="relative border-t md:border-none">
              <a
                target="blank"
                rel="noopener"
                className="block md:flex items-center w-full hover:bg-gray-100 dark:hover:bg-gray-800 md:border-t"
                href={news?.node?.url}
              >
                <img
                  className="block object-cover w-full md:w-20 h-auto md:h-20"
                  src={news?.node?.imagePath ? news.node.imagePath : ""}
                  alt=""
                />
                {news?.node ? (
                  <div className="px-4 w-full">
                    <h3 className="text-sm md:text-base font-bold">
                      {news.node.title ? news.node.title : news.node.url}
                    </h3>
                    <p className="text-xs text-blue-800 dark:text-blue-400">
                      {news.node.summary ? news.node.summary : "概要はありません。"}
                    </p>
                    <div className="flex justify-between items-center w-full text-xs text-gray-500">
                      <div>{fixDateFormat(news.node.createdAt)}</div>
                      <div>{news.node.contributorName ? news.node.contributorName : "匿名"}</div>
                    </div>
                  </div>
                ) : (
                  <div className="px-4">{news?.node?.url}</div>
                )}
                {/* ニュースのシェアを明日に延期する */}
                {/* トップページかつ、パスワードが一致する場合のみ表示 */}
                {router.asPath === "/" && slackPassword === SLACK_PASSWORD && (
                  <div className="absolute top-0 right-0 z-10">
                    <form
                      // eslint-disable-next-line react/jsx-handler-names
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdateNews(news?.node?.id, Math.floor(tomorrow / 1000));
                      }}
                    >
                      <button
                        type="submit"
                        className="block p-1 text-xs text-white dark:text-black bg-gray-700 dark:bg-white"
                      >
                        明日にシェアする
                      </button>
                    </form>
                  </div>
                )}
              </a>
            </li>
          );
        })}
    </ul>
  );
};
