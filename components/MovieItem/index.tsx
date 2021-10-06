import * as React from "react";
import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";
import { IoThumbsUpOutline, IoCalendarClearOutline } from "react-icons/io5";
interface Item {
  id: number;
  poster_path: string;
  overview: string;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}
export interface MovieItemProps {
  data: Item;
}

export function MovieItem(props: MovieItemProps) {
  return (
    <>
      <Link href={`/movie?movieid=${props.data.id}`} passHref>
        <div className={style.container}>
          <Image
            src={
              props.data.poster_path
                ? process.env.IMAGE_BASE + props.data.poster_path
                : "https://via.placeholder.com/300x450.png?text=No%20image"
            }
            alt=""
            width={300}
            height={450}
            className={style.image}
          />
          <h1 className={style.vote}>{props.data.vote_average}</h1>
          <div className={style.content}>
            <h2 className={style.title}>{props.data.title}</h2>
            <div className={style.rate}>
              <h3 className={style.calendaContent}>
                <i className={style.calenda}>
                  <IoCalendarClearOutline />
                </i>
                {props.data.release_date}
              </h3>
              <h3 className={style.calendaContent}>
                <i className={style.calenda}>
                  <IoThumbsUpOutline />
                </i>
                {props.data.vote_count}
              </h3>
            </div>

            <p className={style.overview}>{props.data.overview}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
