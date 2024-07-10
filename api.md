# Tasks

Types:

- <code><a href="./src/resources/tasks/tasks.ts">TaskCreateResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskUpdateResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="post /tasks">client.tasks.<a href="./src/resources/tasks/tasks.ts">create</a>({ ...params }) -> TaskCreateResponse</code>
- <code title="get /tasks/{id}">client.tasks.<a href="./src/resources/tasks/tasks.ts">retrieve</a>(id) -> TaskRetrieveResponse</code>
- <code title="put /tasks/{id}">client.tasks.<a href="./src/resources/tasks/tasks.ts">update</a>(id, { ...params }) -> TaskUpdateResponse</code>
- <code title="get /tasks">client.tasks.<a href="./src/resources/tasks/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>

## Assignments

Types:

- <code><a href="./src/resources/tasks/assignments.ts">AssignmentCreateResponse</a></code>
- <code><a href="./src/resources/tasks/assignments.ts">AssignmentListResponse</a></code>

Methods:

- <code title="post /tasks/{id}/assignments">client.tasks.assignments.<a href="./src/resources/tasks/assignments.ts">create</a>(id, { ...params }) -> AssignmentCreateResponse</code>
- <code title="get /tasks/{id}/assignments">client.tasks.assignments.<a href="./src/resources/tasks/assignments.ts">list</a>(id, { ...params }) -> AssignmentListResponse</code>

## Submissions

Types:

- <code><a href="./src/resources/tasks/submissions.ts">SubmissionListResponse</a></code>

Methods:

- <code title="get /tasks/{id}/submissions">client.tasks.submissions.<a href="./src/resources/tasks/submissions.ts">list</a>(id, { ...params }) -> SubmissionListResponse</code>

## Categories

Types:

- <code><a href="./src/resources/tasks/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="get /tasks/categories">client.tasks.categories.<a href="./src/resources/tasks/categories.ts">list</a>() -> CategoryListResponse</code>

# Wallets

Types:

- <code><a href="./src/resources/wallets.ts">WalletRetrieveResponse</a></code>

Methods:

- <code title="get /wallets/{id}">client.wallets.<a href="./src/resources/wallets.ts">retrieve</a>(id) -> WalletRetrieveResponse</code>

# Version

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">retrieve</a>() -> Response</code>

# Files

## Private

Methods:

- <code title="get /files/private/download">client.files.private.<a href="./src/resources/files/private.ts">download</a>({ ...params }) -> Response</code>
