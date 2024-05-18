
// 根据git log输出，分析出新增的行数总和
export const calcAddedLines = (output: string[]) => {
  const afterFormat = [];
  for (const lines of output) {
    const lineList = lines.split('\n');
    for (const line of lineList) {
      const r = format(line);
      if (r) {
        afterFormat.push(r);
      }
    }
  }
  const sum = afterFormat.reduce((prev, curr) => {
    return prev + curr.add
  }, 0)
  console.log('==================', afterFormat, sum);
}

const format = (oneLine: string) => {
  let add = null;
  let fileName = null;

  const reg = /(\d+)\t(\d+)\t(.*)$/;
  const rlt = reg.exec(oneLine);
  if (rlt !== null) {
    add = Number(rlt[1])
    fileName = rlt[3];
  }

  return (add !== null && fileName !== null) ? {add, fileName} : null
}