// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PaymentsAPI from './payments';

export class Payments extends APIResource {
  /**
   * Get a deposit url that you can present to the user to let them deposit fundsinto
   * a wallet of their own. The wallet will be auto-created and the funds will
   * flowinto that wallet once they complete the checkout process.
   */
  initiateCustomerDeposit(
    body: PaymentInitiateCustomerDepositParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentInitiateCustomerDepositResponse> {
    return this._client.post('/payments/initiate-customer-deposit', { body, ...options });
  }
}

export interface PaymentInitiateCustomerDepositResponse {
  /**
   * A URL that you can redirect the user to in order to complete the deposit.
   */
  checkoutUrl: string;
}

export interface PaymentInitiateCustomerDepositParams {
  /**
   * The amount to generate a checkout link for. For example, '10.00' for USD is
   * $10.00 or '1.000000' USDCBASE is 1 USDC.
   */
  amountDecimal: number;

  /**
   * The ID of the customer to deposit funds for. This can be any unique ID as held
   * within your system.
   */
  customerId: string;

  /**
   * The currency code for which to generate a URL. Either USD or USDCBASE. If
   * omitted the currency will match the agent's default currency.
   */
  currencyCode?: string;

  /**
   * An email address to associate with this customer.
   */
  email?: string;

  /**
   * Determines whether to add any processing fees to the requested amount. If set to
   * INCLUDED_IN_AMOUNT, the customer will be charged the exact amount specified, and
   * fees will be deducted from that before the remainder is deposited in the wallet.
   * If set to ADD_TO_AMOUNT, the customer will be charged the amount specified plus
   * any fees required. Defaults to 'INCLUDED_IN_AMOUNT'.
   */
  feeMode?: 'INCLUDED_IN_AMOUNT' | 'ADD_TO_AMOUNT';

  /**
   * Agent provided metadata related to this deposit. You may use this to store
   * correlation data.When a task related payload is sent to any registered webhook,
   * this metadata will be included
   */
  metadata?: Record<string, string>;

  /**
   * A name to associate with this customer.
   */
  name?: string;

  /**
   * The wallet into which to deposit the funds. If omitted the funds will be
   * deposited into a wallet created for the customer.
   */
  walletId?: string;
}

export namespace Payments {
  export import PaymentInitiateCustomerDepositResponse = PaymentsAPI.PaymentInitiateCustomerDepositResponse;
  export import PaymentInitiateCustomerDepositParams = PaymentsAPI.PaymentInitiateCustomerDepositParams;
}
