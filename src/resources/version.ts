// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Version extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/version', { ...options, __binaryResponse: true });
  }
}
