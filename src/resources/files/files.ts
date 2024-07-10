// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PrivateAPI from './private';

export class Files extends APIResource {
  private: PrivateAPI.Private = new PrivateAPI.Private(this._client);
}

export namespace Files {
  export import Private = PrivateAPI.Private;
  export import PrivateDownloadParams = PrivateAPI.PrivateDownloadParams;
}
