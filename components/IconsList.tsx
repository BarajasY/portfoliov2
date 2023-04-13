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
import style from '../styles/about.module.css'

export default function IconsList() {
    return (
        <article style={{display: "flex", flexDirection: "row"}} className={style.iconsContainer}>
            <FaReact className={style.icon}/>
            <SiTypescript className={style.icon}/>
            <SiRedux className={style.icon}/>
            <IoLogoJavascript className={style.icon}/>
            <FaJava className={style.icon}/>
            <IoLogoHtml5 className={style.icon}/>
            <SiSpring className={style.icon}/>
            <IoLogoCss3 className={style.icon}/>
            <SiReactquery className={style.icon}/>
            <SiPostgresql className={style.icon}/>
            <SiMysql className={style.icon}/>
            <SiFirebase className={style.icon}/>
            <SiExpress className={style.icon}/>
            <SiPostman className={style.icon}/>
            <FaGitAlt className={style.icon}/>
        </article>
    )
}