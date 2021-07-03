import party from "party-js";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useCreateNewsMutation } from "src/apollo/schema";

export const useCreateNews = () => {
  const [newsUrl, setNewsUrl] = useState("");
  const [contributorName, setContributorName] = useState("");
  const [createNewsMutation] = useCreateNewsMutation();
  const [isCreating, setIsCreating] = useState(false);

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
        toast.error("正しいURLの形式で入力してください。");
        return;
      }
      try {
        setIsCreating(true);
        // ニュースの作成日時をUNIXタイムスタンプ形式で送信
        const now = new Date().getTime();
        await createNewsMutation({
          variables: {
            url: newsUrl,
            createdAt: Math.floor(now / 1000),
            contributorName: contributorName,
          },
        });
        setIsCreating(false);
        party.confetti(e.target);
        toast.success("シェアされました！");
        setNewsUrl("");
      } catch (error) {
        setIsCreating(false);
        toast.error("何らかのエラーが発生しました。");
        console.error(error);
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
    isCreating,
  };
};
