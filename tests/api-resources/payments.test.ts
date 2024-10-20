// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paymanai from 'paymanai';
import { Response } from 'node-fetch';

const client = new Paymanai({
  xPaymanAPISecret: 'My X Payman API Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
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
      currencyCode: 'currencyCode',
      email: 'email',
      feeMode: 'INCLUDED_IN_AMOUNT',
      metadata: { foo: 'string' },
      name: 'name',
      walletId: 'walletId',
    });
  });
});
