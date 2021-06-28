import Link from "next/link";

export const Sidebar: React.VFC = () => {
  return (
    <aside className="block w-1/6 min-h-screen border-r">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className="block py-2 text-center hover:bg-gray-200 border-b transition">
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
              <a className="block py-2 text-center border-b">
                <div>archive</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category">
              <a className="block py-2 text-center border-b">
                <div>category</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a className="block py-2 text-center border-b">
                <div>search</div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
