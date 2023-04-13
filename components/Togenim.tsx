import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import style from "../styles/projects.module.css";
import Image from "next/image";
import togenim from "../assets/togenim.webp";
import { SiFirebase, SiTypescript } from "react-icons/si";

export default function Togenim() {
  return (
    <div className={style.rightProject}>
      <section>
        <div className={style.aboutProject}>
          <h1 className={style.projectTitle}>Togenim</h1>
          <p>
            Genshin Impact-based project which displays common used teams in the
            game.
          </p>
          <p>
            This page can function sort of like a guide, users can even insert
            the characters they have and the site will find teams that met the
            criteria.
          </p>
          <a href="https://github.com/BarajasY/topgen" target="__blank">
            Repo
          </a>
        </div>
        <div className={style.projectImage}>
          <Image src={togenim} alt="Togenim project"></Image>
        </div>
      </section>
      <section className={style.projectStackIcons}>
        <FaReact className={style.projectIcon} />
        <SiTypescript className={style.projectIcon} />
        <FaHtml5 className={style.projectIcon} />
        <FaCss3 className={style.projectIcon} />
        <SiFirebase className={style.projectIcon} />
      </section>
    </div>
  );
}
