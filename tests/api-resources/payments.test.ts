// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paymanai from 'paymanai';
import { Response } from 'node-fetch';

const client = new Paymanai({
  xPaymanAPISecret: 'My X Payman API Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  test('createPayee: only required params', async () => {
    const responsePromise = client.payments.createPayee({
      type: 'CRYPTO_ADDRESS',
      address: 'address',
      currency: 'currency',
      name: 'name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createPayee: required and optional params', async () => {
    const response = await client.payments.createPayee({
      type: 'CRYPTO_ADDRESS',
      address: 'address',
      contactDetails: {
        address: 'address',
        contactType: 'individual',
        email: 'email',
        phoneNumber: 'phoneNumber',
        taxId: 'taxId',
      },
      currency: 'currency',
      name: 'name',
      tags: ['string'],
    });
  });

  test('initiateCustomerDeposit: only required params', async () => {
    const responsePromise = client.payments.initiateCustomerDeposit({
      amountDecimal: 0,
      customerId: 'customerId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('initiateCustomerDeposit: required and optional params', async () => {
    const response = await client.payments.initiateCustomerDeposit({
      amountDecimal: 0,
      customerId: 'customerId',
      customerEmail: 'customerEmail',
      customerName: 'customerName',
      feeMode: 'INCLUDED_IN_AMOUNT',
      memo: 'memo',
      metadata: { foo: 'bar' },
      walletId: 'walletId',
    });
  });

  test('searchDestinations', async () => {
    const responsePromise = client.payments.searchDestinations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('searchDestinations: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.payments.searchDestinations({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Paymanai.NotFoundError,
    );
  });

  test('searchDestinations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.searchDestinations(
        {
          accountNumber: 'accountNumber',
          contactEmail: 'contactEmail',
          contactPhoneNumber: 'contactPhoneNumber',
          contactTaxId: 'contactTaxId',
          name: 'name',
          routingNumber: 'routingNumber',
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paymanai.NotFoundError);
  });

  test('sendPayment: only required params', async () => {
    const responsePromise = client.payments.sendPayment({ amountDecimal: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sendPayment: required and optional params', async () => {
    const response = await client.payments.sendPayment({
      amountDecimal: 0,
      customerEmail: 'customerEmail',
      customerId: 'customerId',
      customerName: 'customerName',
      ignoreCustomerSpendLimits: true,
      memo: 'memo',
      metadata: { foo: 'bar' },
      paymentDestination: {
        type: 'CRYPTO_ADDRESS',
        address: 'address',
        contactDetails: {
          address: 'address',
          contactType: 'individual',
          email: 'email',
          phoneNumber: 'phoneNumber',
          taxId: 'taxId',
        },
        currency: 'currency',
        name: 'name',
        tags: ['string'],
      },
      paymentDestinationId: 'paymentDestinationId',
      walletId: 'walletId',
    });
  });
});
