import style from "../styles/about.module.css";
import FetchStyle from "./FetchStyle";

export default function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutContent}>
        <FetchStyle />
      </div>
    </div>
  );
}