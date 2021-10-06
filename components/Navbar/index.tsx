import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Link from "next/link";
import { fetchListTypeMovie } from "../../service/request";
import { useRouter } from "next/dist/client/router";
import Slider from "react-slick";
interface Item {
  id: number;
  name: string;
}
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  swipeToSlide: true,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export function Navbar() {
  const rounte = useRouter();
  const { typeid } = rounte.query;
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        const req = await fetchListTypeMovie();
        const res = await req.json();
        setdata(res.genres);
      } catch {
        console.log("Cannot fetch data!");
      }
    };
    getdata();
  }, []);
  return (
    <>
      <div className={style.container}>
        <Slider {...settings}>
          {data ? (
            data.map((ele: Item) => {
              return (
                <div key={ele.id} className={style.item}>
                  <Link
                    href={`/category?typeid=${ele.id}&type=${ele.name}`}
                    passHref>
                    <p className={style.button}>{ele.name}</p>
                  </Link>
                </div>
              );
            })
          ) : (
            <div>Loading..</div>
          )}
        </Slider>
      </div>
    </>
  );
}
