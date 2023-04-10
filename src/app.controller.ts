import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeController, ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
@ApiExcludeController()
export class AppController {
  @Get()
  @Redirect()
  getHello() {
    return { url: 'api-docs' };
  }
}
