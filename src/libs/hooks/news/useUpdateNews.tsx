import toast from "react-hot-toast";
import { useUpdateNewsMutation } from "src/apollo/schema";

export const useUpdateNews = () => {
  const [updateNewsMutation] = useUpdateNewsMutation();
  const handleUpdateNews = async (id: string, createdAt: number) => {
    try {
      await updateNewsMutation({
        variables: {
          id: id,
          createdAt: createdAt,
        },
      });
      toast.success("ニュースを明日に延期しました。");
    } catch (error) {
      toast.error("何らかのエラーが発生しました。");
      console.error(error);
    }
  };
  return {
    handleUpdateNews,
  };
};
