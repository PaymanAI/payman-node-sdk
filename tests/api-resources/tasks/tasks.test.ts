// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paymanai from 'paymanai';
import { Response } from 'node-fetch';

const paymanai = new Paymanai({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource tasks', () => {
  test('create: only required params', async () => {
    const responsePromise = paymanai.tasks.create({
      description:
        'Proofread a 10-page legal document for spelling and grammar errors.  Please include a summary of changes or a confirmation that no errors were found.',
      organizationId: 'string',
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

  test('create: required and optional params', async () => {
    const response = await paymanai.tasks.create({
      description:
        'Proofread a 10-page legal document for spelling and grammar errors.  Please include a summary of changes or a confirmation that no errors were found.',
      organizationId: 'string',
      title: 'Proofread a legal document',
      category: 'MARKETING',
      deadline: '2019-12-27T18:11:19.117Z',
      inviteEmails: ['string', 'string', 'string'],
      payout: 0,
      payoutWalletId: 'string',
      requiredSubmissions: 0,
      submissionPolicy: 'OPEN_SUBMISSIONS_ONE_PER_USER',
    });
  });

  test('retrieve', async () => {
    const responsePromise = paymanai.tasks.retrieve('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(paymanai.tasks.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Paymanai.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = paymanai.tasks.update('string', {
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

  test('update: required and optional params', async () => {
    const response = await paymanai.tasks.update('string', {
      description:
        'Proofread a 10-page legal document for spelling and grammar errors.  Please include a summary of changes or a confirmation that no errors were found.',
      title: 'Proofread a legal document',
    });
  });

  test('list', async () => {
    const responsePromise = paymanai.tasks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(paymanai.tasks.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Paymanai.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      paymanai.tasks.list({ limit: 0, page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Paymanai.NotFoundError);
  });
});
