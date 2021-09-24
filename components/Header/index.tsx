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
  return (
    <div className={style.container}>
      <div className={style.btnGroup}>
        <HeaderButton title="Facebook" Icon={IoLogoFacebook} />
        <HeaderButton title="Twitter" Icon={IoLogoTwitter} />
        <HeaderButton title="Dribble" Icon={IoLogoDribbble} />
        <HeaderButton title="Instagram" Icon={IoLogoInstagram} />
      </div>
      <div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
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
