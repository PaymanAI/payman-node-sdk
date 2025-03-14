// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Payments extends APIResource {
  /**
   * Create a new payee (aka payee) for future payments to be sent to
   */
  createPayee(
    body: PaymentCreatePayeeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentCreatePayeeResponse> {
    return this._client.post('/payments/payees', {
      body,
      ...options,
      headers: { Accept: 'application/vnd.payman.v1+json', ...options?.headers },
    });
  }

  /**
   * Delete a payee (aka payee)
   */
  deletePayee(id: string, options?: Core.RequestOptions): Core.APIPromise<PaymentDeletePayeeResponse> {
    return this._client.delete(`/payments/payees/${id}`, {
      ...options,
      headers: { Accept: 'application/vnd.payman.v1+json', ...options?.headers },
    });
  }

  /**
   * Searches existing payee for potential matches. Additional confirmation from the
   * user is required to verify the correct payee is selected.
   */
  searchPayees(
    query?: PaymentSearchPayeesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentSearchPayeesResponse>;
  searchPayees(options?: Core.RequestOptions): Core.APIPromise<PaymentSearchPayeesResponse>;
  searchPayees(
    query: PaymentSearchPayeesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentSearchPayeesResponse> {
    if (isRequestOptions(query)) {
      return this.searchPayees({}, query);
    }
    return this._client.get('/payments/search-payees', {
      query,
      ...options,
      headers: { Accept: 'application/vnd.payman.v1+json', ...options?.headers },
    });
  }

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

export interface PaymentCreatePayeeResponse {
  /**
   * The user-assigned name of the payee
   */
  name: string;

  organizationId: string;

  /**
   * The type of payee
   */
  type: 'US_ACH' | 'CRYPTO_ADDRESS' | 'PAYMAN_WALLET' | 'TEST_RAILS';

  id?: string;

  /**
   * Contact details for this payee
   */
  contactDetails?: PaymentCreatePayeeResponse.ContactDetails;

  createdAt?: string;

  createdBy?: string;

  payeeDetails?: Record<string, unknown>;

  providerInfo?: Record<string, unknown>;

  /**
   * The ID of the payee this entity replaces
   */
  replacesId?: string;

  searchHashes?: Record<string, unknown>;

  /**
   * The status of the payee
   */
  status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED';

  /**
   * Tags to help categorize the payee
   */
  tags?: Array<string>;

  updatedAt?: string;

  updatedBy?: string;
}

export namespace PaymentCreatePayeeResponse {
  /**
   * Contact details for this payee
   */
  export interface ContactDetails {
    /**
     * The address string of the payee contact. IMPORTANTIf you are paying someone from
     * a USDC wallet by ACH (US_ACH payee type), you are required to provide an address
     */
    address?: ContactDetails.Address;

    /**
     * The email address of the payee contact
     */
    email?: string;

    /**
     * The phone number of the payee contact
     */
    phoneNumber?: string;

    /**
     * The tax identification of the payee contact
     */
    taxId?: string;
  }

  export namespace ContactDetails {
    /**
     * The address string of the payee contact. IMPORTANTIf you are paying someone from
     * a USDC wallet by ACH (US_ACH payee type), you are required to provide an address
     */
    export interface Address {
      addressLine1?: string;

      addressLine2?: string;

      addressLine3?: string;

      addressLine4?: string;

      country?: string;

      locality?: string;

      postcode?: string;

      region?: string;
    }
  }
}

export interface PaymentDeletePayeeResponse {
  message?: string;

  success?: boolean;
}

export type PaymentSearchPayeesResponse = Array<PaymentSearchPayeesResponse.PaymentSearchPayeesResponseItem>;

export namespace PaymentSearchPayeesResponse {
  export interface PaymentSearchPayeesResponseItem {
    /**
     * The user-assigned name of the payee
     */
    name: string;

    organizationId: string;

    /**
     * The type of payee
     */
    type: 'US_ACH' | 'CRYPTO_ADDRESS' | 'PAYMAN_WALLET' | 'TEST_RAILS';

    id?: string;

    /**
     * Contact details for this payee
     */
    contactDetails?: PaymentSearchPayeesResponseItem.ContactDetails;

    createdAt?: string;

    createdBy?: string;

    payeeDetails?: Record<string, unknown>;

    providerInfo?: Record<string, unknown>;

    /**
     * The ID of the payee this entity replaces
     */
    replacesId?: string;

    searchHashes?: Record<string, unknown>;

    /**
     * The status of the payee
     */
    status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED';

    /**
     * Tags to help categorize the payee
     */
    tags?: Array<string>;

    updatedAt?: string;

    updatedBy?: string;
  }

  export namespace PaymentSearchPayeesResponseItem {
    /**
     * Contact details for this payee
     */
    export interface ContactDetails {
      /**
       * The address string of the payee contact. IMPORTANTIf you are paying someone from
       * a USDC wallet by ACH (US_ACH payee type), you are required to provide an address
       */
      address?: ContactDetails.Address;

      /**
       * The email address of the payee contact
       */
      email?: string;

      /**
       * The phone number of the payee contact
       */
      phoneNumber?: string;

      /**
       * The tax identification of the payee contact
       */
      taxId?: string;
    }

    export namespace ContactDetails {
      /**
       * The address string of the payee contact. IMPORTANTIf you are paying someone from
       * a USDC wallet by ACH (US_ACH payee type), you are required to provide an address
       */
      export interface Address {
        addressLine1?: string;

        addressLine2?: string;

        addressLine3?: string;

        addressLine4?: string;

        country?: string;

        locality?: string;

        postcode?: string;

        region?: string;
      }
    }
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

export type PaymentCreatePayeeParams =
  | PaymentCreatePayeeParams.CryptoAddressPayeeDescriptor
  | PaymentCreatePayeeParams.PaymanWalletPayeeDescriptor
  | PaymentCreatePayeeParams.TsdPayeeDescriptor
  | PaymentCreatePayeeParams.UsachPayeeDescriptor;

export declare namespace PaymentCreatePayeeParams {
  export interface CryptoAddressPayeeDescriptor {
    /**
     * The type of payee
     */
    type: 'CRYPTO_ADDRESS';

    /**
     * The cryptocurrency address to send funds to
     */
    address?: string;

    /**
     * The the blockchain to use for the transaction
     */
    chain?: string;

    /**
     * Contact details for this payee
     */
    contactDetails?: CryptoAddressPayeeDescriptor.ContactDetails;

    /**
     * The the currency/token to use for the transaction
     */
    currency?: string;

    /**
     * The name you wish to associate with this payee for future lookups.
     */
    name?: string;

    /**
     * Any additional labels you wish to assign to this payee
     */
    tags?: Array<string>;
  }

  export namespace CryptoAddressPayeeDescriptor {
    /**
     * Contact details for this payee
     */
    export interface ContactDetails {
      /**
       * The address string of the payee contact. IMPORTANTIf you are paying someone from
       * a USDC wallet by ACH (US_ACH payee type), you are required to provide an address
       */
      address?: ContactDetails.Address;

      /**
       * The email address of the payee contact
       */
      email?: string;

      /**
       * The phone number of the payee contact
       */
      phoneNumber?: string;

      /**
       * The tax identification of the payee contact
       */
      taxId?: string;
    }

    export namespace ContactDetails {
      /**
       * The address string of the payee contact. IMPORTANTIf you are paying someone from
       * a USDC wallet by ACH (US_ACH payee type), you are required to provide an address
       */
      export interface Address {
        addressLine1?: string;

        addressLine2?: string;

        addressLine3?: string;

        addressLine4?: string;

        country?: string;

        locality?: string;

        postcode?: string;

        region?: string;
      }
    }
  }

  export interface PaymanWalletPayeeDescriptor {
    /**
     * The type of payee
     */
    type: 'PAYMAN_WALLET';

    /**
     * Contact details for this payee
     */
    contactDetails?: PaymanWalletPayeeDescriptor.ContactDetails;

    /**
     * The name you wish to associate with this payee for future lookups.
     */
    name?: string;

    /**
     * The Payman handle or the id of the receiver wallet
     */
    paymanWallet?: string;

    /**
     * Any additional labels you wish to assign to this payee
     */
    tags?: Array<string>;
  }

  export namespace PaymanWalletPayeeDescriptor {
    /**
     * Contact details for this payee
     */
    export interface ContactDetails {
      /**
       * The address string of the payee contact. IMPORTANTIf you are paying someone from
       * a USDC wallet by ACH (US_ACH payee type), you are required to provide an address
       */
      address?: ContactDetails.Address;

      /**
       * The email address of the payee contact
       */
      email?: string;

      /**
       * The phone number of the payee contact
       */
      phoneNumber?: string;

      /**
       * The tax identification of the payee contact
       */
      taxId?: string;
    }

    export namespace ContactDetails {
      /**
       * The address string of the payee contact. IMPORTANTIf you are paying someone from
       * a USDC wallet by ACH (US_ACH payee type), you are required to provide an address
       */
      export interface Address {
        addressLine1?: string;

        addressLine2?: string;

        addressLine3?: string;

        addressLine4?: string;

        country?: string;

        locality?: string;

        postcode?: string;

        region?: string;
      }
    }
  }

  export interface TsdPayeeDescriptor {
    /**
     * The type of payee
     */
    type: 'TEST_RAILS';

    /**
     * The name you wish to associate with this payee for future lookups.
     */
    name?: string;

    /**
     * Any additional labels you wish to assign to this payee
     */
    tags?: Array<string>;
  }

  export interface UsachPayeeDescriptor {
    /**
     * The type of payee
     */
    type: 'US_ACH';

    /**
     * The name of the account holder
     */
    accountHolderName?: string;

    /**
     * The type of the account holder
     */
    accountHolderType?: 'individual' | 'business';

    /**
     * The bank account number for the account
     */
    accountNumber?: string;

    /**
     * The type of account it is (checking or savings)
     */
    accountType?: string;

    /**
     * Contact details for this payee
     */
    contactDetails?: UsachPayeeDescriptor.ContactDetails;

    /**
     * The name you wish to associate with this payee for future lookups.
     */
    name?: string;

    /**
     * The routing number of the bank
     */
    routingNumber?: string;

    /**
     * Any additional labels you wish to assign to this payee
     */
    tags?: Array<string>;
  }

  export namespace UsachPayeeDescriptor {
    /**
     * Contact details for this payee
     */
    export interface ContactDetails {
      /**
       * The address string of the payee contact. IMPORTANTIf you are paying someone from
       * a USDC wallet by ACH (US_ACH payee type), you are required to provide an address
       */
      address?: ContactDetails.Address;

      /**
       * The email address of the payee contact
       */
      email?: string;

      /**
       * The phone number of the payee contact
       */
      phoneNumber?: string;

      /**
       * The tax identification of the payee contact
       */
      taxId?: string;
    }

    export namespace ContactDetails {
      /**
       * The address string of the payee contact. IMPORTANTIf you are paying someone from
       * a USDC wallet by ACH (US_ACH payee type), you are required to provide an address
       */
      export interface Address {
        addressLine1?: string;

        addressLine2?: string;

        addressLine3?: string;

        addressLine4?: string;

        country?: string;

        locality?: string;

        postcode?: string;

        region?: string;
      }
    }
  }
}

export interface PaymentSearchPayeesParams {
  /**
   * The US Bank account number to search for.
   */
  accountNumber?: string;

  /**
   * The Payman agent reference (id or handle) to search for.
   */
  agentReference?: string;

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
   * The crypto address to search for.
   */
  cryptoAddress?: string;

  /**
   * The crypto chain to search for.
   */
  cryptoChain?: string;

  /**
   * The crypto currency to search for.
   */
  cryptoCurrency?: string;

  /**
   * The name of the payee to search for. This can be a partial, case-insensitive
   * match.
   */
  name?: string;

  /**
   * The US Bank routing number to search for.
   */
  routingNumber?: string;
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
    type PaymentCreatePayeeResponse as PaymentCreatePayeeResponse,
    type PaymentDeletePayeeResponse as PaymentDeletePayeeResponse,
    type PaymentSearchPayeesResponse as PaymentSearchPayeesResponse,
    type PaymentSendPaymentResponse as PaymentSendPaymentResponse,
    type PaymentCreatePayeeParams as PaymentCreatePayeeParams,
    type PaymentSearchPayeesParams as PaymentSearchPayeesParams,
    type PaymentSendPaymentParams as PaymentSendPaymentParams,
  };
}
