// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paymanai from 'paymanai';

const client = new Paymanai({
  xPaymanAPISecret: 'My X Payman API Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  test('getAgentByReference: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.getAgentByReference('ref', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Paymanai.NotFoundError);
  });
});
