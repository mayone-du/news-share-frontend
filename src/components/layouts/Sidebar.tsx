import Link from "next/link";

type Props = {
  currentPagePath: string;
};
export const Sidebar: React.VFC<Props> = (props) => {
  return (
    <aside className="block w-1/6 min-h-screen border-r">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a
                className={`block py-3 text-center hover:bg-gray-100 dark:hover:bg-gray-700 border-b transition ${
                  props.currentPagePath === "/" ? "bg-blue-400" : null
                }`}
              >
                <div className="flex items-center">
                  <span className="block mx-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span className="block">ホーム</span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/archive">
              <a
                className={`block py-3 text-center hover:bg-gray-100 dark:hover:bg-gray-700 border-b transition ${
                  props.currentPagePath === "/archive" ? "bg-blue-400" : null
                }`}
              >
                <div className="flex items-center">
                  <span className="block mx-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </span>
                  <span className="block">アーカイブ</span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category">
              <a
                className={`block py-3 text-center hover:bg-gray-100 dark:hover:bg-gray-700 border-b transition ${
                  props.currentPagePath === "/category" ? "bg-blue-400" : null
                }`}
              >
                <div className="flex items-center">
                  <span className="block mx-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span className="block">カテゴリー</span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a
                className={`block py-3 text-center hover:bg-gray-100 dark:hover:bg-gray-700 border-b transition ${
                  props.currentPagePath === "/search" ? "bg-blue-400" : null
                }`}
              >
                <div className="flex items-center">
                  <span className="block mx-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <span className="block">検索</span>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
