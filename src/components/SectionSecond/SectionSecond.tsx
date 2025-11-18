import styles from "./SectionSecond.module.css"
import settingsImg from "images/SectionSecond/settings.png"
import graphImg from "images/SectionSecond/graph.png"
import homescreenImg from "images/SectionSecond/homescreen.png"
import settingsBg from "images/SectionSecond/settings-bg.svg"
import graphBg from "images/SectionSecond/graph-bg.svg"
import homescreenBg from "images/SectionSecond/homescreen-bg.svg"


export const SectionSecond  = () => {
    return (
        <section className={styles.sectionSecond}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Уникальные цифровые решения <br/>для девелоперов и застройщиков</h1>
                <div className={styles.containerCards}>
                    <div className={styles.contentCard}>
                        <p className={styles.textCard}>Цифровая платформа разрабатывается 
                        под индивидуальные задачи вашей компании — это не универсальное стандартное решение, а гибкий инструмент, адаптируемый под структуру, сервисы и специфику конкретного объекта.</p>
                        <img draggable={false} className={`${styles.imgCard} ${styles.settingsImg}`} src={settingsImg} alt="settings"/>
                        <img draggable={false} className={styles.bgCard} src={settingsBg} alt="bg"/>
                    </div>
                    <div className={styles.contentCard}>
                        <p className={styles.textCard}>Архитектура, функции и интерфейс настраиваются с учетом ваших бизнес-процессов, потребностей резидентов 
                        и стратегических целей девелопера.</p>
                        <img draggable={false} className={`${styles.imgCard} ${styles.graphImg}`} src={graphImg} alt="graph"/>
                        <img draggable={false} className={styles.bgCard} src={graphBg} alt="bg"/>
                    </div>
                    <div className={styles.contentCard}>
                        <p className={styles.textCard}>В результате: жилой комплекс получает собственную цифровую экосистему, которая точно отражает его особенности и мгновенно усиливает бренд застройщика.</p>
                        <img draggable={false} className={`${styles.imgCard} ${styles.homescreenImg}`} src={homescreenImg} alt="homescreen"/>
                        <img draggable={false} className={styles.bgCard} src={homescreenBg} alt="bg"/>
                    </div>
                </div>
            </div>
        </section>
    )
}