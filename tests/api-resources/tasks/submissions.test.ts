// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paymanai from 'paymanai';
import { Response } from 'node-fetch';

const paymanai = new Paymanai({
  xPaymanAgentId: 'My X Payman Agent ID',
  xPaymanAPISecret: 'My X Payman API Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource submissions', () => {
  test('listTaskSubmissions', async () => {
    const responsePromise = paymanai.tasks.submissions.listTaskSubmissions('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listTaskSubmissions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      paymanai.tasks.submissions.listTaskSubmissions('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Paymanai.NotFoundError);
  });

  test('listTaskSubmissions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      paymanai.tasks.submissions.listTaskSubmissions(
        'string',
        { limit: 0, page: 0, statuses: ['PENDING'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paymanai.NotFoundError);
  });
});
