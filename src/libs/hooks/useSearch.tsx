import { useRouter } from "next/dist/client/router";
import { useCallback, useState } from "react";

export const useSearch = () => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleChangeKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  }, []);
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push({ pathname: "/results", query: { keyword: searchKeyword } });
    },
    [searchKeyword, router],
  );
  return { searchKeyword, handleChangeKeyword, handleSearch };
};
