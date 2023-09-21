import { Todo } from "@/components/todo/TodoList/TodoList";

/**
 * Mock implementation for fetching Todo items.
 *
 * This function simulates the fetching process by making a GET request
 * to the `/todos` endpoint.
 *
 */
async function mockFetchTodos(): Promise<Todo[]> {
  try {
    const res = await fetch("/todos");

    const todos: Todo[] = await res.json();

    return todos;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    return [];
  }
}

/**
 * Development-only implementation for fetching Todo items.
 *
 * This function mimics the fetch action by simply returning an empty array Todo items.
 * Ideal for use during development to avoid actual API calls.
 *
 */
async function devFetchTodo() {
  return new Promise((resolve, reject) => {
    try {
      resolve([]);
    } catch (err) {
      reject(err);
    }
  });
}

let fetchTodos = devFetchTodo;

/**
 * Environment-sensitive Todo fetch function.
 *
 * Uses `mockFetchTodo` function in test environments, and `devFetchTodo` in development.
 *
 */
if (!process.env.NODE_ENV || process.env.NODE_ENV === "test") {
  fetchTodos = mockFetchTodos;
}

export default fetchTodos;
