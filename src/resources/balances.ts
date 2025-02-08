// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Balances extends APIResource {
  /**
   * Get the current agent's own spendable balance for a specific currency. A balance
   * is considered spendable if it has been verified as having arrived in the Payman
   * wallet and is reduced according to any applicable spend limit controls. The
   * balance will be returned in the currency's full units (e.g. '1.00' is $1 in USD,
   * '1.000000' is 1 USDC).
   */
  getSpendableBalance(
    currency: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BalanceGetSpendableBalanceResponse> {
    return this._client.get(`/balances/currencies/${currency}`, {
      ...options,
      headers: { Accept: 'application/vnd.payman.v1+json', ...options?.headers },
    });
  }
}

export type BalanceGetSpendableBalanceResponse = number;

export declare namespace Balances {
  export { type BalanceGetSpendableBalanceResponse as BalanceGetSpendableBalanceResponse };
}
