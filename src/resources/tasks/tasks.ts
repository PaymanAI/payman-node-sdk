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
  createTask(
    body: TaskCreateTaskParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskCreateTaskResponse> {
    return this._client.post('/tasks', { body, ...options });
  }

  /**
   * Provides a list of available task categories that may be used when creating
   * tasks.
   */
  getCategories(options?: Core.RequestOptions): Core.APIPromise<TaskGetCategoriesResponse> {
    return this._client.get('/tasks/categories', options);
  }

  /**
   * Get a task by ID
   */
  getTask(id: string, options?: Core.RequestOptions): Core.APIPromise<TaskGetTaskResponse> {
    return this._client.get(`/tasks/${id}`, options);
  }

  /**
   * Get all tasks for the current organization
   */
  listTasks(
    query?: TaskListTasksParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskListTasksResponse>;
  listTasks(options?: Core.RequestOptions): Core.APIPromise<TaskListTasksResponse>;
  listTasks(
    query: TaskListTasksParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskListTasksResponse> {
    if (isRequestOptions(query)) {
      return this.listTasks({}, query);
    }
    return this._client.get('/tasks', { query, ...options });
  }

  /**
   * Updates an existing task.
   */
  updateTask(
    id: string,
    body: TaskUpdateTaskParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskUpdateTaskResponse> {
    return this._client.put(`/tasks/${id}`, { body, ...options });
  }
}

export interface TaskCreateTaskResponse {
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
   * In case the task is canceled, this stores the reason why it is canceled
   */
  cancelReason?: string;

  /**
   * The currency in which the payout is denominated.
   */
  currency?: TaskCreateTaskResponse.Currency;

  /**
   * The unique identifier for your end user that paid for this task. Note you may
   * supply either your own unique ID, or the Payman generated one (if you have it).
   */
  customerId?: string;

  /**
   * The deadline for this task. If this is set, the task will be closed after this
   * time regardless of the number of submissions received and approved.
   */
  deadline?: string;

  /**
   * A map of email address to link containing a link for each inviteEmail. This map
   * is only populated immediately in response to the creation of the task and will
   * contain the link that was emailedto each invited address. Also note that these
   * links will only become valid once the task is published.
   */
  inviteLinks?: Record<string, string>;

  /**
   * Agent provided metadata related to this task. You may use this to store
   * correlation data.When a task related payload is sent to any registered webhook,
   * this metadata will be included
   */
  metadata?: Record<string, string>;

  /**
   * The amount being offered for each approved submission on this task, denominated
   * in currency units. For example a payout of '1.00' in USD would mean the payout
   * would be $1.00
   */
  payoutDecimal?: number;

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
  verificationConfiguration?: TaskCreateTaskResponse.VerificationConfiguration;
}

export namespace TaskCreateTaskResponse {
  /**
   * The currency in which the payout is denominated.
   */
  export interface Currency {
    /**
     * The name of this currency
     */
    name: string;

    /**
     * The currency symbol to use
     */
    symbol: string;

    type: 'CRYPTOCURRENCY' | 'FIAT';

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

    type?: 'generic' | 'custom_prompt' | 'developer_managed' | 'none';
  }
}

export type TaskGetCategoriesResponse = Array<TaskGetCategoriesResponse.TaskGetCategoriesResponseItem>;

export namespace TaskGetCategoriesResponse {
  export interface TaskGetCategoriesResponseItem {
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

export interface TaskGetTaskResponse {
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
   * In case the task is canceled, this stores the reason why it is canceled
   */
  cancelReason?: string;

  /**
   * The currency in which the payout is denominated.
   */
  currency?: TaskGetTaskResponse.Currency;

  /**
   * The unique identifier for your end user that paid for this task. Note you may
   * supply either your own unique ID, or the Payman generated one (if you have it).
   */
  customerId?: string;

  /**
   * The deadline for this task. If this is set, the task will be closed after this
   * time regardless of the number of submissions received and approved.
   */
  deadline?: string;

  /**
   * A map of email address to link containing a link for each inviteEmail. This map
   * is only populated immediately in response to the creation of the task and will
   * contain the link that was emailedto each invited address. Also note that these
   * links will only become valid once the task is published.
   */
  inviteLinks?: Record<string, string>;

  /**
   * Agent provided metadata related to this task. You may use this to store
   * correlation data.When a task related payload is sent to any registered webhook,
   * this metadata will be included
   */
  metadata?: Record<string, string>;

  /**
   * The amount being offered for each approved submission on this task, denominated
   * in currency units. For example a payout of '1.00' in USD would mean the payout
   * would be $1.00
   */
  payoutDecimal?: number;

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
  verificationConfiguration?: TaskGetTaskResponse.VerificationConfiguration;
}

export namespace TaskGetTaskResponse {
  /**
   * The currency in which the payout is denominated.
   */
  export interface Currency {
    /**
     * The name of this currency
     */
    name: string;

    /**
     * The currency symbol to use
     */
    symbol: string;

    type: 'CRYPTOCURRENCY' | 'FIAT';

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

    type?: 'generic' | 'custom_prompt' | 'developer_managed' | 'none';
  }
}

export interface TaskListTasksResponse {
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
  results?: Array<TaskListTasksResponse.Result>;
}

export namespace TaskListTasksResponse {
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
     * In case the task is canceled, this stores the reason why it is canceled
     */
    cancelReason?: string;

    /**
     * The currency in which the payout is denominated.
     */
    currency?: Result.Currency;

    /**
     * The unique identifier for your end user that paid for this task. Note you may
     * supply either your own unique ID, or the Payman generated one (if you have it).
     */
    customerId?: string;

    /**
     * The deadline for this task. If this is set, the task will be closed after this
     * time regardless of the number of submissions received and approved.
     */
    deadline?: string;

    /**
     * A map of email address to link containing a link for each inviteEmail. This map
     * is only populated immediately in response to the creation of the task and will
     * contain the link that was emailedto each invited address. Also note that these
     * links will only become valid once the task is published.
     */
    inviteLinks?: Record<string, string>;

    /**
     * Agent provided metadata related to this task. You may use this to store
     * correlation data.When a task related payload is sent to any registered webhook,
     * this metadata will be included
     */
    metadata?: Record<string, string>;

    /**
     * The amount being offered for each approved submission on this task, denominated
     * in currency units. For example a payout of '1.00' in USD would mean the payout
     * would be $1.00
     */
    payoutDecimal?: number;

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
       * The name of this currency
       */
      name: string;

      /**
       * The currency symbol to use
       */
      symbol: string;

      type: 'CRYPTOCURRENCY' | 'FIAT';

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

      type?: 'generic' | 'custom_prompt' | 'developer_managed' | 'none';
    }
  }
}

export interface TaskUpdateTaskResponse {
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
   * In case the task is canceled, this stores the reason why it is canceled
   */
  cancelReason?: string;

  /**
   * The currency in which the payout is denominated.
   */
  currency?: TaskUpdateTaskResponse.Currency;

  /**
   * The unique identifier for your end user that paid for this task. Note you may
   * supply either your own unique ID, or the Payman generated one (if you have it).
   */
  customerId?: string;

  /**
   * The deadline for this task. If this is set, the task will be closed after this
   * time regardless of the number of submissions received and approved.
   */
  deadline?: string;

  /**
   * A map of email address to link containing a link for each inviteEmail. This map
   * is only populated immediately in response to the creation of the task and will
   * contain the link that was emailedto each invited address. Also note that these
   * links will only become valid once the task is published.
   */
  inviteLinks?: Record<string, string>;

  /**
   * Agent provided metadata related to this task. You may use this to store
   * correlation data.When a task related payload is sent to any registered webhook,
   * this metadata will be included
   */
  metadata?: Record<string, string>;

  /**
   * The amount being offered for each approved submission on this task, denominated
   * in currency units. For example a payout of '1.00' in USD would mean the payout
   * would be $1.00
   */
  payoutDecimal?: number;

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
  verificationConfiguration?: TaskUpdateTaskResponse.VerificationConfiguration;
}

export namespace TaskUpdateTaskResponse {
  /**
   * The currency in which the payout is denominated.
   */
  export interface Currency {
    /**
     * The name of this currency
     */
    name: string;

    /**
     * The currency symbol to use
     */
    symbol: string;

    type: 'CRYPTOCURRENCY' | 'FIAT';

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

    type?: 'generic' | 'custom_prompt' | 'developer_managed' | 'none';
  }
}

export interface TaskCreateTaskParams {
  /**
   * A detailed description of the task. This should include enough information for
   * the user to complete the task to the expected standard.
   */
  description: string;

  /**
   * The amount being offered for each approved submission on this task. Note the
   * amount is denominated in base units of the currency, so a payout of 100 in USD
   * would mean the payout would be $1.00.
   */
  payoutDecimal: number;

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
   * The currency is only required if a customerId is provided.
   */
  currency?: string;

  customerId?: string;

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
   * Agent provided metadata related to this task. You may use this to store
   * correlation data.When a task related payload is sent to any registered webhook,
   * this metadata will be included
   */
  metadata?: Record<string, string>;

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
   * The configuration to be applied during task verification. The Payman
   * verification enginewill use this to customize the verification of this task.
   */
  verificationConfiguration?: TaskCreateTaskParams.VerificationConfiguration;
}

export namespace TaskCreateTaskParams {
  /**
   * The configuration to be applied during task verification. The Payman
   * verification enginewill use this to customize the verification of this task.
   */
  export interface VerificationConfiguration {
    customPrompt?: string;

    type?: 'generic' | 'custom_prompt' | 'developer_managed' | 'none';
  }
}

export interface TaskListTasksParams {
  /**
   * The number of items per page
   */
  limit?: number;

  /**
   * The page number to retrieve (0-indexed)
   */
  page?: number;
}

export interface TaskUpdateTaskParams {
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

export namespace Tasks {
  export import TaskCreateTaskResponse = TasksAPI.TaskCreateTaskResponse;
  export import TaskGetCategoriesResponse = TasksAPI.TaskGetCategoriesResponse;
  export import TaskGetTaskResponse = TasksAPI.TaskGetTaskResponse;
  export import TaskListTasksResponse = TasksAPI.TaskListTasksResponse;
  export import TaskUpdateTaskResponse = TasksAPI.TaskUpdateTaskResponse;
  export import TaskCreateTaskParams = TasksAPI.TaskCreateTaskParams;
  export import TaskListTasksParams = TasksAPI.TaskListTasksParams;
  export import TaskUpdateTaskParams = TasksAPI.TaskUpdateTaskParams;
  export import Assignments = AssignmentsAPI.Assignments;
  export import AssignmentCreateTaskAssignmentResponse = AssignmentsAPI.AssignmentCreateTaskAssignmentResponse;
  export import AssignmentListTaskAssignmentsResponse = AssignmentsAPI.AssignmentListTaskAssignmentsResponse;
  export import AssignmentCreateTaskAssignmentParams = AssignmentsAPI.AssignmentCreateTaskAssignmentParams;
  export import AssignmentListTaskAssignmentsParams = AssignmentsAPI.AssignmentListTaskAssignmentsParams;
  export import Submissions = SubmissionsAPI.Submissions;
  export import SubmissionListTaskSubmissionsResponse = SubmissionsAPI.SubmissionListTaskSubmissionsResponse;
  export import SubmissionListTaskSubmissionsParams = SubmissionsAPI.SubmissionListTaskSubmissionsParams;
  export import Categories = CategoriesAPI.Categories;
  export import CategoryListTaskCategoriesResponse = CategoriesAPI.CategoryListTaskCategoriesResponse;
}
