// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paymanai from 'paymanai';

const paymanai = new Paymanai({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource private', () => {
  test('download: required and optional params', async () => {
    const response = await paymanai.files.private.download({ key: 'string' });
  });
});
