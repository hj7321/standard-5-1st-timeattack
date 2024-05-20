import TodoItem from "./TodoItem";

export default function TodoList({ title, name, todos, setTodos }) {
  return (
    <div className={name}>
      <h1>{title}</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
}
