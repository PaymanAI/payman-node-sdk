// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PrivateAPI from './private';
import { type Response } from '../../_shims/index';

export class Private extends APIResource {
  download(query: PrivateDownloadParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/files/private/download', { query, ...options, __binaryResponse: true });
  }
}

export interface PrivateDownloadParams {
  key: string;
}

export namespace Private {
  export import PrivateDownloadParams = PrivateAPI.PrivateDownloadParams;
}
