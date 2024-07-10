// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TasksAPI from './tasks';
import * as AssignmentsAPI from './assignments';
import * as CategoriesAPI from './categories';
import * as SubmissionsAPI from './submissions';

export class Tasks extends APIResource {
  assignments: AssignmentsAPI.Assignments = new AssignmentsAPI.Assignments(this._client);
  submissions: SubmissionsAPI.Submissions = new SubmissionsAPI.Submissions(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);

  /**
   * Creates a new task
   */
  create(body: TaskCreateParams, options?: Core.RequestOptions): Core.APIPromise<TaskCreateResponse> {
    return this._client.post('/tasks', { body, ...options });
  }

  /**
   * Get a task by ID
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<TaskRetrieveResponse> {
    return this._client.get(`/tasks/${id}`, options);
  }

  /**
   * Updates an existing task.
   */
  update(
    id: string,
    body: TaskUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskUpdateResponse> {
    return this._client.put(`/tasks/${id}`, { body, ...options });
  }

  /**
   * Get all tasks for the current organization
   */
  list(query?: TaskListParams, options?: Core.RequestOptions): Core.APIPromise<TaskListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TaskListResponse>;
  list(
    query: TaskListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/tasks', { query, ...options });
  }
}

export interface TaskCreateResponse {
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
  currency?: TaskCreateResponse.Currency;

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
  verificationConfiguration?: TaskCreateResponse.VerificationConfiguration;
}

export namespace TaskCreateResponse {
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

export interface TaskRetrieveResponse {
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
  currency?: TaskRetrieveResponse.Currency;

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
  verificationConfiguration?: TaskRetrieveResponse.VerificationConfiguration;
}

export namespace TaskRetrieveResponse {
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

export interface TaskUpdateResponse {
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
  currency?: TaskUpdateResponse.Currency;

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
  verificationConfiguration?: TaskUpdateResponse.VerificationConfiguration;
}

export namespace TaskUpdateResponse {
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

export interface TaskListResponse {
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
  results?: Array<TaskListResponse.Result>;
}

export namespace TaskListResponse {
  export interface Result {
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
    currency?: Result.Currency;

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
    verificationConfiguration?: Result.VerificationConfiguration;
  }

  export namespace Result {
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

export interface TaskCreateParams {
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
   * A descriptive title for this task
   */
  title: string;

  /**
   * The task category this task should be shown under. Defaults to 'OTHER' if
   * omitted.
   */
  category?:
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
   * The deadline for this task. If this is set, the task will be closed after this
   * time regardless of the number of submissions received and approved. If unset,
   * the task will remain open until the required number of submissions are received
   * and approved.
   */
  deadline?: string;

  /**
   * List of email addresses to invite to complete the task. If this is set, only
   * users with these emails will be able to complete the task.
   */
  inviteEmails?: Array<string>;

  /**
   * The amount being offered for each approved submission on this task. Note the
   * amount is denominated in base units of the currency, so a payout of 100 in USD
   * would mean the payout would be $1.00. Defaults to 0.
   */
  payout?: number;

  /**
   * The ID of the wallet to be used to pay out rewards for this task. This wallet
   * must be owned by the organization that owns this task, the agent creating the
   * task must have access to the wallet, it must have sufficient funds to cover the
   * payouts, and must be in the same currency as the currency of this task.
   */
  payoutWalletId?: string;

  /**
   * The number of approved submissions required before this task is closed. E.g. If
   * this is set to 2, the task will be closed after the 2 submission are received
   * and approved. Defaults to 1 if omitted (or the number of inviteEmails provided
   * if present).
   */
  requiredSubmissions?: number;

  /**
   * The policy determining who may submit solutions for this task. Defaults to
   * OPEN_SUBMISSIONS_ONE_PER_USER if omitted, or PRE_ASSIGNED_SUBMISSIONS if
   * inviteEmails are specified.
   */
  submissionPolicy?:
    | 'OPEN_SUBMISSIONS_ONE_PER_USER'
    | 'OPEN_SUBMISSIONS_MANY_PER_USER'
    | 'PRE_ASSIGNED_SUBMISSIONS'
    | 'OPEN_ASSIGNED_SUBMISSIONS';
}

export interface TaskUpdateParams {
  /**
   * A detailed description of the task. This should include enough information for
   * the user to complete the task to the expected standard.
   */
  description: string;

  /**
   * A descriptive title for this task
   */
  title: string;
}

export interface TaskListParams {
  /**
   * The number of items per page
   */
  limit?: number;

  /**
   * The page number to retrieve
   */
  page?: number;
}

export namespace Tasks {
  export import TaskCreateResponse = TasksAPI.TaskCreateResponse;
  export import TaskRetrieveResponse = TasksAPI.TaskRetrieveResponse;
  export import TaskUpdateResponse = TasksAPI.TaskUpdateResponse;
  export import TaskListResponse = TasksAPI.TaskListResponse;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import TaskUpdateParams = TasksAPI.TaskUpdateParams;
  export import TaskListParams = TasksAPI.TaskListParams;
  export import Assignments = AssignmentsAPI.Assignments;
  export import AssignmentCreateResponse = AssignmentsAPI.AssignmentCreateResponse;
  export import AssignmentListResponse = AssignmentsAPI.AssignmentListResponse;
  export import AssignmentCreateParams = AssignmentsAPI.AssignmentCreateParams;
  export import AssignmentListParams = AssignmentsAPI.AssignmentListParams;
  export import Submissions = SubmissionsAPI.Submissions;
  export import SubmissionListResponse = SubmissionsAPI.SubmissionListResponse;
  export import SubmissionListParams = SubmissionsAPI.SubmissionListParams;
  export import Categories = CategoriesAPI.Categories;
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
}
