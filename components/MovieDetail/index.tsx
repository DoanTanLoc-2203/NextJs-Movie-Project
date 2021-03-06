import * as React from "react";
import Image from "next/image";
import style from "./style.module.css";
import {
  IoBody,
  IoCash,
  IoCalendar,
  IoCheckmark,
  IoThumbsUp,
  IoTrendingUp,
} from "react-icons/io5";
import YouTube from "react-youtube";
interface Item {
  backdrop_path: string; //
  budget: number; //
  id: number; //
  original_title: string; //
  overview: string; //
  poster_path: string; //
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
  }[];
  revenue: number; //
  release_date: string; //
  status: string; //
  vote_average: number;
  vote_count: number; //
  videos: {
    results: { id: number; key: string }[];
  };
}

export interface MovieDetailProps {
  data: Item;
}

export function MovieDetail(props: MovieDetailProps) {
  // console.log(props.data);
  const company = props.data.production_companies;
  const profit = Math.floor(
    ((props.data.revenue - props.data.budget) / props.data.budget) * 100,
  );
  return (
    <div>
      <div
        className={style.container}
        style={{
          backgroundImage: `url(${
            process.env.IMAGE_BASE + props.data.backdrop_path
          })`,
        }}>
        <div className={style.bg}>
          <div className={style.left}>
            <h1 className={style.name}>{props.data.original_title}</h1>
            <Image
              alt=""
              src={process.env.IMAGE_BASE + props.data.poster_path}
              width={300}
              height={450}
            />
          </div>

          <div className={style.right}>
            <h2 className={style.tag}>OVER VIEW</h2>
            <p className={style.overview}>{props.data.overview}</p>
            <h2 className={style.tag}>INFOMATION</h2>
            <div className={style.detail}>
              <div className={style.icon}>
                <p className={style.icontitle}>Status: {props.data.status}</p>
                <IoCheckmark />
              </div>
              <div className={style.icon}>
                <p className={style.icontitle}>
                  Release date: {props.data.release_date}
                </p>
                <IoCalendar />
              </div>
              <div className={style.icon}>
                <p className={style.icontitle}>
                  Vote rate: {props.data.vote_average}
                </p>
                <IoThumbsUp />
              </div>
              <div className={style.icon}>
                <p className={style.icontitle}>
                  Vote count: {props.data.vote_count}
                </p>
                <IoBody />
              </div>
              <div className={style.icon}>
                <p className={style.icontitle}>Budget: {props.data.budget}</p>
                <IoCash />
              </div>
              <div className={style.icon}>
                <p className={style.icontitle}>Revenue: {props.data.revenue}</p>
                <IoCash />
              </div>
              <div className={style.icon}>
                <p className={style.icontitle}>Profit: {profit}%</p>
                <IoTrendingUp />
              </div>
            </div>
            <div className={style.company}>
              {company.map((ele) => {
                return (
                  <p key={ele.id} className={style.company_item}>
                    {ele.name}
                  </p>
                );
              })}
            </div>
            <button
              className={style.watch}
              onClick={() => {
                alert("L??m g?? c?? phim m?? coi :V");
              }}>
              Watch movie
            </button>
          </div>
        </div>
      </div>
      <div className={style.video}>
        {props.data.videos.results.map((element) => {
          return (
            <YouTube
              videoId={element.key}
              key={element.id}
              className={style.videoitem}
            />
          );
        })}
      </div>
    </div>
  );
}
