import { useGetAllNewsQuery } from "src/apollo/schema";
import { Headline2 } from "src/components/Headline2";
import { fixDateFormat } from "src/libs/fixDateFormat";

export const TodayNewsList: React.VFC = () => {
  const { data: newsData } = useGetAllNewsQuery();
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
                    className="object-cover w-12 h-12 border"
                    src={news?.node?.imagePath ? news.node.imagePath : ""}
                    alt=""
                  />
                  <div>
                    <h3 className="text-sm">{news?.node?.title}</h3>
                    <p className="text-xs text-blue-700">{news?.node?.summary}</p>
                    <span className="block text-xs text-gray-500">
                      {fixDateFormat(news?.node?.createdAt)}
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
