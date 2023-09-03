import { GetServerSideProps } from "next";
import { getData } from "../api/books";
import { TBooks } from "../types/books";

type TProps = {
  items: TBooks;
};

export const Books = ({ items }: TProps) => {
  return (
    <>
      <ul>
        <h3>SSRで取得した一覧</h3>
        {items?.map((item) => (
          <li key={item.id}>
            <p>・{item.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Books;
