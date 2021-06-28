import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useCreateNewsMutation } from "src/apollo/schema";

export const useCreateNews = () => {
  const [newsUrl, setNewsUrl] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [createNewsMutation] = useCreateNewsMutation();

  const handleChangeNewsUrl = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsUrl(e.target.value);
  }, []);
  const handleCreateNews = useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (newsUrl === "") {
        toast.error("ニュースのURLを入力してください。");
        return;
      }

      try {
        await createNewsMutation({
          variables: {
            url: newsUrl,
          },
        });
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
