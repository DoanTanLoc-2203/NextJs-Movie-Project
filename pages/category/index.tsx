import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import { fetchMovieByType } from "../../service/request";
import { ParsedUrlQuery } from "querystring";
import * as React from "react";
import { MovieItem } from "../../components/MovieItem";
import MovieList from "../../components/MovieList";

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

export interface CategoryProps {
  data: Item[];
}

export default function Category(props: CategoryProps) {
  return (
    <div>
      <MovieList data={props.data} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { typeid } = context.query;
    const req = await fetchMovieByType(Number(typeid));
    const res = req ? await req.json() : null;
    return {
      props: {
        data: res.items || null,
      },
    };
  } catch {
    return {
      props: {
        data: [],
      },
    };
  }
};
