import { Injectable } from '@nestjs/common';
import validator from 'validator';
import isInt from '../../node_modules/validator/es/lib/isInt';

@Injectable()
export class RangeService {
  getRange(num) {
    let res = [];
    if (validator.isInt(num)) {
      for (let k = 0; k < num; k++) {
        res.push(k);
      }
      return {
        code: 0,
        data: {
          num: res,
        },
        msg: '请求成功',
      };
    } else {
      return {
        code: 1,
        msg: '传参不是正整数',
      };
    }
  }
}
