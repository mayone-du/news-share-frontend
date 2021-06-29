import { useSearch } from "src/libs/hooks/useSearch";

export const SearchForm: React.VFC = () => {
  const { searchKeyword, handleChangeKeyword, handleSearch } = useSearch();
  return (
    <form className="flex" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="ニュースのタイトルで検索"
        className="block py-2 pr-6 pl-2 w-full border focus:outline-none"
        value={searchKeyword}
        onChange={handleChangeKeyword}
      />
      <button className="flex justify-center items-center w-6 h-6" type="submit">
        A
      </button>
    </form>
  );
};
