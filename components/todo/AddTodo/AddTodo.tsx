import { FormEvent, useState } from "react";

import type { Todo } from "../TodoList/TodoList";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function AddItemForm({ setTodos }: Props) {
  const [item, setItem] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!item) return;

    setTodos((prev) => {
      const highestId = [...prev].sort((a, b) => b.id - a.id)[0].id;

      return [
        ...prev,
        { userId: 1, title: item, completed: false, id: highestId + 1 },
      ];
    });

    setItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <label hidden htmlFor="title">
        New Todo
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="w-full flex-grow rounded-lg p-1 text-2xl"
        placeholder="New Todo"
        autoFocus
      />

      <button
        type="submit"
        className="max-w-xs rounded-2xl border-2 border-solid border-black bg-green-500 p-2 text-xl text-black hover:cursor-pointer hover:bg-green-400 disabled:bg-gray-300"
        disabled={!item ? true : false}
      >
        Submit
      </button>
    </form>
  );
}
