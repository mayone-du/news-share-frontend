import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useCreateNewsMutation } from "src/apollo/schema";

export const useCreateNews = () => {
  const [newsUrl, setNewsUrl] = useState("");
  const [contributorName, setContributorName] = useState("");
  const [createNewsMutation] = useCreateNewsMutation();

  const handleChangeNewsUrl = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsUrl(e.target.value);
  }, []);
  const handleChangeContributorName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setContributorName(e.target.value);
  }, []);

  const handleCreateNews = useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      // 入力欄の検証
      if (newsUrl === "") {
        toast.error("ニュースのURLを入力してください。");
        return;
      } else if (!newsUrl.includes("http://") && !newsUrl.includes("https://")) {
        toast.error("https://が入ってません");
        return;
      }
      try {
        await createNewsMutation({
          variables: {
            url: newsUrl,
            contributorName: contributorName,
          },
        });
        toast.success("作成されました。");
        setNewsUrl("");
      } catch (error) {
        alert(error);
        return;
      }
    },
    [newsUrl, createNewsMutation, contributorName],
  );
  return {
    newsUrl,
    handleChangeNewsUrl,
    contributorName,
    handleChangeContributorName,
    handleCreateNews,
  };
};
