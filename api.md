# Tasks

Types:

- <code><a href="./src/resources/tasks/tasks.ts">TaskCreateTaskResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskGetCategoriesResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskGetTaskResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskListTasksResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskUpdateTaskResponse</a></code>

Methods:

- <code title="post /tasks">client.tasks.<a href="./src/resources/tasks/tasks.ts">createTask</a>({ ...params }) -> TaskCreateTaskResponse</code>
- <code title="get /tasks/categories">client.tasks.<a href="./src/resources/tasks/tasks.ts">getCategories</a>() -> TaskGetCategoriesResponse</code>
- <code title="get /tasks/{id}">client.tasks.<a href="./src/resources/tasks/tasks.ts">getTask</a>(id) -> TaskGetTaskResponse</code>
- <code title="get /tasks">client.tasks.<a href="./src/resources/tasks/tasks.ts">listTasks</a>({ ...params }) -> TaskListTasksResponse</code>
- <code title="put /tasks/{id}">client.tasks.<a href="./src/resources/tasks/tasks.ts">updateTask</a>(id, { ...params }) -> TaskUpdateTaskResponse</code>

## Assignments

Types:

- <code><a href="./src/resources/tasks/assignments.ts">AssignmentCreateTaskAssignmentResponse</a></code>
- <code><a href="./src/resources/tasks/assignments.ts">AssignmentListTaskAssignmentsResponse</a></code>

Methods:

- <code title="post /tasks/{id}/assignments">client.tasks.assignments.<a href="./src/resources/tasks/assignments.ts">createTaskAssignment</a>(id, { ...params }) -> AssignmentCreateTaskAssignmentResponse</code>
- <code title="get /tasks/{id}/assignments">client.tasks.assignments.<a href="./src/resources/tasks/assignments.ts">listTaskAssignments</a>(id, { ...params }) -> AssignmentListTaskAssignmentsResponse</code>

## Submissions

Types:

- <code><a href="./src/resources/tasks/submissions.ts">SubmissionApproveTaskSubmissionResponse</a></code>
- <code><a href="./src/resources/tasks/submissions.ts">SubmissionListTaskSubmissionsResponse</a></code>
- <code><a href="./src/resources/tasks/submissions.ts">SubmissionRejectTaskSubmissionResponse</a></code>

Methods:

- <code title="post /tasks/submissions/{id}/approve">client.tasks.submissions.<a href="./src/resources/tasks/submissions.ts">approveTaskSubmission</a>(id) -> SubmissionApproveTaskSubmissionResponse</code>
- <code title="get /tasks/{id}/submissions">client.tasks.submissions.<a href="./src/resources/tasks/submissions.ts">listTaskSubmissions</a>(id, { ...params }) -> SubmissionListTaskSubmissionsResponse</code>
- <code title="post /tasks/submissions/{id}/reject">client.tasks.submissions.<a href="./src/resources/tasks/submissions.ts">rejectTaskSubmission</a>(id, { ...params }) -> SubmissionRejectTaskSubmissionResponse</code>

## Categories

Types:

- <code><a href="./src/resources/tasks/categories.ts">CategoryListTaskCategoriesResponse</a></code>

Methods:

- <code title="get /tasks/categories">client.tasks.categories.<a href="./src/resources/tasks/categories.ts">listTaskCategories</a>() -> CategoryListTaskCategoriesResponse</code>

# Wallets

Types:

- <code><a href="./src/resources/wallets.ts">WalletGetWalletResponse</a></code>

Methods:

- <code title="get /wallets/{id}">client.wallets.<a href="./src/resources/wallets.ts">getWallet</a>(id) -> WalletGetWalletResponse</code>

# Version

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">getServerVersion</a>() -> Response</code>

# Files

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

Methods:

- <code title="post /payments/initiate-customer-deposit">client.payments.<a href="./src/resources/payments.ts">initiateCustomerDeposit</a>({ ...params }) -> PaymentInitiateCustomerDepositResponse</code>
