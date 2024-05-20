import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const initialTodos = [
    {
      id: 1,
      title: "리액트 입문 복습하기",
      content: "리액트 입문 강의 재수강하기",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 과제하기",
      content: "나만의 TodoList 제작하기",
      isDone: false,
    },
    {
      id: 3,
      title: "자바스크립트 공부하기",
      content: "자바스크립트 문법 복습하기",
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      <header>
        <h1>My Todo List📝</h1>
        <TodoForm setTodos={setTodos} />
      </header>
      <section>
        <TodoList
          title={"Working...🔥"}
          name={"working-box"}
          todos={workingTodos}
          setTodos={setTodos}
        />
        <TodoList
          title={"Done!🎉"}
          name={"done-box"}
          todos={doneTodos}
          setTodos={setTodos}
        />
      </section>
    </>
  );
}
