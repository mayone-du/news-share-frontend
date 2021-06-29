import { useCreateNews } from "src/libs/hooks/useCreateNews";

export const NewsForm: React.VFC = () => {
  const {
    newsUrl,
    handleChangeNewsUrl,
    contributorName,
    handleChangeContributorName,
    handleCreateNews,
  } = useCreateNews();
  return (
    <form onSubmit={handleCreateNews}>
      <input
        className="block p-2 mx-auto w-3/4 rounded-none border focus:outline-none"
        type="text"
        placeholder="ニュースのURLを入力。https://qin.news/shimabu-ikemen..."
        value={newsUrl}
        onChange={handleChangeNewsUrl}
      />
      <input
        className="block p-2 mx-auto w-3/4 rounded-none border focus:outline-none"
        type="text"
        placeholder="名前を入力"
        value={contributorName}
        onChange={handleChangeContributorName}
      />

      <button type="submit" className="block py-2 px-4 my-4 mx-auto border">
        シェア
      </button>
    </form>
  );
};
