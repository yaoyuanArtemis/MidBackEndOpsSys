import { Controller, Get, Query } from '@nestjs/common';
import { range } from '../../node_modules/rxjs/dist/esm/internal/observable/range';
import { RangeService } from './range.service';
@Controller('range')
export class RangeController {
  constructor(private rangeService: RangeService) {}

  @Get()
  getRange(@Query('num') num: string) {
    return this.rangeService.getRange(num);
  }
}
