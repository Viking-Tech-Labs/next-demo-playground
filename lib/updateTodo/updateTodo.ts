import { Todo } from "@/components/todo/TodoList/TodoList";

async function mockUpdateTodo(todo: Todo): Promise<Todo> {
  const res = await fetch(`/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...todo,
      completed: !todo.completed,
    }),
  });

  if (!res.ok) throw Error("Failed to update todo");

  const updatedTodo = await res.json();

  return updatedTodo;
}

async function devUpdateTodo(todo: Todo): Promise<Todo> {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        ...todo,
        completed: !todo.completed,
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Environment-sensitive Todo update function.
 *
 * Uses `mockUpdateTodo` function in test environments, and `devUpdateTodo` in development.
 *
 */
let updateTodo = devUpdateTodo;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "test") {
  updateTodo = mockUpdateTodo;
}

export default updateTodo;
