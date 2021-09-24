import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Link from "next/link";
import { fetchListTypeMovie } from "../../service/request";
import { useRouter } from "next/dist/client/router";
interface Item {
  id: number;
  name: string;
}

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
    <div className={style.container}>
      {data ? (
        data.map((ele: Item) => {
          return (
            <div key={ele.id}>
              <Link href={`/category?typeid=${ele.id}`} passHref>
                <p className={style.button}>{ele.name}</p>
              </Link>
            </div>
          );
        })
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
}
