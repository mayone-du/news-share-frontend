import { useSelectDate } from "src/libs/hooks/useSelectDate";

export const ArchivesForm: React.VFC = () => {
  const { date, handleChangeDate, handleSearchDate } = useSelectDate();
  return (
    <form onSubmit={handleSearchDate}>
      <input
        type="date"
        className="block p-2 mx-auto w-4/5 md:w-2/3 border"
        value={date}
        onChange={handleChangeDate}
      />
      <button
        type="submit"
        className="block p-2 my-4 mx-auto w-1/2 md:w-1/4 text-sm rounded border"
      >
        指定した日付で検索
      </button>
    </form>
  );
};
