import Image from 'next/image';
import styles from "./skillCard.module.css"

interface skills{
    text: string;
    image: string;
}

const SkillCard = ({text, image}: skills) => {
    return(
        <div className={styles.skill_card}>
           <Image src={image} alt={`${text}`} fill className={styles.skill_img}/>
            <div className={styles.skill_text_ctn}>
                {text}
            </div>
        </div>
    )
}

export default SkillCard