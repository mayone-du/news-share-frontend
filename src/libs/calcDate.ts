// タイムスタンプを受け取り小数点以下切り上げで現在からの秒数を返す
export const calcDate = (timeStamp: number): number => {
  const now = new Date();
  const nowTimeStamp = now.getTime();
  // 言語仕様の為1000で割る
  return Math.ceil(timeStamp - nowTimeStamp / 1000);
};
