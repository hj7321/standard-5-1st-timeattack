export default function TodoForm({ setTodos }) {
  const addTodos = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const title = data.get("title");
    const content = data.get("content");

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const newTodos = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    setTodos((todos) => [...todos, newTodos]);

    e.target.reset();
  };
  return (
    <form onSubmit={addTodos}>
      <label>
        제목&ensp;
        <input type="text" name="title" />
      </label>
      <label>
        내용&ensp;
        <input type="text" name="content" className="content-input" />
      </label>
      <button type="submit" className="add-btn">
        추가하기
      </button>
    </form>
  );
}
