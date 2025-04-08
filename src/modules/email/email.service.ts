import { Injectable } from '@nestjs/common';
import { Email } from 'src/schemas/email';
import { ResendService } from '../resend/resend.service';

@Injectable()
export class EmailService {
  constructor(private readonly resendService: ResendService) {}

  async sendEmail({ type, from, to, subject, react }: Email) {
    return await this.resendService.sendEmail({
      type,
      from,
      to,
      subject,
      react,
    });
  }
}
