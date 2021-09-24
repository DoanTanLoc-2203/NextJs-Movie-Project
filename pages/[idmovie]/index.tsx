import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import * as React from "react";
import Image from "next/image";
import { fetchMovieDetail } from "../../service/request";
import { MovieDetail } from "../../components/MovieDetail";

interface Item {
  backdrop_path: string;
  budget: number;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
  }[];
  revenue: number;
  release_date: string;
  status: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailPageProps {
  data: Item;
}

export default function MovieDetailPage(props: MovieDetailPageProps) {
  return (
    <div>
      <MovieDetail data={props.data} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { movieid } = context.query;
    const req = await fetchMovieDetail(Number(movieid));
    const res = req ? await req.json() : null;
    return {
      props: {
        data: res || null,
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
