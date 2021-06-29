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
                {news?.node?.title ? (
                  <div className="px-4">
                    <h3 className="font-bold">{news?.node?.title}</h3>
                    <p className="text-xs text-blue-800 dark:text-blue-400">
                      {news?.node?.summary}
                    </p>
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
  );
};
