import { existsSync, mkdirSync } from 'fs';
import { download } from 'iconfont-downloader';
import path from 'path';
import { fileURLToPath } from 'url';
import prompt from 'prompt';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const destDir = path.resolve(__dirname, '../src/icons/font');

if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

(async function() {
  prompt.start();
  const { pid, token } = await prompt.get({
    properties: {
      pid: {
        message: '请输入项目ID',
        required: true,
      },
      token: {
        message: '请输入iconfont token',
        required: true,
      }
    }
  });

  await download({
    pid,
    token,
    destDir
  });
  console.log(`生成成功！请在${destDir}中查看结果`);
})();
