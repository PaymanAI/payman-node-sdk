// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as WalletsAPI from './wallets';

export class Wallets extends APIResource {
  /**
   * Get a wallet by ID
   */
  getWallet(id: string, options?: Core.RequestOptions): Core.APIPromise<WalletGetWalletResponse> {
    return this._client.get(`/wallets/${id}`, options);
  }
}

export interface WalletGetWalletResponse {
  /**
   * The amount of currency that is currently held in escrow against created tasks.
   */
  balanceInEscrow: number;

  /**
   * The currency in which the payout is denominated.
   */
  currency: WalletGetWalletResponse.Currency;

  /**
   * The amount of currency that can be spent from this wallet.
   */
  spendableBalance: number;

  /**
   * The amount of currency that is currently unconfirmed (e.g. incomplete deposits).
   */
  unconfirmedBalance: number;

  id?: string;

  /**
   * A descriptive name for this wallet
   */
  name?: string;

  /**
   * Any additional notes or information about this wallet.
   */
  notes?: string;

  /**
   * The total balance of this wallet, including spendable balance, balance in
   * escrow, and unconfirmed balance.
   */
  totalBalance?: number;
}

export namespace WalletGetWalletResponse {
  /**
   * The currency in which the payout is denominated.
   */
  export interface Currency {
    /**
     * The name of this currency's fractional unit
     */
    fractionalUnitName: string;

    /**
     * The name of this currency
     */
    name: string;

    /**
     * The currency symbol to use
     */
    symbol: string;

    type: 'CRYPTOCURRENCY' | 'FIAT';

    active?: boolean;

    /**
     * The unique short code for this currency
     */
    code?: string;

    /**
     * The number of decimal places this currency supports.
     */
    decimalPlaces?: number;

    /**
     * A longer form description of the item
     */
    description?: string;

    /**
     * The number of decimal places to show when rendering an amount of this currency.
     */
    displayDecimalPlaces?: number;

    /**
     * A descriptive label of the item
     */
    label?: string;

    /**
     * The value of the item
     */
    value?: string;
  }
}

export namespace Wallets {
  export import WalletGetWalletResponse = WalletsAPI.WalletGetWalletResponse;
}
