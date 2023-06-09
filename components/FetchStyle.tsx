'use client'
import { useState } from "react"
import style from "../styles/about.module.css"
import TypewriterComponent from "typewriter-effect"
import { motion, AnimatePresence } from "framer-motion"
import IconsList from "./IconsList"
import Projects from "./Projects"


export default function FetchStyle() {
    const [Visible, setVisible] = useState<boolean>(false)

    return (
        <div className={style.fetchContent}>
            <AnimatePresence>
            {Visible ?
            <motion.article key="json">
                <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: .5}}
                viewport={{once: true}}>
                    <TypewriterComponent options={{
                        strings:`fetch("https:yahirmb.app/about")`,
                        loop: false,
                        autoStart: Visible
                    }}/>
                </motion.div>
                <section className={style.aboutMe}>
                    <motion.p
                    className={style.aboutHTTP}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 5.5}}
                    viewport={{once: true}}>GET: 200 OK</motion.p>
                    <motion.h1 
                    className={style.aboutDescription}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 6.5}}
                    viewport={{once: true}}>
                        &#123;
                        <br />
                        &emsp;"nationality": <span>"Mexican",</span> <br />
                        &emsp;"occupation": <span>"Student",</span> <br />
                        &emsp;"career": <span>"Software Engineering",</span> <br />
                        &emsp;"hobbies": <span>["coding", "gaming"],</span> <br />
                        &emsp;"specialty": <span>["React", "TypeScript"]</span> <br />
                        &emsp;"projectsTotal": <span>14,</span> <br />
                        &emsp;"age": <span>20</span>
                        <br /> &#125;
                    </motion.h1>
                </section>
                <motion.div className={style.aboutStack}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 7}}
                viewport={{once: true}}>
                    <h1>Stack</h1>
                    <IconsList />
                </motion.div>
            </motion.article>
            :
            <motion.button
            key="fetchButton"
            className={style.aboutFetch} 
            onClick={() => setVisible(true)}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -30}}
            >About me</motion.button>
        }
        </AnimatePresence>
        </div>
    )
}