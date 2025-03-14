// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Payments extends APIResource {
  /**
   * Sends funds from an agent controlled wallet to a payee.
   */
  sendPayment(
    body: PaymentSendPaymentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentSendPaymentResponse> {
    return this._client.post('/payments/send-payment', {
      body,
      ...options,
      headers: {
        Accept: 'application/vnd.payman.v1+json',
        ...options?.headers,
      },
    });
  }
}

export interface PaymentSendPaymentResponse {
  /**
   * The Payman reference of the payment
   */
  reference: string;

  /**
   * The status of the payment
   */
  status: 'INITIATED' | 'AWAITING_APPROVAL' | 'REJECTED';

  /**
   * The external reference of the payment if applicable (e.g. a blockchain
   * transaction hash)
   */
  externalReference?: string;
}

export interface PaymentSendPaymentParams {
  /**
   * The amount to generate a checkout link for. For example, '10.00' for USD is
   * $10.00 or '1.000000' USDCBASE is 1 USDC.
   */
  amountDecimal: number;

  /**
   * The id of the payee you want to send the funds to. This must have been created
   * using the /payments/payees endpoint or via the Payman dashboard before sending.
   */
  payeeId: string;

  /**
   * A note or memo to associate with this payment.
   */
  memo?: string;

  metadata?: Record<string, unknown>;

  /**
   * The ID of the specific wallet from which to send the funds. This is only
   * required if the agent has access to multiple wallets (not the case by default).
   */
  walletId?: string;
}

export declare namespace Payments {
  export {
    type PaymentSendPaymentResponse as PaymentSendPaymentResponse,
    type PaymentSendPaymentParams as PaymentSendPaymentParams,
  };
}
