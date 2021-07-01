import { useCallback } from "react";
import toast from "react-hot-toast";
import { SLACK_API_ENDPOINT } from "src/utils/API_ENDPOINTS";

export const useSubmitSlack = () => {
  const handleSubmitSlack = useCallback(async (payload: any) => {
    try {
      await fetch(SLACK_API_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      toast.success("今日のニュースがSlackに送信されました。");
    } catch (error) {
      toast.error("エラーが発生しました。");
      console.error(error);
    }
  }, []);
  return { handleSubmitSlack };
};
