import { useRouter } from "next/dist/client/router";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

export const useSearch = () => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleChangeKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  }, []);
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchKeyword === "") {
        toast.error("検索したいキーワードを入力してください。");
        return;
      }
      router.push({ pathname: "/results", query: { keyword: searchKeyword } });
    },
    [searchKeyword, router],
  );
  return { searchKeyword, handleChangeKeyword, handleSearch };
};
