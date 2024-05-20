export default function TodoItem({
  todo: { id, title, content, isDone },
  setTodos,
}) {
  const deleteTodos = () => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const toggleTodos = () => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <>
      <h3>
        {isDone ? "✅" : "📌"}
        {title}
      </h3>
      <p>{content}</p>
      <button onClick={deleteTodos} className="delete-btn">
        삭제
      </button>
      <button
        onClick={toggleTodos}
        className={isDone ? "cancel-btn" : "complete-btn"}
      >
        {isDone ? "취소" : "완료"}
      </button>
    </>
  );
}
