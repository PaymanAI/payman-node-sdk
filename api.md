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

- <code><a href="./src/resources/payments.ts">PaymentSendPaymentResponse</a></code>

Methods:

- <code title="post /payments/send-payment">client.payments.<a href="./src/resources/payments.ts">sendPayment</a>({ ...params }) -> PaymentSendPaymentResponse</code>

# SpendLimits

Methods:

- <code title="get /spend-limits">client.spendLimits.<a href="./src/resources/spend-limits.ts">getSpendLimits</a>() -> Response</code>
