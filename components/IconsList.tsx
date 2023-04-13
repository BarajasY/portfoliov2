import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import style from "../styles/about.module.css";

export default function IconsList() {
  return (
    <article
      className={style.iconsWrapper}
    >
      <div className={style.iconContainer}>
        <p>Re</p>
        <FaReact className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>TS</p>
        <SiTypescript className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Dux</p>
        <SiRedux className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>JS</p>
        <IoLogoJavascript className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Ja</p>
        <FaJava className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Ht</p>
        <IoLogoHtml5 className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Po</p>
        <SiPostgresql className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Sp</p>
        <SiSpring className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Css</p>
        <IoLogoCss3 className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Rq</p>
        <SiReactquery className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>MSQ</p>
        <SiMysql className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Fi</p>
        <SiFirebase className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Ex</p>
        <SiExpress className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Po</p>
        <SiPostman className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Git</p>
        <FaGitAlt className={style.icon} />
      </div>
    </article>
  );
}
