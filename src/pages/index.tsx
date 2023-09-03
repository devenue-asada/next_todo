import Books from "./view/books";
import Todos from "./view/todos";
import { GetServerSideProps } from "next";
import { getData } from "./api/books";
import { TBooks } from "./types/books";

export default function Home(props: any) {
  return (
    <>
      <Books items={props.items} /> {/* BooksはSSRで実装*/}
      <br />
      <Todos /> {/*TodosはSPAで実装*/}
    </>
  );
}

//Topレベルで呼び出し。SSRはサーバー側で処理しフロントに返す。外部APIとか使うときに良さそう。
//本当はStoreとかでstateを保持しておいたほうがよさそう
export const getServerSideProps: GetServerSideProps = async (context) => {
  const books: TBooks = await getData("ドラえもん");
  return {
    props: { items: books },
  };
};
