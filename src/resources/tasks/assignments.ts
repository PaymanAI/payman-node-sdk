// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Assignments extends APIResource {
  /**
   * Assign a task to a user by email. The user will receive an email prompting them
   * to log into the Payman system at which point they will be able to accept the
   * invite.
   */
  createTaskAssignment(
    id: string,
    body: AssignmentCreateTaskAssignmentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssignmentCreateTaskAssignmentResponse> {
    return this._client.post(`/tasks/${id}/assignments`, { body, ...options });
  }

  /**
   * Get all assignments for a task
   */
  listTaskAssignments(
    id: string,
    query?: AssignmentListTaskAssignmentsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssignmentListTaskAssignmentsResponse>;
  listTaskAssignments(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssignmentListTaskAssignmentsResponse>;
  listTaskAssignments(
    id: string,
    query: AssignmentListTaskAssignmentsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssignmentListTaskAssignmentsResponse> {
    if (isRequestOptions(query)) {
      return this.listTaskAssignments(id, {}, query);
    }
    return this._client.get(`/tasks/${id}/assignments`, { query, ...options });
  }
}

export interface AssignmentCreateTaskAssignmentResponse {
  status: 'IN_REVIEW' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'DELETED' | 'REJECTED' | 'ACCEPTED';

  taskId: string;

  id?: string;

  /**
   * The user that this task is assigned to
   */
  assignedTo?: AssignmentCreateTaskAssignmentResponse.AssignedTo;

  completedAt?: string;

  expiresAt?: string;

  task?: AssignmentCreateTaskAssignmentResponse.Task;
}

export namespace AssignmentCreateTaskAssignmentResponse {
  /**
   * The user that this task is assigned to
   */
  export interface AssignedTo {
    /**
     * The first name of this user.
     */
    firstName: string;

    /**
     * The last name of this user.
     */
    lastName: string;

    id?: string;

    reputationScore?: AssignedTo.ReputationScore;
  }

  export namespace AssignedTo {
    export interface ReputationScore {
      score?: number;
    }
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
     * In case the task is canceled, this stores the reason why it is canceled
     */
    cancelReason?: string;

    /**
     * The currency in which the payout is denominated.
     */
    currency?: Task.Currency;

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
    verificationConfiguration?: Task.VerificationConfiguration;
  }

  export namespace Task {
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

export interface AssignmentListTaskAssignmentsResponse {
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
  results?: Array<AssignmentListTaskAssignmentsResponse.Result>;
}

export namespace AssignmentListTaskAssignmentsResponse {
  export interface Result {
    status: 'IN_REVIEW' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'DELETED' | 'REJECTED' | 'ACCEPTED';

    taskId: string;

    id?: string;

    /**
     * The user that this task is assigned to
     */
    assignedTo?: Result.AssignedTo;

    completedAt?: string;

    expiresAt?: string;

    task?: Result.Task;
  }

  export namespace Result {
    /**
     * The user that this task is assigned to
     */
    export interface AssignedTo {
      /**
       * The first name of this user.
       */
      firstName: string;

      /**
       * The last name of this user.
       */
      lastName: string;

      id?: string;

      reputationScore?: AssignedTo.ReputationScore;
    }

    export namespace AssignedTo {
      export interface ReputationScore {
        score?: number;
      }
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
       * In case the task is canceled, this stores the reason why it is canceled
       */
      cancelReason?: string;

      /**
       * The currency in which the payout is denominated.
       */
      currency?: Task.Currency;

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
      verificationConfiguration?: Task.VerificationConfiguration;
    }

    export namespace Task {
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
}

export interface AssignmentCreateTaskAssignmentParams {
  expiresAt?: string;

  inviteEmail?: string;
}

export interface AssignmentListTaskAssignmentsParams {
  /**
   * The number of items per page
   */
  limit?: number;

  /**
   * The page number to retrieve (0-indexed)
   */
  page?: number;

  /**
   * The statuses you want to filter by. Defaults to PENDING, ACCEPTED and COMPLETED
   */
  statuses?: 'IN_REVIEW' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'DELETED' | 'REJECTED' | 'ACCEPTED';
}

export declare namespace Assignments {
  export {
    type AssignmentCreateTaskAssignmentResponse as AssignmentCreateTaskAssignmentResponse,
    type AssignmentListTaskAssignmentsResponse as AssignmentListTaskAssignmentsResponse,
    type AssignmentCreateTaskAssignmentParams as AssignmentCreateTaskAssignmentParams,
    type AssignmentListTaskAssignmentsParams as AssignmentListTaskAssignmentsParams,
  };
}
