import { Headline2 } from "src/components/Headline2";
import { useCreateNews } from "src/libs/hooks/useCreateNews";

export const NewsForm: React.VFC = () => {
  const { newsUrl, handleChangeNewsUrl, handleCreateNews } = useCreateNews();
  return (
    <form onSubmit={handleCreateNews}>
      <Headline2 text="ニュースをシェア" />
      <input
        className="block p-2 mx-auto w-2/3 rounded-none border focus:outline-none"
        type="text"
        placeholder="url"
        value={newsUrl}
        onChange={handleChangeNewsUrl}
      />
      <button type="submit" className="block py-2 px-4 mx-auto border">
        シェア
      </button>
    </form>
  );
};
