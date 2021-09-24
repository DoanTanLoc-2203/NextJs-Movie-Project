import * as React from "react";
import { HeaderButton } from "../HeaderButton";
import style from "./style.module.css";
import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoDribbble,
  IoLogoInstagram,
} from "react-icons/io5";
import { useRouter } from "next/dist/client/router";
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const rounter = useRouter();
  const { type } = rounter.query;
  return (
    <div className={style.container}>
      <div className={style.btnGroup}>
        <HeaderButton title="Facebook" Icon={IoLogoFacebook} />
        <HeaderButton title="Twitter" Icon={IoLogoTwitter} />
        <HeaderButton title="Dribble" Icon={IoLogoDribbble} />
        <HeaderButton title="Instagram" Icon={IoLogoInstagram} />
      </div>
      <h1 className={style.type}>{type}</h1>
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={55}
          onClick={() => {
            rounter.push("/");
          }}
        />
      </div>
    </div>
  );
}
