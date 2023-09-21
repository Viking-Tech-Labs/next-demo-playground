import { ChangeEvent, MouseEvent } from "react";

import { Trash2 } from "lucide-react";

import type { Todo } from "../TodoList";

import deleteTodo from "@/lib/deleteTodo/deleteTodo";
import updateTodo from "@/lib/updateTodo/updateTodo";

type Props = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoItem({ todo, setTodos }: Props) {
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const updatedTodo = await updateTodo(todo);
      setTodos((prevTodos) => [
        ...prevTodos.filter((prev) => prev.id !== todo.id),
        updatedTodo,
      ]);
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  };

  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteTodo(todo);
      setTodos((prev) => [...prev.filter((td) => td.id !== todo.id)]);
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  };

  return (
    <article className="my-4 flex items-center justify-between">
      <label
        className="text-2xl hover:underline"
        data-testid="todo-item"
        htmlFor={todo.id.toString()}
      >
        {todo.title}
      </label>
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          id={todo.id.toString()}
          name="completed"
          onChange={handleChange}
          className="min-h-[2rem] min-w-[2rem]"
        />

        <button
          data-testid="delete-button"
          onClick={handleDelete}
          className="max-w-xs rounded-2xl border-2 border-solid border-black bg-red-400 p-3 text-xl text-black hover:cursor-pointer hover:bg-red-300"
        >
          <Trash2 />
        </button>
      </div>
    </article>
  );
}
