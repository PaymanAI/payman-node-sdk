// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Description extends APIResource {
  getAPIDescription(options?: Core.RequestOptions): Core.APIPromise<DescriptionGetAPIDescriptionResponse> {
    return this._client.get('/description', options);
  }
}

export interface DescriptionGetAPIDescriptionResponse {
  description?: string;

  openAPISpec?: Record<string, unknown>;

  version?: string;
}

export declare namespace Description {
  export { type DescriptionGetAPIDescriptionResponse as DescriptionGetAPIDescriptionResponse };
}
