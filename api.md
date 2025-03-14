# Version

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">getServerVersion</a>() -> Response</code>

# Me

Methods:

- <code title="get /me">client.me.<a href="./src/resources/me.ts">me</a>() -> Response</code>

# Balances

Types:

- <code><a href="./src/resources/balances.ts">BalanceGetSpendableBalanceResponse</a></code>

Methods:

- <code title="get /balances/currencies/{currency}">client.balances.<a href="./src/resources/balances.ts">getSpendableBalance</a>(currency) -> BalanceGetSpendableBalanceResponse</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentCreatePayeeResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentDeletePayeeResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentSearchPayeesResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentSendPaymentResponse</a></code>

Methods:

- <code title="post /payments/payees">client.payments.<a href="./src/resources/payments.ts">createPayee</a>({ ...params }) -> PaymentCreatePayeeResponse</code>
- <code title="delete /payments/payees/{id}">client.payments.<a href="./src/resources/payments.ts">deletePayee</a>(id) -> PaymentDeletePayeeResponse</code>
- <code title="get /payments/search-payees">client.payments.<a href="./src/resources/payments.ts">searchPayees</a>({ ...params }) -> PaymentSearchPayeesResponse</code>
- <code title="post /payments/send-payment">client.payments.<a href="./src/resources/payments.ts">sendPayment</a>({ ...params }) -> PaymentSendPaymentResponse</code>

# SpendLimits

Methods:

- <code title="get /spend-limits">client.spendLimits.<a href="./src/resources/spend-limits.ts">getSpendLimits</a>() -> Response</code>
