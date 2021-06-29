import { useSearch } from "src/libs/hooks/useSearch";

export const SearchForm: React.VFC = () => {
  const { searchKeyword, handleChangeKeyword, handleSearch } = useSearch();
  return (
    <form className="flex" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="ニュースのタイトルで検索"
        className="block px-2 w-full h-12 dark:bg-gray-700 border-t border-b border-l focus:outline-none"
        value={searchKeyword}
        onChange={handleChangeKeyword}
      />
      <button
        className="flex justify-center items-center w-12 h-12 dark:bg-gray-700 border-t border-r border-b"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};
