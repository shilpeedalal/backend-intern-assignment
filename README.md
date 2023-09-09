# backend-intern-assignment

The API will be accessible at `http://localhost:3000` (or the port you specified).

## API Endpoints

The API provides the following endpoints for managing tasks:

- `GET /tasks`: Fetch all tasks.
- `POST /task`: Create a new task.
- `PUT /task/:id`: Update the status of an existing task by ID.

## Usage

You can interact with the API using tools like Postman or curl. Here are some examples:

- To fetch all tasks: Send a GET request to `http://localhost:3000/tasks`.
- To create a new task: Send a POST request to `http://localhost:3000/task` with a JSON body containing task details.
- To update the status of a task: Send a PUT request to `http://localhost:3000/task/{task-id}` with a JSON body containing the new status.

