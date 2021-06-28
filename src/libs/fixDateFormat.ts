// 日付の形式を変換
export const fixDateFormat = (createdAt: string): string => {
  // タイムスタンプ形式に変換
  const parsedTimestamp = Date.parse(createdAt);
  // JSTへ変換
  const newDate = new Date(parsedTimestamp);
  // 各項目ごとに値を取得、置き換え
  const newMonth =
    newDate.getMonth() + 1 < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
  const newDay = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
  const newHours = newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
  const newMinutes = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes();

  const fixedDate = `${newDate.getFullYear()}/${newMonth}/${newDay} ${newHours}:${newMinutes}`;

  return fixedDate;
};
