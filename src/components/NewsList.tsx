import { fixDateFormat } from "src/libs/fixDateFormat";

type Props = {
  data: any;
};
export const NewsList: React.VFC<Props> = (props) => {
  return (
    <ul className="border-b">
      {props.data &&
        props.data.edges.map((news: any, index: any) => {
          return (
            <li key={index}>
              <a
                target="blank"
                rel="noopener"
                className="flex items-center w-full hover:bg-gray-100 dark:hover:bg-gray-800 border-t"
                href={news?.node?.url}
              >
                <img
                  className="object-cover w-20 h-20"
                  src={news?.node?.imagePath ? news.node.imagePath : ""}
                  alt=""
                />
                {news?.node ? (
                  <div className="px-4 w-full">
                    <h3 className="font-bold">{news.node.title}</h3>
                    <p className="text-xs text-blue-800 dark:text-blue-400">
                      {news.node.summary ? news.node.summary : "概要はありません。"}
                    </p>
                    <div className="flex justify-between items-center w-full text-xs text-gray-500">
                      <div>{fixDateFormat(news.node.createdAt)}</div>
                      <div>{news.node.contributorName ? news.node.contributorName : "未設定"}</div>
                    </div>
                  </div>
                ) : (
                  <div className="px-4">{news?.node?.url}</div>
                )}
              </a>
            </li>
          );
        })}
    </ul>
  );
};
