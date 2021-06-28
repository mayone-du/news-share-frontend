import { useCreateNews } from "src/libs/hooks/useCreateNews";

export const NewsForm: React.VFC = () => {
  const { newsUrl, handleChangeNewsUrl, handleCreateNews } = useCreateNews();
  return (
    <form onSubmit={handleCreateNews}>
      <input
        className="block rounded-none border"
        type="text"
        placeholder="url"
        value={newsUrl}
        onChange={handleChangeNewsUrl}
      />
      <button type="submit" className="block px-2 border">
        シェア
      </button>
    </form>
  );
};
