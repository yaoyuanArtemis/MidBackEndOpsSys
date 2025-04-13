/* 
import { index } from '../../node_modules/@nestjs/cli/node_modules/@webassemblyjs/wasm-parser/lib/decoder';
    需求背景：有大量数据需要进行多次发送
*/

function fn1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
    }, 1000);
  });
}

function fn2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}

function fn3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  });
}

class PromiseAdv {
  fnList = [];
  map = {};
  constructor(fnList) {
    this.fnList = fnList;
    fnList.forEach((fn, index) => {
      let id = 'id_' + index;
      this.map[id] = fn;
      fn.id = id;
    });
  }
  send() {
    let _que = [];
    this.fnList.forEach((fn) => {
      _que.push(fn());
    });
    function sendAll() {
      Promise.allSettled(_que).then((res) => {
        // 无论成功还是失败都会返回
        console.log(res);
      });
    }
    sendAll();
  }
}

new PromiseAdv([fn1, fn2, fn3]).send();
