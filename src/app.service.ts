import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // async quote(cart: any) {
  //   return tracer.startActiveSpan('PricingService.quote', async (span) => {
  //     try {
  //       span.setAttribute('cart.items', cart.items.length);
  //       return await this.calculate(cart);
  //     } catch (error) {
  //       span.recordException(error as Error);
  //       span.setStatus({ code: SpanStatusCode.ERROR });
  //       throw error;
  //     } finally {
  //       span.end();
  //     }
  //   });
  // }
}
