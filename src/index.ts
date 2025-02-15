// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { BalanceGetSpendableBalanceResponse, Balances } from './resources/balances';
import {
  PaymentCreatePayeeParams,
  PaymentCreatePayeeResponse,
  PaymentGetDepositLinkParams,
  PaymentGetDepositLinkResponse,
  PaymentSearchPayeesParams,
  PaymentSearchPayeesResponse,
  PaymentSendPaymentParams,
  PaymentSendPaymentResponse,
  Payments,
} from './resources/payments';
import { Version } from './resources/version';

const environments = {
  sandbox: 'https://agent-sandbox.payman.ai/api',
  production: 'https://agent.payman.ai/api',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['PAYMAN_API_SECRET'].
   */
  xPaymanAPISecret?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `sandbox` corresponds to `https://agent-sandbox.payman.ai/api`
   * - `production` corresponds to `https://agent.payman.ai/api`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['PAYMANAI_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Paymanai API.
 */
export class Paymanai extends Core.APIClient {
  xPaymanAPISecret: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Paymanai API.
   *
   * @param {string | undefined} [opts.xPaymanAPISecret=process.env['PAYMAN_API_SECRET'] ?? undefined]
   * @param {Environment} [opts.environment=sandbox] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['PAYMANAI_BASE_URL'] ?? https://agent-sandbox.payman.ai/api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('PAYMANAI_BASE_URL'),
    xPaymanAPISecret = Core.readEnv('PAYMAN_API_SECRET'),
    ...opts
  }: ClientOptions = {}) {
    if (xPaymanAPISecret === undefined) {
      throw new Errors.PaymanaiError(
        "The PAYMAN_API_SECRET environment variable is missing or empty; either provide it, or instantiate the Paymanai client with an xPaymanAPISecret option, like new Paymanai({ xPaymanAPISecret: 'My X Payman API Secret' }).",
      );
    }

    const options: ClientOptions = {
      xPaymanAPISecret,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'sandbox',
    };

    if (baseURL && opts.environment) {
      throw new Errors.PaymanaiError(
        'Ambiguous URL; The `baseURL` option (or PAYMANAI_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'sandbox'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.xPaymanAPISecret = xPaymanAPISecret;
  }

  version: API.Version = new API.Version(this);
  balances: API.Balances = new API.Balances(this);
  payments: API.Payments = new API.Payments(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      Accept: 'application/vnd.payman.v1+json',
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'x-payman-api-secret': this.xPaymanAPISecret };
  }

  static Paymanai = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static PaymanaiError = Errors.PaymanaiError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Paymanai.Version = Version;
Paymanai.Balances = Balances;
Paymanai.Payments = Payments;
export declare namespace Paymanai {
  export type RequestOptions = Core.RequestOptions;

  export { Version as Version };

  export {
    Balances as Balances,
    type BalanceGetSpendableBalanceResponse as BalanceGetSpendableBalanceResponse,
  };

  export {
    Payments as Payments,
    type PaymentCreatePayeeResponse as PaymentCreatePayeeResponse,
    type PaymentGetDepositLinkResponse as PaymentGetDepositLinkResponse,
    type PaymentSearchPayeesResponse as PaymentSearchPayeesResponse,
    type PaymentSendPaymentResponse as PaymentSendPaymentResponse,
    type PaymentCreatePayeeParams as PaymentCreatePayeeParams,
    type PaymentGetDepositLinkParams as PaymentGetDepositLinkParams,
    type PaymentSearchPayeesParams as PaymentSearchPayeesParams,
    type PaymentSendPaymentParams as PaymentSendPaymentParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  PaymanaiError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Paymanai;
