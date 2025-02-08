# Wallets

# Version

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">getServerVersion</a>() -> Response</code>

# Balances

Types:

- <code><a href="./src/resources/balances.ts">BalanceGetSpendableBalanceResponse</a></code>

Methods:

- <code title="get /balances/currencies/{currency}">client.balances.<a href="./src/resources/balances.ts">getSpendableBalance</a>(currency) -> BalanceGetSpendableBalanceResponse</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentCreatePayeeResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentGetDepositLinkResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentSearchPayeesResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentSendPaymentResponse</a></code>

Methods:

- <code title="post /payments/destinations">client.payments.<a href="./src/resources/payments.ts">createPayee</a>({ ...params }) -> PaymentCreatePayeeResponse</code>
- <code title="post /payments/deposit-link">client.payments.<a href="./src/resources/payments.ts">getDepositLink</a>({ ...params }) -> PaymentGetDepositLinkResponse</code>
- <code title="get /payments/search-destinations">client.payments.<a href="./src/resources/payments.ts">searchPayees</a>({ ...params }) -> PaymentSearchPayeesResponse</code>
- <code title="post /payments/send-payment">client.payments.<a href="./src/resources/payments.ts">sendPayment</a>({ ...params }) -> PaymentSendPaymentResponse</code>
