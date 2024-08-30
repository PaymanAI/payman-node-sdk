// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paymanai from 'paymanai';
import { Response } from 'node-fetch';

const client = new Paymanai({
  xPaymanAPISecret: 'My X Payman API Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  test('createTask: only required params', async () => {
    const responsePromise = client.tasks.createTask({
      description:
        'Proofread a 10-page legal document for spelling and grammar errors.  Please include a summary of changes or a confirmation that no errors were found.',
      payout: 0,
      title: 'Proofread a legal document',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createTask: required and optional params', async () => {
    const response = await client.tasks.createTask({
      description:
        'Proofread a 10-page legal document for spelling and grammar errors.  Please include a summary of changes or a confirmation that no errors were found.',
      payout: 0,
      title: 'Proofread a legal document',
      category: 'MARKETING',
      deadline: '2019-12-27T18:11:19.117Z',
      inviteEmails: ['string', 'string', 'string'],
      metadata: { foo: 'string' },
      payoutWalletId: 'payoutWalletId',
      requiredSubmissions: 0,
      submissionPolicy: 'OPEN_SUBMISSIONS_ONE_PER_USER',
      verificationConfiguration: { customPrompt: 'customPrompt', type: 'default' },
    });
  });

  test('getTask', async () => {
    const responsePromise = client.tasks.getTask('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getTask: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.tasks.getTask('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Paymanai.NotFoundError,
    );
  });

  test('listTasks', async () => {
    const responsePromise = client.tasks.listTasks();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listTasks: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.tasks.listTasks({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Paymanai.NotFoundError,
    );
  });

  test('listTasks: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tasks.listTasks({ limit: 0, page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Paymanai.NotFoundError);
  });

  test('updateTask: only required params', async () => {
    const responsePromise = client.tasks.updateTask('id', {
      description:
        'Proofread a 10-page legal document for spelling and grammar errors.  Please include a summary of changes or a confirmation that no errors were found.',
      title: 'Proofread a legal document',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateTask: required and optional params', async () => {
    const response = await client.tasks.updateTask('id', {
      description:
        'Proofread a 10-page legal document for spelling and grammar errors.  Please include a summary of changes or a confirmation that no errors were found.',
      title: 'Proofread a legal document',
    });
  });
});
