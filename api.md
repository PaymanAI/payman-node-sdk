# Wallets

Types:

- <code><a href="./src/resources/wallets.ts">WalletGetWalletResponse</a></code>

Methods:

- <code title="get /wallets/{id}">client.wallets.<a href="./src/resources/wallets.ts">getWallet</a>(id) -> WalletGetWalletResponse</code>

# Version

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">getServerVersion</a>() -> Response</code>

# Balances

Types:

- <code><a href="./src/resources/balances.ts">BalanceGetCustomerBalanceResponse</a></code>
- <code><a href="./src/resources/balances.ts">BalanceGetSpendableBalanceResponse</a></code>

Methods:

- <code title="get /balances/customers/{customerId}/currencies/{currency}">client.balances.<a href="./src/resources/balances.ts">getCustomerBalance</a>(customerId, currency) -> BalanceGetCustomerBalanceResponse</code>
- <code title="get /balances/currencies/{currency}">client.balances.<a href="./src/resources/balances.ts">getSpendableBalance</a>(currency) -> BalanceGetSpendableBalanceResponse</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentInitiateCustomerDepositResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentSearchDestinationsResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentSendPaymentResponse</a></code>

Methods:

- <code title="post /payments/customer-deposit-link">client.payments.<a href="./src/resources/payments.ts">initiateCustomerDeposit</a>({ ...params }) -> PaymentInitiateCustomerDepositResponse</code>
- <code title="get /payments/search-destinations">client.payments.<a href="./src/resources/payments.ts">searchDestinations</a>({ ...params }) -> PaymentSearchDestinationsResponse</code>
- <code title="post /payments/send-payment">client.payments.<a href="./src/resources/payments.ts">sendPayment</a>({ ...params }) -> PaymentSendPaymentResponse</code>
