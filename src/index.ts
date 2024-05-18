import { existsSync, createWriteStream } from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
import {spawnSync} from "./utils/spawn";
import * as process from "node:process";
import { calcAddedLines } from "./utils/statistics";

export function isInWorkSpace(workspace: string) {
  if (!existsSync(path.join(workspace, 'package.json'))) {
    throw '文件错误：该目录下未找到package.json文件';
  }
}

const main = () => {
  const workspace = '/Users/digital/Codes/codeup.aliyun.com/dayu/szhz-xhqf/szhz-xhqf-company-zt-pc';
  const author = 'jcg01423690';
  const startDate = '2024-05-12';
  const endDate = '2024-05-19';
  const child = spawnSync('git', [
    'log',
    `--author=${author}`,
    `--since=${startDate}`,
    `--until=${endDate}`,
    '--pretty=tformat:',
    '--numstat'
  ], {
    cwd: workspace
  });
  const output = [];
  child.stdout.on('data', (data) => {
    output.push(data.toString());
  });
  const file = createWriteStream(path.join(workspace, `${author}.txt`));
  child.stdout.pipe(file);
  child.on('exit', () => {
    file.close();

    console.log('=======output===========', output);
    calcAddedLines(output);

  });
}

main();