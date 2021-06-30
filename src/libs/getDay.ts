// 日付の形式を変換
export const getDay = (createdAt: string): string => {
  // タイムスタンプ形式に変換
  const parsedTimestamp = Date.parse(createdAt);
  // JSTへ変換
  const newDate = new Date(parsedTimestamp);
  // 各項目ごとに値を取得、置き換え
  const newMonth =
    newDate.getMonth() + 1 < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
  const newDay = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();

  const fixedDate = `${newDate.getFullYear()}-${newMonth}-${newDay}`;

  return fixedDate;
};
