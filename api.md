# Version

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">getServerVersion</a>() -> Response</code>

# Description

Types:

- <code><a href="./src/resources/description.ts">DescriptionGetAPIDescriptionResponse</a></code>

Methods:

- <code title="get /description">client.description.<a href="./src/resources/description.ts">getAPIDescription</a>() -> DescriptionGetAPIDescriptionResponse</code>

# Agents

Methods:

- <code title="get /agents/{ref}">client.agents.<a href="./src/resources/agents.ts">getAgentByReference</a>(ref) -> Response</code>

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
- <code><a href="./src/resources/payments.ts">PaymentGetDepositLinkResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentSearchPayeesResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentSendPaymentResponse</a></code>

Methods:

- <code title="post /payments/destinations">client.payments.<a href="./src/resources/payments.ts">createPayee</a>({ ...params }) -> PaymentCreatePayeeResponse</code>
- <code title="delete /payments/destinations/{id}">client.payments.<a href="./src/resources/payments.ts">deletePayee</a>(id) -> PaymentDeletePayeeResponse</code>
- <code title="post /payments/deposit-link">client.payments.<a href="./src/resources/payments.ts">getDepositLink</a>({ ...params }) -> PaymentGetDepositLinkResponse</code>
- <code title="get /payments/search-destinations">client.payments.<a href="./src/resources/payments.ts">searchPayees</a>({ ...params }) -> PaymentSearchPayeesResponse</code>
- <code title="post /payments/send-payment">client.payments.<a href="./src/resources/payments.ts">sendPayment</a>({ ...params }) -> PaymentSendPaymentResponse</code>
