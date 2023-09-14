import { ChangeEvent, MouseEvent } from "react";

import { Trash2 } from "lucide-react";

import type { Todo } from "../TodoList";

type Props = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoItem({ todo, setTodos }: Props) {
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    //const updatedTodo = await updateTodo(todo)
    setTodos((prevTodos) => [
      ...prevTodos.filter((prev) => prev.id !== todo.id),
      { ...todo, completed: !todo.completed },
    ]);
  };

  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    //await deleteTodo(todo)
    setTodos((prev) => [...prev.filter((td) => td.id !== todo.id)]);
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
