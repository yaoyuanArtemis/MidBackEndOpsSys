// 10个一组发送接口 如果有失败就重试三次 重试超过三次就停止发送
// 自动连发请求 超次停止

import axios from 'axios';

// type res = {
//     success : true,
//     msg : ""
// }

// 初始化数据
let promiseArr = [];
for (let i = 0; i < 100; i++) {
  promiseArr.push(i);
}

async function sendItem(part) {
  let count = 0;
  const _res = await axios.get('xxx.com' + part);
  if (!_res.success) {
    count += 1;
    if (count > 3) {
      return false;
    } else {
      return await sendItem(part);
    }
  } else {
    count = 0;
    return true;
  }
}

//
async function send() {
  for (let i = 0; i < promiseArr.length; i + 10) {
    const part = promiseArr.slice(i, i + 10);
    const resFlag = await sendItem(part);
    if (!resFlag) {
      break;
    }
  }
}

send();
