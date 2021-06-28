import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

export const useCreateNews = () => {
  const [newsUrl, setNewsUrl] = useState("");
  const [newsTitle, setNewsTitle] = useState("");

  const handleChangeNewsUrl = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsUrl(e.target.value);
  }, []);
  const handleCreateNews = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (newsUrl === "") {
        toast.error("ニュースのURLを入力してください。");
        return;
      }

      try {
        toast.success("作成されました。");
        setNewsUrl("");
      } catch (error) {
        alert(error);
        return;
      }
    },
    [newsUrl],
  );
  return { newsUrl, handleChangeNewsUrl, newsTitle, setNewsTitle, handleCreateNews };
};
