import style from '../styles/main.module.css';

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
                    <p onClick={() => window.scrollTo({top: 1000, behavior: "smooth"})}>Continue</p>
                </section>
                <section className={style.test}>
                    <h1>Yahir</h1>
                </section>
{/*                 <section className={style.droplet}></section> */}
            </div>
        </div>
    )
}