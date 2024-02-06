"use client"
import React, {useState} from "react"
import Image from "next/image"
import SkillCard from "./trainings/skillCard"
import styles from "./css/trainingskill.module.css"
import Trainings from "./trainings/trainings.json"


const TrainingSkills = () => {
    const [trainings] = useState(Trainings)
    const [currentSkillSection, setCurrentSkillSection] = useState("tech_skills")

    const handleNavigation = (skillSection : string) => {
        setCurrentSkillSection(skillSection)
    }
    return(
        <div className={styles.training_skills}>
            <div className={styles.vector_swift}>
                <Image
                src={"/about/vector-swift.svg"}
                alt={"vector"}
                width={260}
                height={260}
                />
            </div>
			<h2 className={styles.training_title}>Training Tracks</h2>
			<nav className={styles.training_nav}>
        <div className={`${styles.training_nav_bg} ${(currentSkillSection === "soft_skills") && styles.training_nav_bg_soft}`} />
				<button
					className={styles.training_nav_btn}
					onClick={() => handleNavigation("tech_skills")}
				>
					Technical Skills
				</button>
				<button
					className={styles.training_nav_btn}
					onClick={() => handleNavigation("soft_skills")}
				>
					Soft Skills
				</button>
			</nav>
			<div className={styles.skills_ctn}>
				{currentSkillSection === "tech_skills" && trainings
					.filter((training) => training.isTechSkill)
					.map((training, index) => (
						<SkillCard key={index} {...training} />
					))
				}
				{currentSkillSection === "soft_skills" && trainings
					.filter((training) => !(training.isTechSkill))
					.map((training, index) => (
						<SkillCard key={index} {...training} />
					))
				}
			</div>
        </div>
    )
}

export default TrainingSkills