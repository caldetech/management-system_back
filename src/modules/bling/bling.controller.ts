import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { BlingService } from './bling.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/bling')
export class BlingController {
  constructor(private readonly blingService: BlingService) {}

  @Post('/get-authorize-url')
  @UseGuards(AuthGuard)
  async getAuthorizeUrl(@Body() { slug }: { slug: string }) {
    return await this.blingService.getAuthorizeUrl({ slug });
  }

  @Post('/get-tokens')
  @UseGuards(AuthGuard)
  async getTokens(@Body() { code, state }: { code: string; state: string }) {
    return await this.blingService.getTokens({ code, slug: state });
  }

  @Post('/get-valid-access-token')
  @UseGuards(AuthGuard)
  async getValidAccessToken(@Body() { slug }: { slug: string }) {
    return await this.blingService.getValidAccessToken({ slug });
  }
}
