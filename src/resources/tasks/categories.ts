// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CategoriesAPI from './categories';

export class Categories extends APIResource {
  /**
   * Provides a list of available task categories that may be used when creating
   * tasks.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CategoryListResponse> {
    return this._client.get('/tasks/categories', options);
  }
}

export type CategoryListResponse = Array<CategoryListResponse.CategoryListResponseItem>;

export namespace CategoryListResponse {
  export interface CategoryListResponseItem {
    /**
     * A longer form description of the item
     */
    description?: string;

    /**
     * A descriptive label of the item
     */
    label?: string;

    /**
     * The value of the item
     */
    value?: string;
  }
}

export namespace Categories {
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
}
