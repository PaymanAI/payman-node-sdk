// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SubmissionsAPI from './submissions';

export class Submissions extends APIResource {
  /**
   * Get all submissions for a task
   */
  listTaskSubmissions(
    id: string,
    query?: SubmissionListTaskSubmissionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionListTaskSubmissionsResponse>;
  listTaskSubmissions(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionListTaskSubmissionsResponse>;
  listTaskSubmissions(
    id: string,
    query: SubmissionListTaskSubmissionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmissionListTaskSubmissionsResponse> {
    if (isRequestOptions(query)) {
      return this.listTaskSubmissions(id, {}, query);
    }
    return this._client.get(`/tasks/${id}/submissions`, { query, ...options });
  }
}

export interface SubmissionListTaskSubmissionsResponse {
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
  results?: Array<SubmissionListTaskSubmissionsResponse.Result>;
}

export namespace SubmissionListTaskSubmissionsResponse {
  /**
   * The list of results for the current page
   */
  export interface Result {
    /**
     * The details of the submission, including any evidence or notes provided by the
     * user
     */
    details: Result.Details;

    /**
     * The unique identifier for the user that submitted this task
     */
    submittedById: string;

    id?: string;

    /**
     * The current status of the submission
     */
    status?:
      | 'PENDING'
      | 'APPROVED_REQUIRES_REVIEW'
      | 'REJECTED_REQUIRES_REVIEW'
      | 'APPROVED'
      | 'REJECTED'
      | 'VERIFICATION_FAILED'
      | 'DELETED'
      | 'CANCELLED';

    /**
     * The user that this task is assigned to
     */
    submittedBy?: Result.SubmittedBy;

    task?: Result.Task;
  }

  export namespace Result {
    /**
     * The details of the submission, including any evidence or notes provided by the
     * user
     */
    export interface Details {
      /**
       * The user's description of the solution they are submitting
       */
      description: string;

      /**
       * A list of URLs to any evidence or supporting documentation the user wants to
       * provide to support their submission. These will be external to the Payman
       * platform.
       */
      evidenceUrls?: Array<string>;

      /**
       * Feedback provided during the verification process after reviewing the submission
       */
      feedback?: Array<Details.Feedback>;

      /**
       * A list of file attachments that the user uploaded directly to the Payman
       * platform. To access these files they must be downloaded via the 'Download File
       * Attachment' API endpoint.
       */
      fileAttachments?: Array<Details.FileAttachment>;

      /**
       * Any additional notes or comments the user wants to provide
       */
      notes?: string;
    }

    export namespace Details {
      /**
       * Feedback provided during the verification process after reviewing the submission
       */
      export interface Feedback {
        createdBy: string;

        createdOn: string;

        feedback: string;

        type: 'SYSTEM_INTERNAL' | 'USER_COMMENT' | 'AGENT_COMMENT';
      }

      /**
       * A list of file attachments that the user uploaded directly to the Payman
       * platform. To access these files they must be downloaded via the 'Download File
       * Attachment' API endpoint.
       */
      export interface FileAttachment {
        /**
         * The identifying key for this file - supply this to the file download endpoint to
         * retrieve this file.
         */
        key: string;

        /**
         * A display name for the file.
         */
        name: string;

        /**
         * The size of the file in bytes.
         */
        size?: number;
      }
    }

    /**
     * The user that this task is assigned to
     */
    export interface SubmittedBy {
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

      reputationScore?: SubmittedBy.ReputationScore;
    }

    export namespace SubmittedBy {
      export interface ReputationScore {
        rawScore?: number;

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
         * The name of this currency's base currency unit
         */
        baseUnitName: string;

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

        type?: 'default' | 'custom_prompt' | 'developer_managed' | 'none';
      }
    }
  }
}

export interface SubmissionListTaskSubmissionsParams {
  limit?: number;

  page?: number;

  statuses?: Array<
    | 'PENDING'
    | 'APPROVED_REQUIRES_REVIEW'
    | 'REJECTED_REQUIRES_REVIEW'
    | 'APPROVED'
    | 'REJECTED'
    | 'VERIFICATION_FAILED'
    | 'DELETED'
    | 'CANCELLED'
  >;
}

export namespace Submissions {
  export import SubmissionListTaskSubmissionsResponse = SubmissionsAPI.SubmissionListTaskSubmissionsResponse;
  export import SubmissionListTaskSubmissionsParams = SubmissionsAPI.SubmissionListTaskSubmissionsParams;
}
