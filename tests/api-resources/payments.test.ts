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
      type: 'PAYMAN_AGENT',
      name: 'name',
      paymanAgent: 'paymanAgent',
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
      type: 'PAYMAN_AGENT',
      contactDetails: {
        address: 'address',
        email: 'email',
        phoneNumber: 'phoneNumber',
        taxId: 'taxId',
      },
      name: 'name',
      paymanAgent: 'paymanAgent',
      tags: ['string'],
    });
  });

  test('deletePayee', async () => {
    const responsePromise = client.payments.deletePayee('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deletePayee: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.payments.deletePayee('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Paymanai.NotFoundError,
    );
  });

  test('getDepositLink: only required params', async () => {
    const responsePromise = client.payments.getDepositLink({ amountDecimal: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getDepositLink: required and optional params', async () => {
    const response = await client.payments.getDepositLink({
      amountDecimal: 0,
      feeMode: 'INCLUDED_IN_AMOUNT',
      memo: 'memo',
      metadata: { foo: 'bar' },
      walletId: 'walletId',
    });
  });

  test('searchPayees', async () => {
    const responsePromise = client.payments.searchPayees();
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
    await expect(client.payments.searchPayees({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Paymanai.NotFoundError,
    );
  });

  test('searchPayees: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.searchPayees(
        {
          accountNumber: 'accountNumber',
          agentReference: 'agentReference',
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
    const responsePromise = client.payments.sendPayment({
      amountDecimal: 0,
      paymentDestinationId: 'paymentDestinationId',
    });
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
      paymentDestinationId: 'paymentDestinationId',
      memo: 'memo',
      metadata: { foo: 'bar' },
      walletId: 'walletId',
    });
  });
});
