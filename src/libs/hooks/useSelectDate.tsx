import { useRouter } from "next/dist/client/router";
import { useCallback, useState } from "react";

export const useSelectDate = () => {
  const router = useRouter();
  const [date, setDate] = useState("");

  // 日付更新
  const handleChangeDate = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  }, []);

  // 検索
  const handleSearchDate = useCallback(
    (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      router.push({ pathname: "/archives/date", query: { date: date } });
    },
    [router, date],
  );

  return { date, handleChangeDate, handleSearchDate };
};
