// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AssignmentsAPI from './assignments';

export class Assignments extends APIResource {
  /**
   * Assign a task to a user by email. The user will receive an email prompting them
   * to log into the Payman system at which point they will be able to accept the
   * invite.
   */
  create(
    id: string,
    body: AssignmentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssignmentCreateResponse> {
    return this._client.post(`/tasks/${id}/assignments`, { body, ...options });
  }

  /**
   * Get all assignments for a task
   */
  list(
    id: string,
    query?: AssignmentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssignmentListResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<AssignmentListResponse>;
  list(
    id: string,
    query: AssignmentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssignmentListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.get(`/tasks/${id}/assignments`, { query, ...options });
  }
}

export interface AssignmentCreateResponse {
  organizationId: string;

  status: 'IN_REVIEW' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'DELETED' | 'REJECTED' | 'ACCEPTED';

  taskId: string;

  id?: string;

  /**
   * The user that this task is assigned to
   */
  assignedTo?: AssignmentCreateResponse.AssignedTo;

  assignedToId?: string;

  completedAt?: string;

  expiresAt?: string;

  inviteCode?: string;

  inviteEmail?: string;

  task?: AssignmentCreateResponse.Task;
}

export namespace AssignmentCreateResponse {
  /**
   * The user that this task is assigned to
   */
  export interface AssignedTo {
    /**
     * The authentication methods for this user. Note: may not be visible subject to
     * caller's authorization scopes.
     */
    authenticationMethods: Array<'PASSWORD' | 'GOOGLE'>;

    /**
     * The email address for this user. Note: may not be visible subject to caller's
     * authorization scopes.
     */
    email: string;

    /**
     * The first name of this user.
     */
    firstName: string;

    /**
     * The current KYC status of this user account. Note: may not be visible subject to
     * caller's authorization scopes.
     */
    kycStatus: 'PENDING' | 'IN_REVIEW' | 'APPROVED' | 'REJECTED';

    /**
     * The last name of this user.
     */
    lastName: string;

    /**
     * The current status of this user account
     */
    status: 'ACTIVE' | 'DELETED' | 'LOCKED' | 'PENDING';

    id?: string;

    /**
     * The phone number for this user. Note: may not be visible subject to caller's
     * authorization scopes.
     */
    phone?: string;
  }

  export interface Task {
    /**
     * The task category this task should be shown under. Defaults to 'Other'.
     */
    category:
      | 'MARKETING'
      | 'ENGINEERING'
      | 'SALES'
      | 'DATA_ANALYTICS'
      | 'DESIGN'
      | 'PRODUCT_MANAGEMENT'
      | 'LEGAL'
      | 'MEDICAL'
      | 'FINANCE'
      | 'OTHER';

    /**
     * A detailed description of the task. This should include enough information for
     * the user to complete the task to the expected standard.
     */
    description: string;

    /**
     * The unique identifier for the organization that owns this task
     */
    organizationId: string;

    /**
     * The amount being offered for each approved submission on this task. Note the
     * amount is denominated in base units of the currency, so a payout of 100 in USD
     * would mean the payout would be $1.00
     */
    payout: number;

    /**
     * The number of submissions required before this task is closed. If this is set to
     * 1, the task will be closed after the first submission is received and approved.
     * Defaults to 1.
     */
    requiredSubmissions: number;

    /**
     * The policy determining who may submit solutions for this task.
     */
    submissionPolicy:
      | 'OPEN_SUBMISSIONS_ONE_PER_USER'
      | 'OPEN_SUBMISSIONS_MANY_PER_USER'
      | 'PRE_ASSIGNED_SUBMISSIONS'
      | 'OPEN_ASSIGNED_SUBMISSIONS';

    /**
     * A descriptive title for this task
     */
    title: string;

    id?: string;

    /**
     * The currency in which the payout is denominated.
     */
    currency?: Task.Currency;

    /**
     * The deadline for this task. If this is set, the task will be closed after this
     * time regardless of the number of submissions received and approved.
     */
    deadline?: string;

    /**
     * The ID of the wallet to be used to pay out rewards for this task. This wallet
     * must be owned by the organization that owns this task, the agent creating the
     * task must have access to the wallet, it must have sufficient funds to cover the
     * payouts, and must be in the same currency as the currency of this task.
     */
    payoutWalletId?: string;

    /**
     * Notes from the Payman review process about the task. This is used to store any
     * additional information concerning a task's review status (e.g. rejection
     * reasons).
     */
    reviewNotes?: string;

    /**
     * The current status of this task.
     */
    status?:
      | 'IN_REVIEW_BY_DEVELOPER'
      | 'IN_REVIEW_BY_AI'
      | 'IN_REVIEW_BY_SYSTEM_USER'
      | 'REJECTED'
      | 'OPEN'
      | 'STARTED'
      | 'COMPLETED'
      | 'CANCELLED'
      | 'SUSPENDED'
      | 'EXPIRED';

    /**
     * The configuration to be applied during task verification. The Payman
     * verification enginewill use this to customize the verification of this task.
     */
    verificationConfiguration?: Task.VerificationConfiguration;
  }

  export namespace Task {
    /**
     * The currency in which the payout is denominated.
     */
    export interface Currency {
      /**
       * The name of this currency's fractional unit
       */
      fractionalUnitName: string;

      /**
       * The name of this currency
       */
      name: string;

      /**
       * The currency symbol to use
       */
      symbol: string;

      type: 'CRYPTOCURRENCY' | 'FIAT';

      active?: boolean;

      /**
       * The unique short code for this currency
       */
      code?: string;

      /**
       * The number of decimal places this currency supports.
       */
      decimalPlaces?: number;

      /**
       * A longer form description of the item
       */
      description?: string;

      /**
       * The number of decimal places to show when rendering an amount of this currency.
       */
      displayDecimalPlaces?: number;

      /**
       * A descriptive label of the item
       */
      label?: string;

      /**
       * The value of the item
       */
      value?: string;
    }

    /**
     * The configuration to be applied during task verification. The Payman
     * verification enginewill use this to customize the verification of this task.
     */
    export interface VerificationConfiguration {
      customPrompt?: string;

      handler?: string;
    }
  }
}

export interface AssignmentListResponse {
  /**
   * Whether there are more results available
   */
  more?: boolean;

  /**
   * The page number for the next page of results
   */
  nextPage?: number;

  /**
   * The list of results for the current page
   */
  results?: Array<AssignmentListResponse.Result>;
}

export namespace AssignmentListResponse {
  export interface Result {
    organizationId: string;

    status: 'IN_REVIEW' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'DELETED' | 'REJECTED' | 'ACCEPTED';

    taskId: string;

    id?: string;

    /**
     * The user that this task is assigned to
     */
    assignedTo?: Result.AssignedTo;

    assignedToId?: string;

    completedAt?: string;

    expiresAt?: string;

    inviteCode?: string;

    inviteEmail?: string;

    task?: Result.Task;
  }

  export namespace Result {
    /**
     * The user that this task is assigned to
     */
    export interface AssignedTo {
      /**
       * The authentication methods for this user. Note: may not be visible subject to
       * caller's authorization scopes.
       */
      authenticationMethods: Array<'PASSWORD' | 'GOOGLE'>;

      /**
       * The email address for this user. Note: may not be visible subject to caller's
       * authorization scopes.
       */
      email: string;

      /**
       * The first name of this user.
       */
      firstName: string;

      /**
       * The current KYC status of this user account. Note: may not be visible subject to
       * caller's authorization scopes.
       */
      kycStatus: 'PENDING' | 'IN_REVIEW' | 'APPROVED' | 'REJECTED';

      /**
       * The last name of this user.
       */
      lastName: string;

      /**
       * The current status of this user account
       */
      status: 'ACTIVE' | 'DELETED' | 'LOCKED' | 'PENDING';

      id?: string;

      /**
       * The phone number for this user. Note: may not be visible subject to caller's
       * authorization scopes.
       */
      phone?: string;
    }

    export interface Task {
      /**
       * The task category this task should be shown under. Defaults to 'Other'.
       */
      category:
        | 'MARKETING'
        | 'ENGINEERING'
        | 'SALES'
        | 'DATA_ANALYTICS'
        | 'DESIGN'
        | 'PRODUCT_MANAGEMENT'
        | 'LEGAL'
        | 'MEDICAL'
        | 'FINANCE'
        | 'OTHER';

      /**
       * A detailed description of the task. This should include enough information for
       * the user to complete the task to the expected standard.
       */
      description: string;

      /**
       * The unique identifier for the organization that owns this task
       */
      organizationId: string;

      /**
       * The amount being offered for each approved submission on this task. Note the
       * amount is denominated in base units of the currency, so a payout of 100 in USD
       * would mean the payout would be $1.00
       */
      payout: number;

      /**
       * The number of submissions required before this task is closed. If this is set to
       * 1, the task will be closed after the first submission is received and approved.
       * Defaults to 1.
       */
      requiredSubmissions: number;

      /**
       * The policy determining who may submit solutions for this task.
       */
      submissionPolicy:
        | 'OPEN_SUBMISSIONS_ONE_PER_USER'
        | 'OPEN_SUBMISSIONS_MANY_PER_USER'
        | 'PRE_ASSIGNED_SUBMISSIONS'
        | 'OPEN_ASSIGNED_SUBMISSIONS';

      /**
       * A descriptive title for this task
       */
      title: string;

      id?: string;

      /**
       * The currency in which the payout is denominated.
       */
      currency?: Task.Currency;

      /**
       * The deadline for this task. If this is set, the task will be closed after this
       * time regardless of the number of submissions received and approved.
       */
      deadline?: string;

      /**
       * The ID of the wallet to be used to pay out rewards for this task. This wallet
       * must be owned by the organization that owns this task, the agent creating the
       * task must have access to the wallet, it must have sufficient funds to cover the
       * payouts, and must be in the same currency as the currency of this task.
       */
      payoutWalletId?: string;

      /**
       * Notes from the Payman review process about the task. This is used to store any
       * additional information concerning a task's review status (e.g. rejection
       * reasons).
       */
      reviewNotes?: string;

      /**
       * The current status of this task.
       */
      status?:
        | 'IN_REVIEW_BY_DEVELOPER'
        | 'IN_REVIEW_BY_AI'
        | 'IN_REVIEW_BY_SYSTEM_USER'
        | 'REJECTED'
        | 'OPEN'
        | 'STARTED'
        | 'COMPLETED'
        | 'CANCELLED'
        | 'SUSPENDED'
        | 'EXPIRED';

      /**
       * The configuration to be applied during task verification. The Payman
       * verification enginewill use this to customize the verification of this task.
       */
      verificationConfiguration?: Task.VerificationConfiguration;
    }

    export namespace Task {
      /**
       * The currency in which the payout is denominated.
       */
      export interface Currency {
        /**
         * The name of this currency's fractional unit
         */
        fractionalUnitName: string;

        /**
         * The name of this currency
         */
        name: string;

        /**
         * The currency symbol to use
         */
        symbol: string;

        type: 'CRYPTOCURRENCY' | 'FIAT';

        active?: boolean;

        /**
         * The unique short code for this currency
         */
        code?: string;

        /**
         * The number of decimal places this currency supports.
         */
        decimalPlaces?: number;

        /**
         * A longer form description of the item
         */
        description?: string;

        /**
         * The number of decimal places to show when rendering an amount of this currency.
         */
        displayDecimalPlaces?: number;

        /**
         * A descriptive label of the item
         */
        label?: string;

        /**
         * The value of the item
         */
        value?: string;
      }

      /**
       * The configuration to be applied during task verification. The Payman
       * verification enginewill use this to customize the verification of this task.
       */
      export interface VerificationConfiguration {
        customPrompt?: string;

        handler?: string;
      }
    }
  }
}

export interface AssignmentCreateParams {
  expiresAt?: string;

  inviteEmail?: string;
}

export interface AssignmentListParams {
  limit?: number;

  page?: number;

  statuses?: Array<'IN_REVIEW' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'DELETED' | 'REJECTED' | 'ACCEPTED'>;
}

export namespace Assignments {
  export import AssignmentCreateResponse = AssignmentsAPI.AssignmentCreateResponse;
  export import AssignmentListResponse = AssignmentsAPI.AssignmentListResponse;
  export import AssignmentCreateParams = AssignmentsAPI.AssignmentCreateParams;
  export import AssignmentListParams = AssignmentsAPI.AssignmentListParams;
}
