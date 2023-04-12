import style from "../styles/about.module.css"
import {IoLogoJavascript, IoLogoHtml5, IoLogoCss3} from 'react-icons/io'
import {SiTypescript, SiRedux, SiReactquery, SiSpring, SiPostgresql, SiMysql, SiFirebase, SiExpress, SiPostman} from 'react-icons/si'
import {FaJava, FaReact, FaGitAlt} from 'react-icons/fa'

export default function About() {
    return (
        <div className={style.aboutContainer}>
            <div className={style.aboutContent}>
                <section>
                    <p className={style.aboutTitle}>About</p>
                    <article>
                        <p className={style.aboutDescription}>Mexican web developer and Software Engineering college (university) student.</p>
                        <p className={style.aboutDescription}>Thanks to pure hardwork and exceeding enthusiasm i've challenged myself to work in project after project, in order to gain enough experience in modern and relevant Languages and Frameworks to become a competent developer.</p>
                        <p className={style.aboutDescription}>In this portfolio I showcase the most relevant projects i've done, including the github repository and notable information that could attract interest.</p>
                    </article>
                </section>
                <section>
                    <p className={style.aboutTitle}>Languages</p>
                    <article>
                        <IoLogoJavascript className={style.aboutLogo}/>
                        <IoLogoHtml5 className={style.aboutLogo}/>
                        <IoLogoCss3 className={style.aboutLogo}/>
                        <SiTypescript className={style.aboutLogo}/>
                        <FaJava className={style.aboutLogo}/>
                    </article>
                    <p className={style.aboutTitle}>Frameworks & Databases</p>
                    <article>
                        <FaReact className={style.aboutLogo}/>
                        <SiRedux className={style.aboutLogo}/>
                        <SiReactquery className={style.aboutLogo}/>
                        <SiSpring className={style.aboutLogo}/>
                        <SiPostgresql className={style.aboutLogo}/>
                        <SiFirebase className={style.aboutLogo}/>
                        <SiMysql className={style.aboutLogo}/>
                        <SiExpress className={style.aboutLogo}/>
                    </article>
                    <p className={style.aboutTitle}>Tools</p>
                    <article>
                        <SiPostman className={style.aboutLogo}/>
                        <FaGitAlt className={style.aboutLogo}/>
                    </article>
                </section>
            </div>
        </div>
    )
}