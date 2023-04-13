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
        <p>React</p>
        <FaReact className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>TS</p>
        <SiTypescript className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Redux</p>
        <SiRedux className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>JS</p>
        <IoLogoJavascript className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Java</p>
        <FaJava className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>HTML</p>
        <IoLogoHtml5 className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>PSQL</p>
        <SiPostgresql className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Spring</p>
        <SiSpring className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>CSS</p>
        <IoLogoCss3 className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>ReactQ</p>
        <SiReactquery className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>MySQL</p>
        <SiMysql className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Firebase</p>
        <SiFirebase className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Express</p>
        <SiExpress className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Postman</p>
        <SiPostman className={style.icon} />
      </div>
      <div className={style.iconContainer}>
        <p>Git</p>
        <FaGitAlt className={style.icon} />
      </div>
    </article>
  );
}
