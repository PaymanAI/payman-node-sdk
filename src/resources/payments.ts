// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Payments extends APIResource {
  /**
   * Initiates the creation of a checkout link, through which the customer can add
   * funds to the agent's wallet. For example this could be used to have your
   * customer pay for some activity the agent is going to undertake on their behalf.
   * The returned JSON checkoutUrl property will contain a URL that the customer can
   * visit to complete the payment.
   */
  initiateCustomerDeposit(
    body: PaymentInitiateCustomerDepositParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentInitiateCustomerDepositResponse> {
    return this._client.post('/payments/customer-deposit-link', { body, ...options });
  }

  /**
   * Searches existing payment destinations for potential matches. Additional
   * confirmation from the user is required to verify the correct payment destination
   * is selected.
   */
  searchDestinations(
    query?: PaymentSearchDestinationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentSearchDestinationsResponse>;
  searchDestinations(options?: Core.RequestOptions): Core.APIPromise<PaymentSearchDestinationsResponse>;
  searchDestinations(
    query: PaymentSearchDestinationsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentSearchDestinationsResponse> {
    if (isRequestOptions(query)) {
      return this.searchDestinations({}, query);
    }
    return this._client.get('/payments/search-destinations', { query, ...options });
  }

  /**
   * Sends funds from an agent controlled wallet to a payment destination.
   */
  sendPayment(
    body: PaymentSendPaymentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentSendPaymentResponse> {
    return this._client.post('/payments/send-payment', { body, ...options });
  }
}

export interface PaymentInitiateCustomerDepositResponse {
  /**
   * A URL that you can redirect the user to in order to complete the deposit.
   */
  checkoutUrl: string;
}

export type PaymentSearchDestinationsResponse =
  Array<PaymentSearchDestinationsResponse.PaymentSearchDestinationsResponseItem>;

export namespace PaymentSearchDestinationsResponse {
  export interface PaymentSearchDestinationsResponseItem {
    /**
     * The user-assigned name of the payment destination
     */
    name: string;

    organizationId: string;

    /**
     * The type of payment destination
     */
    type: 'US_ACH' | 'CRYPTO_ADDRESS';

    id?: string;

    /**
     * Contact details for this payment destination
     */
    contactDetails?: PaymentSearchDestinationsResponseItem.ContactDetails;

    createdAt?: string;

    createdBy?: string;

    destinationDetails?: Record<string, unknown>;

    providerInfo?: Record<string, unknown>;

    /**
     * The ID of the payment method this entity replaces
     */
    replacesId?: string;

    searchHashes?: Record<string, unknown>;

    /**
     * The status of the payment destination
     */
    status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED';

    /**
     * Tags to help categorize the payment destination
     */
    tags?: Array<string>;

    updatedAt?: string;

    updatedBy?: string;
  }

  export namespace PaymentSearchDestinationsResponseItem {
    /**
     * Contact details for this payment destination
     */
    export interface ContactDetails {
      /**
       * The address string of the payment destination contact
       */
      address?: string;

      /**
       * The type of the payment destination contact
       */
      contactType?: 'individual' | 'business';

      /**
       * The email address of the payment destination contact
       */
      email?: string;

      /**
       * The phone number of the payment destination contact
       */
      phoneNumber?: string;

      /**
       * The tax identification of the payment destination contact
       */
      taxId?: string;
    }
  }
}

export interface PaymentSendPaymentResponse {
  /**
   * The Payman reference of the payment
   */
  reference: string;

  /**
   * The external reference of the payment if applicable (e.g. a blockchain
   * transaction hash)
   */
  externalReference?: string;
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
   * An email address to associate with this customer.
   */
  customerEmail?: string;

  /**
   * A name to associate with this customer.
   */
  customerName?: string;

  /**
   * Determines whether to add any processing fees to the requested amount. If set to
   * INCLUDED_IN_AMOUNT, the customer will be charged the exact amount specified, and
   * fees will be deducted from that before the remainder is deposited in the wallet.
   * If set to ADD_TO_AMOUNT, the customer will be charged the amount specified plus
   * any fees required. Defaults to 'INCLUDED_IN_AMOUNT'.
   */
  feeMode?: 'INCLUDED_IN_AMOUNT' | 'ADD_TO_AMOUNT';

  /**
   * A memo to associate with any transactions created in the Payman ledger.
   */
  memo?: string;

  metadata?: Record<string, unknown>;

  /**
   * The ID of the wallet you would like the customer to add funds to. Only required
   * if the agent has access to more than one wallet.
   */
  walletId?: string;
}

export interface PaymentSearchDestinationsParams {
  /**
   * The US Bank account number to search for.
   */
  accountNumber?: string;

  /**
   * The contact email to search for.
   */
  contactEmail?: string;

  /**
   * The contact phone number to search for.
   */
  contactPhoneNumber?: string;

  /**
   * The contact tax id to search for.
   */
  contactTaxId?: string;

  /**
   * The name of the payment destination to search for. This can be a partial,
   * case-insensitive match.
   */
  name?: string;

  /**
   * The US Bank routing number to search for.
   */
  routingNumber?: string;

  /**
   * The type of destination to search for.
   */
  type?: string;
}

export interface PaymentSendPaymentParams {
  /**
   * The amount to generate a checkout link for. For example, '10.00' for USD is
   * $10.00 or '1.000000' USDCBASE is 1 USDC.
   */
  amountDecimal: number;

  /**
   * An email address to associate with this customer.
   */
  customerEmail?: string;

  /**
   * The ID of the customer on whose behalf you're transferring funds. This can be
   * any unique ID as held within your system. Providing this will limit the
   * spendableamounts to what the customer has already deposited (unless
   * ignoreCustomerSpendLimits is set to true).
   */
  customerId?: string;

  /**
   * A name to associate with this customer.
   */
  customerName?: string;

  /**
   * By default Payman will limit spending on behalf of a customer to the amount they
   * have deposited. If you wish to ignore this limit, set this to true.
   */
  ignoreCustomerSpendLimits?: boolean;

  /**
   * A note or memo to associate with this payment.
   */
  memo?: string;

  metadata?: Record<string, unknown>;

  /**
   * A cryptocurrency address-based payment destination
   */
  paymentDestination?:
    | PaymentSendPaymentParams.CryptoAddressPaymentDestinationDescriptor
    | PaymentSendPaymentParams.UsachPaymentDestinationDescriptor;

  /**
   * The id of the payment destination you want to send the funds to. This must have
   * been created using the /payments/destinations endpoint or via the Payman
   * dashboard before sending. Exactly one of paymentDestination and
   * paymentDestinationId must be provided.
   */
  paymentDestinationId?: string;

  /**
   * The ID of the specific wallet from which to send the funds. This is only
   * required if the agent has access to multiple wallets (not the case by default).
   */
  walletId?: string;
}

export namespace PaymentSendPaymentParams {
  /**
   * A cryptocurrency address-based payment destination
   */
  export interface CryptoAddressPaymentDestinationDescriptor {
    /**
     * The type of payment destination
     */
    type: 'CRYPTO_ADDRESS';

    /**
     * The cryptocurrency address to send funds to
     */
    address?: string;

    /**
     * Contact details for this payment destination
     */
    contactDetails?: CryptoAddressPaymentDestinationDescriptor.ContactDetails;

    /**
     * The the blockchain to use for the transaction
     */
    currency?: string;

    /**
     * The name you wish to associate with this payment destination for future lookups.
     */
    name?: string;

    /**
     * Any additional labels you wish to assign to this payment destination
     */
    tags?: Array<string>;
  }

  export namespace CryptoAddressPaymentDestinationDescriptor {
    /**
     * Contact details for this payment destination
     */
    export interface ContactDetails {
      /**
       * The address string of the payment destination contact
       */
      address?: string;

      /**
       * The type of the payment destination contact
       */
      contactType?: 'individual' | 'business';

      /**
       * The email address of the payment destination contact
       */
      email?: string;

      /**
       * The phone number of the payment destination contact
       */
      phoneNumber?: string;

      /**
       * The tax identification of the payment destination contact
       */
      taxId?: string;
    }
  }

  /**
   * A US ACH payment destination
   */
  export interface UsachPaymentDestinationDescriptor {
    /**
     * The type of payment destination
     */
    type: 'US_ACH';

    /**
     * The name of the account holder
     */
    accountHolderName?: string;

    /**
     * The bank account number for the account
     */
    accountNumber?: string;

    /**
     * The type of account it is (checking or savings)
     */
    accountType?: string;

    /**
     * Contact details for this payment destination
     */
    contactDetails?: UsachPaymentDestinationDescriptor.ContactDetails;

    /**
     * The name you wish to associate with this payment destination for future lookups.
     */
    name?: string;

    /**
     * The routing number of the bank
     */
    routingNumber?: string;

    /**
     * Any additional labels you wish to assign to this payment destination
     */
    tags?: Array<string>;
  }

  export namespace UsachPaymentDestinationDescriptor {
    /**
     * Contact details for this payment destination
     */
    export interface ContactDetails {
      /**
       * The address string of the payment destination contact
       */
      address?: string;

      /**
       * The type of the payment destination contact
       */
      contactType?: 'individual' | 'business';

      /**
       * The email address of the payment destination contact
       */
      email?: string;

      /**
       * The phone number of the payment destination contact
       */
      phoneNumber?: string;

      /**
       * The tax identification of the payment destination contact
       */
      taxId?: string;
    }
  }
}

export declare namespace Payments {
  export {
    type PaymentInitiateCustomerDepositResponse as PaymentInitiateCustomerDepositResponse,
    type PaymentSearchDestinationsResponse as PaymentSearchDestinationsResponse,
    type PaymentSendPaymentResponse as PaymentSendPaymentResponse,
    type PaymentInitiateCustomerDepositParams as PaymentInitiateCustomerDepositParams,
    type PaymentSearchDestinationsParams as PaymentSearchDestinationsParams,
    type PaymentSendPaymentParams as PaymentSendPaymentParams,
  };
}
