import Book from "./books";
import { GetServerSideProps } from "next";
import { getData } from "./api/books";
import { TBooks } from "./types/book";

export default function Home(props: any) {
  console.log(props);
  return (
    <div className="">
      <Book items={props.items} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("????????????????");
  console.log("????????????????");
  console.log("????????????????");
  //api配下の
  const books: TBooks = await getData("ドラえもん");
  return {
    props: { items: books },
  };
};
