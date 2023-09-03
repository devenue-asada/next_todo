export type TBook = {
  id: string;
  title: string;
};

export type TBooks = Array<TBook>;

export type TResBook = {
  id: string;
  volumeInfo: { title: string };
  pageCount: number | null;
};
