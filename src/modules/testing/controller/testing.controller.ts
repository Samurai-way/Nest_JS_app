import { TestingService } from '../service/testing.service';
import { Controller, Delete, HttpCode } from '@nestjs/common';

@Controller('api')
export class TestingController {
  constructor(private testingService: TestingService) {}

  @Delete('testing/all-data')
  @HttpCode(204)
  async deleteAllData() {
    return this.testingService.deleteAllData();
  }
}
