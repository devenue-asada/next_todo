import { GetServerSideProps } from "next";
import { getData } from "../api/books";
import { TBooks } from "../types/books";
import { useState, useEffect } from "react";
import { TTodo, TTodos } from "../types/todos";

export const Todos = () => {
  //よくあるReactの実装方法なので、一旦nextでSSRで取得だけ
  const [todos, setTodos] = useState<TTodos | []>([]);

  // console.log(!todos);
  useEffect(() => {
    const res = fetch("/api/todos")
      .then((d) => {
        const { status } = d;
        if (status !== 200) return;
        d.json().then((d) => setTodos(d));
      })
      .catch((e) => e);
  }, []);
  return (
    <>
      <ul>
        <h3>SPAで取得した一覧</h3>
        {todos.length ? (
          todos.map((todo: TTodo) => (
            <li key={todo.id}>
              <p>・{todo.todo}</p>
            </li>
          ))
        ) : (
          <div>データなし</div>
        )}
      </ul>
    </>
  );
};

export default Todos;
