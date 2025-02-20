// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Agents extends APIResource {
  /**
   * Returns identity of the agent represented by the id or handle matching the input
   * 'ref'
   */
  getAgentByReference(ref: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/agents/${ref}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
      __binaryResponse: true,
    });
  }
}
