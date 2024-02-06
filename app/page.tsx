import styles from './page.module.css'
import NavBar from './components/navBar'
import Hero from './components/hero'
import AboutECX from './components/aboutUs';
import Achievements from './components/achievements';
import Team from './components/our-team/team';
import Newsletter from './components/newsletter';
import Footer from './components/footer';
import Merch from './components/merch';
import TrainingSkills from './components/trainingskills';
import MovingRibbon from "./components/movingribbon"
import Testimonials from './components/Testimonials/Testimonials';
import Community from './components/Community';


export default function Home() {
    return (
        <div className={styles.page}>
            <div id="head" className={styles.page_head}>
                <NavBar />
                <Hero />
            </div>

            <Achievements />

            <section className={styles.page_section}>
                <AboutECX />
                <TrainingSkills />
            </section>

            <MovingRibbon />
            
            <div className={`${styles.team_community_container} ${styles.page_section}`}>
                <Team />
                <Community />
            </div>

            {/* <Testimonials /> */}
                
            <section className={styles.page_section}>
                <Merch />
                <Newsletter />
            </section>

            <footer id='footer' className={styles.footer}>
                <Footer /> 
            </footer>
        </div>
    )
}
