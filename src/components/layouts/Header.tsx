import Link from "next/link";
import { ThemeChanger } from "src/components/layouts/ThemeChanger";

export const Header: React.VFC = () => {
  return (
    <div>
      <header className="py-4 px-20 border-b">
        <div className="flex justify-between items-center m-2">
          <Link href="/">
            <a className="text-xl font-bold">Qin&nbsp;夜活ニュースシェア</a>
          </Link>
          <ThemeChanger />
        </div>
      </header>
    </div>
  );
};
