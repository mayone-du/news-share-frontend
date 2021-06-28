import { useGetAllNewsQuery } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { fixDateFormat } from "src/libs/fixDateFormat";

export const TodayNewsList: React.VFC = () => {
  // 本番環境時には1秒ごとにポーリング
  const pollInterval = process.env.NODE_ENV === "development" ? 1000 * 60 : 1000;
  const { data: newsData } = useGetAllNewsQuery({ pollInterval: pollInterval });
  return (
    <div className="border-l">
      <Headline2 text="今日のニュース" />
      <ul className="border-b">
        {newsData?.allNews &&
          newsData.allNews.edges.map((news, index) => {
            return (
              <li key={index}>
                <a
                  target="blank"
                  rel="noopener"
                  className="flex items-center w-full hover:bg-gray-100 border-t"
                  href={news?.node?.url}
                >
                  <img
                    className="object-cover w-20 h-20"
                    src={news?.node?.imagePath ? news.node.imagePath : ""}
                    alt=""
                  />
                  {news?.node?.title ? (
                    <div className="px-4">
                      <h3 className="font-bold">{news?.node?.title}</h3>
                      <p className="text-xs text-blue-700">{news?.node?.summary}</p>
                      <span className="block text-xs text-gray-500">
                        {fixDateFormat(news?.node?.createdAt)}
                      </span>
                    </div>
                  ) : (
                    <div className="px-4">{news?.node?.url}</div>
                  )}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
