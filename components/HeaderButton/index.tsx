import * as React from "react";
import style from "./style.module.css";
export interface HeaderButtonProps {
  title: string;
  Icon: any;
}

export function HeaderButton(props: HeaderButtonProps) {
  return (
    <div className={style.container}>
      <div className={style.icon}>
        <props.Icon />
      </div>
      <p className={style.title}>{props.title}</p>
    </div>
  );
}
