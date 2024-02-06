import React from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee";
import styles from "./css/movingribbon.module.css"

const MovingRibbon = () => (
    <Marquee className={styles.ribbon}>
        {Array(50).fill("").map((_, index) => (
            <p key={index} className={styles.ribbon_item}>
                <span>ECX 4.0</span>
                <Image
                    src={"/icons/noto_confetti-ball.svg"}
                    alt={"celebration"}
                    width={24}
                    height={24}
                    className={styles.ribbon_image}
                />
            </p>
        ))}
    </Marquee>  
)

export default MovingRibbon;