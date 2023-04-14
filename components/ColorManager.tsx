import { SiPostgresql, SiReact, SiSpring, SiTypescript } from 'react-icons/si'
import style from '../styles/projects.module.css'
import { FaCss3, FaHtml5, FaJava } from 'react-icons/fa'
import colormanager from "../assets/colormanager.webp";
import Image from 'next/image'

export default function ColorManager() {
    return (
        <div className={style.leftProject}>
        <section>
          <div className={style.aboutProject} style={{order: 2}}>
            <h1 className={style.projectTitle}>ColorManager</h1>
            <p>Full stack application with the mission of letting users know some color palettes that they can use.</p>
            <p>Additionally, by creating an account, users can share their own color palettes.</p>
            <a href="https://github.com/BarajasY/ColorManager" target="__blank">
              Repo
            </a>
          </div>
          <div className={style.projectImage} style={{order: 1}}>
            <Image src={colormanager} alt="Togenim project"></Image>
          </div>
        </section>
        <section className={style.projectStackIcons}>
          <SiReact className={style.projectIcon} />
          <SiTypescript className={style.projectIcon} />
          <FaHtml5 className={style.projectIcon} />
          <FaCss3 className={style.projectIcon} />
          <FaJava className={style.projectIcon} />
          <SiSpring className={style.projectIcon} />
          <SiPostgresql className={style.projectIcon} />
        </section>
      </div>
    )
}