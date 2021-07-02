import Link from "next/link";
import { ThemeChanger } from "src/components/layouts/ThemeChanger";

export const Header: React.VFC = () => {
  return (
    <div>
      <header className="py-2 md:py-4 px-4 md:px-20 border-b">
        <h1 className="flex justify-between items-center md:m-2">
          <Link href="/">
            <a className="md:text-xl font-bold">Qin&nbsp;夜活ニュースシェア</a>
          </Link>
          <ThemeChanger />
        </h1>
      </header>
    </div>
  );
};
