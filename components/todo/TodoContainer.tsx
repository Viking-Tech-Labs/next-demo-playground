"use client";

import { useEffect, useState } from "react";

import AddTodo from "./AddTodo/AddTodo";
import type { Todo } from "./TodoList/TodoList";
import TodoList from "./TodoList/TodoList";

import fetchTodos from "@/lib/fetchTodos/fetchTodos";

export default function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const todosArray = await fetchTodos();
      if (todosArray?.length) setTodos(todosArray);
    }

    getTodos();
  }, []);

  return (
    <>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
