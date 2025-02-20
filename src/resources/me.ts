// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Me extends APIResource {
  /**
   * Returns identity details of the current agent
   */
  me(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/me', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
      __binaryResponse: true,
    });
  }
}
