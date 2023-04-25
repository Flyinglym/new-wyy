// 将大数字转换为以 万、亿 结尾
export const useNumberConversion = (value: number) => {
  let numerical: any = [];
  let k = 10000,
    sizes = ["", "万", "亿", "万亿"],
    i;
  if (value < k) {
    numerical = Number(value).toFixed(0);
  } else {
    i = Math.floor(Math.log(value) / Math.log(k));
    numerical = (value / Math.pow(k, i)).toFixed(0) + sizes[i];
  }

  return numerical;
};
