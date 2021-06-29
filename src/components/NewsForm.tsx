import { NewsCreating } from "src/components/NewsCreating";
import { useCreateNews } from "src/libs/hooks/useCreateNews";

export const NewsForm: React.VFC = () => {
  const {
    newsUrl,
    handleChangeNewsUrl,
    contributorName,
    handleChangeContributorName,
    handleCreateNews,
    isCreating,
  } = useCreateNews();
  return (
    <form onSubmit={handleCreateNews} className="relative">
      <input
        className="block p-2 mx-auto w-3/4 rounded-none border focus:outline-none"
        type="url"
        placeholder="ニュースのURLを入力。https://qin.news/shimabu-ikemen..."
        value={newsUrl}
        onChange={handleChangeNewsUrl}
      />
      <input
        className="block p-2 mx-auto w-3/4 rounded-none border focus:outline-none"
        type="text"
        placeholder="ニックネーム"
        value={contributorName}
        onChange={handleChangeContributorName}
      />

      <button
        type="submit"
        className="block py-2 px-8 my-4 mx-auto hover:bg-gray-100 dark:hover:bg-gray-800 rounded-3xl border"
      >
        シェアする
      </button>
      {isCreating && <NewsCreating />}
    </form>
  );
};
