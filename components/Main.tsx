import Image from 'next/image';
import style from '../styles/main.module.css';
import java from '../assets/java.webp';
import javascript from '../assets/javascript.webp';
import typescript from '../assets/typescript.webp';
import react from '../assets/react.webp';
import redux from '../assets/redux.webp';
import spring from '../assets/spring.webp';

export default function Main() {
    return (
        <div className={style.mainContainer}>
            <div className={style.mainContent}>
                <section className={style.mainName}>
                    <h1>
                        <span>Yahir</span>
                        <span> Moreno</span>
                        <span> Barajas</span>
                    </h1>
                    <h1 className={style.mainOccupation}>Software Engineer</h1>
                </section>
                <section className={style.stackImages}>
                    <article>
                        <Image src={java} alt='Java' />
                        <Image src={javascript} alt='Javascript' />
                        <Image src={typescript} alt='Typescript' />
                    </article>
                    <article>
                        <Image src={react} alt='react' />
                        <Image src={redux} alt='redux' />
                        <Image src={spring} alt='spring' />
                    </article>
                </section>
            </div>
        </div>
    )
}