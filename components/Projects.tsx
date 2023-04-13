import style from '../styles/projects.module.css'
import ColorManager from './ColorManager';
import Togenim from './Togenim';

export default function Projects() {
    return (
        <div className={style.projectsContainer}>
            <div className={style.projectsContent}>
                <Togenim />
                <ColorManager />
            </div>
        </div>
    )
}