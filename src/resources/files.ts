// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as FilesAPI from './files';
import { type Response } from '../_shims/index';

export class Files extends APIResource {
  download(query: FileDownloadParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/files/private/download', { query, ...options, __binaryResponse: true });
  }
}

export interface FileDownloadParams {
  key: string;
}

export namespace Files {
  export import FileDownloadParams = FilesAPI.FileDownloadParams;
}
