import { Headline2 } from "src/components/Headline2";
import { useCreateNews } from "src/libs/hooks/useCreateNews";

export const NewsForm: React.VFC = () => {
  const { newsUrl, handleChangeNewsUrl, handleCreateNews } = useCreateNews();
  return (
    <form onSubmit={handleCreateNews}>
      <Headline2 text="ニュースをシェア" />
      <input
        className="block p-2 mx-auto w-3/4 rounded-none border focus:outline-none"
        type="text"
        placeholder="ニュースのURLを入力。https://qin.news/shimabu-ikemen..."
        value={newsUrl}
        onChange={handleChangeNewsUrl}
      />
      <button type="submit" className="block py-2 px-4 my-4 mx-auto border">
        シェア
      </button>
    </form>
  );
};
