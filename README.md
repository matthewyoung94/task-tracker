# Task Tracker API Documentation

## Base URL
The base URL for all endpoints is:
http://localhost:5050/api

## Endpoints

### 1. **Get All Tasks**
- **URL**: `/tasks`
- **Method**: `GET`
- **Description**: Fetches all tasks in the system.
- **Response**:
  - **Status Code**: 200 OK
  - **Body**:
    ```json
    [
      {
        "id": "task_id_1",
        "title": "Task Title",
        "description": "Task description",
        "dueDate": "2025-04-01T10:00",
        "status": "open"
      },
      {
        "id": "task_id_2",
        "title": "Another Task",
        "description": "Task description",
        "dueDate": "2025-05-10T12:00",
        "status": "in_progress"
      }
    ]
    ```

### 2. **Get Task by ID**
- **URL**: `/tasks/{id}`
- **Method**: `GET`
- **Description**: Fetch a task by its unique ID.
- **URL Params**:
  - `id=[string]` (Required)
- **Response**:
  - **Status Code**: 200 OK
  - **Body**:
    ```json
    {
      "id": "task_id_1",
      "title": "Task Title",
      "description": "Task description",
      "dueDate": "2025-04-01T10:00",
      "status": "open"
    }
    ```

### 3. **Create a Task**
- **URL**: `/tasks`
- **Method**: `POST`
- **Description**: Create a new task.
- **Body**:
  ```json
  {
    "title": "New Task Title",
    "description": "Task description",
    "dueDate": "2025-06-01T15:00",
    "status": "open"
  }
Response:

Status Code: 201 Created

Body:

json
Copy
Edit
{
  "id": "new_task_id",
  "title": "New Task Title",
  "description": "Task description",
  "dueDate": "2025-06-01T15:00",
  "status": "open"
}

4. Update Task Status
URL: /tasks/{id}/status

Method: PATCH

Description: Update the status of a task.

URL Params:

id=[string] (Required)

Body:

json
Copy
Edit
{
  "status": "completed"
}
Response:

Status Code: 200 OK

Body:

json
Copy
Edit
{
  "id": "task_id_1",
  "title": "Task Title",
  "description": "Task description",
  "dueDate": "2025-04-01T10:00",
  "status": "completed"
}
5. Delete Task
URL: /tasks/{id}

Method: DELETE

Description: Delete a task by its ID.

URL Params:

id=[string] (Required)

Response:

Status Code: 200 OK

Body:

json
Copy
Edit
{
  "message": "Task deleted successfully"
}
Example Request/Response
Here's an example of how to create a task using POST:

Request:

bash
Copy
Edit
POST http://localhost:5050/api/tasks
Content-Type: application/json

{
  "title": "Sample Task",
  "description": "This is a sample task description.",
  "dueDate": "2025-07-01T14:00",
  "status": "open"
}
Response:

json
Copy
Edit
{
  "id": "sample_task_id",
  "title": "Sample Task",
  "description": "This is a sample task description.",
  "dueDate": "2025-07-01T14:00",
  "status": "open"
}
