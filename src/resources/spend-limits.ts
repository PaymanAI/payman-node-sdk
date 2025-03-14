// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class SpendLimits extends APIResource {
  /**
   * Returns wallet spend limit details of the current agent
   */
  getSpendLimits(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/spend-limits', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
      __binaryResponse: true,
    });
  }
}
