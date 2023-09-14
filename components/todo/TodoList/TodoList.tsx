import TodoItem from "./TodoItem/TodoItem";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoList({ todos, setTodos }: Props) {
  if (!todos?.length) return <p>No Todos Available</p>;

  const sortedTodos: Todo[] = todos.sort((a, b) => b.id - a.id);

  return (
    <>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </>
  );
}
