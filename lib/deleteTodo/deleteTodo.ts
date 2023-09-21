import type { Todo } from "@/components/todo/TodoList/TodoList";

/**
 * Mock implementation for deleting a Todo item.
 *
 * This function simulates the deletion process by making a DELETE request
 * to the `/todos/{id}` endpoint.
 *
 */
async function mockDeleteTodo(todo: Todo): Promise<Partial<Todo>> {
  const res = await fetch(`/todos/${todo.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: todo.id,
    }),
  });

  if (!res.ok) throw Error("Failed to delete todo");

  return await res.json();
}

/**
 * Development-only implementation for deleting a Todo item.
 *
 * This function mimics the delete action by simply returning the ID of the deleted Todo.
 * Ideal for use during development to avoid actual API calls.
 *
 */
async function devDeleteTodo(todo: Todo): Promise<Partial<Todo>> {
  return { id: todo.id };
}

/**
 * Environment-sensitive Todo delete function.
 *
 * Uses `mockDeleteTodo` function in test environments, and `devDeleteTodo` in development.
 *
 * The idea is to simulate API failures in a test environment while keeping
 * the development environment less error-prone with hardcoded responses.
 */
let deleteTodo = devDeleteTodo;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "test") {
  deleteTodo = mockDeleteTodo;
}

export default deleteTodo;
