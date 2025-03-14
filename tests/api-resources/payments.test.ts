// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paymanai from 'paymanai';
import { Response } from 'node-fetch';

const client = new Paymanai({
  xPaymanAPISecret: 'My X Payman API Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  test('sendPayment: only required params', async () => {
    const responsePromise = client.payments.sendPayment({ amountDecimal: 0, payeeId: 'payeeId' });
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
      payeeId: 'payeeId',
      memo: 'memo',
      metadata: { foo: 'bar' },
      walletId: 'walletId',
    });
  });
});
