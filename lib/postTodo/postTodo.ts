import { Todo } from "@/components/todo/TodoList/TodoList";

async function mockPostTodo(item: string): Promise<Todo> {
  {
    /* Example only. If multiple users, you would need 
            the correct userId value here  */
  }

  const res = await fetch("/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      title: item,
      completed: false,
    }),
  });

  if (!res.ok) throw Error("Failed to post new todo");

  return await res.json();
}

let idCount = 1;

async function devPostTodo(item: string): Promise<Todo> {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        id: idCount++,
        userId: 1,
        title: item,
        completed: false,
      } as Todo);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Environment-sensitive Todo post function.
 *
 * Uses `mockPostTodo` function in test environments, and `devPostTodo` in development.
 *
 */
let postTodos = devPostTodo;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "test") {
  postTodos = mockPostTodo;
}

export default postTodos;
