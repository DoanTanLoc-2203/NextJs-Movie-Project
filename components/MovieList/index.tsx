import * as React from "react";
import { MovieItem } from "../MovieItem";
import style from "./style.module.css";
interface Item {
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}

export interface MovieListProps {
  data: Item[];
}

export default function MovieList(props: MovieListProps) {
  const size = props.data ? props.data.length : 0;
  return (
    <div className={style.container}>
      {props.data && size > 0 ? (
        props.data.map((ele: any) => {
          return <MovieItem data={ele} key={ele.id} />;
        })
      ) : (
        <div>No movie infomation</div>
      )}
    </div>
  );
}
